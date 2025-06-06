/**
 * File này định nghĩa interface cho token ERC20
 * Interface này mô tả các hàm cơ bản của một token ERC20 mà chúng ta cần sử dụng
 */

// Interface cho token ERC20 - chỉ bao gồm các hàm cần thiết cho ứng dụng này
export interface IERC20 {
  // Lấy tên của token
  name(): Promise<string>;
  
  // Lấy ký hiệu của token (ví dụ: ETH, BTC, ...)
  symbol(): Promise<string>;
  
  // Lấy số decimals của token
  decimals(): Promise<number>;
  
  // Lấy tổng cung của token
  totalSupply(): Promise<bigint>;
  
  // Lấy số dư token của một địa chỉ
  balanceOf(account: string): Promise<bigint>;
  
  // Kiểm tra số token mà owner cho phép spender sử dụng
  allowance(owner: string, spender: string): Promise<bigint>;
}