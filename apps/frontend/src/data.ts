import { EventLog, Area } from './types';

export const mockEventLogs: EventLog[] = [
  {
    stt: 1,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:12:12",
    avatarSeed: "phuc1",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.4
  },
  {
    stt: 2,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:11:57",
    avatarSeed: "phuc2",
    faceRect: { x: 32, y: 18, w: 38, h: 42 },
    accuracy: 98.7
  },
  {
    stt: 3,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:11:41",
    avatarSeed: "phuc3",
    faceRect: { x: 28, y: 22, w: 42, h: 46 },
    accuracy: 99.1
  },
  {
    stt: 4,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:11:26",
    avatarSeed: "phuc4",
    faceRect: { x: 35, y: 25, w: 35, h: 40 },
    accuracy: 97.5
  },
  {
    stt: 5,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:11:11",
    avatarSeed: "phuc5",
    faceRect: { x: 31, y: 21, w: 39, h: 43 },
    accuracy: 99.2
  },
  {
    stt: 6,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:10:55",
    avatarSeed: "phuc6",
    faceRect: { x: 33, y: 19, w: 37, h: 41 },
    accuracy: 98.4
  },
  {
    stt: 7,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-16:10:40",
    avatarSeed: "phuc7",
    faceRect: { x: 29, y: 23, w: 41, h: 45 },
    accuracy: 99.0
  },
  {
    stt: 8,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:10:25",
    avatarSeed: "phuc8",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.3
  },
  {
    stt: 9,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:10:09",
    avatarSeed: "phuc9",
    faceRect: { x: 34, y: 24, w: 36, h: 42 },
    accuracy: 97.9
  },
  {
    stt: 10,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:09:54",
    avatarSeed: "phuc10",
    faceRect: { x: 32, y: 21, w: 38, h: 43 },
    accuracy: 98.6
  },
  {
    stt: 11,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:09:39",
    avatarSeed: "phuc11",
    faceRect: { x: 28, y: 22, w: 42, h: 47 },
    accuracy: 99.1
  },
  {
    stt: 12,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-16:09:24",
    avatarSeed: "phuc12",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.5
  },
  {
    stt: 13,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:09:09",
    avatarSeed: "phuc13",
    faceRect: { x: 33, y: 19, w: 37, h: 41 },
    accuracy: 98.2
  },
  {
    stt: 14,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:08:54",
    avatarSeed: "phuc14",
    faceRect: { x: 31, y: 23, w: 39, h: 44 },
    accuracy: 98.9
  },
  {
    stt: 15,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:08:38",
    avatarSeed: "phuc15",
    faceRect: { x: 29, y: 21, w: 41, h: 45 },
    accuracy: 99.0
  },
  {
    stt: 16,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:08:18",
    avatarSeed: "phuc16",
    faceRect: { x: 32, y: 18, w: 38, h: 42 },
    accuracy: 98.8
  },
  {
    stt: 17,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:08:03",
    avatarSeed: "phuc17",
    faceRect: { x: 35, y: 25, w: 35, h: 40 },
    accuracy: 97.4
  },
  {
    stt: 18,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-16:07:48",
    avatarSeed: "phuc18",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.3
  },
  {
    stt: 19,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:07:33",
    avatarSeed: "phuc19",
    faceRect: { x: 33, y: 22, w: 37, h: 43 },
    accuracy: 98.5
  },
  {
    stt: 20,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:07:18",
    avatarSeed: "phuc20",
    faceRect: { x: 31, y: 19, w: 39, h: 42 },
    accuracy: 99.1
  },
  {
    stt: 21,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:07:03",
    avatarSeed: "phuc21",
    faceRect: { x: 29, y: 23, w: 41, h: 46 },
    accuracy: 98.9
  },
  {
    stt: 22,
    vung: "Checkin Area",
    ten: "Tran Phuoc Loi",
    ma: "010203045567",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:06:52",
    avatarSeed: "loi1",
    faceRect: { x: 34, y: 22, w: 36, h: 40 },
    accuracy: 98.1
  },
  {
    stt: 23,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:06:47",
    avatarSeed: "phuc22",
    faceRect: { x: 32, y: 18, w: 38, h: 43 },
    accuracy: 98.6
  },
  {
    stt: 24,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-16:06:30",
    avatarSeed: "phuc23",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.2
  },
  {
    stt: 25,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:06:15",
    avatarSeed: "phuc24",
    faceRect: { x: 33, y: 21, w: 37, h: 42 },
    accuracy: 98.4
  },
  {
    stt: 26,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:06:00",
    avatarSeed: "phuc25",
    faceRect: { x: 29, y: 22, w: 41, h: 46 },
    accuracy: 99.0
  },
  {
    stt: 27,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:05:44",
    avatarSeed: "phuc26",
    faceRect: { x: 31, y: 19, w: 39, h: 43 },
    accuracy: 98.8
  },
  {
    stt: 28,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-16:05:22",
    avatarSeed: "phuc27",
    faceRect: { x: 35, y: 24, w: 35, h: 41 },
    accuracy: 97.6
  },
  {
    stt: 29,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:04:57",
    avatarSeed: "phuc28",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.4
  },

  // Additional mock data for pages 2 and 3 to support realistic pagination!
  // Page 2
  {
    stt: 30,
    vung: "Checkin Area",
    ten: "Nguyen Van An",
    ma: "020205094857",
    danhSach: "Khách hàng / Khác",
    thoiGian: "09/07/2026-16:04:10",
    avatarSeed: "an1",
    faceRect: { x: 32, y: 18, w: 36, h: 44 },
    accuracy: 95.8
  },
  {
    stt: 31,
    vung: "Checkout Area",
    ten: "Le Thi Binh",
    ma: "090302012948",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:03:45",
    avatarSeed: "binh1",
    faceRect: { x: 34, y: 20, w: 38, h: 42 },
    accuracy: 99.1
  },
  {
    stt: 32,
    vung: "Checkin Area",
    ten: "Pham Hoang Long",
    ma: "040105083948",
    danhSach: "Khách hàng / Khác",
    thoiGian: "09/07/2026-16:03:12",
    avatarSeed: "long1",
    faceRect: { x: 28, y: 22, w: 44, h: 46 },
    accuracy: 98.3
  },
  {
    stt: 33,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:02:40",
    avatarSeed: "phuc29",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.3
  },
  {
    stt: 34,
    vung: "Checkout Area",
    ten: "Nguyen Van An",
    ma: "020205094857",
    danhSach: "Khách hàng / Khác",
    thoiGian: "09/07/2026-16:02:15",
    avatarSeed: "an1",
    faceRect: { x: 32, y: 18, w: 36, h: 44 },
    accuracy: 94.9
  },
  {
    stt: 35,
    vung: "Checkin Area",
    ten: "Hoang Anh Tuan",
    ma: "070104031948",
    danhSach: "Phòng ban C",
    thoiGian: "09/07/2026-16:01:50",
    avatarSeed: "tuan1",
    faceRect: { x: 30, y: 21, w: 40, h: 43 },
    accuracy: 98.7
  },
  {
    stt: 36,
    vung: "Checkout Area",
    ten: "Tran Phuoc Loi",
    ma: "010203045567",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-16:01:10",
    avatarSeed: "loi2",
    faceRect: { x: 34, y: 22, w: 36, h: 40 },
    accuracy: 98.9
  },
  {
    stt: 37,
    vung: "Checkin Area",
    ten: "Le Thi Binh",
    ma: "090302012948",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-16:00:30",
    avatarSeed: "binh1",
    faceRect: { x: 34, y: 20, w: 38, h: 42 },
    accuracy: 99.0
  },
  {
    stt: 38,
    vung: "Checkout Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban D",
    thoiGian: "09/07/2026-15:59:15",
    avatarSeed: "phuc30",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.4
  },
  {
    stt: 39,
    vung: "Checkin Area",
    ten: "Nguyen Van An",
    ma: "020205094857",
    danhSach: "Khách hàng / Khác",
    thoiGian: "09/07/2026-15:58:20",
    avatarSeed: "an1",
    faceRect: { x: 32, y: 18, w: 36, h: 44 },
    accuracy: 95.2
  },

  // Page 3
  {
    stt: 40,
    vung: "Lobby Area",
    ten: "Vu Thi Thuy",
    ma: "030405060708",
    danhSach: "Khách hàng / Khác",
    thoiGian: "09/07/2026-15:55:00",
    avatarSeed: "thuy1",
    faceRect: { x: 33, y: 17, w: 34, h: 40 },
    accuracy: 97.8
  },
  {
    stt: 41,
    vung: "Checkin Area",
    ten: "Phan Huu Thien Phuc",
    ma: "080203011585",
    danhSach: "Phòng ban A",
    thoiGian: "09/07/2026-15:52:12",
    avatarSeed: "phuc31",
    faceRect: { x: 30, y: 20, w: 40, h: 45 },
    accuracy: 99.1
  },
  {
    stt: 42,
    vung: "Checkout Area",
    ten: "Tran Phuoc Loi",
    ma: "010203045567",
    danhSach: "Phòng ban B",
    thoiGian: "09/07/2026-15:50:04",
    avatarSeed: "loi3",
    faceRect: { x: 34, y: 22, w: 36, h: 40 },
    accuracy: 98.4
  }
];

