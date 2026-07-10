"use client";

import { 
  Monitor, 
  FileText, 
  Layers, 
  Users, 
  CalendarClock 
} from 'lucide-react';

interface SidebarProps {
  activeSidebar: 'reports' | 'areas' | 'devices' | 'employees' | 'access-schedule';
  setActiveSidebar: (val: 'reports' | 'areas' | 'devices' | 'employees' | 'access-schedule') => void;
}

export default function Sidebar({ activeSidebar, setActiveSidebar }: SidebarProps) {
  return (
    <div id="sidebar" className="w-64 bg-[#14151b] border-r border-[#21232d] flex flex-col shrink-0">
      {/* Sidebar Logo / Branding */}
      <div className="p-5 border-b border-[#21232d] flex items-center space-x-3 bg-[#111216]">
        <div className="p-2 rounded-lg bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20">
          <Monitor size={18} className="animate-pulse" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-slate-100 tracking-tight">Hệ Thống DVMS</h2>
          <p className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
            Máy chủ trực tuyến
          </p>
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="p-3 flex-1 space-y-1.5">
        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest px-3 mb-2">Chức năng</p>
        
        {/* Sidebar Item 1: Báo cáo */}
        <button 
          id="sidebar-item-reports"
          onClick={() => setActiveSidebar('reports')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group cursor-pointer ${
            activeSidebar === 'reports' 
              ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
              : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
          }`}
        >
          <FileText size={16} className={activeSidebar === 'reports' ? 'text-[#00a2e8]' : 'text-slate-400 group-hover:text-slate-200'} />
          <span>Báo cáo</span>
          {activeSidebar === 'reports' && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
          )}
        </button>

        {/* Sidebar Item 2: Quản lý khu vực */}
        <button 
          id="sidebar-item-areas"
          onClick={() => setActiveSidebar('areas')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group cursor-pointer ${
            activeSidebar === 'areas' 
              ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
              : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
          }`}
        >
          <Layers size={16} className={activeSidebar === 'areas' ? 'text-[#00a2e8]' : 'text-slate-400 group-hover:text-slate-200'} />
          <span>Quản lý khu vực</span>
          {activeSidebar === 'areas' && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
          )}
        </button>

        {/* Sidebar Item 3: Quản lý thiết bị */}
        <button 
          id="sidebar-item-devices"
          onClick={() => setActiveSidebar('devices')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group cursor-pointer ${
            activeSidebar === 'devices' 
              ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
              : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
          }`}
        >
          <Monitor size={16} className={activeSidebar === 'devices' ? 'text-[#00a2e8]' : 'text-slate-400 group-hover:text-slate-200'} />
          <span>Quản lý thiết bị</span>
          {activeSidebar === 'devices' && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
          )}
        </button>

        {/* Sidebar Item 4: Quản lý nhân viên */}
        <button 
          id="sidebar-item-employees"
          onClick={() => setActiveSidebar('employees')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group cursor-pointer ${
            activeSidebar === 'employees' 
              ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
              : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
          }`}
        >
          <Users size={16} className={activeSidebar === 'employees' ? 'text-[#00a2e8]' : 'text-slate-400 group-hover:text-slate-200'} />
          <span>Quản lý nhân viên</span>
          {activeSidebar === 'employees' && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
          )}
        </button>

        {/* Sidebar Item 5: Quản lý lịch ra vào */}
        <button 
          id="sidebar-item-access-schedule"
          onClick={() => setActiveSidebar('access-schedule')}
          className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group cursor-pointer ${
            activeSidebar === 'access-schedule' 
              ? 'bg-[#00a2e8]/10 text-[#00a2e8] border-l-4 border-[#00a2e8]' 
              : 'text-slate-400 hover:bg-[#1a1c24] hover:text-slate-200'
          }`}
        >
          <CalendarClock size={16} className={activeSidebar === 'access-schedule' ? 'text-[#00a2e8]' : 'text-slate-400 group-hover:text-slate-200'} />
          <span>Quản lý lịch ra vào</span>
          {activeSidebar === 'access-schedule' && (
            <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
          )}
        </button>
      </div>

      {/* Sidebar Bottom Metadata Footer */}
      <div className="p-4 border-t border-[#21232d] bg-[#111216]">
        <div className="opacity-0 select-none pointer-events-none h-6">Spacer</div>
      </div>
    </div>
  );
}
