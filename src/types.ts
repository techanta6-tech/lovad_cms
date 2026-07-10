export interface EventLog {
  stt: number;
  vung: string;
  ten: string;
  ma: string;
  danhSach: string;
  thoiGian: string;
  avatarSeed: string;
  faceRect?: { x: number; y: number; w: number; h: number }; // Percentage values for overlay
  accuracy?: number;
}

export interface Area {
  id: string;
  name: string;
  code: string;
  status: 'online' | 'offline';
  cameraCount: number;
  cameras: CameraInfo[];
  scenario: string;
}

export interface CameraInfo {
  id: string;
  name: string;
  ip: string;
  port: number;
  status: 'online' | 'offline';
  resolution: string;
  fps: number;
}

export interface DeviceInfo {
  id: string;
  name: string;
  description: string;
  tag: string;
  owner: string;
  type: string;
  mainStream: string;
  subStream: string;
  ip: string;
  onvifPort: string;
  rtspPort: string;
  storageStream: string;
  username: string;
  password?: string;
}

export interface ChannelInfo {
  stt: number;
  name: string;
  cameraName: string;
}