export const mockAreas: Area[] = [
  {
    id: "area-1",
    name: "Checkin Area",
    code: "CAM_ZONE_A",
    cameras: [
      {
        camera_id: "cam-1-1",
        camera_name: "Camera Checkin Chính 01",
        ip: "192.168.1.15",
        port: 554,
        status: "online",
        resolution: "1920x1080 (1080P)",
        role: ["checkin"]
      },
      {
        camera_id: "cam-1-2",
        camera_name: "Camera Checkin Phụ 02",
        ip: "192.168.1.16",
        port: 554,
        status: "online",
        resolution: "1920x1080 (1080P)",
        role: ["checkin"]
      }
    ]
  },
  {
    id: "area-2",
    name: "Checkout Area",
    code: "CAM_ZONE_B",
    cameras: [
      {
        camera_id: "cam-2-1",
        camera_name: "Camera Lối Ra 01",
        ip: "192.168.1.25",
        port: 554,
        status: "online",
        resolution: "1920x1080 (1080P)",
        role: ["checkout"]
      },
      {
        camera_id: "cam-2-2",
        camera_name: "Camera Lối Ra Dự Phòng 02",
        ip: "192.168.1.26",
        port: 554,
        status: "online",
        resolution: "1280x720 (720P)",
        role: ["checkout"]
      }
    ]
  },
  {
    id: "area-3",
    name: "Lobby Area",
    code: "CAM_ZONE_C",
    cameras: [
      {
        camera_id: "cam-3-1",
        camera_name: "Camera Toàn Cảnh Sảnh Trực",
        ip: "192.168.1.35",
        port: 554,
        status: "online",
        resolution: "3840x2160 (4K UltraHD)",
        role: ["checkin", "checkout"]
      }
    ]
  }
];
