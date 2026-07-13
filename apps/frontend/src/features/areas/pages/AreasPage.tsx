import { useState, FormEvent, useEffect } from 'react';
import { 
  Camera, 
  Check, 
  Plus, 
  ChevronDown, 
  Calendar,
  X,
  FolderOpen,
  Settings,
  Trash2,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';
import { useApp } from '../../../context/AppContext';

// 1. AREAS PAGE COMPONENT
// ==========================================
export const AreasPage = () => {
  const { areasData, devices, createArea, deleteArea, addAreaCamera, removeAreaCamera, updateAreaCamera } = useApp();

  const [selectedAreaId, setSelectedAreaId] = useState<string>('');

  useEffect(() => {
    if (areasData && areasData.length > 0) {
      const exists = areasData.some(a => a.id === selectedAreaId);
      if (!exists) {
        setSelectedAreaId(areasData[0].id);
      }
    } else {
      setSelectedAreaId('');
    }
  }, [areasData, selectedAreaId]);

  const selectedArea = areasData.find(a => a.id === selectedAreaId) || areasData[0];
  const hasAreas = areasData.length > 0;

  const [tempFaceIn, setTempFaceIn] = useState<string[]>([]);
  const [tempFaceOut, setTempFaceOut] = useState<string[]>([]);
  const [isSavingRoles, setIsSavingRoles] = useState(false);

  const [isFaceInDropdownOpen, setIsFaceInDropdownOpen] = useState<boolean>(false);
  const [isFaceOutDropdownOpen, setIsFaceOutDropdownOpen] = useState<boolean>(false);
  
  const [showAddCamModal, setShowAddCamModal] = useState(false);
  const [newCamDeviceId, setNewCamDeviceId] = useState('');
  const [addCamError, setAddCamError] = useState('');
  const [isAddingCam, setIsAddingCam] = useState(false);
  const [removingBindId, setRemovingBindId] = useState<string | null>(null);

  const [showAddAreaInput, setShowAddAreaInput] = useState(false);
  const [newAreaName, setNewAreaName] = useState('');
  const [addAreaError, setAddAreaError] = useState('');
  const [isAddingArea, setIsAddingArea] = useState(false);
  const [deletingAreaId, setDeletingAreaId] = useState<string | null>(null);

  const handleAddCamera = async (e: FormEvent) => {
    e.preventDefault();
    if (!newCamDeviceId || !selectedAreaId) return;

    setIsAddingCam(true);
    setAddCamError('');
    try {
      await addAreaCamera(selectedAreaId, newCamDeviceId, []);
      setNewCamDeviceId('');
      setShowAddCamModal(false);
    } catch (err: any) {
      setAddCamError(err.message || 'Không thể thêm camera. Vui lòng thử lại.');
    } finally {
      setIsAddingCam(false);
    }
  };

  const handleRemoveCamera = async (areaId: string, bindId?: string) => {
    if (!bindId) return;
    setRemovingBindId(bindId);
    try {
      await removeAreaCamera(areaId, bindId);
    } catch (err: any) {
      console.warn('Failed to remove camera binding:', err.message);
    } finally {
      setRemovingBindId(null);
    }
  };

  const handleAddArea = async () => {
    if (!newAreaName.trim()) return;
    setIsAddingArea(true);
    setAddAreaError('');
    try {
      const newArea = await createArea(newAreaName.trim());
      setSelectedAreaId(newArea.id);
      setNewAreaName('');
      setShowAddAreaInput(false);
    } catch (err: any) {
      setAddAreaError(err.message || 'Không thể thêm khu vực. Vui lòng thử lại.');
    } finally {
      setIsAddingArea(false);
    }
  };

  const handleDeleteArea = async (areaId: string) => {
    setDeletingAreaId(areaId);
    try {
      await deleteArea(areaId);
      if (selectedAreaId === areaId) {
        setSelectedAreaId('');
      }
    } catch (err: any) {
      console.warn('Failed to delete area:', err.message);
    } finally {
      setDeletingAreaId(null);
    }
  };

  useEffect(() => {
    if (selectedArea) {
      const inCams = selectedArea.cameras
        .filter(c => c.role.includes('checkin'))
        .map(c => c.camera_id);
      const outCams = selectedArea.cameras
        .filter(c => c.role.includes('checkout'))
        .map(c => c.camera_id);
      setTempFaceIn(inCams);
      setTempFaceOut(outCams);
    } else {
      setTempFaceIn([]);
      setTempFaceOut([]);
    }
  }, [selectedAreaId, areasData]);

  const toggleFaceInCamera = (camId: string) => {
    setTempFaceIn(prev =>
      prev.includes(camId) ? prev.filter(id => id !== camId) : [...prev, camId]
    );
  };

  const toggleFaceOutCamera = (camId: string) => {
    setTempFaceOut(prev =>
      prev.includes(camId) ? prev.filter(id => id !== camId) : [...prev, camId]
    );
  };

  const initialIn = selectedArea
    ? selectedArea.cameras.filter(c => c.role.includes('checkin')).map(c => c.camera_id)
    : [];
  const initialOut = selectedArea
    ? selectedArea.cameras.filter(c => c.role.includes('checkout')).map(c => c.camera_id)
    : [];

  const isDifferent = (arr1: string[], arr2: string[]) => {
    if (arr1.length !== arr2.length) return true;
    const s1 = new Set(arr1);
    return arr2.some(item => !s1.has(item));
  };

  const hasChanges = isDifferent(tempFaceIn, initialIn) || isDifferent(tempFaceOut, initialOut);

  const handleSaveRoles = async () => {
    if (!selectedArea) return;
    setIsSavingRoles(true);
    try {
      const promises = selectedArea.cameras.map(c => {
        const nextRoles: string[] = [];
        if (tempFaceIn.includes(c.camera_id)) {
          nextRoles.push('checkin');
        }
        if (tempFaceOut.includes(c.camera_id)) {
          nextRoles.push('checkout');
        }
        
        const currentRoles = c.role || [];
        const rolesChanged = isDifferent(currentRoles, nextRoles);
        if (rolesChanged) {
          return updateAreaCamera!(selectedArea.id, c.id, nextRoles);
        }
        return Promise.resolve(null);
      });

      await Promise.all(promises);
      alert('Đã cập nhật thiết lập chức năng camera thành công!');
    } catch (err: any) {
      alert('Không thể lưu thiết lập chức năng: ' + (err.message || 'Lỗi hệ thống'));
    } finally {
      setIsSavingRoles(false);
    }
  };

  return (
                <div className="flex-1 p-6 flex flex-col space-y-6 overflow-auto">
              
              {/* Grid content split: Areas list + selected Area configuration details */}
              <div className="flex-1 grid grid-cols-12 gap-6 items-start">
                
                {/* Left col: List of Zones */}
                <div className="col-span-4 bg-[#14151c] border border-[#21232d] rounded-xl overflow-hidden shadow-lg">
                  <div className="p-4 bg-[#181921] border-b border-[#21232d] flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Danh sách khu vực ({areasData.length})</span>
                    <button 
                      onClick={() => setShowAddAreaInput(!showAddAreaInput)}
                      className="p-1 hover:bg-[#2c2e3e] rounded text-[#00a2e8] transition"
                      title="Thêm khu vực mới"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {showAddAreaInput && (
                    <div className="p-3 bg-[#181921]/60 border-b border-[#21232d] space-y-2">
                      <div className="flex gap-2 items-center">
                        <input 
                          type="text"
                          placeholder="Nhập tên khu vực..."
                          value={newAreaName}
                          onChange={(e) => {
                            setNewAreaName(e.target.value);
                            if (addAreaError) setAddAreaError('');
                          }}
                          disabled={isAddingArea}
                          className="flex-1 px-2 py-1 text-xs bg-[#111216] border border-[#2d2f3c] rounded text-white focus:outline-none focus:border-[#00a2e8] disabled:opacity-50"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleAddArea();
                            }
                          }}
                        />
                        <button 
                          onClick={handleAddArea}
                          disabled={isAddingArea || !newAreaName.trim()}
                          className="px-2 py-1 bg-[#00a2e8] hover:bg-[#008cc9] text-white text-[11px] font-semibold rounded transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                        >
                          {isAddingArea && <Loader2 size={12} className="animate-spin" />}
                          Thêm
                        </button>
                        <button 
                          onClick={() => {
                            setShowAddAreaInput(false);
                            setNewAreaName('');
                            setAddAreaError('');
                          }}
                          disabled={isAddingArea}
                          className="p-1 hover:bg-slate-800 rounded text-slate-400 transition"
                        >
                          <X size={14} />
                        </button>
                      </div>
                      {addAreaError && (
                        <p className="text-[11px] text-red-400 font-medium">{addAreaError}</p>
                      )}
                    </div>
                  )}

                  <div className="divide-y divide-[#1e202b]">
                    {areasData.map(area => {
                      const isSelected = selectedAreaId === area.id;
                      return (
                        <div 
                          key={area.id}
                          onClick={() => setSelectedAreaId(area.id)}
                          className={`group p-4 cursor-pointer transition ${
                            isSelected 
                              ? 'bg-[#00a2e8]/10 border-l-4 border-[#00a2e8]' 
                              : 'hover:bg-[#181a24]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className={`text-sm font-bold ${isSelected ? 'text-[#00a2e8]' : 'text-slate-100'}`}>
                              {area.name}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteArea(area.id);
                              }}
                              disabled={deletingAreaId === area.id}
                              title="Xoá khu vực"
                              className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-500/10 opacity-0 group-hover:opacity-100 transition disabled:opacity-50"
                            >
                              {deletingAreaId === area.id ? (
                                <Loader2 size={13} className="animate-spin" />
                              ) : (
                                <Trash2 size={13} />
                              )}
                            </button>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span>{area.cameras.length} Camera</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right col: Selected Zone detail & connected camera list */}
                <div className="col-span-8 space-y-4 overflow-visible">

                {!hasAreas || !selectedArea ? (
                  <div className="bg-[#14151c] border border-[#21232d] rounded-xl shadow-lg p-10 flex flex-col items-center justify-center text-center space-y-2">
                    <FolderOpen size={32} className="text-slate-600" />
                    <p className="text-sm font-semibold text-slate-300">Chưa có khu vực nào</p>
                    <p className="text-xs text-slate-500">Vui lòng thêm khu vực mới ở danh sách bên trái.</p>
                  </div>
                ) : (
                <>
                  {/* THIẾT LẬP CHỨC NĂNG */}
                  <div className="bg-[#14151c] border border-[#21232d] rounded-xl shadow-lg p-5 space-y-4 overflow-visible">
                    <div className="flex items-center justify-between pb-3 border-b border-[#21232d]">
                      <div className="flex items-center space-x-2">
                        <Settings size={15} className="text-[#00a2e8]" />
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">THIẾT LẬP CHỨC NĂNG</span>
                      </div>
                      {hasChanges && (
                        <button
                          onClick={handleSaveRoles}
                          disabled={isSavingRoles}
                          className="px-3 py-1 bg-[#00a2e8] hover:bg-[#008cc9] disabled:opacity-50 text-white text-[11px] font-semibold rounded-lg flex items-center gap-1 transition-all"
                        >
                          {isSavingRoles && <Loader2 size={11} className="animate-spin" />}
                          Lưu thiết lập
                        </button>
                      )}
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
                              const selectedInCams = tempFaceIn;
                              if (selectedInCams.length === 0) {
                                return <span className="text-slate-500 italic">Chọn camera đi vào...</span>;
                              }
                              return selectedInCams.map(camId => {
                                const cam = selectedArea.cameras.find(c => c.camera_id === camId);
                                return (
                                  <span 
                                    key={camId} 
                                    className="bg-[#00a2e8]/20 text-[#00a2e8] border border-[#00a2e8]/30 px-2 py-0.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 hover:bg-[#00a2e8]/30 transition"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFaceInCamera(camId);
                                    }}
                                  >
                                    {cam ? cam.camera_name : camId}
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
                            <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d] animate-in fade-in slide-in-from-top-1 duration-150">
                              {selectedArea.cameras.length === 0 ? (
                                <div className="p-3 text-center text-slate-500 text-xs italic">
                                  Chưa có camera nào kết nối vào khu vực này
                                </div>
                              ) : (
                                selectedArea.cameras.map(cam => {
                                  const selectedInCams = tempFaceIn;
                                  const isChecked = selectedInCams.includes(cam.camera_id);
                                  return (
                                    <div 
                                      key={cam.camera_id}
                                      onClick={() => toggleFaceInCamera(cam.camera_id)}
                                      className="flex items-center justify-between p-2.5 hover:bg-[#20222f] cursor-pointer transition"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <input 
                                          type="checkbox"
                                          checked={isChecked}
                                          onChange={() => {}}
                                          className="rounded border-[#2d2f3c] text-[#00a2e8] focus:ring-0 bg-transparent w-3.5 h-3.5 cursor-pointer"
                                        />
                                        <span className="text-xs text-slate-200 font-medium">{cam.camera_name || cam.camera_id}</span>
                                      </div>
                                      <span className="text-[9px] font-mono text-slate-400">{cam.ip || '/'}</span>
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
                              const selectedOutCams = tempFaceOut;
                              if (selectedOutCams.length === 0) {
                                return <span className="text-slate-500 italic">Chọn camera đi ra...</span>;
                              }
                              return selectedOutCams.map(camId => {
                                const cam = selectedArea.cameras.find(c => c.camera_id === camId);
                                return (
                                  <span 
                                    key={camId} 
                                    className="bg-[#00a2e8]/20 text-[#00a2e8] border border-[#00a2e8]/30 px-2 py-0.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 hover:bg-[#00a2e8]/30 transition"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleFaceOutCamera(camId);
                                    }}
                                  >
                                    {cam ? cam.camera_name : camId}
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
                            <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d] animate-in fade-in slide-in-from-top-1 duration-150">
                              {selectedArea.cameras.length === 0 ? (
                                <div className="p-3 text-center text-slate-500 text-xs italic">
                                  Chưa có camera nào kết nối vào khu vực này
                                </div>
                              ) : (
                                selectedArea.cameras.map(cam => {
                                  const selectedOutCams = tempFaceOut;
                                  const isChecked = selectedOutCams.includes(cam.camera_id);
                                  return (
                                    <div 
                                      key={cam.camera_id}
                                      onClick={() => toggleFaceOutCamera(cam.camera_id)}
                                      className="flex items-center justify-between p-2.5 hover:bg-[#20222f] cursor-pointer transition"
                                    >
                                      <div className="flex items-center space-x-2">
                                        <input 
                                          type="checkbox"
                                          checked={isChecked}
                                          onChange={() => {}}
                                          className="rounded border-[#2d2f3c] text-[#00a2e8] focus:ring-0 bg-transparent w-3.5 h-3.5 cursor-pointer"
                                        />
                                        <span className="text-xs text-slate-200 font-medium">{cam.camera_name || cam.camera_id}</span>
                                      </div>
                                      <span className="text-[9px] font-mono text-slate-400">{cam.ip || '/'}</span>
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
                        onClick={() => {
                          setShowAddCamModal(true);
                          setAddCamError('');
                          setNewCamDeviceId('');
                        }}
                        className="text-[11px] text-[#00a2e8] hover:underline font-medium flex items-center gap-1"
                      >
                        <Plus size={12} /> Thêm camera cho vùng này
                      </button>
                    </div>

                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-[#111218] border-b border-[#21232d] text-slate-400 font-bold">
                          <th className="p-3">Tên thiết bị</th>
                          <th className="p-3 text-center">Hành động</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1b1c24] font-mono text-slate-300">
                        {selectedArea.cameras.length === 0 ? (
                          <tr>
                            <td colSpan={2} className="p-6 text-center text-slate-500 font-sans italic">
                              Chưa có camera nào kết nối vào khu vực này
                            </td>
                          </tr>
                        ) : (
                          selectedArea.cameras.map(camera => {
                            const isRemoving = removingBindId === camera.id;
                            return (
                              <tr key={camera.id || camera.camera_id} className="hover:bg-[#181a24] transition">
                                <td className="p-3 font-sans font-medium text-slate-100">
                                  {camera.camera_name || '/'}
                                </td>
                                <td className="p-3 text-center">
                                  <button
                                    onClick={() => handleRemoveCamera(selectedArea.id, camera.id)}
                                    disabled={isRemoving || !camera.id}
                                    title="Gỡ camera khỏi khu vực"
                                    className="p-1 rounded text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition disabled:opacity-50"
                                  >
                                    {isRemoving ? (
                                      <Loader2 size={13} className="animate-spin" />
                                    ) : (
                                      <Trash2 size={13} />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </>
                )}
                </div>
              </div>

              {/* Modal: Thêm camera cho khu vực */}
              {showAddCamModal && selectedArea && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                  <div className="bg-[#14151c] border border-[#21232d] rounded-xl shadow-2xl w-full max-w-md p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-slate-200">Thêm camera cho "{selectedArea.name}"</h3>
                      <button
                        onClick={() => setShowAddCamModal(false)}
                        className="p-1 hover:bg-slate-800 rounded text-slate-400 transition"
                      >
                        <X size={16} />
                      </button>
                    </div>

                    <form onSubmit={handleAddCamera} className="space-y-3">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                          Chọn Camera
                        </label>
                        <select
                          value={newCamDeviceId}
                          onChange={(e) => {
                            setNewCamDeviceId(e.target.value);
                            if (addCamError) setAddCamError('');
                          }}
                          disabled={isAddingCam}
                          className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 text-xs focus:outline-none focus:border-[#00a2e8] disabled:opacity-50"
                        >
                          <option value="">-- Chọn camera --</option>
                          {devices
                            .filter(d => !selectedArea.cameras.some(c => c.camera_id === d.id))
                            .map(d => (
                              <option key={d.id} value={d.id}>{d.name || d.id}</option>
                            ))}
                        </select>
                      </div>

                      {addCamError && (
                        <p className="text-[11px] text-red-400 font-medium">{addCamError}</p>
                      )}

                      <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setShowAddCamModal(false)}
                          disabled={isAddingCam}
                          className="px-4 py-2 bg-[#3a3b46] hover:bg-[#474958] text-slate-200 font-semibold rounded text-xs transition"
                        >
                          Hủy
                        </button>
                        <button
                          type="submit"
                          disabled={isAddingCam || !newCamDeviceId}
                          className="px-4 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-semibold rounded text-xs transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                        >
                          {isAddingCam && <Loader2 size={13} className="animate-spin" />}
                          Thêm
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
  );
};

// ==========================================
