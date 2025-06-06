/**
 * Ứng dụng kiểm tra số dư token ERC20 trên mạng Ronin Saigon
 * Dành cho học sinh từ lớp 9 đến lớp 12
 */

import * as readlineSync from 'readline-sync';
import { ethers } from 'ethers';
import { CONFIG } from './config';
import { createProvider, createERC20Contract, formatBalance, isValidAddress } from './utils/erc20.utils';

/**
 * Hàm chính của ứng dụng
 */
async function main() {
  console.log('='.repeat(50));
  console.log(`Chào mừng đến với ứng dụng kiểm tra số dư Token ERC20 trên ${CONFIG.NETWORK_NAME}!`);
  console.log('='.repeat(50));
  
  try {
    // Bước 1: Kết nối đến mạng Ronin Saigon
    console.log('\nĐang kết nối đến mạng blockchain...');
    const provider = createProvider();
    
    // Kiểm tra kết nối
    try {
      const network = await provider.getNetwork();
      console.log(`Đã kết nối thành công đến mạng: ${network.name} (chainId: ${network.chainId})`);
    } catch (error) {
      throw new Error(`Không thể kết nối đến mạng. Lỗi: ${error instanceof Error ? error.message : String(error)}`);
    }
    
    // Bước 2: Nhập địa chỉ hợp đồng token ERC20
    let contractAddress = '';
    while (!isValidAddress(contractAddress)) {
      contractAddress = readlineSync.question('\nNhập địa chỉ hợp đồng của Token ERC20: ');
      if (!isValidAddress(contractAddress)) {
        console.log('Địa chỉ hợp đồng không hợp lệ. Vui lòng nhập lại.');
      }
    }
    
    // Bước 3: Nhập địa chỉ ví cần kiểm tra số dư
    let walletAddress = '';
    while (!isValidAddress(walletAddress)) {
      walletAddress = readlineSync.question('Nhập địa chỉ ví cần kiểm tra số dư: ');
      if (!isValidAddress(walletAddress)) {
        console.log('Địa chỉ ví không hợp lệ. Vui lòng nhập lại.');
      }
    }
    
    // Bước 4: Tạo đối tượng Contract để tương tác với token ERC20
    console.log('\nĐang tải thông tin token...');
    const tokenContract = createERC20Contract(contractAddress, provider);
    
    // Bước 5: Lấy thông tin của token
    const [name, symbol, decimals] = await Promise.all([
      tokenContract.name(),
      tokenContract.symbol(),
      tokenContract.decimals()
    ]);
    
    console.log(`Tên token: ${name} (${symbol})`);
    console.log(`Số decimals: ${decimals}`);
    
    // Bước 6: Lấy số dư token của địa chỉ ví
    console.log('\nĐang kiểm tra số dư...');
    const balance = await tokenContract.balanceOf(walletAddress);
    
    // Bước 7: Hiển thị kết quả
    console.log('\n' + '-'.repeat(50));
    console.log(`Địa chỉ ví: ${walletAddress}`);
    console.log(`Số dư (đơn vị nhỏ nhất): ${balance.toString()}`);
    console.log(`Số dư (đơn vị thông thường): ${formatBalance(balance, decimals)} ${symbol}`);
    console.log('-'.repeat(50));
    
  } catch (error) {
    console.error('\nĐã xảy ra lỗi:');
    console.error(error instanceof Error ? error.message : String(error));
  }
}

// Chạy hàm main
main().catch(error => {
  console.error('Lỗi không xử lý được:', error);
});