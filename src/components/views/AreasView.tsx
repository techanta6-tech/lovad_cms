"use client";

import { useState, FormEvent } from 'react';
import { 
  Plus, 
  X, 
  Settings, 
  ChevronDown, 
  Check, 
  Monitor, 
  Info, 
  Layers
} from 'lucide-react';
import { Area, CameraInfo } from '@/lib/types';

interface AreasViewProps {
  areasData: Area[];
  setAreasData: React.Dispatch<React.SetStateAction<Area[]>>;
}

export default function AreasView({ areasData, setAreasData }: AreasViewProps) {
  const [selectedAreaId, setSelectedAreaId] = useState<string>(areasData[0]?.id || 'area-1');
  const [showAddAreaInput, setShowAddAreaInput] = useState(false);
  const [newAreaName, setNewAreaName] = useState('');
  
  // Camera face capture settings for each Area (stored locally)
  const [areaFaceInCameras, setAreaFaceInCameras] = useState<Record<string, string[]>>({
    'area-1': ['cam-1-1'],
    'area-2': ['cam-2-1']
  });
  const [areaFaceOutCameras, setAreaFaceOutCameras] = useState<Record<string, string[]>>({
    'area-1': ['cam-1-2'],
    'area-2': ['cam-2-2']
  });
  
  const [isFaceInDropdownOpen, setIsFaceInDropdownOpen] = useState<boolean>(false);
  const [isFaceOutDropdownOpen, setIsFaceOutDropdownOpen] = useState<boolean>(false);

  // New Camera creation modal states
  const [showAddCamModal, setShowAddCamModal] = useState(false);
  const [newCamName, setNewCamName] = useState('');
  const [newCamIp, setNewCamIp] = useState('192.168.1.100');
  const [newCamPort, setNewCamPort] = useState(554);
  const [newCamResolution, setNewCamResolution] = useState('1920x1080 (1080P)');

  const selectedArea = areasData.find(a => a.id === selectedAreaId) || areasData[0];

  const handleAddArea = () => {
    if (!newAreaName.trim()) return;
    const newId = `area-${Date.now()}`;
    const newArea: Area = {
      id: newId,
      name: newAreaName.trim(),
      code: `CAM_ZONE_${String.fromCharCode(65 + areasData.length)}`,
      status: 'online',
      cameraCount: 0,
      cameras: [],
      scenario: 'Phân tích khuôn mặt & Điểm danh nhân sự'
    };
    setAreasData([...areasData, newArea]);
    setSelectedAreaId(newId);
    setNewAreaName('');
    setShowAddAreaInput(false);
  };

  const handleAddCamera = (e: FormEvent) => {
    e.preventDefault();
    if (!newCamName.trim()) return;

    const newCam: CameraInfo = {
      id: `cam-${Date.now()}`,
      name: newCamName,
      ip: newCamIp,
      port: newCamPort,
      status: 'online',
      resolution: newCamResolution,
      fps: 25
    };

    setAreasData(prevAreas => 
      prevAreas.map(area => {
        if (area.id === selectedAreaId) {
          return {
            ...area,
            cameraCount: area.cameraCount + 1,
            cameras: [...area.cameras, newCam]
          };
        }
        return area;
      })
    );

    setNewCamName('');
    setShowAddCamModal(false);
  };

  const toggleFaceInCamera = (areaId: string, camId: string) => {
    setAreaFaceInCameras(prev => {
      const current = prev[areaId] || [];
      const updated = current.includes(camId)
        ? current.filter(id => id !== camId)
        : [...current, camId];
      return { ...prev, [areaId]: updated };
    });
  };

  const toggleFaceOutCamera = (areaId: string, camId: string) => {
    setAreaFaceOutCameras(prev => {
      const current = prev[areaId] || [];
      const updated = current.includes(camId)
        ? current.filter(id => id !== camId)
        : [...current, camId];
      return { ...prev, [areaId]: updated };
    });
  };

  return (
    <div className="flex-1 p-6 flex flex-col bg-[#111216] overflow-y-auto text-left relative">
      <div className="flex-1 grid grid-cols-12 gap-6 items-start">
        
        {/* Left col: List of Zones */}
        <div className="col-span-4 bg-[#14151c] border border-[#21232d] rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 bg-[#181921] border-b border-[#21232d] flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Danh sách khu vực ({areasData.length})</span>
            <button 
              onClick={() => setShowAddAreaInput(!showAddAreaInput)}
              className="p-1 hover:bg-[#2c2e3e] rounded text-[#00a2e8] transition cursor-pointer"
              title="Thêm khu vực mới"
            >
              <Plus size={16} />
            </button>
          </div>

          {showAddAreaInput && (
            <div className="p-3 bg-[#181921]/60 border-b border-[#21232d] flex gap-2 items-center">
              <input 
                type="text"
                placeholder="Nhập tên khu vực..."
                value={newAreaName}
                onChange={(e) => setNewAreaName(e.target.value)}
                className="flex-1 px-2 py-1 text-xs bg-[#111216] border border-[#2d2f3c] rounded text-white focus:outline-none focus:border-[#00a2e8]"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddArea();
                  }
                }}
              />
              <button 
                onClick={handleAddArea}
                className="px-2 py-1 bg-[#00a2e8] hover:bg-[#008cc9] text-white text-[11px] font-semibold rounded transition cursor-pointer"
              >
                Thêm
              </button>
              <button 
                onClick={() => {
                  setShowAddAreaInput(false);
                  setNewAreaName('');
                }}
                className="p-1 hover:bg-slate-800 rounded text-slate-400 transition cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
          )}

          <div className="divide-y divide-[#1e202b]">
            {areasData.map(area => {
              const isSelected = selectedAreaId === area.id;
              return (
                <div 
                  key={area.id}
                  onClick={() => setSelectedAreaId(area.id)}
                  className={`p-4 cursor-pointer transition ${
                    isSelected 
                      ? 'bg-[#00a2e8]/10 border-l-4 border-[#00a2e8]' 
                      : 'hover:bg-[#181a24]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm font-bold ${isSelected ? 'text-[#00a2e8]' : 'text-slate-100'}`}>
                      {area.name}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{area.cameraCount} Camera</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right col: Selected Zone detail & connected camera list */}
        {selectedArea && (
          <div className="col-span-8 space-y-4 overflow-visible">
            {/* THIẾT LẬP CHỨC NĂNG */}
            <div className="bg-[#14151c] border border-[#21232d] rounded-xl shadow-lg p-5 space-y-4 overflow-visible">
              <div className="flex items-center justify-between pb-3 border-b border-[#21232d]">
                <div className="flex items-center space-x-2">
                  <Settings size={15} className="text-[#00a2e8]" />
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">THIẾT LẬP CHỨC NĂNG</span>
                </div>
              </div>

              {/* Dropdowns / Multiselect Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 overflow-visible">
                {/* Multiselect 1: Camera bắt khuôn mặt khi đi vào */}
                <div className="space-y-1.5 text-left relative">
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                    Camera bắt khuôn mặt khi đi vào
                  </label>
                  
                  <div 
                    onClick={() => {
                      setIsFaceInDropdownOpen(!isFaceInDropdownOpen);
                      setIsFaceOutDropdownOpen(false);
                    }}
                    className="min-h-[42px] w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-slate-500 rounded-xl px-3 py-2 text-xs text-white flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {(() => {
                        const selectedInCams = areaFaceInCameras[selectedArea.id] || [];
                        if (selectedInCams.length === 0) {
                          return <span className="text-slate-500 italic">Chọn camera đi vào...</span>;
                        }
                        return selectedInCams.map(camId => {
                          const cam = selectedArea.cameras.find(c => c.id === camId);
                          return (
                            <span 
                              key={camId} 
                              className="bg-[#00a2e8]/20 text-[#00a2e8] border border-[#00a2e8]/30 px-2 py-0.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 hover:bg-[#00a2e8]/30 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFaceInCamera(selectedArea.id, camId);
                              }}
                            >
                              {cam ? cam.name : camId}
                              <span className="hover:text-red-400 font-bold ml-0.5 text-[11px]">&times;</span>
                            </span>
                          );
                        });
                      })()}
                    </div>
                    <ChevronDown size={14} className={`text-slate-400 shrink-0 transition-transform duration-200 ${isFaceInDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isFaceInDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsFaceInDropdownOpen(false)} 
                      />
                      <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d]">
                        {selectedArea.cameras.length === 0 ? (
                          <div className="p-3 text-center text-slate-500 text-xs italic">
                            Chưa có camera nào kết nối vào khu vực này
                          </div>
                        ) : (
                          selectedArea.cameras.map(cam => {
                            const selectedInCams = areaFaceInCameras[selectedArea.id] || [];
                            const isChecked = selectedInCams.includes(cam.id);
                            return (
                              <div 
                                key={cam.id}
                                onClick={() => toggleFaceInCamera(selectedArea.id, cam.id)}
                                className="flex items-center justify-between p-2.5 hover:bg-[#20222f] cursor-pointer transition"
                              >
                                <div className="flex items-center space-x-2">
                                  <input 
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => {}}
                                    className="rounded border-[#2d2f3c] text-[#00a2e8] focus:ring-0 bg-transparent w-3.5 h-3.5 cursor-pointer"
                                  />
                                  <span className="text-xs text-slate-200 font-medium">{cam.name}</span>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400">{cam.ip}</span>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* Multiselect 2: Camera bắt khuôn mặt khi đi ra */}
                <div className="space-y-1.5 text-left relative">
                  <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                    Camera bắt khuôn mặt khi đi ra
                  </label>
                  
                  <div 
                    onClick={() => {
                      setIsFaceOutDropdownOpen(!isFaceOutDropdownOpen);
                      setIsFaceInDropdownOpen(false);
                    }}
                    className="min-h-[42px] w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-slate-500 rounded-xl px-3 py-2 text-xs text-white flex items-center justify-between cursor-pointer transition-all"
                  >
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {(() => {
                        const selectedOutCams = areaFaceOutCameras[selectedArea.id] || [];
                        if (selectedOutCams.length === 0) {
                          return <span className="text-slate-500 italic">Chọn camera đi ra...</span>;
                        }
                        return selectedOutCams.map(camId => {
                          const cam = selectedArea.cameras.find(c => c.id === camId);
                          return (
                            <span 
                              key={camId} 
                              className="bg-[#00a2e8]/20 text-[#00a2e8] border border-[#00a2e8]/30 px-2 py-0.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 hover:bg-[#00a2e8]/30 transition"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFaceOutCamera(selectedArea.id, camId);
                              }}
                            >
                              {cam ? cam.name : camId}
                              <span className="hover:text-red-400 font-bold ml-0.5 text-[11px]">&times;</span>
                            </span>
                          );
                        });
                      })()}
                    </div>
                    <ChevronDown size={14} className={`text-slate-400 shrink-0 transition-transform duration-200 ${isFaceOutDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isFaceOutDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsFaceOutDropdownOpen(false)} 
                      />
                      <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d]">
                        {selectedArea.cameras.length === 0 ? (
                          <div className="p-3 text-center text-slate-500 text-xs italic">
                            Chưa có camera nào kết nối vào khu vực này
                          </div>
                        ) : (
                          selectedArea.cameras.map(cam => {
                            const selectedOutCams = areaFaceOutCameras[selectedArea.id] || [];
                            const isChecked = selectedOutCams.includes(cam.id);
                            return (
                              <div 
                                key={cam.id}
                                onClick={() => toggleFaceOutCamera(selectedArea.id, cam.id)}
                                className="flex items-center justify-between p-2.5 hover:bg-[#20222f] cursor-pointer transition"
                              >
                                <div className="flex items-center space-x-2">
                                  <input 
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => {}}
                                    className="rounded border-[#2d2f3c] text-[#00a2e8] focus:ring-0 bg-transparent w-3.5 h-3.5 cursor-pointer"
                                  />
                                  <span className="text-xs text-slate-200 font-medium">{cam.name}</span>
                                </div>
                                <span className="text-[9px] font-mono text-slate-400">{cam.ip}</span>
                              </div>
                            );
                          })
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Connected Cameras Table */}
            <div className="bg-[#14151c] border border-[#21232d] rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 bg-[#181921] border-b border-[#21232d] flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Danh sách Camera đã kết nối</span>
                <button 
                  onClick={() => setShowAddCamModal(true)}
                  className="text-[11px] text-[#00a2e8] hover:underline font-medium flex items-center gap-1 cursor-pointer border-none bg-transparent"
                >
                  <Plus size={12} /> Thêm camera cho vùng này
                </button>
              </div>

              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#111218] border-b border-[#21232d] text-slate-400 font-bold">
                    <th className="p-3">Tên thiết bị</th>
                    <th className="p-3">IP Address</th>
                    <th className="p-3 text-center">Cổng RTSP</th>
                    <th className="p-3">Độ phân giải</th>
                    <th className="p-3 text-center">Trạng thái</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1b1c24] font-mono text-slate-300">
                  {selectedArea.cameras.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-slate-500 font-sans italic">
                        Chưa có camera nào kết nối vào khu vực này. Click &quot;Thêm camera cho vùng này&quot; để kết nối.
                      </td>
                    </tr>
                  ) : (
                    selectedArea.cameras.map(camera => {
                      const isCamOffline = camera.status === 'offline';
                      return (
                        <tr key={camera.id} className="hover:bg-[#181a24] transition">
                          <td className="p-3 font-sans font-medium text-slate-100">
                            {camera.name}
                          </td>
                          <td className="p-3 text-slate-400">{camera.ip}</td>
                          <td className="p-3 text-center text-slate-400">{camera.port}</td>
                          <td className="p-3 text-slate-400">{camera.resolution}</td>
                          <td className="p-3 text-center">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-sans font-semibold ${
                              isCamOffline 
                                ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}>
                              {camera.status}
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Camera Modal */}
      {showAddCamModal && (
        <div className="fixed inset-0 bg-black/65 z-50 flex items-center justify-center p-4">
          <div className="bg-[#14151b] border border-[#2d2f3d] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="px-5 py-4 border-b border-[#21232d] bg-[#181921] flex items-center justify-between">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">KẾT NỐI CAMERA MỚI</h3>
              <button 
                onClick={() => setShowAddCamModal(false)}
                className="p-1 rounded bg-[#20212a] hover:bg-[#2c2d3a] text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            <form onSubmit={handleAddCamera} className="p-5 space-y-4 text-xs text-left">
              <div className="space-y-1">
                <label className="font-semibold text-slate-300 block">Tên thiết bị</label>
                <input 
                  type="text"
                  required
                  placeholder="Ví dụ: Camera Checkin"
                  value={newCamName}
                  onChange={(e) => setNewCamName(e.target.value)}
                  className="w-full bg-[#1b1c24] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-slate-100 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-1">
                  <label className="font-semibold text-slate-300 block">Địa chỉ IP</label>
                  <input 
                    type="text"
                    required
                    placeholder="192.168.1.100"
                    value={newCamIp}
                    onChange={(e) => setNewCamIp(e.target.value)}
                    className="w-full bg-[#1b1c24] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-slate-100 focus:outline-none font-mono"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-300 block">Cổng RTSP</label>
                  <input 
                    type="number"
                    required
                    value={newCamPort}
                    onChange={(e) => setNewCamPort(parseInt(e.target.value))}
                    className="w-full bg-[#1b1c24] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-slate-100 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-300 block">Độ phân giải luồng</label>
                <select 
                  value={newCamResolution}
                  onChange={(e) => setNewCamResolution(e.target.value)}
                  className="w-full bg-[#1b1c24] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-slate-100 focus:outline-none cursor-pointer"
                >
                  <option value="1920x1080 (1080P)">1920x1080 (1080P)</option>
                  <option value="1280x720 (720P)">1280x720 (720P)</option>
                  <option value="2560x1440 (2K)">2560x1440 (2K)</option>
                </select>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-[#21232d]">
                <button 
                  type="submit"
                  className="flex-1 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded-xl text-xs transition cursor-pointer border-none"
                >
                  Hoàn Tất
                </button>
                <button 
                  type="button"
                  onClick={() => setShowAddCamModal(false)}
                  className="flex-1 py-2 bg-[#303242] hover:bg-[#3d3f54] text-slate-300 font-bold rounded-xl text-xs transition cursor-pointer border-none"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
