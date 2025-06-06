# Ứng dụng Kiểm tra Số dư Token ERC20 trên Ronin Saigon

Dự án này giúp bạn kiểm tra số dư của một Token ERC20 trên mạng Ronin Saigon (một mạng blockchain tương thích EVM). Dự án được thiết kế đơn giản, phù hợp cho học sinh từ lớp 9 đến lớp 12 làm quen với công nghệ blockchain.

## Kiến thức cơ bản

### Token ERC20 là gì?

ERC20 là một chuẩn (standard) cho các token trên mạng Ethereum và các mạng tương thích. Nó định nghĩa một tập hợp các quy tắc mà một token phải tuân theo. Các token ERC20 có thể đại diện cho nhiều thứ khác nhau như tiền điện tử, điểm thưởng, cổ phần, v.v.

Mỗi token ERC20 có các thuộc tính cơ bản như:
- Tên (name): Tên đầy đủ của token
- Ký hiệu (symbol): Ký hiệu ngắn gọn của token (ví dụ: ETH, BTC)
- Decimals: Số chữ số thập phân được sử dụng (thường là 18)

### Mạng Ronin Saigon là gì?

Ronin Saigon là mạng thử nghiệm (testnet) của Ronin Network, một blockchain được phát triển bởi Sky Mavis (công ty phát triển game Axie Infinity). Mạng này tương thích với Ethereum Virtual Machine (EVM), nghĩa là nó có thể chạy các hợp đồng thông minh (smart contracts) được viết cho Ethereum.

## Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- npm (trình quản lý gói của Node.js)

## Hướng dẫn cài đặt

### Bước 1: Cài đặt Node.js và npm

1. Truy cập trang web chính thức của Node.js: https://nodejs.org/
2. Tải xuống phiên bản LTS (Long Term Support) mới nhất
3. Cài đặt theo hướng dẫn trên màn hình
4. Kiểm tra cài đặt bằng cách mở Terminal (hoặc Command Prompt trên Windows) và gõ:

```bash
node --version
npm --version
```

Nếu cả hai lệnh đều hiển thị số phiên bản, bạn đã cài đặt thành công.

### Bước 2: Tải xuống và cài đặt dự án

1. Tải xuống mã nguồn dự án này
2. Giải nén vào một thư mục trên máy tính của bạn
3. Mở Terminal (hoặc Command Prompt) và di chuyển đến thư mục dự án:

```bash
cd đường-dẫn-đến-thư-mục-dự-án
```

4. Cài đặt các thư viện cần thiết:

```bash
npm install
```

## Cách sử dụng

### Bước 1: Biên dịch mã TypeScript

```bash
npm run build
```

Lệnh này sẽ biên dịch mã TypeScript thành JavaScript trong thư mục `dist`.

### Bước 2: Chạy ứng dụng

```bash
npm start
```

Hoặc, nếu bạn muốn chạy trực tiếp mã TypeScript mà không cần biên dịch trước:

```bash
npm run dev
```

### Bước 3: Sử dụng ứng dụng

1. Ứng dụng sẽ yêu cầu bạn nhập địa chỉ hợp đồng của Token ERC20 (contract address)
2. Sau đó, nhập địa chỉ ví (wallet address) mà bạn muốn kiểm tra số dư
3. Ứng dụng sẽ hiển thị số dư của token trong ví đó, cả ở dạng đơn vị nhỏ nhất và đơn vị thông thường

## Giải thích mã nguồn

Dự án được tổ chức thành các phần chính sau:

- `src/config.ts`: Chứa cấu hình kết nối đến mạng Ronin Saigon
- `src/interfaces/erc20.ts`: Định nghĩa interface cho token ERC20
- `src/utils/erc20.utils.ts`: Chứa các hàm tiện ích để tương tác với token ERC20
- `src/index.ts`: File chính của ứng dụng, xử lý đầu vào từ người dùng và hiển thị kết quả

Mỗi file đều có chú thích chi tiết để giúp bạn hiểu từng phần của mã nguồn.

## Mở rộng dự án

Sau khi hiểu rõ dự án này, bạn có thể mở rộng nó bằng cách:

1. Thêm chức năng chuyển token từ ví này sang ví khác
2. Tạo giao diện người dùng web thay vì giao diện dòng lệnh
3. Hỗ trợ nhiều loại token khác nhau (không chỉ ERC20)
4. Thêm chức năng lưu lịch sử kiểm tra số dư

## Tài nguyên học tập thêm

- [Tài liệu chính thức của ethers.js](https://docs.ethers.io/)
- [Tìm hiểu về ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [Tìm hiểu về Ronin Network](https://roninchain.com/)

## Lưu ý

Đây là dự án học tập, không nên sử dụng cho mục đích thương mại. Khi làm việc với blockchain thực, hãy luôn cẩn thận với các khóa riêng tư và thông tin nhạy cảm khác.