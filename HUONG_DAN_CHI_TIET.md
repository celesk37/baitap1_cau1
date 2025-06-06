# Hướng dẫn chi tiết về dự án kiểm tra số dư Token ERC20

Tài liệu này cung cấp giải thích chi tiết về cách hoạt động của dự án và các khái niệm blockchain cơ bản dành cho học sinh.

## 1. Các khái niệm cơ bản về blockchain

### Blockchain là gì?

Blockchain là một cơ sở dữ liệu phân tán, lưu trữ thông tin trong các khối (blocks) được liên kết với nhau. Mỗi khối chứa một tập hợp các giao dịch và một tham chiếu đến khối trước đó, tạo thành một chuỗi các khối (chain of blocks).

Đặc điểm quan trọng của blockchain:
- **Phân tán**: Dữ liệu được lưu trữ trên nhiều máy tính (nodes) thay vì một máy chủ trung tâm
- **Bất biến**: Khi thông tin đã được ghi vào blockchain, rất khó để thay đổi
- **Minh bạch**: Mọi người đều có thể xem các giao dịch trên blockchain

### Địa chỉ ví (Wallet Address) là gì?

Địa chỉ ví là một chuỗi ký tự duy nhất đại diện cho "tài khoản" của bạn trên blockchain. Ví dụ về một địa chỉ ví Ethereum: `0x742d35Cc6634C0532925a3b844Bc454e4438f44e`

Mỗi địa chỉ ví được tạo ra từ một cặp khóa:
- **Khóa riêng tư (Private Key)**: Giống như mật khẩu, cho phép bạn truy cập và quản lý tài sản trong ví
- **Khóa công khai (Public Key)**: Được sử dụng để tạo ra địa chỉ ví

### Hợp đồng thông minh (Smart Contract) là gì?

Hợp đồng thông minh là các chương trình máy tính chạy trên blockchain. Chúng tự động thực thi các điều khoản của một thỏa thuận khi các điều kiện được đáp ứng. Token ERC20 được triển khai dưới dạng hợp đồng thông minh.

### Token ERC20 là gì?

ERC20 là một tiêu chuẩn kỹ thuật cho các token trên mạng Ethereum. Nó định nghĩa một tập hợp các quy tắc và hàm mà một token phải tuân theo. Các token ERC20 có thể đại diện cho nhiều thứ như tiền điện tử, điểm thưởng, cổ phần, v.v.

Các hàm cơ bản của một token ERC20:
- `name()`: Trả về tên của token
- `symbol()`: Trả về ký hiệu của token
- `decimals()`: Trả về số chữ số thập phân của token
- `totalSupply()`: Trả về tổng cung của token
- `balanceOf(address)`: Trả về số dư token của một địa chỉ
- `transfer(address, amount)`: Chuyển token từ người gửi đến một địa chỉ khác

## 2. Giải thích chi tiết về mã nguồn

### Cấu trúc dự án

```
├── src/                  # Thư mục mã nguồn
│   ├── config.ts         # Cấu hình kết nối blockchain
│   ├── index.ts          # File chính của ứng dụng
│   ├── interfaces/       # Định nghĩa các interface
│   │   └── erc20.ts      # Interface cho token ERC20
│   └── utils/            # Các hàm tiện ích
│       └── erc20.utils.ts # Hàm tiện ích cho token ERC20
├── package.json         # Cấu hình dự án và dependencies
├── tsconfig.json        # Cấu hình TypeScript
└── README.md            # Hướng dẫn sử dụng
```

### Giải thích từng file

#### 1. `config.ts`

File này chứa các thông tin cấu hình để kết nối với mạng Ronin Saigon:
- `RPC_URL`: Địa chỉ để kết nối với blockchain (RPC = Remote Procedure Call)
- `NETWORK_NAME`: Tên của mạng blockchain
- `DEFAULT_DECIMALS`: Số chữ số thập phân mặc định của token

#### 2. `interfaces/erc20.ts`

File này định nghĩa interface `IERC20` mô tả các hàm cơ bản của một token ERC20 mà chúng ta cần sử dụng. Interface này giúp TypeScript hiểu cấu trúc của đối tượng token ERC20 và cung cấp gợi ý khi viết mã.

#### 3. `utils/erc20.utils.ts`

File này chứa các hàm tiện ích để làm việc với token ERC20:
- `createProvider()`: Tạo kết nối đến mạng blockchain
- `createERC20Contract()`: Tạo đối tượng Contract để tương tác với token ERC20
- `formatBalance()`: Chuyển đổi số dư từ đơn vị nhỏ nhất sang đơn vị thông thường
- `isValidAddress()`: Kiểm tra địa chỉ ví có hợp lệ không

File này cũng định nghĩa `ERC20_ABI`, là giao diện nhị phân ứng dụng (Application Binary Interface) cho token ERC20. ABI là cách để JavaScript/TypeScript giao tiếp với hợp đồng thông minh trên blockchain.

