"use client";

import { useState, FormEvent } from 'react';
import { 
  Users, 
  Layers, 
  Plus, 
  X, 
  Check, 
  ChevronDown, 
  FolderOpen 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewEmployee {
  id: string;
  hoTen: string;
  maGiayTo: string;
  phongBan: string[];
  loaiGiayTo: string;
  ngayCap: string;
  noiCap: string;
  ngaySinh: string;
  gioiTinh: string;
  soDienThoai: string;
  email: string;
  diaChi: string;
  anhDaiDien?: { name: string; url: string };
  anhThe?: { name: string; url: string };
  anhKhuonMat?: { name: string; url: string };
  showOptional: boolean;
}

interface EmployeesViewProps {
  employees: any[];
  setEmployees: React.Dispatch<React.SetStateAction<any[]>>;
  departments: string[];
  setDepartments: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function EmployeesView({
  employees,
  setEmployees,
  departments,
  setDepartments
}: EmployeesViewProps) {
  const [activeEmployeeSubTab, setActiveEmployeeSubTab] = useState<'employees-list' | 'departments-list' | 'add-employee'>('employees-list');
  const [newDepartmentInput, setNewDepartmentInput] = useState('');
  const [showEmployeeSaveToast, setShowEmployeeSaveToast] = useState<boolean>(false);
  const [savedCount, setSavedCount] = useState<number>(0);

  const createEmptyNewEmployee = (): NewEmployee => ({
    id: 'EMP_' + Math.random().toString(36).substring(2, 11).toUpperCase(),
    hoTen: '',
    maGiayTo: '',
    phongBan: [],
    loaiGiayTo: 'CCCD',
    ngayCap: '',
    noiCap: '',
    ngaySinh: '',
    gioiTinh: 'Nam',
    soDienThoai: '',
    email: '',
    diaChi: '',
    showOptional: false,
  });

  const [newEmployees, setNewEmployees] = useState<NewEmployee[]>([createEmptyNewEmployee()]);

  const updateNewEmployee = (index: number, field: keyof NewEmployee, value: any) => {
    const updated = [...newEmployees];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setNewEmployees(updated);
  };

  const handleSaveEmployees = (e: FormEvent) => {
    e.preventDefault();
    
    // Validate
    for (let i = 0; i < newEmployees.length; i++) {
      const emp = newEmployees[i];
      if (!emp.hoTen.trim()) {
        alert(`Nhân viên thứ ${i + 1}: Họ tên là bắt buộc!`);
        return;
      }
      if (!emp.maGiayTo.trim()) {
        alert(`Nhân viên thứ ${i + 1}: Mã giấy tờ là bắt buộc!`);
        return;
      }
      if (emp.phongBan.length === 0) {
        alert(`Nhân viên thứ ${i + 1}: Vui lòng chọn ít nhất một phòng ban!`);
        return;
      }
    }

    // Save
    const savedList = newEmployees.map(emp => ({
      id: emp.id,
      hoTen: emp.hoTen,
      maGiayTo: emp.maGiayTo,
      phongBan: emp.phongBan,
      loaiGiayTo: emp.loaiGiayTo || 'CCCD',
      ngayCap: emp.ngayCap || 'Chưa cập nhật',
      noiCap: emp.noiCap || 'Chưa cập nhật',
      ngaySinh: emp.ngaySinh || 'Chưa cập nhật',
      gioiTinh: emp.gioiTinh || 'Chưa cập nhật',
      soDienThoai: emp.soDienThoai || 'Chưa cập nhật',
      email: emp.email || 'Chưa cập nhật',
      diaChi: emp.diaChi || 'Chưa cập nhật',
      anhDaiDien: emp.anhDaiDien,
      anhThe: emp.anhThe,
      anhKhuonMat: emp.anhKhuonMat
    }));

    setEmployees([...employees, ...savedList]);
    setSavedCount(newEmployees.length);
    setShowEmployeeSaveToast(true);
    setTimeout(() => setShowEmployeeSaveToast(false), 4000);

    // Reset to list
    setNewEmployees([createEmptyNewEmployee()]);
    setActiveEmployeeSubTab('employees-list');
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative bg-[#0d0e12]">
      {/* Header Tab Navigator */}
      <div id="employee-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center space-x-4 text-left">
          <div className="text-xs text-slate-400 font-semibold tracking-wider">Nhân Viên</div>
          
          <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
            <button 
              id="tab-btn-employee-manage"
              onClick={() => setActiveEmployeeSubTab('employees-list')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeEmployeeSubTab === 'employees-list' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users size={14} />
              <span>Quản lý nhân sự</span>
            </button>

            <button 
              id="tab-btn-department-manage"
              onClick={() => setActiveEmployeeSubTab('departments-list')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeEmployeeSubTab === 'departments-list' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers size={14} />
              <span>Quản lý phòng ban</span>
            </button>

            <button 
              id="tab-btn-add-employee"
              onClick={() => {
                setNewEmployees([createEmptyNewEmployee()]);
                setActiveEmployeeSubTab('add-employee');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeEmployeeSubTab === 'add-employee' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Plus size={14} />
              <span>Thêm nhân viên</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-tab content */}
      <div className="flex-1 overflow-auto bg-[#111216] p-6 text-left">
        {activeEmployeeSubTab === 'employees-list' ? (
          /* Quản lý nhân sự */
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#14151c] border border-[#21232d] p-4 rounded-xl shadow-md">
              <div>
                <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Users size={16} className="text-[#00a2e8]" />
                  Danh sách nhân sự ({employees.length})
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">Quản lý, tìm kiếm và phân phòng ban cho toàn bộ nhân viên.</p>
              </div>
              
              <button
                onClick={() => {
                  setNewEmployees([createEmptyNewEmployee()]);
                  setActiveEmployeeSubTab('add-employee');
                }}
                className="py-2 px-4 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-xl text-xs font-bold transition shadow-lg shadow-[#00a2e8]/20 flex items-center justify-center gap-1.5 cursor-pointer shrink-0 border-none"
              >
                <Plus size={14} />
                <span>Thêm nhân viên</span>
              </button>
            </div>

            <div className="bg-[#14151c] border border-[#21232d] rounded-2xl overflow-hidden shadow-xl">
              {employees.length === 0 ? (
                <div className="p-16 text-center text-slate-500 flex flex-col items-center justify-center">
                  <Users size={40} className="text-slate-600 mb-3 opacity-60" />
                  <span className="text-xs font-medium">Không có nhân viên nào trong danh sách.</span>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#181921] border-b border-[#21232d] text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <th className="p-4 w-12 text-center">STT</th>
                        <th className="p-4">Nhân sự</th>
                        <th className="p-4">Giấy tờ tùy thân</th>
                        <th className="p-4">Phòng ban</th>
                        <th className="p-4">Liên hệ</th>
                        <th className="p-4 w-20 text-center">Hành động</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1e202b]">
                      {employees.map((emp, index) => (
                        <tr key={emp.id} className="hover:bg-[#181a24] transition text-xs">
                          <td className="p-4 text-center font-mono text-slate-400">{index + 1}</td>
                          
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="relative group/avatar">
                                <img 
                                  src={emp.anhDaiDien?.url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'} 
                                  alt={emp.hoTen} 
                                  className="w-8 h-8 rounded-full object-cover border border-slate-700/60"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              
                              <div>
                                <div className="font-bold text-slate-100">{emp.hoTen}</div>
                                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{emp.id}</div>
                              </div>
                            </div>
                          </td>
                          
                          <td className="p-4">
                            <div className="font-semibold text-slate-300">{emp.maGiayTo}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">Loại: {emp.loaiGiayTo || 'CCCD'}</div>
                          </td>

                          <td className="p-4">
                            <div className="flex flex-wrap gap-1">
                              {emp.phongBan && emp.phongBan.map((p: string, pIdx: number) => (
                                <span 
                                  key={pIdx} 
                                  className="px-2 py-0.5 rounded bg-[#00a2e8]/10 text-[#00a2e8] text-[10px] font-bold border border-[#00a2e8]/20"
                                >
                                  {p}
                                </span>
                              ))}
                              {(!emp.phongBan || emp.phongBan.length === 0) && (
                                <span className="text-[10px] text-slate-500 italic">Chưa xếp phòng</span>
                              )}
                            </div>
                          </td>

                          <td className="p-4">
                            <div className="text-slate-300 font-medium">{emp.soDienThoai && emp.soDienThoai !== 'Chưa cập nhật' ? emp.soDienThoai : 'N/A'}</div>
                            <div className="text-[10px] text-slate-500 mt-0.5">{emp.email && emp.email !== 'Chưa cập nhật' ? emp.email : 'N/A'}</div>
                          </td>

                          <td className="p-4 text-center">
                            <button
                              onClick={() => {
                                if (confirm(`Bạn có chắc chắn muốn xóa nhân sự "${emp.hoTen}" khỏi hệ thống không?`)) {
                                  setEmployees(employees.filter(e => e.id !== emp.id));
                                }
                              }}
                              className="p-1.5 hover:bg-red-500/10 text-slate-500 hover:text-red-400 rounded-lg transition cursor-pointer border-none bg-transparent"
                              title="Xóa nhân sự"
                            >
                              <X size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ) : activeEmployeeSubTab === 'departments-list' ? (
          /* Quản lý phòng ban */
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-7 bg-[#14151c] border border-[#21232d] rounded-2xl overflow-hidden shadow-xl">
                <div className="p-4 bg-[#181921] border-b border-[#21232d]">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Danh sách phòng ban hiện tại</h4>
                </div>

                <div className="divide-y divide-[#1e202b]">
                  {departments.map((dep) => (
                    <div key={dep} className="p-4 flex items-center justify-between hover:bg-[#181a24] transition text-xs">
                      <div className="flex items-center space-x-2">
                        <Layers size={14} className="text-[#00a2e8]" />
                        <span className="font-semibold text-slate-200">{dep}</span>
                      </div>
                      <button 
                        onClick={() => {
                          if (confirm(`Bạn có chắc chắn muốn xóa phòng ban "${dep}" không?`)) {
                            setDepartments(departments.filter(d => d !== dep));
                          }
                        }}
                        className="p-1.5 hover:bg-red-500/10 text-slate-500 hover:text-red-400 rounded-lg transition cursor-pointer border-none bg-transparent"
                        title="Xóa phòng ban"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ))}
                  {departments.length === 0 && (
                    <div className="p-8 text-center text-slate-500 text-xs">
                      Không có phòng ban nào. Hãy thêm mới ở bên phải.
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-5 bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-5 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                  <span>Phòng ban builder</span>
                </h4>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!newDepartmentInput.trim()) {
                      alert('Tên phòng ban không được để trống!');
                      return;
                    }
                    if (departments.some(d => d.toLowerCase() === newDepartmentInput.trim().toLowerCase())) {
                      alert('Phòng ban này đã tồn tại!');
                      return;
                    }
                    setDepartments([...departments, newDepartmentInput.trim()]);
                    setNewDepartmentInput('');
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Tên phòng ban</label>
                    <input 
                      type="text"
                      value={newDepartmentInput}
                      onChange={(e) => setNewDepartmentInput(e.target.value)}
                      placeholder="Nhập tên phòng ban mới..."
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all h-[42px]"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-2.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-xl text-xs font-bold transition shadow-lg shadow-[#00a2e8]/20 cursor-pointer flex items-center justify-center space-x-2 border-none"
                  >
                    <Plus size={14} />
                    <span>Tạo phòng ban</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          /* Form Thêm nhân viên */
          <div className="max-w-4xl mx-auto space-y-6 pb-16">
            <div className="bg-[#14151c] border border-[#21232d] p-4 rounded-xl shadow-md flex items-center space-x-3">
              <div className="p-2 bg-[#00a2e8]/10 rounded-lg text-[#00a2e8]">
                <Users size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-200">Khai báo thông tin thêm mới nhân sự</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">Nhập đầy đủ thông tin bắt buộc và tải lên tài liệu hình ảnh trực quan.</p>
              </div>
            </div>

            <form onSubmit={handleSaveEmployees} className="space-y-6">
              {newEmployees.map((emp, index) => (
                <div 
                  key={emp.id}
                  className="bg-[#14151c] border border-[#21232d] rounded-2xl p-6 relative shadow-lg"
                >
                  <div className="flex items-center justify-between pb-4 border-b border-[#21232d] mb-5">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-[#00a2e8]/20 text-[#00a2e8] flex items-center justify-center font-bold text-[10px]">
                        {index + 1}
                      </div>
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">Nhân viên thứ {index + 1}</span>
                    </div>

                    {newEmployees.length > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setNewEmployees(newEmployees.filter(e => e.id !== emp.id));
                        }}
                        className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 hover:bg-red-500/20 px-2 py-1 rounded-lg transition border-none"
                      >
                        <X size={12} />
                        <span>Xóa bớt</span>
                      </button>
                    )}
                  </div>

                  {/* CÁC TRƯỜNG BẮT BUỘC */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                    <div className="md:col-span-4 space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center font-semibold">
                        Họ tên <span className="text-red-500 ml-1 font-bold">*</span>
                      </label>
                      <input 
                        type="text"
                        required
                        value={emp.hoTen}
                        onChange={(e) => updateNewEmployee(index, 'hoTen', e.target.value)}
                        placeholder="Nhập họ và tên..."
                        className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all h-[40px] font-medium"
                      />
                    </div>

                    <div className="md:col-span-4 space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center font-semibold">
                        Mã giấy tờ <span className="text-red-500 ml-1 font-bold">*</span>
                      </label>
                      <input 
                        type="text"
                        required
                        value={emp.maGiayTo}
                        onChange={(e) => updateNewEmployee(index, 'maGiayTo', e.target.value)}
                        placeholder="Ví dụ: CCCD số..."
                        className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition-all h-[40px] font-medium"
                      />
                    </div>

                    <div className="md:col-span-4 space-y-1.5 text-left">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center font-semibold">
                        Phòng ban <span className="text-red-500 ml-1 font-bold">*</span>
                      </label>
                      <div className="bg-[#1c1d26] border border-[#2d2f3c] rounded-xl p-2 min-h-[40px] flex flex-wrap gap-1.5">
                        {departments.map(dep => {
                          const isSelected = emp.phongBan.includes(dep);
                          return (
                            <button
                              key={dep}
                              type="button"
                              onClick={() => {
                                const updatedPhongBan = isSelected
                                  ? emp.phongBan.filter(p => p !== dep)
                                  : [...emp.phongBan, dep];
                                updateNewEmployee(index, 'phongBan', updatedPhongBan);
                              }}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#00a2e8]/15 text-[#00a2e8] border-[#00a2e8]/50'
                                  : 'bg-[#14151c] text-slate-400 border-[#2d2f3c] hover:border-slate-500'
                              }`}
                            >
                              {dep}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#1e202b]">
                    <button
                      type="button"
                      onClick={() => {
                        updateNewEmployee(index, 'showOptional', !emp.showOptional);
                      }}
                      className="w-full py-2 px-4 bg-[#1c1d26] hover:bg-[#252632] border border-[#2d2f3c] rounded-xl text-slate-400 hover:text-slate-200 transition-all text-xs font-semibold flex items-center justify-between cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                        {emp.showOptional ? 'Ẩn thông tin không bắt buộc' : 'Hiện thêm thông tin không bắt buộc (Ngày sinh, Liên hệ, Tài liệu ảnh, ...)'}
                      </span>
                      <ChevronDown size={14} className={`transform transition-transform duration-200 ${emp.showOptional ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {emp.showOptional && (
                    <div className="mt-5 space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Loại giấy tờ</label>
                          <select
                            value={emp.loaiGiayTo}
                            onChange={(e) => updateNewEmployee(index, 'loaiGiayTo', e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px] cursor-pointer"
                          >
                            <option value="CCCD">Căn cước công dân (CCCD)</option>
                            <option value="Hộ chiếu">Hộ chiếu</option>
                            <option value="Thẻ thành viên">Thẻ thành viên</option>
                            <option value="Giấy phép lái xe">Giấy phép lái xe</option>
                          </select>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Ngày sinh</label>
                          <input 
                            type="date"
                            value={emp.ngaySinh}
                            onChange={(e) => updateNewEmployee(index, 'ngaySinh', e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider block">Giới tính</label>
                          <div className="grid grid-cols-3 gap-2">
                            {['Nam', 'Nữ', 'Khác'].map(gender => (
                              <button
                                key={gender}
                                type="button"
                                onClick={() => updateNewEmployee(index, 'gioiTinh', gender)}
                                className={`py-1.5 border rounded-xl text-xs font-semibold transition cursor-pointer ${
                                  emp.gioiTinh === gender
                                    ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-[#00a2e8]'
                                    : 'bg-[#1c1d26] text-slate-400 border-[#2d2f3c] hover:border-slate-500'
                                }`}
                              >
                                {gender}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Số điện thoại</label>
                          <input 
                            type="tel"
                            value={emp.soDienThoai}
                            onChange={(e) => updateNewEmployee(index, 'soDienThoai', e.target.value)}
                            placeholder="Ví dụ: 0912..."
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        <div className="md:col-span-3 space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Ngày cấp</label>
                          <input 
                            type="date"
                            value={emp.ngayCap}
                            onChange={(e) => updateNewEmployee(index, 'ngayCap', e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>

                        <div className="md:col-span-3 space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Nơi cấp</label>
                          <input 
                            type="text"
                            value={emp.noiCap}
                            onChange={(e) => updateNewEmployee(index, 'noiCap', e.target.value)}
                            placeholder="Cục Cảnh Sát QLHC..."
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>

                        <div className="md:col-span-3 space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Email</label>
                          <input 
                            type="email"
                            value={emp.email}
                            onChange={(e) => updateNewEmployee(index, 'email', e.target.value)}
                            placeholder="example@company.com"
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>

                        <div className="md:col-span-3 space-y-1.5 text-left">
                          <label className="text-[10px] font-bold text-slate-400 tracking-wider">Địa chỉ</label>
                          <input 
                            type="text"
                            value={emp.diaChi}
                            onChange={(e) => updateNewEmployee(index, 'diaChi', e.target.value)}
                            placeholder="Thành phố, Quận..."
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                          />
                        </div>
                      </div>

                      {/* HÀNH ẢNH TÀI LIỆU */}
                      <div className="pt-3 border-t border-[#1e202b] grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-1.5 text-left font-medium">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ảnh Đại Diện</label>
                          <div className="bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl p-3 flex items-center justify-between transition-all">
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <input 
                                type="file" 
                                accept="image/*"
                                id={`upload-avatar-${emp.id}`}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const url = URL.createObjectURL(file);
                                    updateNewEmployee(index, 'anhDaiDien', { name: file.name, url });
                                  }
                                }}
                              />
                              <label 
                                htmlFor={`upload-avatar-${emp.id}`}
                                className="px-2.5 py-1.5 bg-[#0d0e12] border border-[#2d2f3c] hover:border-slate-500 rounded-lg text-[10px] font-bold text-slate-300 cursor-pointer flex items-center gap-1 select-none shrink-0"
                              >
                                <FolderOpen size={11} />
                                <span>Chọn file</span>
                              </label>
                              
                              {emp.anhDaiDien ? (
                                <div className="relative group/tooltip overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span className="text-[11px] text-[#00a2e8] hover:underline cursor-pointer font-medium">
                                    {emp.anhDaiDien.name}
                                  </span>
                                  <div className="fixed md:absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block z-50 bg-[#16171d] border border-[#2d2f3c] p-1.5 rounded-xl shadow-2xl w-28 h-28">
                                    <img 
                                      src={emp.anhDaiDien.url} 
                                      alt="Ảnh đại diện" 
                                      className="w-full h-full object-cover rounded-lg"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <span className="text-[10px] text-slate-500 italic">Chưa chọn ảnh</span>
                              )}
                            </div>
                            {emp.anhDaiDien && (
                              <button 
                                type="button"
                                onClick={() => updateNewEmployee(index, 'anhDaiDien', undefined)}
                                className="text-red-400 hover:text-red-300 shrink-0 border-none bg-transparent cursor-pointer"
                              >
                                <X size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left font-medium">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ảnh Thẻ</label>
                          <div className="bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl p-3 flex items-center justify-between transition-all">
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <input 
                                type="file" 
                                accept="image/*"
                                id={`upload-card-${emp.id}`}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const url = URL.createObjectURL(file);
                                    updateNewEmployee(index, 'anhThe', { name: file.name, url });
                                  }
                                }}
                              />
                              <label 
                                htmlFor={`upload-card-${emp.id}`}
                                className="px-2.5 py-1.5 bg-[#0d0e12] border border-[#2d2f3c] hover:border-slate-500 rounded-lg text-[10px] font-bold text-slate-300 cursor-pointer flex items-center gap-1 select-none shrink-0"
                              >
                                <FolderOpen size={11} />
                                <span>Chọn file</span>
                              </label>
                              
                              {emp.anhThe ? (
                                <div className="relative group/tooltip overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span className="text-[11px] text-[#00a2e8] hover:underline cursor-pointer font-medium">
                                    {emp.anhThe.name}
                                  </span>
                                  <div className="fixed md:absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block z-50 bg-[#16171d] border border-[#2d2f3c] p-1.5 rounded-xl shadow-2xl w-28 h-28">
                                    <img 
                                      src={emp.anhThe.url} 
                                      alt="Ảnh thẻ" 
                                      className="w-full h-full object-cover rounded-lg"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <span className="text-[10px] text-slate-500 italic">Chưa chọn ảnh</span>
                              )}
                            </div>
                            {emp.anhThe && (
                              <button 
                                type="button"
                                onClick={() => updateNewEmployee(index, 'anhThe', undefined)}
                                className="text-red-400 hover:text-red-300 shrink-0 border-none bg-transparent cursor-pointer"
                              >
                                <X size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1.5 text-left font-medium">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ảnh Khuôn Mặt (Nhận Diện)</label>
                          <div className="bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl p-3 flex items-center justify-between transition-all">
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                              <input 
                                type="file" 
                                accept="image/*"
                                id={`upload-face-${emp.id}`}
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) {
                                    const url = URL.createObjectURL(file);
                                    updateNewEmployee(index, 'anhKhuonMat', { name: file.name, url });
                                  }
                                }}
                              />
                              <label 
                                htmlFor={`upload-face-${emp.id}`}
                                className="px-2.5 py-1.5 bg-[#0d0e12] border border-[#2d2f3c] hover:border-slate-500 rounded-lg text-[10px] font-bold text-slate-300 cursor-pointer flex items-center gap-1 select-none shrink-0"
                              >
                                <FolderOpen size={11} />
                                <span>Chọn file</span>
                              </label>
                              
                              {emp.anhKhuonMat ? (
                                <div className="relative group/tooltip overflow-hidden text-ellipsis whitespace-nowrap">
                                  <span className="text-[11px] text-[#00a2e8] hover:underline cursor-pointer font-medium">
                                    {emp.anhKhuonMat.name}
                                  </span>
                                  <div className="fixed md:absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block z-50 bg-[#16171d] border border-[#2d2f3c] p-1.5 rounded-xl shadow-2xl w-28 h-28">
                                    <img 
                                      src={emp.anhKhuonMat.url} 
                                      alt="Ảnh khuôn mặt" 
                                      className="w-full h-full object-cover rounded-lg"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <span className="text-[10px] text-slate-500 italic">Chưa chọn ảnh</span>
                              )}
                            </div>
                            {emp.anhKhuonMat && (
                              <button 
                                type="button"
                                onClick={() => updateNewEmployee(index, 'anhKhuonMat', undefined)}
                                className="text-red-400 hover:text-red-300 shrink-0 border-none bg-transparent cursor-pointer"
                              >
                                <X size={12} />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center space-x-3 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setNewEmployees([...newEmployees, createEmptyNewEmployee()]);
                  }}
                  className="py-2.5 px-6 border border-[#2d2f3c] hover:border-slate-400 text-slate-300 hover:text-white font-bold rounded-xl text-xs transition cursor-pointer bg-[#1c1d26]"
                >
                  Thêm nhân viên khai báo
                </button>
                
                <button
                  type="submit"
                  className="py-2.5 px-8 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded-xl text-xs transition shadow-lg shadow-[#00a2e8]/20 cursor-pointer border-none"
                >
                  Lưu Nhân Viên
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Floating Save Toast Notification */}
      <AnimatePresence>
        {showEmployeeSaveToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-6 right-6 z-50 bg-[#1c1d27] border border-[#2d2f3d] p-4 rounded-xl shadow-2xl w-80 text-left flex items-start space-x-3 text-xs"
          >
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Check size={14} className="font-bold" />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-white leading-none font-sans">Lưu thành công!</div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Đã thêm thành công <span className="font-bold text-[#00a2e8] font-mono">{savedCount}</span> nhân sự mới vào hệ thống.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
