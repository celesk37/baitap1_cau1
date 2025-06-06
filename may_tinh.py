# Ứng dụng máy tính đơn giản
# Dự án Python dành cho học sinh lớp 9-12

# Import thư viện tkinter để tạo giao diện đồ họa
import tkinter as tk
from tkinter import messagebox

# Hàm kiểm tra đầu vào có phải là số tự nhiên không
def kiem_tra_so_tu_nhien(so):
    """
    Kiểm tra xem chuỗi nhập vào có phải là số tự nhiên không
    Trả về True nếu là số tự nhiên, False nếu không phải
    """
    if not so.isdigit():
        return False
    return int(so) >= 0

# Các hàm thực hiện phép tính
def cong(a, b):
    """
    Thực hiện phép cộng hai số
    """
    return a + b

def tru(a, b):
    """
    Thực hiện phép trừ hai số
    """
    return a - b

def nhan(a, b):
    """
    Thực hiện phép nhân hai số
    """
    return a * b

def chia(a, b):
    """
    Thực hiện phép chia hai số
    Kiểm tra trường hợp chia cho 0
    """
    if b == 0:
        raise ValueError("Không thể chia cho 0")
    return a / b

# Hàm xử lý khi người dùng nhấn nút tính toán
def tinh_toan(phep_tinh):
    """
    Xử lý phép tính khi người dùng nhấn nút
    phep_tinh: Chuỗi đại diện cho phép tính ('cong', 'tru', 'nhan', 'chia')
    """
    # Lấy giá trị từ ô nhập liệu
    so_thu_nhat = nhap_so_1.get()
    so_thu_hai = nhap_so_2.get()
    
    # Kiểm tra đầu vào
    if not kiem_tra_so_tu_nhien(so_thu_nhat) or not kiem_tra_so_tu_nhien(so_thu_hai):
        messagebox.showerror("Lỗi", "Vui lòng nhập số tự nhiên hợp lệ!")
        return
    
    # Chuyển đổi chuỗi thành số
    a = int(so_thu_nhat)
    b = int(so_thu_hai)
    
    # Thực hiện phép tính tương ứng
    try:
        if phep_tinh == 'cong':
            ket_qua = cong(a, b)
            dau = '+'
        elif phep_tinh == 'tru':
            ket_qua = tru(a, b)
            dau = '-'
        elif phep_tinh == 'nhan':
            ket_qua = nhan(a, b)
            dau = '×'
        elif phep_tinh == 'chia':
            ket_qua = chia(a, b)
            dau = '÷'
        
        # Hiển thị kết quả
        ket_qua_text.config(text=f"{a} {dau} {b} = {ket_qua}")
    
    except ValueError as e:
        messagebox.showerror("Lỗi", str(e))

# Tạo cửa sổ chính
cua_so = tk.Tk()
cua_so.title("Máy tính đơn giản")
cua_so.geometry("400x350")
cua_so.resizable(False, False)

# Tạo tiêu đề
tieu_de = tk.Label(cua_so, text="MÁY TÍNH ĐƠN GIẢN", font=("Arial", 16, "bold"))
tieu_de.pack(pady=10)

# Tạo khung chứa các ô nhập liệu
khung_nhap = tk.Frame(cua_so)
khung_nhap.pack(pady=10)

# Nhãn và ô nhập số thứ nhất
nhan_so_1 = tk.Label(khung_nhap, text="Số thứ nhất:", font=("Arial", 12))
nhan_so_1.grid(row=0, column=0, padx=5, pady=5)
nhap_so_1 = tk.Entry(khung_nhap, font=("Arial", 12), width=10)
nhap_so_1.grid(row=0, column=1, padx=5, pady=5)

# Nhãn và ô nhập số thứ hai
nhan_so_2 = tk.Label(khung_nhap, text="Số thứ hai:", font=("Arial", 12))
nhan_so_2.grid(row=1, column=0, padx=5, pady=5)
nhap_so_2 = tk.Entry(khung_nhap, font=("Arial", 12), width=10)
nhap_so_2.grid(row=1, column=1, padx=5, pady=5)

# Tạo khung chứa các nút phép tính
khung_phep_tinh = tk.Frame(cua_so)
khung_phep_tinh.pack(pady=10)

# Tạo các nút phép tính
nut_cong = tk.Button(khung_phep_tinh, text="Cộng (+)", font=("Arial", 12), 
                    width=8, command=lambda: tinh_toan('cong'))
nut_cong.grid(row=0, column=0, padx=5, pady=5)

nut_tru = tk.Button(khung_phep_tinh, text="Trừ (-)", font=("Arial", 12), 
                   width=8, command=lambda: tinh_toan('tru'))
nut_tru.grid(row=0, column=1, padx=5, pady=5)

nut_nhan = tk.Button(khung_phep_tinh, text="Nhân (×)", font=("Arial", 12), 
                    width=8, command=lambda: tinh_toan('nhan'))
nut_nhan.grid(row=1, column=0, padx=5, pady=5)

nut_chia = tk.Button(khung_phep_tinh, text="Chia (÷)", font=("Arial", 12), 
                    width=8, command=lambda: tinh_toan('chia'))
nut_chia.grid(row=1, column=1, padx=5, pady=5)

# Tạo khung hiển thị kết quả
khung_ket_qua = tk.Frame(cua_so, relief=tk.GROOVE, borderwidth=2)
khung_ket_qua.pack(pady=10, fill=tk.X, padx=20)

# Nhãn kết quả
nhan_ket_qua = tk.Label(khung_ket_qua, text="Kết quả:", font=("Arial", 12))
nhan_ket_qua.pack(pady=5)

# Hiển thị kết quả
ket_qua_text = tk.Label(khung_ket_qua, text="", font=("Arial", 14, "bold"))
ket_qua_text.pack(pady=5)

# Thêm hướng dẫn sử dụng
huong_dan = tk.Label(cua_so, text="Nhập hai số tự nhiên và chọn phép tính", 
                    font=("Arial", 10, "italic"))
huong_dan.pack(pady=5)

# Khởi chạy vòng lặp chính của ứng dụng
cua_so.mainloop()