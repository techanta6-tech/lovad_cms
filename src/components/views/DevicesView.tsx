"use client";

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Search, 
  Camera, 
  ChevronDown, 
  Check, 
  Monitor, 
  Layers
} from 'lucide-react';
import { DeviceInfo, ChannelInfo } from '@/lib/types';

interface DevicesViewProps {
  devices: DeviceInfo[];
  setDevices: React.Dispatch<React.SetStateAction<DeviceInfo[]>>;
  channels: ChannelInfo[];
  setChannels: React.Dispatch<React.SetStateAction<ChannelInfo[]>>;
  originalChannels: ChannelInfo[];
  setOriginalChannels: React.Dispatch<React.SetStateAction<ChannelInfo[]>>;
}

export default function DevicesView({
  devices,
  setDevices,
  channels,
  setChannels,
  originalChannels,
  setOriginalChannels
}: DevicesViewProps) {
  const [activeDeviceSubTab, setActiveDeviceSubTab] = useState<'device' | 'channel'>('device');
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>(devices[0]?.id || 'dev-1');
  const [isAddingDevice, setIsAddingDevice] = useState<boolean>(false);
  const [searchDeviceQuery, setSearchDeviceQuery] = useState('');

  // Form edit/view state
  const [editDevName, setEditDevName] = useState('');
  const [editDevDesc, setEditDevDesc] = useState('');
  const [editDevTag, setEditDevTag] = useState('');
  const [editDevOwner, setEditDevOwner] = useState('Mặc Định');
  const [editDevType, setEditDevType] = useState('ONVIF CAMERA');
  const [editDevMainStream, setEditDevMainStream] = useState('H264 1920x1080 (profile_c');
  const [editDevSubStream, setEditDevSubStream] = useState('H264 704x576 (profile_can');
  const [editDevIp, setEditDevIp] = useState('');
  const [editDevOnvifPort, setEditDevOnvifPort] = useState('80');
  const [editDevRtspPort, setEditDevRtspPort] = useState('554');
  const [editDevStorageStream, setEditDevStorageStream] = useState('Main Stream');
  const [editDevUser, setEditDevUser] = useState('admin');
  const [editDevPass, setEditDevPass] = useState('password123');

  // Form add state
  const [addDevName, setAddDevName] = useState('');
  const [addDevDesc, setAddDevDesc] = useState('');
  const [addDevIp, setAddDevIp] = useState('');
  const [addDevOnvifPort, setAddDevOnvifPort] = useState('80');
  const [addDevRtspPort, setAddDevRtspPort] = useState('554');
  const [addDevUser, setAddDevUser] = useState('admin');
  const [addDevPass, setAddDevPass] = useState('');

  const [addDevErrors, setAddDevErrors] = useState<{name?: string; ip?: string}>({});
  const [editDevErrors, setEditDevErrors] = useState<{name?: string; ip?: string}>({});

  // Sync edits when selectedDeviceId changes
  useEffect(() => {
    const dev = devices.find(d => d.id === selectedDeviceId);
    if (dev) {
      setEditDevName(dev.name);
      setEditDevDesc(dev.description || '');
      setEditDevTag(dev.tag || '');
      setEditDevOwner(dev.owner || 'Mặc Định');
      setEditDevType(dev.type || 'ONVIF CAMERA');
      setEditDevMainStream(dev.mainStream || 'H264 1920x1080 (profile_c');
      setEditDevSubStream(dev.subStream || 'H264 704x576 (profile_can');
      setEditDevIp(dev.ip || '');
      setEditDevOnvifPort(dev.onvifPort || '80');
      setEditDevRtspPort(dev.rtspPort || '554');
      setEditDevStorageStream(dev.storageStream || 'Main Stream');
      setEditDevUser(dev.username || 'admin');
      setEditDevPass(dev.password || '');
      setEditDevErrors({});
    }
  }, [selectedDeviceId, devices]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      {/* Header Tab Navigator */}
      <div id="device-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center space-x-4 text-left">
          <div className="text-xs text-slate-400 font-semibold tracking-wider">Thiết Bị & Kênh Ghi Hình</div>
          
          {/* Sliding Big Pill Segmented Control Container */}
          <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
            {/* Tab 1: Quản lý camera */}
            <button 
              id="tab-btn-device-manage"
              onClick={() => setActiveDeviceSubTab('device')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeDeviceSubTab === 'device' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor size={14} />
              <span>Quản lý camera</span>
            </button>

            {/* Tab 2: Quản lý kênh */}
            <button 
              id="tab-btn-channel-manage"
              onClick={() => setActiveDeviceSubTab('channel')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeDeviceSubTab === 'channel' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers size={14} />
              <span>Quản lý kênh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-tab content */}
      <div className="flex-1 flex overflow-hidden bg-[#111216]">
        {activeDeviceSubTab === 'device' ? (
          <div className="flex-1 flex overflow-hidden">
            {/* Left sidebar: Danh Sách Camera */}
            <div id="device-sub-sidebar" className="w-64 border-r border-[#252731] flex flex-col bg-[#14151c] shrink-0">
              <div className="p-4 border-b border-[#252731] flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Danh Sách Camera</span>
                <button 
                  onClick={() => {
                    setIsAddingDevice(true);
                    setAddDevName('');
                    setAddDevDesc('');
                    setAddDevIp('');
                    setAddDevOnvifPort('80');
                    setAddDevRtspPort('554');
                    setAddDevUser('admin');
                    setAddDevPass('');
                    setAddDevErrors({});
                  }}
                  className="p-1 hover:bg-[#2c2e3e] rounded text-[#00a2e8] transition cursor-pointer"
                  title="Thêm thiết bị mới"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Top Search Bar */}
              <div className="p-3 border-b border-[#252731] bg-[#181921]/40 flex items-center gap-2">
                <div className="relative flex-1">
                  <input 
                    type="text"
                    placeholder="Tìm Camera..."
                    value={searchDeviceQuery}
                    onChange={(e) => setSearchDeviceQuery(e.target.value)}
                    className="w-full pl-3 pr-8 py-1.5 text-xs bg-[#111216] border border-[#2d2f3c] rounded text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00a2e8]"
                  />
                  <Search size={14} className="absolute right-2.5 top-2.5 text-slate-500" />
                </div>
              </div>

              {/* Camera List */}
              <div className="flex-1 overflow-y-auto divide-y divide-[#1e202b]">
                {devices
                  .filter(dev => dev.name.toLowerCase().includes(searchDeviceQuery.toLowerCase()))
                  .map(dev => {
                    const isSelected = selectedDeviceId === dev.id && !isAddingDevice;
                    return (
                      <button
                        key={dev.id}
                        type="button"
                        onClick={() => {
                          setSelectedDeviceId(dev.id);
                          setIsAddingDevice(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3.5 text-left text-xs font-medium transition cursor-pointer border-none bg-transparent ${
                          isSelected 
                            ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
                            : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
                        }`}
                      >
                        <Camera size={14} className={isSelected ? 'text-[#00a2e8]' : 'text-slate-500'} />
                        <span className="truncate">{dev.name}</span>
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Right area: Thông Tin Camera or Add Camera form */}
            <div id="device-info-pane" className="flex-1 p-8 overflow-y-auto bg-[#111216] flex flex-col">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 pb-2 border-b border-[#252731] text-left">
                  {isAddingDevice ? 'Thêm Thiết Bị Mới' : 'Thông Tin Camera'}
                </h2>

                {isAddingDevice ? (
                  /* ADD DEVICE FORM */
                  <div className="space-y-5 text-xs text-slate-300">
                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Tên Gợi Nhớ</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevName}
                          onChange={(e) => {
                            setAddDevName(e.target.value);
                            if (e.target.value.trim()) {
                              setAddDevErrors(prev => ({ ...prev, name: undefined }));
                            }
                          }}
                          className={`w-full px-3 py-2 bg-[#1b1c24] border ${addDevErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-[#2d2f3c] focus:border-[#00a2e8]'} rounded text-slate-100 focus:outline-none`}
                          placeholder="Nhập tên gợi nhớ..."
                        />
                      </div>
                      <div className="col-span-3 text-red-400 text-[11px] font-medium min-h-[1.5rem] flex items-center">
                        {addDevErrors.name || (!addDevName.trim() && "Không được để trống nội dung!")}
                      </div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Mô Tả</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevDesc}
                          onChange={(e) => setAddDevDesc(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                          placeholder="Nhập mô tả..."
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Địa Chỉ IP</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevIp}
                          onChange={(e) => {
                            setAddDevIp(e.target.value);
                            if (e.target.value.trim()) {
                              setAddDevErrors(prev => ({ ...prev, ip: undefined }));
                            }
                          }}
                          className={`w-full px-3 py-2 bg-[#1b1c24] border ${addDevErrors.ip ? 'border-red-500/50 focus:border-red-500' : 'border-[#2d2f3c] focus:border-[#00a2e8]'} rounded text-slate-100 focus:outline-none`}
                          placeholder="Ví dụ: 192.168.1.10"
                        />
                      </div>
                      <div className="col-span-3 text-red-400 text-[11px] font-medium min-h-[1.5rem] flex items-center">
                        {addDevErrors.ip || (!addDevIp.trim() && "Không được để trống nội dung!")}
                      </div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Cổng ONVIF</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevOnvifPort}
                          onChange={(e) => setAddDevOnvifPort(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Cổng RTSP</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevRtspPort}
                          onChange={(e) => setAddDevRtspPort(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Tên Tài Khoản</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={addDevUser}
                          onChange={(e) => setAddDevUser(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Mật Khẩu</label>
                      <div className="col-span-6">
                        <input 
                          type="password"
                          value={addDevPass}
                          onChange={(e) => setAddDevPass(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 pt-6 border-t border-[#252731] mt-8">
                      <div className="col-span-3"></div>
                      <div className="col-span-6 flex items-center space-x-3">
                        <button 
                          onClick={() => {
                            const errors: {name?: string; ip?: string} = {};
                            if (!addDevName.trim()) errors.name = "Không được để trống nội dung!";
                            if (!addDevIp.trim()) errors.ip = "Không được để trống nội dung!";
                            
                            if (Object.keys(errors).length > 0) {
                              setAddDevErrors(errors);
                              return;
                            }

                            const newId = `dev-${Date.now()}`;
                            const newDevice: DeviceInfo = {
                              id: newId,
                              name: addDevName.trim(),
                              description: addDevDesc.trim(),
                              tag: '',
                              owner: 'Mặc Định',
                              type: 'ONVIF CAMERA',
                              mainStream: 'H264 1920x1080 (profile_c',
                              subStream: 'H264 704x576 (profile_can',
                              ip: addDevIp.trim(),
                              onvifPort: addDevOnvifPort,
                              rtspPort: addDevRtspPort,
                              storageStream: 'Main Stream',
                              username: addDevUser,
                              password: addDevPass
                            };

                            setDevices([...devices, newDevice]);
                            setSelectedDeviceId(newId);
                            setIsAddingDevice(false);
                          }}
                          className="px-6 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-semibold rounded text-xs transition shadow cursor-pointer border-none"
                        >
                          Hoàn Tất
                        </button>
                        <button 
                          onClick={() => setIsAddingDevice(false)}
                          className="px-6 py-2 bg-[#3a3b46] hover:bg-[#474958] text-slate-200 font-semibold rounded text-xs transition cursor-pointer border-none"
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* VIEW & UPDATE DEVICE PROFILE FORM */
                  <div className="space-y-5 text-xs text-slate-300">
                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Tên Gợi Nhớ</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevName}
                          onChange={(e) => {
                            setEditDevName(e.target.value);
                            if (e.target.value.trim()) {
                              setEditDevErrors(prev => ({ ...prev, name: undefined }));
                            }
                          }}
                          className={`w-full px-3 py-2 bg-[#1b1c24] border ${editDevErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-[#2d2f3c] focus:border-[#00a2e8]'} rounded text-slate-100 focus:outline-none`}
                        />
                      </div>
                      <div className="col-span-3 text-red-400 text-[11px] font-medium min-h-[1.5rem] flex items-center">
                        {editDevErrors.name || (!editDevName.trim() && "Không được để trống nội dung!")}
                      </div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Mô Tả</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevDesc}
                          onChange={(e) => setEditDevDesc(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Loại Thiết Bị</label>
                      <div className="col-span-6">
                        <select 
                          value={editDevType}
                          onChange={(e) => setEditDevType(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8] cursor-pointer"
                        >
                          <option value="ONVIF CAMERA">ONVIF CAMERA</option>
                          <option value="RTSP CAMERA">RTSP STREAM CAMERA</option>
                        </select>
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Main Stream</label>
                      <div className="col-span-6">
                        <select 
                          value={editDevMainStream}
                          onChange={(e) => setEditDevMainStream(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8] cursor-pointer"
                        >
                          <option value="H264 1920x1080 (profile_c">H264 1920x1080 (profile_c)</option>
                          <option value="H265 2560x1440 (profile_c">H265 2560x1440 (profile_c)</option>
                        </select>
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Sub Stream</label>
                      <div className="col-span-6">
                        <select 
                          value={editDevSubStream}
                          onChange={(e) => setEditDevSubStream(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8] cursor-pointer"
                        >
                          <option value="H264 704x576 (profile_can">H264 704x576 (profile_can)</option>
                          <option value="H264 640x480 (profile_can">H264 640x480 (profile_can)</option>
                        </select>
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Địa Chỉ IP</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevIp}
                          onChange={(e) => {
                            setEditDevIp(e.target.value);
                            if (e.target.value.trim()) {
                              setEditDevErrors(prev => ({ ...prev, ip: undefined }));
                            }
                          }}
                          className={`w-full px-3 py-2 bg-[#1b1c24] border ${editDevErrors.ip ? 'border-red-500/50 focus:border-red-500' : 'border-[#2d2f3c] focus:border-[#00a2e8]'} rounded text-slate-100 focus:outline-none`}
                        />
                      </div>
                      <div className="col-span-3 text-red-400 text-[11px] font-medium min-h-[1.5rem] flex items-center">
                        {editDevErrors.ip || (!editDevIp.trim() && "Không được để trống nội dung!")}
                      </div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Cổng ONVIF</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevOnvifPort}
                          onChange={(e) => setEditDevOnvifPort(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Cổng RTSP</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevRtspPort}
                          onChange={(e) => setEditDevRtspPort(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Tên Tài Khoản</label>
                      <div className="col-span-6">
                        <input 
                          type="text"
                          value={editDevUser}
                          onChange={(e) => setEditDevUser(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 items-center gap-4">
                      <label className="col-span-3 text-right font-medium text-slate-400">Mật Khẩu</label>
                      <div className="col-span-6">
                        <input 
                          type="password"
                          value={editDevPass}
                          onChange={(e) => setEditDevPass(e.target.value)}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="col-span-3"></div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 pt-6 border-t border-[#252731] mt-8">
                      <div className="col-span-3"></div>
                      <div className="col-span-6">
                        <button 
                          onClick={() => {
                            const errors: {name?: string; ip?: string} = {};
                            if (!editDevName.trim()) errors.name = "Không được để trống nội dung!";
                            if (!editDevIp.trim()) errors.ip = "Không được để trống nội dung!";
                            
                            if (Object.keys(errors).length > 0) {
                              setEditDevErrors(errors);
                              return;
                            }

                            const updatedDevices = devices.map(d => {
                              if (d.id === selectedDeviceId) {
                                return {
                                  ...d,
                                  name: editDevName.trim(),
                                  description: editDevDesc.trim(),
                                  tag: editDevTag,
                                  owner: editDevOwner,
                                  type: editDevType,
                                  mainStream: editDevMainStream,
                                  subStream: editDevSubStream,
                                  ip: editDevIp.trim(),
                                  onvifPort: editDevOnvifPort,
                                  rtspPort: editDevRtspPort,
                                  storageStream: editDevStorageStream,
                                  username: editDevUser,
                                  password: editDevPass
                                };
                              }
                              return d;
                            });
                            setDevices(updatedDevices);
                            alert('Cập nhật thông tin camera thành công!');
                          }}
                          className="px-5 py-2.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded text-xs transition shadow-lg shadow-[#00a2e8]/25 cursor-pointer border-none"
                        >
                          Cập Nhật Profile
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* QUẢN LÝ KÊNH */
          <div className="flex-1 flex flex-col overflow-hidden bg-[#111216] p-6 text-left">
            <div className="flex-1 flex flex-col overflow-hidden max-w-4xl w-full mx-auto">
              <div className="grid grid-cols-12 gap-3 pb-3 border-b border-[#252731] text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 items-center">
                <div className="col-span-1 text-center bg-[#1c1d26] py-2 rounded-md border border-[#2d2f3c] text-[11px]">STT</div>
                <div className="col-span-5 px-3 py-2 bg-[#1c1d26] rounded-md border border-[#2d2f3c] flex items-center justify-between">
                  <span>Tên Kênh</span>
                  <ChevronDown size={14} className="text-slate-500" />
                </div>
                <div className="col-span-6 px-3 py-2 bg-[#1c1d26] rounded-md border border-[#2d2f3c] flex items-center justify-between">
                  <span>Tên Camera</span>
                  <ChevronDown size={14} className="text-slate-500" />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2.5 pr-2">
                {channels.map((chan) => (
                  <div key={chan.stt} className="grid grid-cols-12 gap-3 items-center text-xs">
                    <div className="col-span-1 text-center font-semibold text-slate-300 bg-[#1c1d26] py-2 rounded-md border border-[#2d2f3c]/60 select-none">
                      {chan.stt}
                    </div>
                    
                    <div className="col-span-5">
                      <input 
                        type="text"
                        value={chan.name}
                        onChange={(e) => {
                          const updated = channels.map(c => c.stt === chan.stt ? { ...c, name: e.target.value } : c);
                          setChannels(updated);
                        }}
                        className="w-full px-3 py-2 bg-[#1e202b] border border-[#2d2f3c] rounded-md text-slate-200 focus:outline-none focus:border-[#00a2e8] font-medium"
                      />
                    </div>

                    <div className="col-span-6 relative">
                      <select 
                        value={chan.cameraName}
                        onChange={(e) => {
                          const updated = channels.map(c => c.stt === chan.stt ? { ...c, cameraName: e.target.value } : c);
                          setChannels(updated);
                        }}
                        className="w-full px-3 py-2 pr-8 bg-[#1e202b] border border-[#2d2f3c] rounded-md text-slate-200 focus:outline-none focus:border-[#00a2e8] appearance-none cursor-pointer font-medium"
                      >
                        {devices.map(d => (
                          <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                        <option value="Không Chọn">Không Chọn</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-3 top-3 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#252731] flex items-center justify-end mt-4">
                {(() => {
                  const isChannelsDirty = JSON.stringify(channels) !== JSON.stringify(originalChannels);
                  return (
                    <button
                      disabled={!isChannelsDirty}
                      onClick={() => {
                        setOriginalChannels(channels);
                        alert('Cập nhật thông tin sơ đồ phân kênh thành công!');
                      }}
                      className={`px-6 py-2.5 rounded-lg text-xs font-bold text-white transition flex items-center space-x-2 border-none ${
                        isChannelsDirty 
                          ? 'bg-[#00a2e8] hover:bg-[#008cc9] shadow-lg shadow-[#00a2e8]/25 cursor-pointer' 
                          : 'bg-slate-700/50 text-slate-400 opacity-40 cursor-not-allowed pointer-events-none'
                      }`}
                    >
                      <Check size={14} />
                      <span>Cập Nhật Thông Tin Kênh</span>
                    </button>
                  );
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
