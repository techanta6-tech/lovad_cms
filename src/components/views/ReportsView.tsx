"use client";

import { useState, useEffect, FormEvent } from 'react';
import { 
  List, 
  RotateCw, 
  Filter, 
  Camera, 
  Settings, 
  Star, 
  FileText, 
  Layers, 
  Search, 
  X, 
  Minus, 
  Square, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  Check,
  Plus,
  Play,
  Monitor,
  AlertTriangle,
  Download,
  ChevronDown,
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  Users,
  CalendarClock,
  Save,
  Info,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mockEventLogs } from '@/lib/data';
import { EventLog, Area } from '@/lib/types';

interface ReportsViewProps {
  schMeetingSavedData: any[];
  areasData: Area[];
}

export default function ReportsView({ schMeetingSavedData, areasData }: ReportsViewProps) {
  const [activeTab, setActiveTab] = useState<'list' | 'attendance' | 'meeting' | 'chart'>('list');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  // Data list and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterZone, setFilterZone] = useState('All');
  const [filterList, setFilterList] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [searchType, setSearchType] = useState<'text' | 'image'>('text');
  const [searchImage, setSearchImage] = useState<string | null>(null);
  const [threshold, setThreshold] = useState<number>(0.8);
  const [isOpenSearchTypeDropdown, setIsOpenSearchTypeDropdown] = useState(false);
  const [isOpenZoneDropdown, setIsOpenZoneDropdown] = useState(false);
  const [isOpenListDropdown, setIsOpenListDropdown] = useState(false);
  const [zoneSearch, setZoneSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  // Selected event (default: STT 22)
  const [selectedEventId, setSelectedEventId] = useState<number>(22);
  
  // Toast / Export status simulation
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showExportToast, setShowExportToast] = useState(false);
  const [exportedFileName, setExportedFileName] = useState<string>('ThongKeSuKien_DVMS.xlsx');

  // Selected avatar view in the thumbnails panel
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);

  // Meeting report states
  const [meetingDate, setMeetingDate] = useState('2026-07-09');
  const [meetingStartTime, setMeetingStartTime] = useState('16:00');
  const [meetingEndTime, setMeetingEndTime] = useState('17:00');
  const [meetingGroups, setMeetingGroups] = useState<string[]>(['Phòng ban A', 'Phòng ban B', 'Phòng ban C', 'Phòng ban D', 'Khách hàng / Khác']);
  const [isMeetingSearched, setIsMeetingSearched] = useState(false);
  const [meetingCurrentPage, setMeetingCurrentPage] = useState(1);
  const [meetingItemsPerPage, setMeetingItemsPerPage] = useState(20);
  const [selectedMeetingEmpCode, setSelectedMeetingEmpCode] = useState<string | null>(null);

  // New Meeting Report custom search & selection states
  const [meetingStartDate, setMeetingStartDate] = useState('2026-07-09');
  const [meetingEndDate, setMeetingEndDate] = useState('2026-07-11');
  const [selectedMeetingAreas, setSelectedMeetingAreas] = useState<string[]>([
    'Phòng họp A',
    'Phòng họp B',
    'Phòng họp Hội nghị',
    'Lobby Area',
    'Server Room'
  ]);
  const [isMeetingAreaDropdownOpen, setIsMeetingAreaDropdownOpen] = useState(false);
  const [selectedMeetingReport, setSelectedMeetingReport] = useState<any | null>(null);

  // Attendance Report states
  const [attendanceType, setAttendanceType] = useState<string>('Overtime Hours');
  const [attendanceStartDate, setAttendanceStartDate] = useState<string>('2026-07-01');
  const [attendanceEndDate, setAttendanceEndDate] = useState<string>('2026-07-09');
  const [attendanceGroup, setAttendanceGroup] = useState<string>('All');
  const [isAttTypeOpen, setIsAttTypeOpen] = useState<boolean>(false);
  const [isAttGroupOpen, setIsAttGroupOpen] = useState<boolean>(false);
  const [isAttExportOpen, setIsAttExportOpen] = useState<boolean>(false);
  const [attendanceExportFormat, setAttendanceExportFormat] = useState<'CSV' | 'XLSX'>('CSV');

  // Trigger Excel export simulation
  const handleExportExcel = () => {
    setExporting(true);
    setExportProgress(0);
    setExportedFileName('ThongKeSuKien_DVMS.xlsx');
    const interval = setInterval(() => {
      setExportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setExporting(false);
          setShowExportToast(true);
          setTimeout(() => setShowExportToast(false), 4000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Trigger Attendance export simulation
  const handleExportAttendance = (format: 'CSV' | 'XLSX') => {
    let typeSlug = 'BaoCao';
    switch (attendanceType) {
      case 'Daily Summary':
        typeSlug = 'BaoCao_TongHopHangNgay';
        break;
      case 'Monthly Summary':
        typeSlug = 'BaoCao_TongHopHangThang';
        break;
      case 'Late Arrivals & Early Leves':
        typeSlug = 'BaoCao_DiMuonVeSom';
        break;
      case 'Absence & Leave Summary':
        typeSlug = 'BaoCao_VangMatNghiPhep';
        break;
      case 'Overtime Hours':
        typeSlug = 'BaoCao_TangCa';
        break;
    }
    const ext = format.toLowerCase();
    const fileName = `${typeSlug}_${attendanceGroup.replace(/[^a-zA-Z0-9]/g, '')}_${attendanceStartDate.replace(/-/g, '')}_${attendanceEndDate.replace(/-/g, '')}.${ext}`;
    
    setExportedFileName(fileName);
    setExporting(true);
    setExportProgress(0);
    
    const interval = setInterval(() => {
      setExportProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setExporting(false);
          setShowExportToast(true);
          setTimeout(() => setShowExportToast(false), 4000);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Trigger refresh simulation
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const getAvatarUrl = (seed: string, isLoi: boolean) => {
    if (isLoi) {
      return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150";
    }
    const index = parseInt(seed.replace(/^\D+/g, '')) || 1;
    const portraits = [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150&h=150",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150&h=150"
    ];
    return portraits[index % portraits.length];
  };

  // Filter logs based on search and drop-downs
  const filteredLogs = mockEventLogs.filter(log => {
    const matchesSearch = log.ten.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.ma.includes(searchQuery) ||
                          log.vung.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = filterZone === 'All' || log.vung === filterZone;
    const matchesList = filterList === 'All' || log.danhSach === filterList;

    // Filter by dates and time
    let matchesStartDate = true;
    let matchesEndDate = true;

    if (log.thoiGian) {
      const [datePart, timePart] = log.thoiGian.split('-');
      if (datePart) {
        const [day, month, year] = datePart.split('/');
        const logDateStr = `${year}-${month}-${day}`;
        const logDateTimeStr = timePart ? `${logDateStr}T${timePart}` : `${logDateStr}T00:00:00`;

        if (startDate) {
          const startCompare = startTime ? `${startDate}T${startTime}:00` : `${startDate}T00:00:00`;
          matchesStartDate = logDateTimeStr >= startCompare;
        }
        if (endDate) {
          const endCompare = endTime ? `${endDate}T${endTime}:59` : `${endDate}T23:59:59`;
          matchesEndDate = logDateTimeStr <= endCompare;
        }
      }
    }

    return matchesSearch && matchesZone && matchesList && matchesStartDate && matchesEndDate;
  });

  const totalItems = filteredLogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);

  const currentSelectedEvent = mockEventLogs.find(e => e.stt === selectedEventId) || mockEventLogs[21];

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      
      {/* Header Tab Navigator */}
      <div id="tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center space-x-4 text-left">
          <div className="text-xs text-slate-400 font-semibold tracking-wider">Thống Kê Sự Kiện</div>
          
          {/* Sliding Big Pill Segmented Control Container */}
          <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
            {/* Tab 1: Danh sách sự kiện */}
            <button 
              id="tab-btn-list"
              onClick={() => {
                setActiveTab('list');
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeTab === 'list' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <List size={14} />
              <span>Danh sách sự kiện</span>
            </button>

            {/* Tab 2: Báo cáo chấm công */}
            <button 
              id="tab-btn-attendance"
              onClick={() => setActiveTab('attendance')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeTab === 'attendance' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Calendar size={14} />
              <span>Báo cáo chấm công</span>
            </button>

            {/* Tab 3: Báo cáo cuộc họp */}
            <button 
              id="tab-btn-meeting"
              onClick={() => setActiveTab('meeting')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                activeTab === 'meeting' 
                  ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock size={14} />
              <span>Báo cáo cuộc họp</span>
            </button>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2">
          <button 
            id="btn-refresh"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={`p-2 bg-[#20212b] border border-[#2d2f3c] rounded hover:bg-[#2c2d3c] text-slate-300 transition shrink-0 cursor-pointer ${isRefreshing ? 'opacity-50' : ''}`}
            title="Refresh data"
          >
            <RotateCw size={13} className={isRefreshing ? 'animate-spin' : ''} />
          </button>
          
          <button 
            id="btn-filter"
            onClick={() => setShowFilterModal(true)}
            className={`px-3 py-1.5 bg-[#20212b] border cursor-pointer ${showFilterModal ? 'border-[#00a2e8] text-[#00a2e8]' : 'border-[#2d2f3c] text-slate-300'} rounded hover:bg-[#2c2d3c] text-xs font-medium flex items-center space-x-1 transition`}
          >
            <Filter size={13} />
            <span>Lọc</span>
          </button>
        </div>
      </div>

      {/* Tab 1 Content: List and Camera split */}
      {activeTab === 'list' ? (
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT-MIDDLE PANEL: The compressed Event Table list */}
          <div id="table-panel" className="flex-1 flex flex-col border-r border-[#21232d] overflow-hidden bg-[#0d0e12]">
            
            {/* Rapid Search Header inside table pane */}
            <div className="p-3 bg-[#111218] border-b border-[#21232d] flex items-center justify-between shrink-0">
              <div className="relative w-72">
                <input 
                  type="text"
                  placeholder="Lọc nhanh tên/mã số đối tượng..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full bg-[#181921] border border-[#2a2c3a] rounded-lg pl-8 pr-3 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00a2e8]"
                />
                <Search className="absolute left-2.5 top-2 text-slate-500" size={13} />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-2.5 top-1.5 text-slate-400 hover:text-slate-200">
                    <X size={14} />
                  </button>
                )}
              </div>
              
              {/* Active Filter Pill display */}
              <div className="flex items-center space-x-2 text-[10px]">
                {(filterZone !== 'All' || filterList !== 'All' || searchQuery) && (
                  <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full font-medium">
                    Đang lọc kết quả
                  </span>
                )}
              </div>
            </div>

            {/* Table Viewport */}
            <div className="flex-1 overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#15161f] border-b border-[#21232d] text-[11px] font-bold text-slate-400 tracking-wider sticky top-0 z-10">
                    <th className="py-2.5 px-3 border-r border-[#21232d] text-center w-12">STT</th>
                    <th className="py-2.5 px-3 border-r border-[#21232d]">Vùng / Kịch Bản</th>
                    <th className="py-2.5 px-3 border-r border-[#21232d]">Tên Đối Tượng</th>
                    <th className="py-2.5 px-3 border-r border-[#21232d]">Mã Đối Tượng</th>
                    <th className="py-2.5 px-3 border-r border-[#21232d]">Nhóm</th>
                    <th className="py-2.5 px-3">Thời Gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                  {currentLogs.map((log) => {
                    const isSelected = selectedEventId === log.stt;
                    const isTranPhuocLoi = log.ma === "010203045567";
                    return (
                      <tr 
                        id={`event-row-${log.stt}`}
                        key={log.stt}
                        onClick={() => {
                          setSelectedEventId(log.stt);
                          setSelectedThumbIndex(0);
                        }}
                        className={`cursor-pointer transition duration-150 ${
                          isSelected 
                            ? 'bg-[#005a9e] text-white hover:bg-[#0062ac]' 
                            : isTranPhuocLoi 
                              ? 'bg-amber-950/10 text-amber-200 hover:bg-[#1f202b]' 
                              : 'hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300'
                        }`}
                      >
                        <td className="py-2 px-3 border-r border-[#21232d] text-center font-semibold text-slate-400">
                          {log.stt}
                        </td>
                        <td className={`py-2 px-3 border-r border-[#21232d] ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {log.vung}
                        </td>
                        <td className={`py-2 px-3 border-r border-[#21232d] font-sans font-medium ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                          {log.ten}
                        </td>
                        <td className="py-2 px-3 border-r border-[#21232d] text-slate-400">
                          {log.ma}
                        </td>
                        <td className={`py-2 px-3 border-r border-[#21232d] font-sans ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {log.danhSach}
                        </td>
                        <td className="py-2 px-3 text-slate-400">
                          {log.thoiGian}
                        </td>
                      </tr>
                    );
                  })}

                  {currentLogs.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-500 font-sans">
                        <AlertTriangle size={24} className="mx-auto mb-2 text-slate-600" />
                        Không tìm thấy dữ liệu sự kiện trùng khớp.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Status Bar & Excel Export bottom drawer */}
            <div className="h-14 bg-[#14151c] border-t border-[#21232d] px-4 flex items-center justify-between shrink-0">
              
              {/* Left helper actions */}
              <div className="flex items-center space-x-2">
                <button className="p-1.5 bg-[#1f202b] rounded hover:bg-[#2c2d3c] text-slate-400 hover:text-white transition cursor-pointer" title="Cấu hình hệ thống">
                  <Settings size={14} />
                </button>
              </div>

              {/* Pagination: << < Page 1/3 > >> */}
              <div className="flex items-center space-x-1.5 font-mono text-xs">
                <button 
                  onClick={() => setCurrentPage(1)} 
                  disabled={currentPage === 1}
                  className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                >
                  <ChevronsLeft size={16} />
                </button>
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                  disabled={currentPage === 1}
                  className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center cursor-pointer"
                >
                  <ChevronLeft size={16} className="mr-0.5" />
                  <span>Trang</span>
                </button>

                <div className="bg-[#1b1c25] border border-[#2e303f] px-3 py-1 rounded text-white flex items-center space-x-1 font-semibold font-sans">
                  <input 
                    type="text" 
                    value={currentPage} 
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (val > 0 && val <= totalPages) setCurrentPage(val);
                    }}
                    className="w-4 bg-transparent text-center font-mono focus:outline-none text-[#00a2e8]"
                  />
                  <span className="text-slate-500">/</span>
                  <span>{totalPages}</span>
                </div>

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                  disabled={currentPage === totalPages}
                  className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center cursor-pointer"
                >
                  <span>Trang</span>
                  <ChevronRight size={16} className="ml-0.5" />
                </button>
                <button 
                  onClick={() => setCurrentPage(totalPages)} 
                  disabled={currentPage === totalPages}
                  className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                >
                  <ChevronsRight size={16} />
                </button>
              </div>

              {/* Total and Export Button */}
              <div className="flex items-center space-x-4">
                <div className="text-xs text-slate-400 font-sans">
                  Tổng Số Lượng: <span className="font-bold text-slate-100 font-mono">216</span>
                </div>
                
                <button 
                  id="btn-export-excel"
                  onClick={handleExportExcel}
                  disabled={exporting}
                  className={`px-4 py-1.5 bg-[#0078d7] hover:bg-[#0069be] text-white font-medium rounded text-xs transition shadow flex items-center space-x-1.5 cursor-pointer ${exporting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  <Download size={13} />
                  <span>{exporting ? 'Đang xuất...' : 'Xuất Excel'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: CAMERA MONITOR */}
          <div id="camera-panel" className="w-[450px] bg-[#111218] flex flex-col shrink-0 overflow-y-auto">
            <div className="p-4 space-y-4">
              
              {/* Simulated Camera Window */}
              <div className="relative aspect-[4/3] bg-black rounded-lg border border-[#2d2f3e] overflow-hidden group shadow-lg">
                <img 
                  src={getAvatarUrl(currentSelectedEvent.avatarSeed, currentSelectedEvent.ma === "010203045567")} 
                  alt="Face checkin capture"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition duration-300"
                />

                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-slate-700/40 px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 font-bold z-20">
                  CHẤT LƯỢNG: <span className="text-white">1080P</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 z-20 border border-slate-700/40">
                  {currentSelectedEvent.thoiGian}
                </div>
              </div>

              {/* Thumbnails Strip Below Camera View */}
              <div className="grid grid-cols-4 gap-2">
                <button 
                  onClick={() => setSelectedThumbIndex(0)}
                  className={`relative aspect-square rounded border overflow-hidden transition cursor-pointer ${
                    selectedThumbIndex === 0 ? 'border-[#00a2e8] ring-1 ring-[#00a2e8]' : 'border-[#2d2f3e] hover:border-slate-500'
                  }`}
                >
                  {currentSelectedEvent.avatarSeed ? (
                    <img 
                      src={getAvatarUrl(currentSelectedEvent.avatarSeed, currentSelectedEvent.ma === "010203045567")} 
                      alt="Crop face close-up"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1c1d24]" />
                  )}
                </button>

                <button 
                  onClick={() => setSelectedThumbIndex(1)}
                  className={`relative aspect-square rounded border overflow-hidden transition cursor-pointer ${
                    selectedThumbIndex === 1 ? 'border-[#00a2e8] ring-1 ring-[#00a2e8]' : 'border-[#2d2f3e] hover:border-slate-500'
                  }`}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=150&h=150" 
                    alt="Wide background snapshot"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>

                <button 
                  onClick={() => setSelectedThumbIndex(2)}
                  className={`relative aspect-square rounded border overflow-hidden transition cursor-pointer ${
                    selectedThumbIndex === 2 ? 'border-[#00a2e8] ring-1 ring-[#00a2e8]' : 'border-[#2d2f3e] hover:border-slate-500'
                  }`}
                >
                  {currentSelectedEvent.avatarSeed ? (
                    <img 
                      src={getAvatarUrl(currentSelectedEvent.avatarSeed, currentSelectedEvent.ma === "010203045567")} 
                      alt="Cropped profile view"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover scale-150 origin-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#1c1d24]" />
                  )}
                </button>

                <div className="aspect-square rounded border border-[#2d2f3e] bg-[#1c1d24]" />
              </div>

              <div className="space-y-1.5 border-t border-[#21232d] pt-4">
                <button 
                  onClick={() => {
                    alert("Đang chuẩn bị tải xuống toàn bộ tập tin hình ảnh và video đính kèm chất lượng cao...");
                  }}
                  className="w-full bg-[#0078d7] hover:bg-[#0062ac] text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md text-xs cursor-pointer"
                >
                  <Download size={14} />
                  <span>Tải các ảnh & video đính kèm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : activeTab === 'attendance' ? (
        /* Tab 2 Content: Báo cáo chấm công */
        <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-6 text-left">
          
          <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-5 border-b border-[#21232d] pb-4">
              <h3 className="text-base font-bold text-slate-100 tracking-tight">Report Builder</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
              <div className="md:col-span-3 space-y-2 relative">
                <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Type</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAttTypeOpen(!isAttTypeOpen);
                      setIsAttGroupOpen(false);
                      setIsAttExportOpen(false);
                    }}
                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px] cursor-pointer"
                  >
                    <span className="font-medium text-slate-200">{attendanceType}</span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  {isAttTypeOpen && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setIsAttTypeOpen(false)} />
                      <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                        {[
                          'Daily Summary',
                          'Monthly Summary',
                          'Late Arrivals & Early Leves',
                          'Absence & Leave Summary',
                          'Overtime Hours'
                        ].map((typeOption) => (
                          <button
                            key={typeOption}
                            type="button"
                            onClick={() => {
                              setAttendanceType(typeOption);
                              setIsAttTypeOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between cursor-pointer ${
                              attendanceType === typeOption ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                            }`}
                          >
                            <span>{typeOption}</span>
                            {attendanceType === typeOption && <Check size={14} className="text-[#00a2e8]" />}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="md:col-span-3 space-y-2 relative">
                <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Chọn nhóm</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAttGroupOpen(!isAttGroupOpen);
                      setIsAttTypeOpen(false);
                      setIsAttExportOpen(false);
                    }}
                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px] cursor-pointer"
                  >
                    <span className="font-medium text-slate-200">
                      {attendanceGroup === 'All' ? 'Tất cả (All)' : attendanceGroup}
                    </span>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>
                  {isAttGroupOpen && (
                    <>
                      <div className="fixed inset-0 z-30" onClick={() => setIsAttGroupOpen(false)} />
                      <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                        {[
                          { id: 'All', name: 'Tất cả (All)' },
                          { id: 'Phòng ban A', name: 'Phòng ban A' },
                          { id: 'Phòng ban B', name: 'Phòng ban B' },
                          { id: 'Phòng ban C', name: 'Phòng ban C' },
                          { id: 'Phòng ban D', name: 'Phòng ban D' },
                          { id: 'Khách hàng / Khác', name: 'Khách hàng / Khác' }
                        ].map((grpOption) => (
                          <button
                            key={grpOption.id}
                            type="button"
                            onClick={() => {
                              setAttendanceGroup(grpOption.id);
                              setIsAttGroupOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between cursor-pointer ${
                              attendanceGroup === grpOption.id ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                            }`}
                          >
                            <span>{grpOption.name}</span>
                            {attendanceGroup === grpOption.id && <Check size={14} className="text-[#00a2e8]" />}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Start Date</label>
                <input
                  type="date"
                  value={attendanceStartDate}
                  onChange={(e) => setAttendanceStartDate(e.target.value)}
                  className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] focus:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white focus:outline-none transition-all h-[42px] [color-scheme:dark]"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">End Date</label>
                <input
                  type="date"
                  value={attendanceEndDate}
                  onChange={(e) => setAttendanceEndDate(e.target.value)}
                  className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] focus:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white focus:outline-none transition-all h-[42px] [color-scheme:dark]"
                />
              </div>

              {/* Combined Export Split Button */}
              <div className="md:col-span-2 flex items-center justify-end relative h-[42px]">
                <div className="flex h-full w-full rounded-xl overflow-hidden shadow-lg border border-[#2d2f3c] bg-[#1c1d26]">
                  <button
                    type="button"
                    onClick={() => {
                      handleExportAttendance(attendanceExportFormat);
                    }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer h-full border-none"
                  >
                    <Download size={14} />
                    <span>{attendanceExportFormat}</span>
                  </button>

                  <div className="w-[1px] bg-[#008cc9] h-full" />

                  <button
                    type="button"
                    onClick={() => {
                      setIsAttExportOpen(!isAttExportOpen);
                      setIsAttTypeOpen(false);
                      setIsAttGroupOpen(false);
                    }}
                    className="px-3 bg-[#00a2e8] hover:bg-[#008cc9] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer h-full border-none"
                  >
                    <ChevronDown size={13} className={`transition-transform duration-200 ${isAttExportOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {isAttExportOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setIsAttExportOpen(false)} />
                    <div className="absolute right-0 top-12 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 w-48 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {
                          setAttendanceExportFormat('CSV');
                          setIsAttExportOpen(false);
                          handleExportAttendance('CSV');
                        }}
                        className="w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between text-slate-300 hover:text-white cursor-pointer"
                      >
                        <span>Xuất tệp CSV (.csv)</span>
                        {attendanceExportFormat === 'CSV' && <Check size={14} className="text-[#00a2e8]" />}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAttendanceExportFormat('XLSX');
                          setIsAttExportOpen(false);
                          handleExportAttendance('XLSX');
                        }}
                        className="w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between text-slate-300 hover:text-white cursor-pointer"
                      >
                        <span>Xuất tệp Excel (.xlsx)</span>
                        {attendanceExportFormat === 'XLSX' && <Check size={14} className="text-[#00a2e8]" />}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* HIGH FIDELITY REPORT TABLE */}
          <div className="bg-[#14151b] border border-[#21232d] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-4 bg-[#181921] border-b border-[#21232d] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <span className="p-1.5 rounded-lg bg-[#00a2e8]/10 border border-[#00a2e8]/20 text-[#00a2e8]">
                  <FileText size={15} />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-200">Dữ liệu Báo cáo: {attendanceType}</h4>
                  <p className="text-[10px] text-slate-500 font-mono">Từ {attendanceStartDate} đến {attendanceEndDate} • Nhóm: {attendanceGroup === 'All' ? 'Tất cả' : attendanceGroup}</p>
                </div>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Phát hiện: <span className="text-white font-bold font-mono">
                  {attendanceGroup === 'All' 
                    ? '8' 
                    : attendanceGroup === 'Phòng ban B' 
                      ? '2' 
                      : attendanceGroup === 'Phòng ban A' 
                        ? '2' 
                        : '1'}
                </span> nhân sự
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                {(() => {
                  const baseEmployees = [
                    { ma: "080203011585", ten: "Phan Hữu Thiên Phúc", danhSach: "Phòng ban A" },
                    { ma: "010203045567", ten: "Trần Phước Lợi", danhSach: "Phòng ban B" },
                    { ma: "090302012948", ten: "Lê Thị Bình", danhSach: "Phòng ban B" },
                    { ma: "080203011234", ten: "Hoàng Văn Nam", danhSach: "Phòng ban C" },
                    { ma: "080203011567", ten: "Nguyễn Thị Mai", danhSach: "Phòng ban D" },
                    { ma: "080203011888", ten: "Phạm Thành Long", danhSach: "Phòng ban A" },
                    { ma: "020205094857", ten: "Nguyễn Văn An", danhSach: "Khách hàng / Khác" },
                    { ma: "030405060708", ten: "Vũ Thị Thủy", danhSach: "Khách hàng / Khác" }
                  ];

                  const activeEmployees = baseEmployees.filter(emp => 
                    attendanceGroup === 'All' || emp.danhSach === attendanceGroup
                  );

                  if (attendanceType === 'Daily Summary') {
                    return (
                      <>
                        <thead>
                          <tr className="bg-[#15161f] border-b border-[#21232d] text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            <th className="py-3 px-4 text-center w-12">STT</th>
                            <th className="py-3 px-4">Mã NV</th>
                            <th className="py-3 px-4">Họ và Tên</th>
                            <th className="py-3 px-4">Nhóm / Phòng ban</th>
                            <th className="py-3 px-4">Ngày</th>
                            <th className="py-3 px-4">Giờ Vào</th>
                            <th className="py-3 px-4">Giờ Ra</th>
                            <th className="py-3 px-4">Tổng giờ</th>
                            <th className="py-3 px-4 text-center">Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                          {activeEmployees.map((emp, idx) => {
                            const isPhuc = emp.ma === "080203011585";
                            return (
                              <tr key={emp.ma} className="hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300">
                                <td className="py-2.5 px-4 text-center text-slate-500 font-semibold">{idx + 1}</td>
                                <td className="py-2.5 px-4 text-amber-500 font-bold">{emp.ma}</td>
                                <td className="py-2.5 px-4 font-sans font-medium text-slate-100">{emp.ten}</td>
                                <td className="py-2.5 px-4 font-sans">{emp.danhSach}</td>
                                <td className="py-2.5 px-4 text-slate-400">09/07/2026</td>
                                <td className="py-2.5 px-4 text-emerald-400 font-semibold">{isPhuc ? '08:02:11' : '07:55:04'}</td>
                                <td className="py-2.5 px-4 text-emerald-400 font-semibold">{isPhuc ? '17:35:45' : '17:30:12'}</td>
                                <td className="py-2.5 px-4 text-white">8.5 h</td>
                                <td className="py-2.5 px-4 text-center">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Đúng giờ</span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </>
                    );
                  } else if (attendanceType === 'Monthly Summary') {
                    return (
                      <>
                        <thead>
                          <tr className="bg-[#15161f] border-b border-[#21232d] text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            <th className="py-3 px-4 text-center w-12">STT</th>
                            <th className="py-3 px-4">Mã NV</th>
                            <th className="py-3 px-4">Họ và Tên</th>
                            <th className="py-3 px-4">Nhóm / Phòng ban</th>
                            <th className="py-3 px-4 text-center">Công chuẩn</th>
                            <th className="py-3 px-4 text-center">Công thực tế</th>
                            <th className="py-3 px-4 text-center">Phút đi muộn</th>
                            <th className="py-3 px-4 text-center">Phút về sớm</th>
                            <th className="py-3 px-4 text-center">Tổng giờ công</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                          {activeEmployees.map((emp, idx) => {
                            const isPhuc = emp.ma === "080203011585";
                            return (
                              <tr key={emp.ma} className="hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300">
                                <td className="py-2.5 px-4 text-center text-slate-500 font-semibold">{idx + 1}</td>
                                <td className="py-2.5 px-4 text-amber-500 font-bold">{emp.ma}</td>
                                <td className="py-2.5 px-4 font-sans font-medium text-slate-100">{emp.ten}</td>
                                <td className="py-2.5 px-4 font-sans">{emp.danhSach}</td>
                                <td className="py-2.5 px-4 text-center text-slate-400">22</td>
                                <td className="py-2.5 px-4 text-center text-white font-bold">{isPhuc ? '21.5' : '22.0'}</td>
                                <td className="py-2.5 px-4 text-center text-rose-400">{isPhuc ? '45' : '12'}</td>
                                <td className="py-2.5 px-4 text-center text-slate-400">0</td>
                                <td className="py-2.5 px-4 text-center text-emerald-400 font-bold">{isPhuc ? '172.5' : '176.0'} h</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </>
                    );
                  } else if (attendanceType === 'Late Arrivals & Early Leves') {
                    return (
                      <>
                        <thead>
                          <tr className="bg-[#15161f] border-b border-[#21232d] text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            <th className="py-3 px-4 text-center w-12">STT</th>
                            <th className="py-3 px-4">Mã NV</th>
                            <th className="py-3 px-4">Họ và Tên</th>
                            <th className="py-3 px-4">Nhóm / Phòng ban</th>
                            <th className="py-3 px-4">Ngày</th>
                            <th className="py-3 px-4">Giờ Vào Thực Tế</th>
                            <th className="py-3 px-4">Đi muộn</th>
                            <th className="py-3 px-4">Về Sớm</th>
                            <th className="py-3 px-4">Lý do</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                          {activeEmployees.slice(0, 3).map((emp, idx) => (
                            <tr key={emp.ma} className="hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300">
                              <td className="py-2.5 px-4 text-center text-slate-500 font-semibold">{idx + 1}</td>
                              <td className="py-2.5 px-4 text-amber-500 font-bold">{emp.ma}</td>
                              <td className="py-2.5 px-4 font-sans font-medium text-slate-100">{emp.ten}</td>
                              <td className="py-2.5 px-4 font-sans">{emp.danhSach}</td>
                              <td className="py-2.5 px-4 text-slate-400">09/07/2026</td>
                              <td className="py-2.5 px-4 text-rose-400 font-bold">08:15:32</td>
                              <td className="py-2.5 px-4 text-rose-400 font-bold">15 phút</td>
                              <td className="py-2.5 px-4 text-slate-400">0</td>
                              <td className="py-2.5 px-4 font-sans italic text-slate-400">Kẹt xe giờ cao điểm</td>
                            </tr>
                          ))}
                          {activeEmployees.length === 0 && (
                            <tr>
                              <td colSpan={9} className="py-6 text-center text-slate-500 font-sans">Không tìm thấy dữ liệu đi muộn về sớm</td>
                            </tr>
                          )}
                        </tbody>
                      </>
                    );
                  } else if (attendanceType === 'Absence & Leave Summary') {
                    return (
                      <>
                        <thead>
                          <tr className="bg-[#15161f] border-b border-[#21232d] text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            <th className="py-3 px-4 text-center w-12">STT</th>
                            <th className="py-3 px-4">Mã NV</th>
                            <th className="py-3 px-4">Họ và Tên</th>
                            <th className="py-3 px-4">Nhóm / Phòng ban</th>
                            <th className="py-3 px-4">Ngày vắng</th>
                            <th className="py-3 px-4">Loại nghỉ</th>
                            <th className="py-3 px-4">Lý do nghỉ</th>
                            <th className="py-3 px-4 text-center">Trạng thái duyệt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                          {activeEmployees.slice(1, 3).map((emp, idx) => (
                            <tr key={emp.ma} className="hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300">
                              <td className="py-2.5 px-4 text-center text-slate-500 font-semibold">{idx + 1}</td>
                              <td className="py-2.5 px-4 text-amber-500 font-bold">{emp.ma}</td>
                              <td className="py-2.5 px-4 font-sans font-medium text-slate-100">{emp.ten}</td>
                              <td className="py-2.5 px-4 font-sans">{emp.danhSach}</td>
                              <td className="py-2.5 px-4 text-slate-400">08/07/2026</td>
                              <td className="py-2.5 px-4 text-white font-medium">Nghỉ có lương (AL)</td>
                              <td className="py-2.5 px-4 font-sans text-slate-400">Khám sức khỏe định kỳ</td>
                              <td className="py-2.5 px-4 text-center">
                                <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Đã duyệt</span>
                              </td>
                            </tr>
                          ))}
                          {activeEmployees.length === 0 && (
                            <tr>
                              <td colSpan={8} className="py-6 text-center text-slate-500 font-sans">Không tìm thấy dữ liệu nghỉ vắng</td>
                            </tr>
                          )}
                        </tbody>
                      </>
                    );
                  } else { // Overtime Hours
                    return (
                      <>
                        <thead>
                          <tr className="bg-[#15161f] border-b border-[#21232d] text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                            <th className="py-3 px-4 text-center w-12">STT</th>
                            <th className="py-3 px-4">Mã NV</th>
                            <th className="py-3 px-4">Họ và Tên</th>
                            <th className="py-3 px-4">Nhóm / Phòng ban</th>
                            <th className="py-3 px-4">Ngày</th>
                            <th className="py-3 px-4 text-center">Giờ ra chuẩn</th>
                            <th className="py-3 px-4 text-center">Giờ ra thực tế</th>
                            <th className="py-3 px-4 text-center">Số giờ OT</th>
                            <th className="py-3 px-4 text-center">Phê duyệt</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#1b1c24] text-xs font-mono">
                          {activeEmployees.map((emp, idx) => {
                            const isPhuc = emp.ma === "080203011585";
                            return (
                              <tr key={emp.ma} className="hover:bg-[#181922] odd:bg-[#0e0f14] even:bg-[#101117] text-slate-300">
                                <td className="py-2.5 px-4 text-center text-slate-500 font-semibold">{idx + 1}</td>
                                <td className="py-2.5 px-4 text-amber-500 font-bold">{emp.ma}</td>
                                <td className="py-2.5 px-4 font-sans font-medium text-slate-100">{emp.ten}</td>
                                <td className="py-2.5 px-4 font-sans">{emp.danhSach}</td>
                                <td className="py-2.5 px-4 text-slate-400">09/07/2026</td>
                                <td className="py-2.5 px-4 text-center text-slate-500">17:30:00</td>
                                <td className="py-2.5 px-4 text-center text-amber-400 font-bold">{isPhuc ? '19:30:15' : '18:45:00'}</td>
                                <td className="py-2.5 px-4 text-center text-emerald-400 font-bold">{isPhuc ? '2.0' : '1.25'} h</td>
                                <td className="py-2.5 px-4 text-center">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-sans font-bold bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20">Đã duyệt</span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </>
                    );
                  }
                })()}
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 3 Content: Báo cáo cuộc họp */
        <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-6">
          {!isMeetingSearched ? (
            <div className="flex-1 flex flex-col items-center py-6 px-4">
              <div className="w-full max-w-4xl space-y-6">
                <div className="grid grid-cols-12 gap-5 w-full bg-[#14151b] border border-[#21232d] p-6 rounded-2xl shadow-2xl relative items-end">
                  
                  <div className="col-span-7 space-y-2 text-left">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Clock size={14} className="text-[#00a2e8]" />
                      Thời gian họp lọc
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Từ</span>
                        <div className="flex gap-2">
                          <input 
                            type="time"
                            value={meetingStartTime}
                            onChange={(e) => setMeetingStartTime(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none transition-all"
                          />
                          <input 
                            type="date"
                            value={meetingStartDate}
                            onChange={(e) => setMeetingStartDate(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Đến</span>
                        <div className="flex gap-2">
                          <input 
                            type="time"
                            value={meetingEndTime}
                            onChange={(e) => setMeetingEndTime(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none transition-all"
                          />
                          <input 
                            type="date"
                            value={meetingEndDate}
                            onChange={(e) => setMeetingEndDate(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-lg px-2 py-1.5 text-xs text-white focus:outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-3 space-y-2 relative text-left">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Layers size={14} className="text-[#00a2e8]" />
                      Khu vực / Phòng họp
                    </label>
                    <div className="relative">
                      <button 
                        type="button"
                        onClick={() => setIsMeetingAreaDropdownOpen(!isMeetingAreaDropdownOpen)}
                        className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-lg px-3 py-2 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[38px] cursor-pointer"
                      >
                        <span className="truncate pr-1">
                          {selectedMeetingAreas.length === 0 
                            ? 'Chưa chọn khu vực' 
                            : selectedMeetingAreas.length === 5 
                              ? 'Tất cả (5 phòng)' 
                              : selectedMeetingAreas.join(', ')}
                        </span>
                        <ChevronDown size={14} className={`text-[#00a2e8] transition-transform duration-200 ${isMeetingAreaDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isMeetingAreaDropdownOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-30" 
                            onClick={() => setIsMeetingAreaDropdownOpen(false)}
                          />
                          <div className="absolute right-0 left-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 p-2 space-y-1">
                            <div className="flex justify-between border-b border-[#2d2f3c]/60 pb-1.5 mb-1.5 px-1">
                              <button 
                                type="button"
                                onClick={() => setSelectedMeetingAreas(['Phòng họp A', 'Phòng họp B', 'Phòng họp Hội nghị', 'Lobby Area', 'Server Room'])}
                                className="text-[10px] text-[#00a2e8] hover:underline font-semibold cursor-pointer border-none bg-transparent"
                              >
                                Chọn tất cả
                              </button>
                              <button 
                                type="button"
                                onClick={() => setSelectedMeetingAreas([])}
                                className="text-[10px] text-slate-400 hover:underline font-semibold cursor-pointer border-none bg-transparent"
                              >
                                Bỏ chọn
                              </button>
                            </div>
                            <div className="max-h-48 overflow-y-auto space-y-1">
                              {[
                                'Phòng họp A',
                                'Phòng họp B',
                                'Phòng họp Hội nghị',
                                'Lobby Area',
                                'Server Room'
                              ].map((areaOption) => {
                                const isChecked = selectedMeetingAreas.includes(areaOption);
                                return (
                                  <button
                                    key={areaOption}
                                    type="button"
                                    onClick={() => {
                                      if (isChecked) {
                                        setSelectedMeetingAreas(selectedMeetingAreas.filter(a => a !== areaOption));
                                      } else {
                                        setSelectedMeetingAreas([...selectedMeetingAreas, areaOption]);
                                      }
                                    }}
                                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left text-xs text-slate-200 hover:bg-[#20212a] transition cursor-pointer border-none bg-transparent"
                                  >
                                    <span>{areaOption}</span>
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                      isChecked 
                                        ? 'border-[#00a2e8] bg-[#00a2e8]' 
                                        : 'border-[#2d2f3c] bg-[#111218]'
                                    }`}>
                                      {isChecked && <Check size={10} className="text-white font-bold" />}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="col-span-2">
                    <button
                      type="button"
                      onClick={() => {
                        setMeetingStartDate('2026-07-09');
                        setMeetingEndDate('2026-07-11');
                        setMeetingStartTime('00:00');
                        setMeetingEndTime('23:59');
                        setSelectedMeetingAreas(['Phòng họp A', 'Phòng họp B', 'Phòng họp Hội nghị', 'Lobby Area', 'Server Room']);
                      }}
                      className="w-full flex items-center justify-center space-x-1.5 px-2 h-[38px] bg-[#1c1d26] hover:bg-[#20212a] text-slate-300 border border-[#2d2f3c] rounded-lg text-[11px] font-bold uppercase transition-all duration-200 cursor-pointer"
                    >
                      <Search size={12} />
                      <span>Mặc định</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-[#21232d] pb-2.5">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Calendar size={14} className="text-[#00a2e8]" />
                      Danh sách cuộc họp đã tạo ({(() => {
                        const getMeetingTimestamp = (dateStr: string, timeStr: string) => {
                          return new Date(`${dateStr}T${timeStr || '00:00'}`).getTime();
                        };
                        return schMeetingSavedData.filter((meet: any) => {
                          const meetStart = getMeetingTimestamp(meet.date, meet.startTime);
                          const meetEnd = getMeetingTimestamp(meet.date, meet.endTime);
                          const filterStart = getMeetingTimestamp(meetingStartDate, meetingStartTime);
                          const filterEnd = getMeetingTimestamp(meetingEndDate, meetingEndTime);

                          const isInTimeRange = meetStart >= filterStart && meetEnd <= filterEnd;
                          const isInArea = selectedMeetingAreas.includes(meet.area);
                          return isInTimeRange && isInArea;
                        }).length;
                      })()})
                    </h4>
                    <span className="text-[10px] text-slate-400 font-medium">💡 Click vào cuộc họp để xem chi tiết báo cáo tham dự</span>
                  </div>

                  {(() => {
                    const getMeetingTimestamp = (dateStr: string, timeStr: string) => {
                      return new Date(`${dateStr}T${timeStr || '00:00'}`).getTime();
                    };
                    const filteredMeetings = schMeetingSavedData.filter((meet: any) => {
                      const meetStart = getMeetingTimestamp(meet.date, meet.startTime);
                      const meetEnd = getMeetingTimestamp(meet.date, meet.endTime);
                      const filterStart = getMeetingTimestamp(meetingStartDate, meetingStartTime);
                      const filterEnd = getMeetingTimestamp(meetingEndDate, meetingEndTime);

                      const isInTimeRange = meetStart >= filterStart && meetEnd <= filterEnd;
                      const isInArea = selectedMeetingAreas.includes(meet.area);
                      return isInTimeRange && isInArea;
                    });

                    if (filteredMeetings.length === 0) {
                      return (
                        <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-8 text-center text-slate-500">
                          <AlertTriangle size={32} className="mx-auto text-slate-600 mb-2 animate-pulse" />
                          <span className="text-xs font-semibold text-slate-400 block mb-1">Không tìm thấy cuộc họp nào</span>
                          <p className="text-[11px] text-slate-500 max-w-sm mx-auto">Vui lòng thay đổi thời gian lọc hoặc khu vực/phòng họp để hiển thị danh sách cuộc họp.</p>
                        </div>
                      );
                    }

                    const mapDepToLogGroup = (dep: string): string => {
                      if (dep === 'Phòng Ban 1' || dep === 'Phòng ban 1') return 'Phòng ban A';
                      if (dep === 'Phòng Ban 2' || dep === 'Phòng ban 2') return 'Phòng ban B';
                      if (dep === 'Ban Giám Đốc') return 'Phòng ban C';
                      if (dep === 'Phòng Nhân Sự' || dep === 'Phòng nhân sự') return 'Phòng ban D';
                      return dep;
                    };

                    const handleSelectMeeting = (meet: any) => {
                      setSelectedMeetingReport(meet);
                      setMeetingDate(meet.date);
                      setMeetingStartTime(meet.startTime);
                      setMeetingEndTime(meet.endTime);
                      const mappedGroups = (meet.departments || []).map(mapDepToLogGroup);
                      setMeetingGroups(mappedGroups);
                      setIsMeetingSearched(true);
                      setMeetingCurrentPage(1);
                    };

                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredMeetings.map((meet: any) => (
                          <div 
                            key={meet.id}
                            onClick={() => handleSelectMeeting(meet)}
                            className="bg-[#14151b] border border-[#21232d] hover:border-[#00a2e8]/50 rounded-2xl p-4 cursor-pointer transition-all duration-150 hover:scale-[1.01] hover:bg-[#1a1b24] shadow-md group relative overflow-hidden text-left"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#00a2e8]" />
                            
                            <div className="pl-2 space-y-2.5">
                              <div className="flex items-start justify-between gap-2">
                                <h5 className="font-bold text-xs text-white group-hover:text-[#00a2e8] transition truncate" title={meet.title}>
                                  {meet.title}
                                </h5>
                                <span className="shrink-0 bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[9px] font-semibold border border-slate-700/50">
                                  {meet.area}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-medium">
                                <div className="flex items-center gap-1.5">
                                  <Calendar size={12} className="text-slate-500" />
                                  <span>{(() => {
                                    const parts = meet.date.split('-');
                                    return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : meet.date;
                                  })()}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <Clock size={12} className="text-slate-500" />
                                  <span>{meet.startTime} - {meet.endTime}</span>
                                </div>
                              </div>

                              <div className="border-t border-[#21232d]/60 pt-2 flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                  {(meet.departments || []).map((dep: string) => (
                                    <span key={dep} className="bg-[#00a2e8]/10 text-[#00a2e8] px-1.5 py-0.5 rounded text-[8px] font-bold border border-[#00a2e8]/25">
                                      {dep}
                                    </span>
                                  ))}
                                </div>
                                <span className="text-[9px] text-[#00a2e8] font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                                  Xem báo cáo →
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          ) : (
            /* Detailed Meeting Roster Table view */
            <div className="flex-1 flex flex-col space-y-4">
              <div className="flex-1 min-h-[300px] flex flex-col bg-[#14151b] border border-[#21232d] rounded-2xl shadow-xl overflow-hidden">
                <div className="px-5 py-4 border-b border-[#2d2f3c] bg-[#111218] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                  <div className="space-y-1 text-left flex items-center gap-2.5">
                    <button
                      onClick={() => {
                        setIsMeetingSearched(false);
                        setSelectedMeetingReport(null);
                      }}
                      className="flex items-center justify-center w-7 h-7 rounded-lg border border-[#2d2f3c] hover:border-slate-400 bg-[#1c1d26] hover:bg-[#20212a] text-slate-300 hover:text-white transition cursor-pointer shrink-0"
                      title="Quay lại danh sách"
                    >
                      <ArrowLeft size={14} />
                    </button>
                    <div className="text-left space-y-0.5">
                      <h4 className="font-bold text-sm text-slate-100 uppercase tracking-wider flex items-center gap-2">
                        <span>{selectedMeetingReport ? `Báo cáo: ${selectedMeetingReport.title}` : 'Báo cáo Chi Tiết Tham Độ Cuộc Họp'}</span>
                        <span className="text-[11px] bg-[#00a2e8]/20 text-[#00a2e8] font-bold px-2 py-0.5 rounded border border-[#00a2e8]/25 uppercase font-mono">
                          {selectedMeetingReport?.area || 'Phòng Họp'}
                        </span>
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium">
                        Thời gian: <span className="text-slate-300 font-semibold font-mono">{meetingStartTime} - {meetingEndTime}</span> ngày <span className="text-slate-300 font-semibold font-mono">{(() => {
                          if (!meetingDate) return '';
                          const parts = meetingDate.split('-');
                          return parts.length === 3 ? `${parts[2]}/${parts[1]}/${parts[0]}` : meetingDate;
                        })()}</span> | Ban tham gia: <span className="text-[#00a2e8] font-bold">{(selectedMeetingReport?.departments || []).join(', ')}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 shrink-0">
                    <button 
                      onClick={() => {
                        setExporting(true);
                        setExportProgress(0);
                        setShowExportToast(true);
                        const interval = setInterval(() => {
                          setExportProgress(prev => {
                            if (prev >= 100) {
                              clearInterval(interval);
                              setTimeout(() => {
                                setExporting(false);
                              }, 1000);
                              return 100;
                            }
                            return prev + 20;
                          });
                        }, 150);
                      }}
                      className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-lg text-xs font-semibold transition shadow-md shadow-[#00a2e8]/10 cursor-pointer border-none"
                    >
                      <Download size={13} />
                      <span>Xuất báo cáo</span>
                    </button>
                  </div>
                </div>

                {(() => {
                  const timeStringToSeconds = (tStr: string): number => {
                    if (!tStr) return 0;
                    const parts = tStr.split(':').map(Number);
                    const h = parts[0] || 0;
                    const m = parts[1] || 0;
                    const s = parts[2] || 0;
                    return h * 3600 + m * 60 + s;
                  };

                  const getMeetingPhoto = (seed: string, isLoi: boolean, type: 'in' | 'out') => {
                    if (isLoi) {
                      if (type === 'in') {
                        return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300";
                      } else {
                        return "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300";
                      }
                    }
                    const index = parseInt(seed.replace(/^\D+/g, '')) || 1;
                    const offset = type === 'in' ? 0 : 3;
                    const portraits = [
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300&h=300",
                      "https://images.unsplash.com/photo-1504257486230-1699a27f01d9?auto=format&fit=crop&q=80&w=300&h=300"
                    ];
                    return portraits[(index + offset) % portraits.length];
                  };

                  const meetingStartSec = timeStringToSeconds(meetingStartTime);
                  const meetingEndSec = timeStringToSeconds(meetingEndTime);

                  // Perform logic to get unique employees from mock logs
                  const allEmployees = Array.from(
                    new Map(
                      mockEventLogs.map(log => [log.ma, { ten: log.ten, ma: log.ma, danhSach: log.danhSach, avatarSeed: log.avatarSeed }])
                    ).values()
                  );

                  // Filter based on selected meeting groups
                  const attendeeRoster = allEmployees.filter(emp => {
                    const mappedGroup = emp.danhSach === 'Phòng ban A' ? 'Phòng ban A' : 
                                        emp.danhSach === 'Phòng ban B' ? 'Phòng ban B' : 
                                        emp.danhSach === 'Phòng ban C' ? 'Phòng ban C' : 
                                        emp.danhSach === 'Phòng ban D' ? 'Phòng ban D' : 'Khách hàng / Khác';
                    return meetingGroups.includes(mappedGroup);
                  }).map(emp => {
                    let thoiGianVao = '';
                    let thoiGianRa = '';

                    const entryLogs = mockEventLogs.filter(log => {
                      if (log.ma !== emp.ma) return false;
                      const areaCode = log.vung;
                      const hasInCam = selectedMeetingReport?.area ? ['cam-1-1', 'cam-2-1'].some(c => c.includes('cam')) : true;
                      return hasInCam;
                    });

                    const exitLogs = mockEventLogs.filter(log => {
                      if (log.ma !== emp.ma) return false;
                      const hasOutCam = selectedMeetingReport?.area ? ['cam-1-2', 'cam-2-2'].some(c => c.includes('cam')) : true;
                      return hasOutCam;
                    });

                    if (entryLogs.length > 0) {
                      const latestLog = entryLogs[entryLogs.length - 1];
                      thoiGianVao = latestLog.thoiGian ? latestLog.thoiGian.split('-')[1] || '08:05:12' : '08:05:12';
                    }

                    if (exitLogs.length > 0) {
                      const earliestLog = exitLogs[0];
                      thoiGianRa = earliestLog.thoiGian ? earliestLog.thoiGian.split('-')[1] || '17:35:45' : '17:35:45';
                    }

                    if (emp.ma === '080203011234' || emp.ma === '080203011888' || emp.ma === '020205094857') {
                      thoiGianVao = '';
                      thoiGianRa = '';
                    }

                    let evaluationText = 'Vắng mặt (Absent)';
                    let evaluationType: 'good' | 'early' | 'manual' | 'absent' = 'absent';
                    let ratioPercent = 0;

                    if (thoiGianVao || thoiGianRa) {
                      const inSec = timeStringToSeconds(thoiGianVao);
                      const outSec = timeStringToSeconds(thoiGianRa);
                      
                      const actualDur = outSec - inSec;
                      ratioPercent = Math.round((actualDur / (meetingEndSec - meetingStartSec)) * 100);
                      ratioPercent = Math.max(0, Math.min(100, ratioPercent));

                      if (thoiGianVao && thoiGianRa) {
                        const lateness = inSec - meetingStartSec;
                        const earliness = meetingEndSec - outSec;

                        if (lateness <= 600 && earliness <= 600) {
                          evaluationText = 'Tham gia tốt (Good)';
                          evaluationType = 'good';
                        } else {
                          evaluationText = 'Đi trễ / Về sớm (L/E)';
                          evaluationType = 'early';
                        }
                      } else {
                        evaluationText = 'Check-in tay (Manual)';
                        evaluationType = 'manual';
                      }
                    }

                    let entryColorClass = 'text-white';
                    let entryBadgeClass = 'text-white bg-slate-800/40 border-slate-700/50';
                    let entryImageBorderClass = 'border-emerald-500/30';
                    let entryImageCornersClass = 'border-emerald-400';
                    let entryMatchBadgeClass = 'text-white border-emerald-500/20';

                    if (thoiGianVao) {
                      const inSec = timeStringToSeconds(thoiGianVao);
                      const latenessSec = inSec - meetingStartSec;
                      if (latenessSec > 0) {
                        if (latenessSec <= 600) {
                          entryColorClass = 'text-white';
                        } else if (latenessSec <= 1800) {
                          entryColorClass = 'text-amber-400';
                          entryBadgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
                          entryImageBorderClass = 'border-amber-500/30';
                          entryImageCornersClass = 'border-amber-400';
                        } else {
                          entryColorClass = 'text-rose-500';
                          entryBadgeClass = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
                          entryImageBorderClass = 'border-rose-500/30';
                          entryImageCornersClass = 'border-rose-400';
                        }
                      }
                    } else {
                      entryColorClass = 'text-slate-500';
                    }

                    let exitColorClass = 'text-white';
                    let exitBadgeClass = 'text-white bg-slate-800/40 border-slate-700/50';
                    let exitImageBorderClass = 'border-emerald-500/30';
                    let exitImageCornersClass = 'border-emerald-400';
                    let exitMatchBadgeClass = 'text-white border-emerald-500/20';

                    if (thoiGianRa) {
                      const outSec = timeStringToSeconds(thoiGianRa);
                      const earlinessSec = meetingEndSec - outSec;
                      if (earlinessSec > 0) {
                        if (earlinessSec <= 900) {
                          exitColorClass = 'text-white';
                        } else if (earlinessSec <= 1800) {
                          exitColorClass = 'text-amber-400';
                          exitBadgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
                          exitImageBorderClass = 'border-amber-500/30';
                          exitImageCornersClass = 'border-amber-400';
                        } else {
                          exitColorClass = 'text-rose-500';
                          exitBadgeClass = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
                          exitImageBorderClass = 'border-rose-500/30';
                          exitImageCornersClass = 'border-rose-400';
                        }
                      }
                    } else {
                      exitColorClass = 'text-slate-500';
                    }

                    let evaluationColorClass = 'text-emerald-400';
                    if (evaluationType === 'absent' || entryColorClass === 'text-rose-500' || exitColorClass === 'text-rose-500') {
                      evaluationColorClass = 'text-rose-500';
                    } else if (evaluationType === 'manual' || evaluationType === 'early' || entryColorClass === 'text-amber-400' || exitColorClass === 'text-amber-400') {
                      evaluationColorClass = 'text-amber-500';
                    }

                    return {
                      emp,
                      thoiGianVao,
                      thoiGianRa,
                      evaluationText,
                      evaluationType,
                      ratioPercent,
                      entryColorClass,
                      entryBadgeClass,
                      entryImageBorderClass,
                      entryImageCornersClass,
                      entryMatchBadgeClass,
                      exitColorClass,
                      exitBadgeClass,
                      exitImageBorderClass,
                      exitImageCornersClass,
                      exitMatchBadgeClass,
                      evaluationColorClass
                    };
                  });

                  const sortedAttendeeRoster = [...attendeeRoster].sort((a, b) => {
                    const order = { good: 1, early: 2, manual: 3, absent: 4 };
                    return order[a.evaluationType] - order[b.evaluationType];
                  });

                  let activeSelectedCode = selectedMeetingEmpCode;
                  if (sortedAttendeeRoster.length > 0) {
                    const isStillInRoster = sortedAttendeeRoster.some(r => r.emp.ma === activeSelectedCode);
                    if (!activeSelectedCode || !isStillInRoster) {
                      activeSelectedCode = sortedAttendeeRoster[0].emp.ma;
                    }
                  } else {
                    activeSelectedCode = null;
                  }

                  const selectedAttendee = sortedAttendeeRoster.find(r => r.emp.ma === activeSelectedCode);

                  const totalRosterCount = sortedAttendeeRoster.length;
                  const presentCount = sortedAttendeeRoster.filter(r => r.thoiGianVao || r.thoiGianRa).length;
                  const deptsCount = Array.from(new Set(sortedAttendeeRoster.map(r => r.emp.danhSach))).length;

                  const onTimeCount = sortedAttendeeRoster.filter(r => {
                    if (!r.thoiGianVao) return false;
                    const [sh, sm] = meetingStartTime.split(':').map(Number);
                    const [lh, lm] = r.thoiGianVao.split(':').map(Number);
                    const meetingMinutes = sh * 60 + sm;
                    const logMinutes = lh * 60 + lm;
                    return logMinutes <= meetingMinutes + 10;
                  }).length;

                  const onTimePercentage = presentCount > 0 ? Math.round((onTimeCount / presentCount) * 100) : 100;
                  const totalMeetingItems = sortedAttendeeRoster.length;
                  const totalMeetingPages = Math.ceil(totalMeetingItems / meetingItemsPerPage) || 1;
                  const activeMeetingPage = Math.min(meetingCurrentPage, totalMeetingPages);
                  const indexLastMeetingItem = activeMeetingPage * meetingItemsPerPage;
                  const indexFirstMeetingItem = indexLastMeetingItem - meetingItemsPerPage;
                  const currentMeetingRoster = sortedAttendeeRoster.slice(indexFirstMeetingItem, indexLastMeetingItem);

                  return (
                    <>
                      {/* Mini Stats Badges */}
                      <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#2d2f3c]/60 bg-[#16171d]/40 shrink-0">
                        <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                          <div className="space-y-0.5 text-left">
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Người tham dự</span>
                            <span className="text-xl font-bold text-white font-mono">{presentCount}/{totalRosterCount}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20">
                            <Clock size={16} />
                          </div>
                        </div>

                        <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                          <div className="space-y-0.5 text-left">
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Phòng ban tham gia</span>
                            <span className="text-xl font-bold text-white font-mono">{deptsCount}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Layers size={16} />
                          </div>
                        </div>

                        <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                          <div className="space-y-0.5 text-left">
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Tỷ lệ đúng giờ</span>
                            <span className="text-xl font-bold text-white font-mono">{onTimePercentage}%</span>
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Star size={16} fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      {/* Split Layout: Table + Sidebar Details */}
                      <div className="flex-1 flex overflow-hidden min-h-[250px]">
                        <div className="flex-1 overflow-auto bg-[#0d0e12] border-r border-[#21232d]/50">
                          {sortedAttendeeRoster.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center p-8 text-slate-500 text-center">
                              <AlertTriangle size={36} className="text-slate-600 mb-2.5 animate-bounce" />
                              <span className="text-xs font-semibold uppercase tracking-wider mb-1 text-slate-400">Không tìm thấy người tham gia</span>
                              <p className="text-[11px] max-w-xs text-slate-500 leading-relaxed">
                                Vui lòng đổi ngày, thời gian check-in hoặc chọn thêm phòng ban tham dự họp.
                              </p>
                            </div>
                          ) : (
                            <table className="w-full text-xs text-left border-collapse">
                              <thead className="bg-[#181921] text-slate-300 font-semibold border-b border-[#21232d] uppercase tracking-wider text-[10px] sticky top-0 z-10">
                                <tr>
                                  <th className="py-2.5 px-4 w-12 text-center">STT</th>
                                  <th className="py-2.5 px-3">Tên nhân sự</th>
                                  <th className="py-2.5 px-3">Mã nhân sự</th>
                                  <th className="py-2.5 px-3">Phòng ban</th>
                                  <th className="py-2.5 px-3">Thời gian vào phòng</th>
                                  <th className="py-2.5 px-3">Thời gian rời phòng</th>
                                  <th className="py-2.5 px-4 text-center">Đánh giá</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#21232d]/40 text-slate-300">
                                {currentMeetingRoster.map((item, index) => {
                                  const { emp, thoiGianVao, thoiGianRa, evaluationText, evaluationType } = item;
                                  const isSelected = activeSelectedCode === emp.ma;

                                  return (
                                    <tr 
                                      key={emp.ma} 
                                      onClick={() => setSelectedMeetingEmpCode(emp.ma)}
                                      className={`cursor-pointer transition-colors ${
                                        isSelected 
                                          ? 'bg-[#00a2e8]/10 text-[#00a2e8] hover:bg-[#00a2e8]/15 font-medium' 
                                          : 'hover:bg-[#181921]/60'
                                      }`}
                                    >
                                      <td className="py-2 px-4 text-center font-mono text-slate-400">{indexFirstMeetingItem + index + 1}</td>
                                      <td className={`py-2 px-3 font-semibold ${isSelected ? 'text-[#00a2e8]' : 'text-white'}`}>{emp.ten}</td>
                                      <td className="py-2 px-3 font-mono text-slate-400">{emp.ma}</td>
                                      <td className="py-2 px-3">
                                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-[#21232d] border border-[#2d2f3c]/60 text-slate-300">
                                          {emp.danhSach}
                                        </span>
                                      </td>
                                      <td className={`py-2 px-3 font-mono ${item.entryColorClass}`}>{thoiGianVao || '--:--:--'}</td>
                                      <td className={`py-2 px-3 font-mono ${item.exitColorClass}`}>{thoiGianRa || '--:--:--'}</td>
                                      <td className="py-2 px-4 text-center font-semibold">
                                        <span className={`${item.evaluationColorClass} text-[11px]`}>
                                          {evaluationText}
                                        </span>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          )}
                        </div>

                        <div className="w-72 bg-[#14151c]/95 flex flex-col shrink-0 overflow-y-auto border-l border-[#21232d]/40">
                          {selectedAttendee ? (
                            <div className="p-4 space-y-4 text-left">
                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ảnh lúc vào phòng</span>
                                  {selectedAttendee.thoiGianVao ? (
                                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${selectedAttendee.entryBadgeClass}`}>{selectedAttendee.thoiGianVao}</span>
                                  ) : (
                                    <span className="text-[10px] text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">Vắng</span>
                                  )}
                                </div>
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#2d2f3c] bg-[#0d0e12] flex items-center justify-center group shadow-inner">
                                  {selectedAttendee.thoiGianVao ? (
                                    <>
                                      <img 
                                        src={getMeetingPhoto(selectedAttendee.emp.avatarSeed, selectedAttendee.emp.ma === "010203045567", 'in')} 
                                        alt="Ảnh lúc vào phòng" 
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className={`absolute inset-2 border ${selectedAttendee.entryImageBorderClass} rounded pointer-events-none`}>
                                        <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${selectedAttendee.entryImageCornersClass}`} />
                                        <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${selectedAttendee.entryImageCornersClass}`} />
                                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${selectedAttendee.entryImageCornersClass}`} />
                                        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${selectedAttendee.entryImageCornersClass}`} />
                                      </div>
                                      <span className={`absolute bottom-1 right-1 text-[8px] font-mono bg-black/80 px-1 rounded border ${selectedAttendee.entryMatchBadgeClass}`}>
                                        99.2% MATCH
                                      </span>
                                    </>
                                  ) : (
                                    <div className="flex flex-col items-center justify-center text-slate-600">
                                      <Camera size={20} className="text-slate-700 mb-1" />
                                      <span className="text-[9px] text-slate-500 font-medium">Không có dữ liệu vào</span>
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ảnh lúc ra khỏi phòng</span>
                                  {selectedAttendee.thoiGianRa ? (
                                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${selectedAttendee.exitBadgeClass}`}>{selectedAttendee.thoiGianRa}</span>
                                  ) : (
                                    <span className="text-[10px] text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">Vắng</span>
                                  )}
                                </div>
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[#2d2f3c] bg-[#0d0e12] flex items-center justify-center group shadow-inner">
                                  {selectedAttendee.thoiGianRa ? (
                                    <>
                                      <img 
                                        src={getMeetingPhoto(selectedAttendee.emp.avatarSeed, selectedAttendee.emp.ma === "010203045567", 'out')} 
                                        alt="Ảnh lúc ra khỏi phòng" 
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                                        referrerPolicy="no-referrer"
                                      />
                                      <div className={`absolute inset-2 border ${selectedAttendee.exitImageBorderClass} rounded pointer-events-none`}>
                                        <div className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${selectedAttendee.exitImageCornersClass}`} />
                                        <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${selectedAttendee.exitImageCornersClass}`} />
                                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${selectedAttendee.exitImageCornersClass}`} />
                                        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${selectedAttendee.exitImageCornersClass}`} />
                                      </div>
                                      <span className={`absolute bottom-1 right-1 text-[8px] font-mono bg-black/80 px-1 rounded border ${selectedAttendee.exitMatchBadgeClass}`}>
                                        98.6% MATCH
                                      </span>
                                    </>
                                  ) : (
                                    <div className="flex flex-col items-center justify-center text-slate-600">
                                      <Camera size={20} className="text-slate-700 mb-1" />
                                      <span className="text-[9px] text-slate-500 font-medium">Không có dữ liệu ra</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center p-4 text-slate-500 text-center">
                              <AlertTriangle size={24} className="text-slate-600 mb-1" />
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Chưa chọn nhân sự</span>
                              <p className="text-[9px] text-slate-500 mt-1 max-w-[180px]">
                                Vui lòng click chọn nhân sự trong danh sách để xem chi tiết ảnh nhận diện vào/ra.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Bottom Status Bar with Pagination */}
                      <div className="h-14 bg-[#14151c] border-t border-[#21232d] px-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center space-x-2 text-xs">
                          <span className="text-slate-400 font-sans">Giới hạn:</span>
                          <div className="flex rounded-lg overflow-hidden border border-[#2d2f3c] bg-[#111218]">
                            {[20, 30, 40, 50].map(limit => (
                              <button
                                key={limit}
                                type="button"
                                onClick={() => {
                                  setMeetingItemsPerPage(limit);
                                  setMeetingCurrentPage(1);
                                }}
                                className={`px-3 py-1 text-xs font-semibold font-mono transition cursor-pointer ${
                                  meetingItemsPerPage === limit
                                    ? 'bg-[#00a2e8] text-white'
                                    : 'bg-[#1c1d26] text-slate-300 hover:bg-[#20212a] hover:text-white'
                                }`}
                              >
                                {limit}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-1.5 font-mono text-xs">
                          <button 
                            type="button"
                            onClick={() => setMeetingCurrentPage(1)} 
                            disabled={activeMeetingPage === 1}
                            className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                          >
                            <ChevronsLeft size={16} />
                          </button>
                          <button 
                            type="button"
                            onClick={() => setMeetingCurrentPage(prev => Math.max(prev - 1, 1))} 
                            disabled={activeMeetingPage === 1}
                            className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center cursor-pointer"
                          >
                            <ChevronLeft size={16} className="mr-0.5" />
                            <span>Trang</span>
                          </button>

                          <div className="bg-[#1b1c25] border border-[#2e303f] px-3 py-1 rounded text-white flex items-center space-x-1 font-semibold font-sans">
                            <input 
                              type="text" 
                              value={activeMeetingPage} 
                              onChange={(e) => {
                                const val = parseInt(e.target.value);
                                if (val > 0 && val <= totalMeetingPages) setMeetingCurrentPage(val);
                              }}
                              className="w-4 bg-transparent text-center font-mono focus:outline-none text-[#00a2e8]"
                            />
                            <span className="text-slate-500">/</span>
                            <span>{totalMeetingPages}</span>
                          </div>

                          <button 
                            type="button"
                            onClick={() => setMeetingCurrentPage(prev => Math.min(prev + 1, totalMeetingPages))} 
                            disabled={activeMeetingPage === totalMeetingPages}
                            className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center cursor-pointer"
                          >
                            <span>Trang</span>
                            <ChevronRight size={16} className="ml-0.5" />
                          </button>
                          <button 
                            type="button"
                            onClick={() => setMeetingCurrentPage(totalMeetingPages)} 
                            disabled={activeMeetingPage === totalMeetingPages}
                            className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition cursor-pointer"
                          >
                            <ChevronsRight size={16} />
                          </button>
                        </div>

                        <div className="text-xs text-slate-400 font-sans hidden sm:block">
                          Tổng: <span className="font-bold text-slate-100 font-mono">{totalMeetingItems}</span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Sidebar Filter Drawer */}
      <AnimatePresence>
        {showFilterModal && (
          <>
            <motion.div 
              key="filter-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 z-40 cursor-pointer"
              onClick={() => setShowFilterModal(false)}
            />

            <motion.div 
              key="filter-sidebar"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-[#16171d] z-50 flex flex-col text-slate-200 shadow-2xl h-full"
            >
              <div className="p-4 border-b border-[#2d2f3c] flex items-center justify-between bg-[#111218] shrink-0 text-left">
                <div className="flex items-center space-x-2">
                  <Filter size={16} className="text-[#00a2e8]" />
                  <span className="font-bold text-xs text-slate-200 uppercase tracking-wider">Bộ lọc</span>
                </div>
                <button 
                  onClick={() => setShowFilterModal(false)}
                  className="p-1 rounded bg-[#20212a] hover:bg-[#2c2d3a] text-slate-400 hover:text-white transition cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                
                <div className="space-y-1 text-left relative">
                  <label className="text-[11px] text-slate-300 font-semibold block">Chế độ Tìm kiếm</label>
                  <div className="relative">
                    <button 
                      type="button"
                      onClick={() => setIsOpenSearchTypeDropdown(!isOpenSearchTypeDropdown)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none font-semibold cursor-pointer h-[36px]"
                    >
                      <span>{searchType === 'text' ? 'Tìm Kiếm Thường' : 'Tìm Kiếm Bằng Hình Ảnh'}</span>
                      <ChevronDown size={14} className="text-[#00a2e8]" />
                    </button>

                    <AnimatePresence>
                      {isOpenSearchTypeDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded shadow-2xl z-50 overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() => {
                              setSearchType('text');
                              setIsOpenSearchTypeDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] cursor-pointer border-none bg-transparent ${
                              searchType === 'text' ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-medium' : 'text-slate-300'
                            }`}
                          >
                            Tìm Kiếm Thường
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setSearchType('image');
                              setIsOpenSearchTypeDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] cursor-pointer border-none bg-transparent ${
                              searchType === 'image' ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-medium' : 'text-slate-300'
                            }`}
                          >
                            Tìm Kiếm Bằng Hình Ảnh
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {searchType === 'image' && (
                  <div className="space-y-3 p-3 bg-[#111218] rounded-lg border border-[#2d2f3c] text-left">
                    <span className="text-[10px] text-slate-400 block font-semibold">Tải ảnh khuôn mặt đối tượng:</span>
                    
                    {searchImage ? (
                      <div className="relative aspect-square w-24 mx-auto rounded-lg border border-[#00a2e8] overflow-hidden bg-black group shadow-md">
                        <img src={searchImage} alt="Search target" className="w-full h-full object-cover" />
                        <button 
                          type="button"
                          onClick={() => {
                            setSearchImage(null);
                            setSearchQuery('');
                          }}
                          className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full shadow transition cursor-pointer"
                        >
                          <X size={10} />
                        </button>
                        <div className="absolute inset-x-0 bottom-0 bg-black/85 text-[9px] text-[#00a2e8] text-center py-0.5 font-mono font-bold tracking-tight">
                          99.8% Match
                        </div>
                      </div>
                    ) : (
                      <div className="border border-dashed border-[#2d2f3c] hover:border-[#00a2e8] rounded-lg p-4 text-center cursor-pointer transition bg-[#181921] relative hover:bg-[#1f202b]">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (event) => {
                                setSearchImage(event.target?.result as string);
                                setSearchQuery('Phan Huu Thien Phuc');
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <Camera size={20} className="mx-auto text-[#00a2e8] mb-1.5 opacity-80" />
                        <span className="text-[10px] text-slate-400 block font-medium">Kéo thả hoặc click chọn ảnh</span>
                      </div>
                    )}

                    <div className="space-y-1.5 border-t border-[#2d2f3c]/60 pt-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-300 font-semibold">Ngưỡng</span>
                        <input 
                          type="number"
                          min="0"
                          max="1"
                          step="0.01"
                          value={threshold}
                          onChange={(e) => {
                            let val = parseFloat(e.target.value);
                            if (isNaN(val)) {
                              setThreshold(0);
                              return;
                            }
                            if (val < 0) val = 0;
                            if (val > 1) val = 1;
                            setThreshold(parseFloat(val.toFixed(2)));
                          }}
                          className="w-14 bg-[#181921] border border-[#2d2f3c] focus:border-[#00a2e8] rounded px-1.5 py-0.5 text-[11px] font-mono text-center text-white focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] text-slate-500 font-mono">0</span>
                        <input 
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={threshold}
                          onChange={(e) => setThreshold(parseFloat(e.target.value))}
                          className="flex-1 h-1 bg-[#181921] border border-[#2d2f3c] rounded-lg appearance-none cursor-pointer accent-[#00a2e8]"
                        />
                        <span className="text-[10px] text-slate-500 font-mono">1</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-1 text-left">
                  <label className="text-[11px] text-slate-300 font-semibold block">Từ Ngày</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#00a2e8] [color-scheme:dark]"
                    />
                    <input 
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#00a2e8] [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[11px] text-slate-300 font-semibold block">Đến Ngày</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#00a2e8] [color-scheme:dark]"
                    />
                    <input 
                      type="time"
                      value={endTime}
                      onChange={(e) => setDropEndTime(e.target.value)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#00a2e8] [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="space-y-1 text-left relative">
                  <label className="text-[11px] text-slate-300 font-semibold block">Vùng/Kịch Bản</label>
                  <div className="relative">
                    <button 
                      type="button"
                      onClick={() => setIsOpenZoneDropdown(!isOpenZoneDropdown)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none h-[36px] cursor-pointer"
                    >
                      <span>{filterZone === 'All' ? 'Tất cả (All)' : filterZone}</span>
                      <ChevronDown size={14} className="text-[#00a2e8]" />
                    </button>

                    <AnimatePresence>
                      {isOpenZoneDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded shadow-2xl z-50 overflow-hidden text-left"
                        >
                          <div className="p-2 border-b border-[#2d2f3c] bg-[#111218]">
                            <input 
                              type="text" 
                              placeholder="Lọc nhanh vùng..."
                              value={zoneSearch}
                              onChange={(e) => setZoneSearch(e.target.value)}
                              className="w-full px-2 py-1 text-xs bg-[#181921] border border-[#2d2f3c] rounded text-white focus:outline-none"
                            />
                          </div>
                          <div className="max-h-40 overflow-y-auto">
                            <button
                              type="button"
                              onClick={() => {
                                setFilterZone('All');
                                setIsOpenZoneDropdown(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] cursor-pointer border-none bg-transparent ${
                                filterZone === 'All' ? 'text-[#00a2e8] bg-[#00a2e8]/10' : 'text-slate-300'
                              }`}
                            >
                              Tất cả (All)
                            </button>
                            {areasData
                              .filter(a => a.name.toLowerCase().includes(zoneSearch.toLowerCase()))
                              .map(area => (
                                <button
                                  key={area.id}
                                  type="button"
                                  onClick={() => {
                                    setFilterZone(area.name);
                                    setIsOpenZoneDropdown(false);
                                  }}
                                  className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] cursor-pointer border-none bg-transparent ${
                                    filterZone === area.name ? 'text-[#00a2e8] bg-[#00a2e8]/10' : 'text-slate-300'
                                  }`}
                                >
                                  {area.name}
                                </button>
                              ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-1 text-left relative">
                  <label className="text-[11px] text-slate-300 font-semibold block">Nhóm Danh Sách</label>
                  <div className="relative">
                    <button 
                      type="button"
                      onClick={() => setIsOpenListDropdown(!isOpenListDropdown)}
                      className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none h-[36px] cursor-pointer"
                    >
                      <span>{filterList === 'All' ? 'Tất cả (All)' : filterList}</span>
                      <ChevronDown size={14} className="text-[#00a2e8]" />
                    </button>

                    <AnimatePresence>
                      {isOpenListDropdown && (
                        <motion.div 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded shadow-2xl z-50 overflow-hidden text-left"
                        >
                          {['All', 'Phòng ban A', 'Phòng ban B', 'Phòng ban C', 'Phòng ban D', 'Khách hàng / Khác'].map(listOpt => (
                            <button
                              key={listOpt}
                              type="button"
                              onClick={() => {
                                setFilterList(listOpt);
                                setIsOpenListDropdown(false);
                              }}
                              className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] cursor-pointer border-none bg-transparent ${
                                filterList === listOpt ? 'text-[#00a2e8] bg-[#00a2e8]/10' : 'text-slate-300'
                              }`}
                            >
                              {listOpt === 'All' ? 'Tất cả (All)' : listOpt}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#111218] border-t border-[#2d2f3c] flex items-center space-x-3 shrink-0">
                <button 
                  onClick={() => setShowFilterModal(false)}
                  className="flex-1 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded-lg text-xs transition cursor-pointer"
                >
                  Xác nhận
                </button>
                <button 
                  onClick={() => {
                    setFilterZone('All');
                    setFilterList('All');
                    setSearchQuery('');
                    setStartDate('');
                    setEndDate('');
                    setStartTime('');
                    setEndTime('');
                    setSearchType('text');
                    setSearchImage(null);
                    setShowFilterModal(false);
                  }}
                  className="flex-1 py-2 bg-[#303242] hover:bg-[#3d3f54] text-slate-300 font-bold rounded-lg text-xs transition cursor-pointer"
                >
                  Đặt lại
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Export progress bar alert toast */}
      <AnimatePresence>
        {(exporting || showExportToast) && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-6 right-6 z-50 bg-[#1c1d27] border border-[#2d2f3d] p-4 rounded-xl shadow-2xl w-80 text-left"
          >
            {exporting ? (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-white flex items-center gap-1.5">
                    <RotateCw className="animate-spin text-[#00a2e8]" size={13} />
                    Đang tiến hành kết xuất báo cáo...
                  </span>
                  <span className="text-[#00a2e8] font-mono font-bold">{exportProgress}%</span>
                </div>
                <div className="w-full bg-[#111218] rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#00a2e8] h-full transition-all duration-300 rounded-full" 
                    style={{ width: `${exportProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-3 text-xs">
                <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Check size={14} className="font-bold" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-white leading-none">Kết xuất thành công!</div>
                  <p className="text-[10px] text-slate-400 leading-tight">
                    Đã tải xuống thành công báo cáo sự kiện: <span className="font-mono text-[#00a2e8] font-bold block mt-0.5 break-all">{exportedFileName}</span>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );

  function setDropEndTime(val: string) {
    setEndTime(val);
  }
}
