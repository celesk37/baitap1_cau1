/**
 * File cấu hình cho dự án
 * Chứa các thông tin cần thiết để kết nối với mạng Ronin Saigon
 */

export const CONFIG = {
  // URL RPC của mạng Ronin Saigon
  // Đây là điểm kết nối để giao tiếp với blockchain
  RPC_URL: "https://saigon-testnet.roninchain.com/rpc",
  
  // Tên của mạng blockchain
  NETWORK_NAME: "Ronin Saigon Testnet",
  
  // Số decimals mặc định của nhiều token ERC20 (thường là 18)
  // Decimals là số chữ số thập phân được sử dụng để biểu diễn token
  DEFAULT_DECIMALS: 18
};