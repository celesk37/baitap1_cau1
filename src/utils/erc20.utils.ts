/**
 * File chứa các hàm tiện ích để làm việc với token ERC20
 */

import { ethers } from 'ethers';
import { IERC20 } from '../interfaces/erc20';
import { CONFIG } from '../config';

// ABI (Application Binary Interface) tối thiểu cho token ERC20
// ABI là cách để tương tác với hợp đồng thông minh trên blockchain
// Chúng ta chỉ cần các hàm cần thiết cho việc kiểm tra số dư
const ERC20_ABI = [
  // Lấy tên token
  'function name() view returns (string)',
  // Lấy ký hiệu token
  'function symbol() view returns (string)',
  // Lấy số decimals
  'function decimals() view returns (uint8)',
  // Lấy tổng cung
  'function totalSupply() view returns (uint256)',
  // Lấy số dư của một địa chỉ
  'function balanceOf(address owner) view returns (uint256)',
  // Kiểm tra allowance
  'function allowance(address owner, address spender) view returns (uint256)'
];

/**
 * Tạo kết nối đến mạng Ronin Saigon
 * @returns Provider để kết nối với blockchain
 */
export function createProvider(): ethers.providers.JsonRpcProvider {
  return new ethers.providers.JsonRpcProvider(CONFIG.RPC_URL);
}

/**
 * Tạo đối tượng Contract để tương tác với token ERC20
 * @param contractAddress Địa chỉ hợp đồng của token ERC20
 * @param provider Provider kết nối với blockchain
 * @returns Đối tượng Contract để tương tác với token ERC20
 */
export function createERC20Contract(
  contractAddress: string,
  provider: ethers.providers.Provider
): IERC20 {
  // Kiểm tra địa chỉ hợp đồng có hợp lệ không
  if (!ethers.utils.isAddress(contractAddress)) {
    throw new Error('Địa chỉ hợp đồng không hợp lệ');
  }
  
  // Tạo đối tượng Contract với ABI và địa chỉ đã cho
  return new ethers.Contract(contractAddress, ERC20_ABI, provider) as unknown as IERC20;
}

/**
 * Chuyển đổi số dư từ đơn vị nhỏ nhất (wei) sang đơn vị thông thường
 * @param balance Số dư ở đơn vị nhỏ nhất
 * @param decimals Số decimals của token
 * @returns Số dư ở đơn vị thông thường
 */
export function formatBalance(balance: bigint, decimals: number): string {
  return ethers.utils.formatUnits(balance, decimals);
}

/**
 * Kiểm tra địa chỉ ví có hợp lệ không
 * @param address Địa chỉ ví cần kiểm tra
 * @returns true nếu địa chỉ hợp lệ, false nếu không
 */
export function isValidAddress(address: string): boolean {
  return ethers.utils.isAddress(address);
}