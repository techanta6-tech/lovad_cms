"use client";

import { useState, useEffect } from 'react';
import { 
  FolderOpen, 
  Settings, 
  X,
  Check,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from '@/components/layout/Sidebar';
import ReportsView from '@/components/views/ReportsView';
import AreasView from '@/components/views/AreasView';
import DevicesView from '@/components/views/DevicesView';
import EmployeesView from '@/components/views/EmployeesView';
import AccessScheduleView from '@/components/views/AccessScheduleView';

import { mockAreas } from '@/lib/data';
import { Area, DeviceInfo, ChannelInfo } from '@/lib/types';

export default function Home() {
  const [activeSidebar, setActiveSidebar] = useState<'reports' | 'areas' | 'devices' | 'employees' | 'access-schedule'>('reports');
  
  // Save directory state
  const [savePath, setSavePath] = useState('C:\\Program Files\\DVMS System\\DVMS Client\\EventData\\');
  const [showPathModal, setShowPathModal] = useState(false);
  
  // Live ticking clock
  const [liveTime, setLiveTime] = useState<Date | null>(null);

  // Sync clock client-side only to prevent hydration mismatch
  useEffect(() => {
    setLiveTime(new Date());
    const interval = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatLiveTime = () => {
    if (!liveTime) return '';
    const pad = (n: number) => n.toString().padStart(2, '0');
    const d = liveTime;
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  // Shared Data States
  const [areasData, setAreasData] = useState<Area[]>(mockAreas);
  
  const [devices, setDevices] = useState<DeviceInfo[]>([
    {
      id: 'dev-1',
      name: 'Camera ZKTeco Number 1',
      description: 'ZKTeco Entrance 1',
      tag: '',
      owner: 'Mặc Định',
      type: 'ONVIF CAMERA',
      mainStream: 'H264 1920x1080 (profile_c',
      subStream: 'H264 704x576 (profile_can',
      ip: '192.168.1.201',
      onvifPort: '80',
      rtspPort: '554',
      storageStream: 'Main Stream',
      username: 'admin',
      password: 'password123'
    },
    {
      id: 'dev-2',
      name: 'Camera ZKTeco Number 2',
      description: 'ZKTeco Entrance 2',
      tag: '',
      owner: 'Mặc Định',
      type: 'ONVIF CAMERA',
      mainStream: 'H264 1920x1080 (profile_c',
      subStream: 'H264 704x576 (profile_can',
      ip: '192.168.1.202',
      onvifPort: '80',
      rtspPort: '554',
      storageStream: 'Main Stream',
      username: 'admin',
      password: 'password123'
    },
    {
      id: 'dev-3',
      name: 'Camera Nhiet',
      description: '',
      tag: '',
      owner: 'Mặc Định',
      type: 'ONVIF CAMERA',
      mainStream: 'H264 1920x1080 (profile_c',
      subStream: 'H264 704x576 (profile_can',
      ip: '192.168.1.207',
      onvifPort: '80',
      rtspPort: '554',
      storageStream: 'Main Stream',
      username: 'admin',
      password: 'password123'
    },
    {
      id: 'dev-4',
      name: 'Cam duoi san',
      description: 'Cam duoi san tang',
      tag: '',
      owner: 'Mặc Định',
      type: 'ONVIF CAMERA',
      mainStream: 'H264 1920x1080 (profile_c',
      subStream: 'H264 704x576 (profile_can',
      ip: '192.168.1.204',
      onvifPort: '80',
      rtspPort: '554',
      storageStream: 'Main Stream',
      username: 'admin',
      password: 'password123'
    }
  ]);

  const [channels, setChannels] = useState<ChannelInfo[]>([
    { stt: 1, name: 'Camera Truoc', cameraName: 'Camera ZKTeco Number 1' },
    { stt: 2, name: 'Camera Sau', cameraName: 'Camera ZKTeco Number 2' },
    { stt: 3, name: 'Channel 3', cameraName: 'Cam duoi san' },
    { stt: 4, name: 'Channel 4', cameraName: 'Không Chọn' },
    { stt: 5, name: 'Channel 5', cameraName: 'Không Chọn' },
    { stt: 6, name: 'Channel 6', cameraName: 'Không Chọn' },
    { stt: 7, name: 'Channel 7', cameraName: 'Không Chọn' },
    { stt: 8, name: 'Channel 8', cameraName: 'Không Chọn' },
    { stt: 9, name: 'Channel 9', cameraName: 'Không Chọn' },
    { stt: 10, name: 'Channel 10', cameraName: 'Không Chọn' },
    { stt: 11, name: 'Channel 11', cameraName: 'Không Chọn' },
    { stt: 12, name: 'Channel 12', cameraName: 'Không Chọn' },
    { stt: 13, name: 'Channel 13', cameraName: 'Không Chọn' },
    { stt: 14, name: 'Channel 14', cameraName: 'Không Chọn' },
    { stt: 15, name: 'Channel 15', cameraName: 'Không Chọn' },
    { stt: 16, name: 'Channel 16', cameraName: 'Không Chọn' },
    { stt: 17, name: 'Channel 17', cameraName: 'Không Chọn' }
  ]);

  const [originalChannels, setOriginalChannels] = useState<ChannelInfo[]>([
    { stt: 1, name: 'Camera Truoc', cameraName: 'Camera ZKTeco Number 1' },
    { stt: 2, name: 'Camera Sau', cameraName: 'Camera ZKTeco Number 2' },
    { stt: 3, name: 'Channel 3', cameraName: 'Cam duoi san' },
    { stt: 4, name: 'Channel 4', cameraName: 'Không Chọn' },
    { stt: 5, name: 'Channel 5', cameraName: 'Không Chọn' },
    { stt: 6, name: 'Channel 6', cameraName: 'Không Chọn' },
    { stt: 7, name: 'Channel 7', cameraName: 'Không Chọn' },
    { stt: 8, name: 'Channel 8', cameraName: 'Không Chọn' },
    { stt: 9, name: 'Channel 9', cameraName: 'Không Chọn' },
    { stt: 10, name: 'Channel 10', cameraName: 'Không Chọn' },
    { stt: 11, name: 'Channel 11', cameraName: 'Không Chọn' },
    { stt: 12, name: 'Channel 12', cameraName: 'Không Chọn' },
    { stt: 13, name: 'Channel 13', cameraName: 'Không Chọn' },
    { stt: 14, name: 'Channel 14', cameraName: 'Không Chọn' },
    { stt: 15, name: 'Channel 15', cameraName: 'Không Chọn' },
    { stt: 16, name: 'Channel 16', cameraName: 'Không Chọn' },
    { stt: 17, name: 'Channel 17', cameraName: 'Không Chọn' }
  ]);

  const [employees, setEmployees] = useState<any[]>([
    {
      id: 'EMP001',
      hoTen: 'Phan Hữu Thiên Phúc',
      maGiayTo: '080203011585',
      phongBan: ['Phòng Ban 1', 'Ban Giám Đốc'],
      loaiGiayTo: 'CCCD',
      ngayCap: '15/04/2021',
      noiCap: 'Cục Cảnh sát QLHC về trật tự xã hội',
      ngaySinh: '18/06/1995',
      gioiTinh: 'Nam',
      soDienThoai: '0987654321',
      email: 'phucphan01866@gmail.com',
      diaChi: 'Quận 1, TP. Hồ Chí Minh',
      anhDaiDien: { name: 'avatar_phuc.jpg', url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80' }
    },
    {
      id: 'EMP002',
      hoTen: 'Trần Phước Lợi',
      maGiayTo: '079203009485',
      phongBan: ['Phòng Nhân Sự'],
      loaiGiayTo: 'CCCD',
      ngayCap: '22/09/2022',
      noiCap: 'Cục Cảnh sát QLHC về trật tự xã hội',
      ngaySinh: '12/10/1998',
      gioiTinh: 'Nam',
      soDienThoai: '0912345678',
      email: 'loi.tran@company.com',
      diaChi: 'Quận Bình Thạnh, TP. Hồ Chí Minh',
      anhDaiDien: { name: 'avatar_loi.jpg', url: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80' }
    },
    {
      id: 'EMP003',
      hoTen: 'Nguyễn Thị Mai',
      maGiayTo: '038202005823',
      phongBan: ['Phòng Ban 2'],
      loaiGiayTo: 'CCCD',
      ngayCap: '05/12/2020',
      noiCap: 'Công an Tỉnh Đồng Nai',
      ngaySinh: '25/08/1997',
      gioiTinh: 'Nữ',
      soDienThoai: '0933445566',
      email: 'mai.nguyen@company.com',
      diaChi: 'Biên Hòa, Đồng Nai',
      anhDaiDien: { name: 'avatar_mai.jpg', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80' }
    }
  ]);

  const [departments, setDepartments] = useState<string[]>(['Phòng Ban 1', 'Phòng Ban 2', 'Ban Giám Đốc', 'Phòng Nhân Sự']);

  const [scheduleSavedData, setScheduleSavedData] = useState<any[]>([
    {
      id: 'emp-1',
      name: 'Phòng Ban 2',
      code: 'ANTA6_7',
      days: {
        '2026-07-10': { assigned: false },
        '2026-07-11': { assigned: false },
        '2026-07-12': { assigned: false },
        '2026-07-13': { assigned: false },
        '2026-07-14': { assigned: false },
        '2026-07-15': { assigned: false },
        '2026-07-16': { assigned: false },
      }
    },
    {
      id: 'emp-2',
      name: 'Phòng Ban 1',
      code: '160303',
      days: {
        '2026-07-10': { assigned: true, shiftName: 'Ca hành chính', startTime: '08:00', endTime: '17:00', type: 'Chấm công', areas: ['Checkin Area'] },
        '2026-07-11': { assigned: true, shiftName: 'Ca hành chính', startTime: '08:00', endTime: '17:00', type: 'Chấm công', areas: ['Checkin Area'] },
        '2026-07-12': { assigned: true, shiftName: 'Ca hành chính', startTime: '08:00', endTime: '17:00', type: 'Chấm công', areas: ['Checkin Area'] },
        '2026-07-13': { assigned: true, shiftName: 'Ca hành chính', startTime: '08:00', endTime: '17:00', type: 'Chấm công', areas: ['Checkin Area'] },
        '2026-07-14': { assigned: true, shiftName: 'Ca hành chính', startTime: '08:00', endTime: '17:00', type: 'Chấm công', areas: ['Checkin Area'] },
        '2026-07-15': { assigned: false },
        '2026-07-16': { assigned: false },
      }
    }
  ]);

  const [schMeetingSavedData, setSchMeetingSavedData] = useState<any[]>([
    {
      id: 'meet-1',
      title: 'Họp giao ban tuần',
      area: 'Phòng họp A',
      date: '2026-07-10',
      startTime: '09:00',
      endTime: '11:00',
      departments: ['Phòng Ban 1', 'Phòng Nhân Sự']
    },
    {
      id: 'meet-2',
      title: 'Họp triển khai dự án',
      area: 'Phòng họp B',
      date: '2026-07-10',
      startTime: '10:00',
      endTime: '12:00',
      departments: ['Phòng Ban 2']
    },
    {
      id: 'meet-3',
      title: 'Họp chiến lược ban giám đốc',
      area: 'Phòng họp A',
      date: '2026-07-10',
      startTime: '14:00',
      endTime: '16:00',
      departments: ['Ban Giám Đốc', 'Phòng Ban 1']
    },
    {
      id: 'meet-4',
      title: 'Họp kỹ thuật dự án',
      area: 'Phòng họp B',
      date: '2026-07-11',
      startTime: '14:00',
      endTime: '16:00',
      departments: ['Phòng Ban 2']
    }
  ]);

  return (
    <div className="min-h-screen bg-[#0d0e12] text-slate-100 flex flex-col font-sans overflow-hidden antialiased">
      {/* 1. TOP WINDOW BAR */}
      <div id="top-window-bar" className="h-14 bg-[#14151b] border-b border-[#21232d] flex items-center justify-between px-6 shrink-0 z-30 relative select-none">
        {/* Left branding */}
        <div className="flex items-center space-x-3.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#005a9e] to-[#00a2e8] flex items-center justify-center text-white shadow-lg shadow-[#0078d7]/20">
            <Video size={16} className="animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400 tracking-tight leading-none">
              DVMS - AI EVENT ANALYSIS SYSTEM
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">AI Smart Access Control Platform v3.4.1</span>
          </div>
        </div>

        {/* Right date time ticker & utility buttons */}
        <div className="flex items-center space-x-6 text-xs text-slate-400">
          <div className="font-mono bg-[#1b1c25]/85 border border-[#2d2f3d]/60 px-4 py-1.5 rounded-xl shadow-inner text-slate-300 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>SYSTEM CLOCK: {formatLiveTime()}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowPathModal(true)}
              className="px-3 py-1.5 bg-[#1c1d26] border border-[#2d2f3c] hover:border-slate-500 text-slate-300 hover:text-white rounded-xl font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Cấu hình thư mục lưu trữ"
            >
              <FolderOpen size={13} />
              <span>Save Path</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN APPLICATION CONTENT WRAPPER */}
      <div id="main-content-layout" className="flex-1 flex overflow-hidden relative">
        <Sidebar activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} />

        {/* Views Router Render */}
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {activeSidebar === 'reports' && (
            <ReportsView 
              areasData={areasData}
              schMeetingSavedData={schMeetingSavedData}
            />
          )}

          {activeSidebar === 'areas' && (
            <AreasView 
              areasData={areasData}
              setAreasData={setAreasData}
            />
          )}

          {activeSidebar === 'devices' && (
            <DevicesView 
              devices={devices}
              setDevices={setDevices}
              channels={channels}
              setChannels={setChannels}
              originalChannels={originalChannels}
              setOriginalChannels={setOriginalChannels}
            />
          )}

          {activeSidebar === 'employees' && (
            <EmployeesView 
              employees={employees}
              setEmployees={setEmployees}
              departments={departments}
              setDepartments={setDepartments}
            />
          )}

          {activeSidebar === 'access-schedule' && (
            <AccessScheduleView 
              areasData={areasData}
              scheduleSavedData={scheduleSavedData}
              setScheduleSavedData={setScheduleSavedData}
              schMeetingSavedData={schMeetingSavedData}
              setSchMeetingSavedData={setSchMeetingSavedData}
            />
          )}
        </div>
      </div>

      {/* 3. FOLDER BROWSE MODAL (SAVE PATH CONFIG) */}
      <AnimatePresence>
        {showPathModal && (
          <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-[#14151b] border border-[#2d2f3d] rounded-2xl shadow-2xl overflow-hidden text-xs text-left"
            >
              <div className="px-5 py-4 bg-[#181921] border-b border-[#21232d] flex items-center justify-between">
                <span className="font-bold text-white uppercase tracking-wider">Cấu Hình Đường Dẫn Ghi Ảnh</span>
                <button onClick={() => setShowPathModal(false)} className="text-slate-400 hover:text-white p-1 hover:bg-[#2c2e3f] rounded cursor-pointer border-none bg-transparent">
                  <X size={15} />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <p className="text-slate-400">Chọn thư mục đích để ghi ảnh khuôn mặt và file video check-in camera:</p>
                
                <div className="border border-[#2d2f3c] bg-[#0d0e12] rounded-xl p-3.5 space-y-2 h-44 overflow-y-auto font-sans text-slate-300">
                  <div className="flex items-center space-x-2 text-slate-300 py-1 hover:bg-[#1a1b24] rounded-lg px-2 cursor-pointer transition">
                    <FolderOpen size={14} className="text-yellow-500" />
                    <span>C: (System Disk)</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex items-center space-x-2 text-slate-300 py-1 hover:bg-[#1a1b24] rounded-lg px-2 cursor-pointer transition">
                      <FolderOpen size={14} className="text-yellow-500" />
                      <span>Program Files</span>
                    </div>
                    <div className="pl-4 space-y-1 border-l border-slate-700">
                      <div className="flex items-center space-x-2 text-[#00a2e8] py-1 bg-[#00a2e8]/10 rounded-lg px-2 cursor-pointer font-semibold transition">
                        <FolderOpen size={14} className="text-yellow-500" />
                        <span>DVMS System</span>
                      </div>
                      <div className="pl-4 space-y-1">
                        <div className="flex items-center space-x-2 text-slate-300 py-0.5 rounded px-1 hover:bg-slate-800 cursor-pointer">
                          <FolderOpen size={14} className="text-yellow-500" />
                          <span>DVMS Client</span>
                        </div>
                        <div className="pl-4 border-l border-slate-700">
                          <div className="flex items-center space-x-2 text-emerald-400 py-0.5 bg-emerald-500/10 rounded px-1 font-semibold">
                            <FolderOpen size={14} className="text-emerald-500" />
                            <span>EventData</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Đường dẫn hiện tại</label>
                  <input 
                    type="text" 
                    value={savePath} 
                    onChange={(e) => setSavePath(e.target.value)}
                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2.5 font-mono text-slate-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="px-5 py-4 bg-[#181921] border-t border-[#21232d] flex justify-end space-x-3">
                <button 
                  onClick={() => setShowPathModal(false)}
                  className="py-2 px-4 bg-[#3a3b46] hover:bg-[#474958] text-slate-300 font-bold rounded-xl transition cursor-pointer border-none"
                >
                  Hủy bỏ
                </button>
                <button 
                  onClick={() => setShowPathModal(false)}
                  className="py-2 px-6 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded-xl transition cursor-pointer border-none"
                >
                  Xác nhận
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