#### 4. `index.ts`

Đây là file chính của ứng dụng, thực hiện các bước sau:
1. Kết nối đến mạng Ronin Saigon
2. Yêu cầu người dùng nhập địa chỉ hợp đồng token ERC20
3. Yêu cầu người dùng nhập địa chỉ ví cần kiểm tra số dư
4. Tạo đối tượng Contract để tương tác với token ERC20
5. Lấy thông tin của token (tên, ký hiệu, decimals)
6. Lấy số dư token của địa chỉ ví
7. Hiển thị kết quả

## 3. Cách hoạt động của ứng dụng

### Quy trình kiểm tra số dư token

1. **Kết nối blockchain**: Ứng dụng kết nối đến mạng Ronin Saigon thông qua URL RPC
2. **Tạo đối tượng Contract**: Sử dụng địa chỉ hợp đồng và ABI để tạo đối tượng Contract
3. **Gọi hàm balanceOf()**: Gửi yêu cầu đến blockchain để lấy số dư token của địa chỉ ví
4. **Xử lý kết quả**: Chuyển đổi số dư từ đơn vị nhỏ nhất sang đơn vị thông thường và hiển thị

### Đơn vị của token

Token ERC20 thường có hai đơn vị:
- **Đơn vị nhỏ nhất**: Thường được gọi là "wei" (tương tự như xu trong tiền thật)
- **Đơn vị thông thường**: Đơn vị chính của token (tương tự như đồng trong tiền thật)

Ví dụ: Nếu một token có decimals = 18, thì:
- 1 token = 10^18 wei
- 0.5 token = 5 * 10^17 wei

Chuyển đổi giữa hai đơn vị này được thực hiện bởi hàm `formatBalance()` trong file `erc20.utils.ts`.

## 4. Mạng Ronin Saigon

Ronin Saigon là mạng thử nghiệm (testnet) của Ronin Network, một blockchain được phát triển bởi Sky Mavis (công ty phát triển game Axie Infinity). Mạng này tương thích với Ethereum Virtual Machine (EVM), nghĩa là nó có thể chạy các hợp đồng thông minh được viết cho Ethereum.

Đặc điểm của mạng Ronin Saigon:
- **Tốc độ giao dịch nhanh**: Thời gian xác nhận giao dịch ngắn hơn so với Ethereum
- **Phí giao dịch thấp**: Chi phí thực hiện giao dịch rẻ hơn so với Ethereum
- **Môi trường thử nghiệm**: Là nơi để thử nghiệm ứng dụng trước khi triển khai lên mạng chính thức

## 5. Thư viện ethers.js

Ethers.js là một thư viện JavaScript/TypeScript để tương tác với blockchain Ethereum và các blockchain tương thích EVM. Nó cung cấp các công cụ để:
- Kết nối đến blockchain
- Tương tác với hợp đồng thông minh
- Quản lý ví và khóa
- Ký và gửi giao dịch

Trong dự án này, chúng ta sử dụng ethers.js để:
- Tạo kết nối đến mạng Ronin Saigon thông qua `JsonRpcProvider`
- Tạo đối tượng `Contract` để tương tác với token ERC20
- Kiểm tra tính hợp lệ của địa chỉ ví và địa chỉ hợp đồng
- Chuyển đổi số dư giữa các đơn vị

## 6. Các ý tưởng mở rộng dự án

### Thêm chức năng chuyển token

Bạn có thể mở rộng dự án bằng cách thêm chức năng chuyển token từ ví này sang ví khác. Để làm điều này, bạn cần:
1. Thêm hàm `transfer()` vào interface `IERC20`
2. Tạo và ký giao dịch bằng khóa riêng tư
3. Gửi giao dịch đến blockchain

### Tạo giao diện web

Thay vì giao diện dòng lệnh, bạn có thể tạo giao diện web bằng HTML, CSS và JavaScript/TypeScript. Bạn có thể sử dụng các framework như React, Vue.js hoặc Angular.

### Hỗ trợ nhiều loại token

Bạn có thể mở rộng dự án để hỗ trợ nhiều loại token khác nhau, không chỉ ERC20. Ví dụ:
- ERC721 (NFT - Non-Fungible Token)
- ERC1155 (Multi Token Standard)

## 7. Tài nguyên học tập thêm

### Tài liệu
- [Tài liệu chính thức của ethers.js](https://docs.ethers.io/)
- [Tìm hiểu về ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [Tìm hiểu về Ronin Network](https://roninchain.com/)

### Khóa học
- [Cryptozombies](https://cryptozombies.io/) - Học lập trình blockchain qua game
- [Solidity by Example](https://solidity-by-example.org/) - Học Solidity qua các ví dụ

### Công cụ
- [Remix IDE](https://remix.ethereum.org/) - IDE trực tuyến để viết và triển khai hợp đồng thông minh
- [Etherscan](https://etherscan.io/) - Trình khám phá blockchain Ethereum