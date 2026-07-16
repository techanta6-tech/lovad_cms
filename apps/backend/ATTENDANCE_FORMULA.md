# Attendance Working Hours Calculation Formula

Tài liệu này ghi nhận công thức tính giờ công chấm công được thống nhất:

## 1. Cấu hình Ca làm việc
Được cấu hình trong file `.env`:
- **Giờ bắt đầu**: `07:30` (`SHIFT_START_TIME`)
- **Giờ kết thúc**: `17:00` (`SHIFT_END_TIME`)
- **Khoảng thời gian quét bù (quét trước/sau ca)**: `2` giờ (`SHIFT_BUFFER_HOURS`). 
  - Nghĩa là khoảng thời gian truy vấn sự kiện thực tế trong ngày sẽ chạy từ: `(SHIFT_START_TIME - SHIFT_BUFFER_HOURS)` đến `(SHIFT_END_TIME + SHIFT_BUFFER_HOURS)`.
  - Mặc định: quét từ `05:30:00` đến `19:00:00` cùng ngày.

## 2. Công thức tính giờ công
Giờ công làm việc thực tế trong ngày của một nhân sự được tính như sau:
$$\text{Giờ công} = \max\left(0, \text{Giờ về} - \text{Giờ vào} - \text{Nghỉ trưa}\right)$$

Trong đó:
- **Nghỉ trưa**: `1h30p` (tương đương `1.5` giờ hay `5400` giây).
- **Giờ công tối đa**: Giới hạn tối đa **`8` giờ** mỗi ngày.

---
*Lưu ý khi triển khai Backend:*
Khi viết các API thống kê/báo cáo chấm công, hãy áp dụng công thức trên đối với khoảng cách giữa giờ check-in đầu tiên và check-out cuối cùng trong ngày của nhân sự.
