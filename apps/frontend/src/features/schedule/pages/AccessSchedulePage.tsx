import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  ChevronDown, 
  Check, 
  Save, 
  Plus, 
  Users,
  X,
  FolderOpen,
  Loader2,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../../../context/AppContext';

// Legacy UI shape mirror of the real Meeting[] (bảng meeting, DB cms_webserver),
// derived so the existing drag/preview render logic below (written against
// area/date/startTime/endTime/departments) keeps working unchanged.
const mapMeetingToLocal = (m: any, areas: any[]) => {
  const area = areas.find((a: any) => a.id === m.location_id);
  return {
    id: m.id,
    title: m.title,
    areaId: m.location_id,
    area: area?.name || m.location_id,
    date: m.date_organize,
    startTime: m.time_start,
    endTime: m.time_end,
    departments: (m.groups || []).map((g: any) => g.name),
    groupIds: m.group_ids || [],
    timeBeforeBegin: m.time_before_begin,
    timeAfterEnd: m.time_after_end,
  };
};

// 4. ACCESS SCHEDULE PAGE COMPONENT
// ==========================================
export const AccessSchedulePage = () => {
  const { 
    scheduleSavedData, setScheduleSavedData, 
    meetings, areasData, humanGroups, 
    createMeeting, updateMeeting, deleteMeeting 
  } = useApp();

  // Local mutable mirror of `meetings` (legacy shape), kept in sync via effect
  // below. Drag gestures mutate this for instant visual feedback before
  // persisting the final position to the API on mouse-up.
  const [localMeetings, setLocalMeetings] = useState<any[]>([]);
  useEffect(() => {
    setLocalMeetings(meetings.map(m => mapMeetingToLocal(m, areasData)));
  }, [meetings, areasData]);

  const [activeScheduleSubTab, setActiveScheduleSubTab] = useState<'attendance-schedule' | 'meeting-schedule'>('attendance-schedule');
  
  // States cho xếp ca chấm công
  const [scheduleDisplay, setScheduleDisplay] = useState<'Ngày' | 'Tuần' | 'Tháng' | 'Năm'>('Ngày');
  const [scheduleSelectedAreas, setScheduleSelectedAreas] = useState<string[]>(['Checkin Area']);
  const [scheduleStartTime, setScheduleStartTime] = useState<string>('08:00');
  const [scheduleEndTime, setScheduleEndTime] = useState<string>('17:00');
  const [scheduleType, setScheduleType] = useState<string>('Chấm công');
  const [scheduleCalendarDate, setScheduleCalendarDate] = useState<string>('2026-07-10');
  
  const [isSchDisplayOpen, setIsSchDisplayOpen] = useState<boolean>(false);
  const [isSchAreasOpen, setIsSchAreasOpen] = useState<boolean>(false);
  const [isSchTypeOpen, setIsSchTypeOpen] = useState<boolean>(false);
  
  const [schedulePreviewData, setSchedulePreviewData] = useState<any[] | null>(null);
  const [isFillingTable, setIsFillingTable] = useState<boolean>(false);
  const [showOverwriteConfirm, setShowOverwriteConfirm] = useState<boolean>(false);
  const [showScheduleSaveToast, setShowScheduleSaveToast] = useState<boolean>(false);

  // States cho xếp lịch họp
  const [schMeetingLayout, setSchMeetingLayout] = useState<'by-meeting' | 'by-department'>('by-meeting');
  const [schMeetingTitle, setSchMeetingTitle] = useState<string>('');
  // schMeetingAreaId lưu location_id thật (FK meeting.location_id); giữ song song
  // schMeetingArea (tên hiển thị) để tương thích với logic filter theo tên cũ.
  const [schMeetingAreaId, setSchMeetingAreaId] = useState<string>('all');
  const [schMeetingHumanGroupIds, setSchMeetingHumanGroupIds] = useState<string[]>(['all']);
  const [schMeetingDate, setSchMeetingDate] = useState<string>('2026-07-10');
  const [schMeetingStartTime, setSchMeetingStartTime] = useState<string>('09:00');
  const [schMeetingEndTime, setSchMeetingEndTime] = useState<string>('11:00');
  const [isSchMeetingAreaOpen, setIsSchMeetingAreaOpen] = useState<boolean>(false);
  const [isSchMeetingDepsOpen, setIsSchMeetingDepsOpen] = useState<boolean>(false);

  // Toggle hiển thị 2 ô nâng cao (ẩn mặc định theo yêu cầu).
  const [showAdvancedMeetingFields, setShowAdvancedMeetingFields] = useState<boolean>(false);
  const [schMeetingBeforeBegin, setSchMeetingBeforeBegin] = useState<number>(30);
  const [schMeetingAfterEnd, setSchMeetingAfterEnd] = useState<number>(30);

  const schMeetingArea = schMeetingAreaId === 'all'
    ? 'All (*) - Mặc định'
    : (areasData.find(a => a.id === schMeetingAreaId)?.name || '');

  const [schMeetingPreviewData, setSchMeetingPreviewData] = useState<any[] | null>(null);
  const [isFillingMeetingTable, setIsFillingMeetingTable] = useState<boolean>(false);
  const [showMeetingOverwriteConfirm, setShowMeetingOverwriteConfirm] = useState<boolean>(false);
  const [showMeetingSaveToast, setShowMeetingSaveToast] = useState<boolean>(false);
  const [isSavingMeeting, setIsSavingMeeting] = useState<boolean>(false);
  const [meetingSaveError, setMeetingSaveError] = useState<string>('');
  const [deletingMeetingId, setDeletingMeetingId] = useState<string | null>(null);

  // Drag states
  const [draggingMeeting, setDraggingMeeting] = useState<any>(null);
  const [draggingAttendance, setDraggingAttendance] = useState<any>(null);

  // Thêm state cho Modals
  const [savePath, setSavePath] = useState('C:\\Program Files\\DVMS System\\DVMS Client\\EventData\\');
  const [showPathModal, setShowPathModal] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [showExportToast, setShowExportToast] = useState(false);

  // Chọn mặc định khu vực đầu tiên khi areasData tải xong (nếu chưa chọn gì).
  useEffect(() => {
    if (!schMeetingAreaId && areasData.length > 0) {
      setSchMeetingAreaId('all');
    }
  }, [areasData, schMeetingAreaId]);

  const minutesToTimeStr = (mins: number) => {
    const h = Math.max(0, Math.min(23, Math.floor(mins / 60)));
    const m = Math.max(0, Math.min(59, Math.floor(mins % 60)));
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  const timeStrToMinutes = (tStr: string) => {
    const [h, m] = (tStr || '00:00').split(':').map(Number);
    return h * 60 + m;
  };

  // Window drag listeners for Meeting Schedule Timeline
  useEffect(() => {
    if (!draggingMeeting) return;

    const handleMouseMove = (e: MouseEvent) => {
      const track = document.getElementById(`meeting-track-${draggingMeeting.meetingId}`) || 
                    document.getElementById('meeting-track-combined') || 
                    document.querySelector('[id^="meeting-track-"]');
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const deltaMinutes = Math.round(((e.clientX - draggingMeeting.startX) / rect.width * 1440) / 15) * 15;

      const initialStartMins = timeStrToMinutes(draggingMeeting.initialStartTime);
      const initialEndMins = timeStrToMinutes(draggingMeeting.initialEndTime);
      const duration = initialEndMins - initialStartMins;

      const dataToUpdate = isFillingMeetingTable && schMeetingPreviewData ? [...schMeetingPreviewData] : [...localMeetings];
      const meetIndex = dataToUpdate.findIndex(m => m.id === draggingMeeting.meetingId);
      if (meetIndex === -1) return;

      const meet = { ...dataToUpdate[meetIndex] };

      if (draggingMeeting.type === 'move') {
        let newStartMins = initialStartMins + deltaMinutes;
        newStartMins = Math.max(0, Math.min(24 * 60 - duration, newStartMins));
        const newEndMins = newStartMins + duration;

        meet.startTime = minutesToTimeStr(newStartMins);
        meet.endTime = minutesToTimeStr(newEndMins);
      } else if (draggingMeeting.type === 'resize-start') {
        let newStartMins = initialStartMins + deltaMinutes;
        newStartMins = Math.max(0, Math.min(initialEndMins - 15, newStartMins));
        meet.startTime = minutesToTimeStr(newStartMins);
      } else if (draggingMeeting.type === 'resize-end') {
        let newEndMins = initialEndMins + deltaMinutes;
        newEndMins = Math.max(initialStartMins + 15, Math.min(24 * 60, newEndMins));
        meet.endTime = minutesToTimeStr(newEndMins);
      }

      dataToUpdate[meetIndex] = meet;

      if (isFillingMeetingTable) {
        setSchMeetingPreviewData(dataToUpdate);
      } else {
        setLocalMeetings(dataToUpdate);
      }
    };

    const handleMouseUp = () => {
      // Persist the new time range to the API once the drag ends (only when
      // not in preview mode -- preview edits are only committed on "Lưu").
      if (!isFillingMeetingTable) {
        const dragged = localMeetings.find(m => m.id === draggingMeeting.meetingId);
        if (dragged) {
          updateMeeting(dragged.id, { time_start: dragged.startTime, time_end: dragged.endTime })
            .catch((err: any) => console.warn('Failed to persist dragged meeting time:', err.message));
        }
      }
      setDraggingMeeting(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingMeeting, schMeetingPreviewData, localMeetings, isFillingMeetingTable]);

  // Window drag listeners for Attendance Schedule Timeline
  useEffect(() => {
    if (!draggingAttendance) return;

    const handleMouseMove = (e: MouseEvent) => {
      const track = document.getElementById(`attendance-track-${draggingAttendance.empId}`);
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const deltaMinutes = Math.round(((e.clientX - draggingAttendance.startX) / rect.width * 1440) / 15) * 15;

      const initialStartMins = timeStrToMinutes(draggingAttendance.initialStartTime);
      const initialEndMins = timeStrToMinutes(draggingAttendance.initialEndTime);
      const duration = initialEndMins - initialStartMins;

      const dataToUpdate = isFillingTable && schedulePreviewData ? [...schedulePreviewData] : [...scheduleSavedData];
      const empIndex = dataToUpdate.findIndex(d => d.id === draggingAttendance.empId);
      if (empIndex === -1) return;

      const emp = { ...dataToUpdate[empIndex] };
      emp.days = { ...emp.days };
      const cell = { ...emp.days[scheduleCalendarDate] };

      if (draggingAttendance.type === 'move') {
        let newStartMins = initialStartMins + deltaMinutes;
        newStartMins = Math.max(0, Math.min(24 * 60 - duration, newStartMins));
        const newEndMins = newStartMins + duration;

        cell.startTime = minutesToTimeStr(newStartMins);
        cell.endTime = minutesToTimeStr(newEndMins);
      } else if (draggingAttendance.type === 'resize-start') {
        let newStartMins = initialStartMins + deltaMinutes;
        newStartMins = Math.max(0, Math.min(initialEndMins - 15, newStartMins));
        cell.startTime = minutesToTimeStr(newStartMins);
      } else if (draggingAttendance.type === 'resize-end') {
        let newEndMins = initialEndMins + deltaMinutes;
        newEndMins = Math.max(initialStartMins + 15, Math.min(24 * 60, newEndMins));
        cell.endTime = minutesToTimeStr(newEndMins);
      }

      emp.days[scheduleCalendarDate] = { ...cell, assigned: true };
      dataToUpdate[empIndex] = emp;

      if (isFillingTable) {
        setSchedulePreviewData(dataToUpdate);
      } else {
        setScheduleSavedData(dataToUpdate);
      }
    };

    const handleMouseUp = () => {
      setDraggingAttendance(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingAttendance, scheduleCalendarDate, schedulePreviewData, scheduleSavedData, isFillingTable]);

  return (
    <>
            <div className="flex-1 flex flex-col overflow-hidden relative bg-[#0d0e12]">
              {/* Header Tab Navigator */}
              <div id="schedule-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400 font-semibold tracking-wider">Lịch Ra Vào</div>
                  
                  {/* Sliding Big Pill Segmented Control Container */}
                  <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
                    {/* Tab 1: Quản lý lịch chấm công */}
                    <button 
                      id="schedule-tab-btn-attendance"
                      onClick={() => setActiveScheduleSubTab('attendance-schedule')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                        activeScheduleSubTab === 'attendance-schedule' 
                          ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Calendar size={14} />
                      <span>Quản lý lịch chấm công</span>
                    </button>

                    {/* Tab 2: Quản lý lịch họp */}
                    <button 
                      id="schedule-tab-btn-meeting"
                      onClick={() => setActiveScheduleSubTab('meeting-schedule')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                        activeScheduleSubTab === 'meeting-schedule' 
                          ? 'bg-[#0078d7] text-white shadow-lg shadow-[#0078d7]/20' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Clock size={14} />
                      <span>Quản lý lịch họp</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Body Content: Lịch biểu Chấm công (Interactive Builder) or Lịch họp (Bỏ trống) */}
              {activeScheduleSubTab === 'attendance-schedule' ? (
                <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-5">
                  
                  {/* CALENDAR DATE HEADER & CHANGER */}
                  <div id="schedule-calendar-bar" className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-xl p-4 shadow-md">
                    <div className="flex items-center space-x-2.5 text-slate-100 font-bold text-xs tracking-wide">
                      <Calendar className="text-[#00a2e8]" size={16} />
                      <span className="uppercase text-slate-300">Calendar</span>
                    </div>
                  </div>

                  {/* REPORT BUILDER-LIKE CONTROLS GRID */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    
                    {/* LEFT PANEL: CẤU HÌNH HIỂN THỊ */}
                    <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between relative">
                      <div>
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                          <span>Cấu hình hiển thị</span>
                        </h4>
                        
                        <div className="space-y-4">
                          {/* Dropdown Hiển thị */}
                          <div className="space-y-1.5 text-left relative">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Hiển thị</label>
                            <div className="relative">
                              <button
                                type="button"
                                id="sch-display-dropdown-btn"
                                onClick={() => {
                                  setIsSchDisplayOpen(!isSchDisplayOpen);
                                  setIsSchAreasOpen(false);
                                  setIsSchTypeOpen(false);
                                }}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px] cursor-pointer"
                              >
                                <span className="font-semibold text-slate-200">{scheduleDisplay} {scheduleDisplay === 'Ngày' ? '(Mặc định)' : ''}</span>
                                <ChevronDown size={14} className="text-slate-400" />
                              </button>
                              {isSchDisplayOpen && (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setIsSchDisplayOpen(false)} />
                                  <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                                    {(['Ngày', 'Tuần', 'Tháng', 'Năm'] as const).map((opt) => (
                                      <button
                                        key={opt}
                                        type="button"
                                        onClick={() => {
                                          setScheduleDisplay(opt);
                                          setIsSchDisplayOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
                                          scheduleDisplay === opt ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                                        }`}
                                      >
                                        <span>{opt} {opt === 'Ngày' ? '(Mặc định)' : ''}</span>
                                        {scheduleDisplay === opt && <Check size={14} className="text-[#00a2e8]" />}
                                      </button>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Multiselect Khu vực */}
                          <div className="space-y-1.5 text-left relative">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Khu vực (Multiselect)</label>
                            <div className="relative">
                              <button
                                type="button"
                                id="sch-areas-dropdown-btn"
                                onClick={() => {
                                  setIsSchAreasOpen(!isSchAreasOpen);
                                  setIsSchDisplayOpen(false);
                                  setIsSchTypeOpen(false);
                                }}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none min-h-[42px] cursor-pointer"
                              >
                                <div className="flex flex-wrap gap-1.5 items-center max-w-[90%] py-0.5">
                                  {scheduleSelectedAreas.length === 0 ? (
                                    <span className="text-slate-400">Chọn khu vực...</span>
                                  ) : (
                                    scheduleSelectedAreas.map(aName => (
                                      <span key={aName} className="bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20 px-2 py-0.5 rounded text-[10px] font-bold">
                                        {aName}
                                      </span>
                                    ))
                                  )}
                                </div>
                                <ChevronDown size={14} className="text-slate-400 shrink-0" />
                              </button>
                              {isSchAreasOpen && (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setIsSchAreasOpen(false)} />
                                  <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                                    {['Checkin Area', 'Checkout Area', 'Lobby Area', 'Server Room'].map((areaOption) => {
                                      const isSelected = scheduleSelectedAreas.includes(areaOption);
                                      return (
                                        <button
                                          key={areaOption}
                                          type="button"
                                          onClick={() => {
                                            if (isSelected) {
                                              setScheduleSelectedAreas(scheduleSelectedAreas.filter(a => a !== areaOption));
                                            } else {
                                              setScheduleSelectedAreas([...scheduleSelectedAreas, areaOption]);
                                            }
                                          }}
                                          className="w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center space-x-3 text-slate-300 cursor-pointer"
                                        >
                                          <input 
                                            type="checkbox" 
                                            checked={isSelected}
                                            readOnly
                                            className="rounded border-[#2d2f3c] bg-[#111218] text-[#00a2e8] focus:ring-0 focus:ring-offset-0 cursor-pointer w-3.5 h-3.5"
                                          />
                                          <span className={isSelected ? 'text-[#00a2e8] font-semibold' : ''}>{areaOption}</span>
                                        </button>
                                      );
                                    })}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT PANEL: THIẾT LẬP THỜI GIAN */}
                    <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                          <span>Thiết lập ca & thời gian</span>
                        </h4>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Từ giờ */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Từ (giờ)</label>
                            <input 
                              type="time" 
                              value={scheduleStartTime}
                              onChange={(e) => setScheduleStartTime(e.target.value)}
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                            />
                          </div>

                          {/* Đến giờ */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Đến (giờ)</label>
                            <input 
                              type="time" 
                              value={scheduleEndTime}
                              onChange={(e) => setScheduleEndTime(e.target.value)}
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Loại Dropdown & Action Button */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {/* Loại dropdown */}
                          <div className="space-y-1.5 text-left relative">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Loại</label>
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsSchTypeOpen(!isSchTypeOpen);
                                  setIsSchDisplayOpen(false);
                                  setIsSchAreasOpen(false);
                                }}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px] cursor-pointer"
                              >
                                <span className="font-semibold text-slate-200">{scheduleType} (Mặc định)</span>
                                <ChevronDown size={14} className="text-slate-400" />
                              </button>
                              {isSchTypeOpen && (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setIsSchTypeOpen(false)} />
                                  <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                                    {['Chấm công', 'Tăng ca', 'Nghỉ phép'].map((typeOption) => (
                                      <button
                                        key={typeOption}
                                        type="button"
                                        onClick={() => {
                                          setScheduleType(typeOption);
                                          setIsSchTypeOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
                                          scheduleType === typeOption ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                                        }`}
                                      >
                                        <span>{typeOption} {typeOption === 'Chấm công' ? '(Mặc định)' : ''}</span>
                                        {scheduleType === typeOption && <Check size={14} className="text-[#00a2e8]" />}
                                      </button>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Button "Điền vào bảng" */}
                          <div className="flex items-end">
                            <button
                              onClick={() => {
                                // Cloning saved data to preview
                                const dataToModify = JSON.parse(JSON.stringify(scheduleSavedData));
                                let datesToApply: string[] = [];

                                if (scheduleDisplay === 'Ngày') {
                                  datesToApply = [scheduleCalendarDate];
                                } else if (scheduleDisplay === 'Tuần') {
                                  const start = new Date(scheduleCalendarDate);
                                  for (let i = 0; i < 7; i++) {
                                    const d = new Date(start);
                                    d.setDate(start.getDate() + i);
                                    const yyyy = d.getFullYear();
                                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                                    const dd = String(d.getDate()).padStart(2, '0');
                                    datesToApply.push(`${yyyy}-${mm}-${dd}`);
                                  }
                                } else if (scheduleDisplay === 'Tháng') {
                                  const start = new Date(scheduleCalendarDate);
                                  for (let i = 0; i < 30; i++) {
                                    const d = new Date(start);
                                    d.setDate(start.getDate() + i);
                                    const yyyy = d.getFullYear();
                                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                                    const dd = String(d.getDate()).padStart(2, '0');
                                    datesToApply.push(`${yyyy}-${mm}-${dd}`);
                                  }
                                } else { // Năm
                                  const start = new Date(scheduleCalendarDate);
                                  for (let i = 0; i < 90; i++) {
                                    const d = new Date(start);
                                    d.setDate(start.getDate() + i);
                                    const yyyy = d.getFullYear();
                                    const mm = String(d.getMonth() + 1).padStart(2, '0');
                                    const dd = String(d.getDate()).padStart(2, '0');
                                    datesToApply.push(`${yyyy}-${mm}-${dd}`);
                                  }
                                }

                                dataToModify.forEach((emp: any) => {
                                  datesToApply.forEach((dateStr) => {
                                    emp.days[dateStr] = {
                                      assigned: true,
                                      shiftName: 'Ca hành chính',
                                      startTime: scheduleStartTime,
                                      endTime: scheduleEndTime,
                                      type: scheduleType,
                                      areas: [...scheduleSelectedAreas]
                                    };
                                  });
                                });

                                setSchedulePreviewData(dataToModify);
                                setIsFillingTable(true);
                              }}
                              className="w-full bg-[#0078d7] hover:bg-[#006fca] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md shadow-[#0078d7]/20 cursor-pointer h-[42px] text-xs"
                            >
                              <span>Điền vào bảng</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* INTERACTIVE CALENDAR TABLE CONTAINER */}
                  <div className="bg-[#14151b] border border-[#21232d] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-4 bg-[#181922] border-b border-[#21232d] flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#00a2e8]" />
                        <h4 className="text-xs font-bold text-slate-200 tracking-wide uppercase">Lịch Biểu Nhân Sự</h4>
                      </div>
                      {isFillingTable && (
                        <div className="flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                          <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Preview Mode</span>
                        </div>
                      )}
                    </div>

                    <div className="w-full overflow-x-auto">
                      {(() => {
                        const activeSchedules = isFillingTable && schedulePreviewData ? schedulePreviewData : scheduleSavedData;

                        // RENDER TABLE ACCORDING TO DISPLAY VIEW MODE
                        if (scheduleDisplay === 'Tuần') {
                          // Compute week dates starting from scheduleCalendarDate
                          const weekDays = [];
                          const start = new Date(scheduleCalendarDate);
                          for (let i = 0; i < 7; i++) {
                            const d = new Date(start);
                            d.setDate(start.getDate() + i);
                            const mm = String(d.getMonth() + 1).padStart(2, '0');
                            const dd = String(d.getDate()).padStart(2, '0');
                            const yyyy = d.getFullYear();
                            weekDays.push({
                              dateStr: `${yyyy}-${mm}-${dd}`,
                              label: `${mm}-${dd}`
                            });
                          }

                          return (
                            <table className="w-full border-collapse text-left min-w-[800px]">
                              <thead>
                                <tr className="bg-[#181922]">
                                  <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-[#21232d] w-[20%]">Employee</th>
                                  {weekDays.map((day) => (
                                    <th key={day.dateStr} className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-[#21232d] text-center">{day.label}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#21232d] bg-[#111218]">
                                {activeSchedules.map((emp) => (
                                  <tr key={emp.id} className="hover:bg-[#1a1b24]/40 transition">
                                    <td className="p-4 border-b border-[#21232d]">
                                      <div className="flex flex-col text-left">
                                        <span className="font-bold text-xs text-slate-100 tracking-tight leading-snug">{emp.name}</span>
                                      </div>
                                    </td>
                                    {weekDays.map((day) => {
                                      const cell = emp.days[day.dateStr] || { assigned: false };
                                      if (cell.assigned) {
                                        return (
                                          <td key={day.dateStr} className="p-3 border-b border-[#21232d] align-middle text-center">
                                            <div className="border border-[#0078d7] bg-[#0078d7]/5 rounded-xl p-3 flex flex-col justify-center items-center text-center h-[72px] min-w-[120px] transition-all duration-300">
                                              <div className="font-bold text-[11px] text-[#00a2e8]">{cell.shiftName || 'Ca hành chính'}</div>
                                              <div className="text-[10px] text-slate-300 font-mono mt-0.5 font-semibold tracking-wide">{cell.startTime}-{cell.endTime}</div>
                                            </div>
                                          </td>
                                        );
                                      } else {
                                        return (
                                          <td key={day.dateStr} className="p-3 border-b border-[#21232d] align-middle text-center">
                                            <div className="flex justify-center items-center h-[72px]">
                                              <span className="bg-[#1c1d26]/60 border border-[#2d2f3c] text-slate-500 rounded-full px-3.5 py-1 text-center text-[10px] font-semibold tracking-wide shadow-sm uppercase">
                                                Unassigned
                                              </span>
                                            </div>
                                          </td>
                                        );
                                      }
                                    })}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          );
                        } else if (scheduleDisplay === 'Ngày') {
                          // RENDER 24-HOUR TIMELINE VIEW
                          return (
                            <div className="p-5 space-y-6 bg-[#111218] min-w-[800px]">
                              {/* Hours Labels Strip */}
                              <div className="grid grid-cols-24 gap-0 pl-[20%] text-[9px] font-mono font-bold text-slate-500 tracking-wider text-center border-b border-[#21232d]/60 pb-2">
                                {Array.from({ length: 24 }, (_, h) => (
                                  <div key={h} className="border-r border-[#21232d]/30 last:border-0">
                                    {String(h).padStart(2, '0')}:00
                                  </div>
                                ))}
                              </div>

                              {/* Timeline Rows */}
                              {activeSchedules.map((emp) => {
                                const cell = emp.days[scheduleCalendarDate] || { assigned: false };
                                
                                // Compute percentage offset
                                const parseTimeToPercent = (tStr: string) => {
                                  const [h, m] = (tStr || '00:00').split(':').map(Number);
                                  return ((h * 60 + m) / (24 * 60)) * 100;
                                };

                                const startPct = cell.assigned ? parseTimeToPercent(cell.startTime || '08:00') : 0;
                                const endPct = cell.assigned ? parseTimeToPercent(cell.endTime || '17:00') : 0;
                                const barWidth = cell.assigned ? Math.max(endPct - startPct, 3) : 0;

                                return (
                                  <div key={emp.id} className="flex items-center">
                                    {/* Employee Column Header */}
                                    <div className="w-[20%] text-left pr-4">
                                      <span className="font-bold text-xs text-slate-100 block truncate">{emp.name}</span>
                                    </div>

                                    {/* Continuous Horizontal Timeline Bar */}
                                    <div 
                                      id={`attendance-track-${emp.id}`}
                                      className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                                    >
                                      {/* Background Grid Lines */}
                                      {Array.from({ length: 24 }, (_, h) => (
                                        <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                                      ))}

                                      {/* Render Filled Scheduled Bar */}
                                      {cell.assigned ? (
                                        <div 
                                          className="absolute top-1.5 bottom-1.5 bg-[#00a2e8]/20 border border-[#00a2e8] rounded-xl flex items-center justify-between px-1 shadow-md shadow-[#00a2e8]/10 group transition duration-200 hover:bg-[#00a2e8]/30 cursor-move"
                                          style={{ left: `${startPct}%`, width: `${barWidth}%` }}
                                          onMouseDown={(e) => {
                                            setDraggingAttendance({
                                              empId: emp.id,
                                              type: 'move',
                                              startX: e.clientX,
                                              initialStartTime: cell.startTime,
                                              initialEndTime: cell.endTime
                                            });
                                          }}
                                        >
                                          {/* Left resize handle */}
                                          <div 
                                            className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-l-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                            onMouseDown={(e) => {
                                              e.stopPropagation();
                                              setDraggingAttendance({
                                                empId: emp.id,
                                                type: 'resize-start',
                                                startX: e.clientX,
                                                initialStartTime: cell.startTime,
                                                initialEndTime: cell.endTime
                                              });
                                            }}
                                          >
                                            ⋮
                                          </div>

                                          <div className="text-[10px] text-[#00a2e8] font-bold font-mono tracking-wider truncate flex items-center space-x-1.5 px-2 select-none pointer-events-none">
                                            <Clock size={11} className="shrink-0" />
                                            <span>{cell.shiftName || 'Ca hành chính'} ({cell.startTime} - {cell.endTime})</span>
                                          </div>

                                          {/* Right resize handle */}
                                          <div 
                                            className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-r-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                            onMouseDown={(e) => {
                                              e.stopPropagation();
                                              setDraggingAttendance({
                                                empId: emp.id,
                                                type: 'resize-end',
                                                startX: e.clientX,
                                                initialStartTime: cell.startTime,
                                                initialEndTime: cell.endTime
                                              });
                                            }}
                                          >
                                            ⋮
                                          </div>
                                        </div>
                                      ) : (
                                        <div className="w-full text-center text-[10px] text-slate-600 font-semibold uppercase tracking-widest pointer-events-none">
                                          Chưa phân lịch (Unassigned)
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        } else if (scheduleDisplay === 'Tháng') {
                          // RENDER MONTHLY COMPACT DOT MATRIX GRID
                          const monthDays = [];
                          const start = new Date(scheduleCalendarDate);
                          for (let i = 0; i < 30; i++) {
                            const d = new Date(start);
                            d.setDate(start.getDate() + i);
                            const mm = String(d.getMonth() + 1).padStart(2, '0');
                            const dd = String(d.getDate()).padStart(2, '0');
                            const yyyy = d.getFullYear();
                            monthDays.push({
                              dateStr: `${yyyy}-${mm}-${dd}`,
                              label: `${mm}-${dd}`
                            });
                          }

                          return (
                            <div className="p-5 space-y-6 bg-[#111218] min-w-[800px]">
                              {activeSchedules.map((emp) => (
                                <div key={emp.id} className="flex items-start border-b border-[#21232d] pb-5 last:border-none last:pb-0">
                                  <div className="w-[20%] text-left pr-4 pt-1">
                                    <span className="font-bold text-xs text-slate-100 block">{emp.name}</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-wider">Trạng thái phân ca 30 ngày tới:</div>
                                    <div className="flex flex-wrap gap-1.5">
                                      {monthDays.map((day, dIdx) => {
                                        const cell = emp.days[day.dateStr] || { assigned: false };
                                        return (
                                          <div 
                                            key={dIdx}
                                            className={`w-9 h-9 rounded-xl flex flex-col items-center justify-center text-[9px] font-mono font-bold border transition duration-200 cursor-pointer ${
                                              cell.assigned 
                                                ? 'bg-[#0078d7]/15 border-[#0078d7] text-[#00a2e8] shadow-md shadow-[#0078d7]/5' 
                                                : 'bg-[#1c1d26]/40 border-[#2d2f3c] text-slate-600 hover:border-slate-500'
                                            }`}
                                            title={cell.assigned ? `${day.dateStr}: ${cell.shiftName} (${cell.startTime}-${cell.endTime})` : `${day.dateStr}: Unassigned`}
                                          >
                                            <span className="text-[7px] text-slate-500 leading-none">{day.label.split('-')[0]}</span>
                                            <span className="text-xs leading-none mt-0.5">{day.label.split('-')[1]}</span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          );
                        } else {
                          // RENDER ANNUAL DISTRIBUTION SUMMARY CARDS
                          return (
                            <div className="p-6 bg-[#111218] grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[800px]">
                              {activeSchedules.map((emp) => {
                                // Count active shifts
                                const daysCount = Object.values(emp.days).filter((d: any) => d.assigned).length;
                                return (
                                  <div key={emp.id} className="bg-[#181921] border border-[#2d2f3c] rounded-2xl p-5 space-y-4">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <span className="text-xs font-bold text-slate-200 block">{emp.name}</span>
                                      </div>
                                      <div className="px-2.5 py-1 rounded bg-[#00a2e8]/10 border border-[#00a2e8]/20 text-[10px] text-[#00a2e8] font-mono uppercase font-bold">
                                        Annual View
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                      <div className="bg-[#111218] p-3 rounded-xl border border-[#2d2f3c]/40 text-center">
                                        <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-1">Số ca phân</span>
                                        <span className="text-sm font-bold text-[#00a2e8] font-mono">{daysCount} ca</span>
                                      </div>
                                      <div className="bg-[#111218] p-3 rounded-xl border border-[#2d2f3c]/40 text-center">
                                        <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-1">Tổng giờ</span>
                                        <span className="text-sm font-bold text-slate-200 font-mono">{daysCount * 9} giờ</span>
                                      </div>
                                      <div className="bg-[#111218] p-3 rounded-xl border border-[#2d2f3c]/40 text-center">
                                        <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-1">Khu vực kiểm soát</span>
                                        <span className="text-sm font-bold text-slate-400 font-mono">Checkin</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          );
                        }
                      })()}
                    </div>
                  </div>

                  {/* BOTTOM SAVE ACTIONS GROUP */}
                  {isFillingTable ? (
                    <div className="flex items-center justify-between bg-[#151722] border-2 border-amber-500/20 rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs text-amber-300 font-semibold">Bạn đang ở chế độ Xem trước Lịch biểu (Chưa Lưu). Hãy nhấn Lưu để cập nhật chính thức.</span>
                      </div>
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => {
                            setSchedulePreviewData(null);
                            setIsFillingTable(false);
                          }}
                          className="px-4 py-2 border border-[#2d2f3c] text-slate-400 hover:text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Hủy xem trước
                        </button>
                        <button 
                          onClick={() => {
                            if (!schedulePreviewData) return;

                            // Check overwrite
                            let hasOverwrite = false;

                            for (let i = 0; i < scheduleSavedData.length; i++) {
                              const savedEmp = scheduleSavedData[i];
                              const previewEmp = schedulePreviewData[i];
                              
                              if (!previewEmp) continue;

                              for (const dateStr in previewEmp.days) {
                                const savedCell = savedEmp.days[dateStr];
                                const previewCell = previewEmp.days[dateStr];

                                if (previewCell && previewCell.assigned) {
                                  if (savedCell && savedCell.assigned) {
                                    const isDifferent = savedCell.startTime !== previewCell.startTime || 
                                                        savedCell.endTime !== previewCell.endTime || 
                                                        savedCell.type !== previewCell.type;
                                    if (isDifferent) {
                                      hasOverwrite = true;
                                      break;
                                    }
                                  }
                                }
                              }
                              if (hasOverwrite) break;
                            }

                            if (hasOverwrite) {
                              setShowOverwriteConfirm(true);
                            } else {
                              setScheduleSavedData(schedulePreviewData);
                              setSchedulePreviewData(null);
                              setIsFillingTable(false);
                              setShowScheduleSaveToast(true);
                              setTimeout(() => setShowScheduleSaveToast(false), 4000);
                            }
                          }}
                          className="px-5 py-2.5 bg-[#0078d7] hover:bg-[#006fca] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-[#0078d7]/20 cursor-pointer"
                        >
                          <Save size={14} />
                          <span>Lưu lịch biểu</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-2xl p-4 shadow-md">
                      <span className="text-xs text-slate-400 font-medium">Lịch biểu đã được lưu và áp dụng cho các cửa kiểm soát.</span>
                      <button 
                        disabled
                        className="px-5 py-2.5 bg-slate-800 text-slate-500 rounded-xl text-xs font-bold flex items-center space-x-2 cursor-not-allowed border border-slate-700/30"
                      >
                        <Save size={14} />
                        <span>Đã lưu</span>
                      </button>
                    </div>
                  )}

                </div>
              ) : (
                /* CONDITIONAL VIEW: QUẢN LÝ LỊCH HỌP (Interactive Meeting Schedule Builder & Drag Day Timeline) */
                <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-5">
                  
                  {/* CALENDAR DATE HEADER & CHANGER */}
                  <div id="meeting-calendar-bar" className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-xl p-4 shadow-md">
                    <div className="flex items-center space-x-2.5 text-slate-100 font-bold text-xs tracking-wide">
                      <Calendar className="text-[#00a2e8]" size={16} />
                      <span className="uppercase text-slate-300">Lịch họp</span>
                    </div>
                  </div>

                  {/* MEETING BUILDER CONTROLS GRID */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    
                    {/* LEFT PANEL: CHỌN PHÒNG HỌP & nhóm nhân viên */}
                    <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between relative">
                      <div>
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                          <span>Thông tin cuộc họp</span>
                        </h4>
                        
                        <div className="space-y-4">
                          {/* Tên cuộc họp */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Tên cuộc họp</label>
                            <input 
                              type="text"
                              value={schMeetingTitle}
                              onChange={(e) => setSchMeetingTitle(e.target.value)}
                              placeholder="Nhập tên cuộc họp..."
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white focus:outline-none transition-all h-[42px]"
                            />
                          </div>

                          {/* Dropdown Khu vực (Phòng họp) - load từ location thật (areasData) */}
                          <div className="space-y-1.5 text-left relative">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Khu vực / Phòng họp</label>
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsSchMeetingAreaOpen(!isSchMeetingAreaOpen);
                                  setIsSchMeetingDepsOpen(false);
                                }}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px] cursor-pointer"
                              >
                                <span className="font-semibold text-slate-200">
                                  {areasData.length === 0 ? 'Chưa có khu vực nào' : (schMeetingArea || 'Chọn khu vực...')}
                                </span>
                                <ChevronDown size={14} className="text-slate-400" />
                              </button>
                              {isSchMeetingAreaOpen && (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setIsSchMeetingAreaOpen(false)} />
                                  <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden max-h-56 overflow-y-auto">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setSchMeetingAreaId('all');
                                        setIsSchMeetingAreaOpen(false);
                                      }}
                                      className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between border-b border-[#2d2f3c]/40 pb-2.5 ${
                                        schMeetingAreaId === 'all' ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                                      }`}
                                    >
                                      <span>All (*) - Mặc định</span>
                                      {schMeetingAreaId === 'all' && <Check size={14} className="text-[#00a2e8]" />}
                                    </button>
                                    {areasData.length === 0 ? (
                                      <div className="px-4 py-3 text-xs text-slate-500 italic">Chưa có khu vực nào, vui lòng tạo ở trang Quản lý khu vực.</div>
                                    ) : (
                                      areasData.map((a) => (
                                        <button
                                          key={a.id}
                                          type="button"
                                          onClick={() => {
                                            setSchMeetingAreaId(a.id);
                                            setIsSchMeetingAreaOpen(false);
                                          }}
                                          className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
                                            schMeetingAreaId === a.id ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                                          }`}
                                        >
                                          <span>{a.name}</span>
                                          {schMeetingAreaId === a.id && <Check size={14} className="text-[#00a2e8]" />}
                                        </button>
                                      ))
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          {/* Multiselect nhóm nhân viên - load từ human_list thật (humanGroups) */}
                          <div className="space-y-1.5 text-left relative">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">nhóm nhân viên tham gia (Multiselect)</label>
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => {
                                  setIsSchMeetingDepsOpen(!isSchMeetingDepsOpen);
                                  setIsSchMeetingAreaOpen(false);
                                }}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none min-h-[42px] cursor-pointer"
                              >
                                <div className="flex flex-wrap gap-1.5 items-center max-w-[90%] py-0.5">
                                  {schMeetingHumanGroupIds.length === 0 ? (
                                    <span className="text-slate-400">Chọn nhóm nhân viên...</span>
                                  ) : (
                                    schMeetingHumanGroupIds.map(gid => {
                                      if (gid === 'all') {
                                        return (
                                          <span key="all" className="bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20 px-2 py-0.5 rounded text-[10px] font-bold">
                                            All (*)
                                          </span>
                                        );
                                      }
                                      const g = humanGroups.find(hg => hg.id === gid);
                                      return (
                                        <span key={gid} className="bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20 px-2 py-0.5 rounded text-[10px] font-bold">
                                          {g?.name || gid}
                                        </span>
                                      );
                                    })
                                  )}
                                </div>
                                <ChevronDown size={14} className="text-slate-400 shrink-0" />
                              </button>
                              {isSchMeetingDepsOpen && (
                                <>
                                  <div className="fixed inset-0 z-30" onClick={() => setIsSchMeetingDepsOpen(false)} />
                                  <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden max-h-56 overflow-y-auto">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        if (schMeetingHumanGroupIds.includes('all')) {
                                          setSchMeetingHumanGroupIds([]);
                                        } else {
                                          setSchMeetingHumanGroupIds(['all']);
                                        }
                                      }}
                                      className="w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center space-x-3 text-slate-300 cursor-pointer border-b border-[#2d2f3c]/40 pb-2.5"
                                    >
                                      <input 
                                        type="checkbox" 
                                        checked={schMeetingHumanGroupIds.includes('all')}
                                        readOnly
                                        className="rounded border-[#2d2f3c] bg-[#111218] text-[#00a2e8] focus:ring-0 focus:ring-offset-0 cursor-pointer w-3.5 h-3.5"
                                      />
                                      <span className={schMeetingHumanGroupIds.includes('all') ? 'text-[#00a2e8] font-semibold' : ''}>All (*)</span>
                                    </button>
                                    {humanGroups.length === 0 ? (
                                      <div className="px-4 py-3 text-xs text-slate-500 italic">Chưa có nhóm nhân viên nào.</div>
                                    ) : (
                                      humanGroups.map((g) => {
                                        const isSelected = schMeetingHumanGroupIds.includes(g.id);
                                        return (
                                          <button
                                            key={g.id}
                                            type="button"
                                            onClick={() => {
                                              if (isSelected) {
                                                setSchMeetingHumanGroupIds(schMeetingHumanGroupIds.filter(id => id !== g.id));
                                              } else {
                                                const withoutAll = schMeetingHumanGroupIds.filter(id => id !== 'all');
                                                setSchMeetingHumanGroupIds([...withoutAll, g.id]);
                                              }
                                            }}
                                            className="w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center space-x-3 text-slate-300 cursor-pointer"
                                          >
                                            <input 
                                              type="checkbox" 
                                              checked={isSelected}
                                              readOnly
                                              className="rounded border-[#2d2f3c] bg-[#111218] text-[#00a2e8] focus:ring-0 focus:ring-offset-0 cursor-pointer w-3.5 h-3.5"
                                            />
                                            <span className={isSelected ? 'text-[#00a2e8] font-semibold' : ''}>{g.name}</span>
                                          </button>
                                        );
                                      })
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT PANEL: THỜI GIAN & TẠO CUỘC HỌP */}
                    <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                          <span>Thời gian cuộc họp</span>
                        </h4>

                        <div className="grid grid-cols-2 gap-4">
                          {/* Từ giờ */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Từ (giờ)</label>
                            <input 
                              type="time" 
                              value={schMeetingStartTime}
                              onChange={(e) => setSchMeetingStartTime(e.target.value)}
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                            />
                          </div>

                          {/* Đến giờ */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Đến (giờ)</label>
                            <input 
                              type="time" 
                              value={schMeetingEndTime}
                              onChange={(e) => setSchMeetingEndTime(e.target.value)}
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                            />
                          </div>
                        </div>

                        {/* Pick Ngày & Toggle nâng cao */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {/* Pick Ngày */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Ngày họp</label>
                            <input 
                              type="date"
                              value={schMeetingDate}
                              onChange={(e) => setSchMeetingDate(e.target.value)}
                              className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                            />
                          </div>

                          {/* Toggle hiện/ẩn tuỳ chọn chấm công trước/sau giờ họp */}
                          <div className="flex items-end">
                            <button
                              type="button"
                              onClick={() => setShowAdvancedMeetingFields(!showAdvancedMeetingFields)}
                              className="w-full flex items-center justify-center space-x-1.5 h-[42px] bg-[#1c1d26] hover:bg-[#20212a] border border-[#2d2f3c] text-slate-300 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                            >
                              <ChevronDown size={13} className={`transition-transform duration-200 ${showAdvancedMeetingFields ? 'rotate-180' : ''}`} />
                              <span>{showAdvancedMeetingFields ? 'Ẩn tuỳ chọn nâng cao' : 'Tuỳ chọn nâng cao'}</span>
                            </button>
                          </div>
                        </div>

                        {/* 2 ô nâng cao: time_before_begin / time_after_end - ẩn mặc định theo yêu cầu */}
                        {showAdvancedMeetingFields && (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1.5 text-left">
                              <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                                Chấm công trước (phút)
                              </label>
                              <input
                                type="number"
                                min={0}
                                value={schMeetingBeforeBegin}
                                onChange={(e) => setSchMeetingBeforeBegin(Math.max(0, parseInt(e.target.value, 10) || 0))}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono"
                              />
                            </div>
                            <div className="space-y-1.5 text-left">
                              <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                                Chấm công sau (phút)
                              </label>
                              <input
                                type="number"
                                min={0}
                                value={schMeetingAfterEnd}
                                onChange={(e) => setSchMeetingAfterEnd(Math.max(0, parseInt(e.target.value, 10) || 0))}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono"
                              />
                            </div>
                          </div>
                        )}

                        {/* Button "Tạo cuộc họp" */}
                        <div className="mt-4">
                          <button
                            onClick={() => {
                              if (!schMeetingTitle.trim()) {
                                alert('Vui lòng nhập tên cuộc họp!');
                                return;
                              }
                              if (!schMeetingAreaId) {
                                alert('Vui lòng chọn khu vực / phòng họp!');
                                return;
                              }
                              if (schMeetingHumanGroupIds.length === 0) {
                                alert('Vui lòng chọn ít nhất một nhóm nhân viên tham gia!');
                                return;
                              }

                              // Clone saved data to preview
                              const dataToModify = JSON.parse(JSON.stringify(localMeetings));

                              dataToModify.push({
                                id: `preview-${Date.now()}`,
                                isNew: true,
                                title: schMeetingTitle.trim(),
                                areaId: schMeetingAreaId,
                                area: schMeetingArea,
                                date: schMeetingDate,
                                startTime: schMeetingStartTime,
                                endTime: schMeetingEndTime,
                                departments: schMeetingHumanGroupIds.map(gid => humanGroups.find(g => g.id === gid)?.name || gid),
                                groupIds: [...schMeetingHumanGroupIds],
                                timeBeforeBegin: schMeetingBeforeBegin,
                                timeAfterEnd: schMeetingAfterEnd,
                              });

                              setSchMeetingPreviewData(dataToModify);
                              setIsFillingMeetingTable(true);
                            }}
                            className="w-full bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md shadow-[#00a2e8]/25 cursor-pointer h-[42px] text-xs"
                          >
                            <Plus size={14} />
                            <span>Tạo cuộc họp</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* INTERACTIVE CALENDAR TABLE CONTAINER */}
                  <div className="bg-[#14151b] border border-[#21232d] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="p-4 bg-[#181922] border-b border-[#21232d] flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-[#00a2e8]" />
                        <h4 className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                          Lịch họp của Khu vực/Phòng họp <span className="text-[#00a2e8] font-mono">{schMeetingArea}</span> ngày <span className="text-[#00a2e8] font-mono">{schMeetingDate}</span>
                        </h4>
                      </div>
                      <div className="flex items-center space-x-3">
                        {isFillingMeetingTable && (
                          <div className="flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Preview Mode</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="w-full overflow-x-auto select-none">
                      <div className="p-5 space-y-6 bg-[#111218] min-w-[800px]">
                        {/* Hours Labels Strip with Toggle on the Left */}
                        <div className="flex items-center border-b border-[#21232d]/60 pb-3">
                          {/* Left column (20% width): Compact View Mode Buttons */}
                          <div className="w-[20%] text-left pr-4 flex items-center">
                            <div className="flex bg-[#0d0e12] p-1 rounded-lg border border-[#2d2f3c]/60 space-x-1">
                              <button
                                type="button"
                                onClick={() => setSchMeetingLayout('by-meeting')}
                                title="Hiển thị theo cuộc họp"
                                className={`px-2 py-1 rounded-md text-[10px] font-semibold flex items-center space-x-1 transition duration-150 cursor-pointer ${
                                  schMeetingLayout === 'by-meeting'
                                    ? 'bg-[#00a2e8] text-white font-bold'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                <Calendar size={11} />
                                <span>Họp</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setSchMeetingLayout('by-department')}
                                title="Hiển thị theo nhóm nhân viên"
                                className={`px-2 py-1 rounded-md text-[10px] font-semibold flex items-center space-x-1 transition duration-150 cursor-pointer ${
                                  schMeetingLayout === 'by-department'
                                    ? 'bg-[#00a2e8] text-white font-bold'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                <Users size={11} />
                                <span>nhóm nhân viên</span>
                              </button>
                            </div>
                          </div>

                          {/* Right column (flex-1): Hour Indicators */}
                          <div className="flex-1 grid grid-cols-24 gap-0 text-[9px] font-mono font-bold text-slate-500 tracking-wider text-center">
                            {Array.from({ length: 24 }, (_, h) => (
                              <div key={h} className="border-r border-[#21232d]/30 last:border-0">
                                {String(h).padStart(2, '0')}:00
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Timeline Rows */}
                        {(() => {
                          const activeSchedules = isFillingMeetingTable && schMeetingPreviewData ? schMeetingPreviewData : localMeetings;

                          // Filter meetings of that room and that date
                          const activeMeetings = activeSchedules.filter(
                            (m: any) => (schMeetingAreaId === 'all' || m.areaId === schMeetingAreaId) && m.date === schMeetingDate
                          );

                          if (activeMeetings.length === 0) {
                            return (
                              <div className="py-12 text-center text-slate-500 text-xs font-semibold uppercase tracking-wider">
                                Không có cuộc họp nào được lên lịch cho phòng này vào ngày đã chọn
                              </div>
                            );
                          }

                          if (schMeetingLayout === 'by-meeting') {
                            return (
                              <div className="flex items-center">
                                {/* Left Column: Static header for single combined row */}
                                <div className="w-[20%] text-left pr-4 flex flex-col justify-center">
                                  <span className="font-bold text-xs text-slate-100 block">Lịch họp trong ngày</span>
                                  <span className="text-[10px] text-slate-500 font-medium">({activeMeetings.length} cuộc họp)</span>
                                </div>

                                {/* Right Column: Single timeline track containing all meeting blocks */}
                                <div 
                                  id="meeting-track-combined"
                                  className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                                >
                                  {/* Background Grid Lines */}
                                  {Array.from({ length: 24 }, (_, h) => (
                                    <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                                  ))}

                                  {/* Map and render each meeting block inside the shared track */}
                                  {activeMeetings.map((meet: any) => {
                                    const parseTimeToPercent = (tStr: string) => {
                                      const [h, m] = (tStr || '00:00').split(':').map(Number);
                                      return ((h * 60 + m) / (24 * 60)) * 100;
                                    };

                                    const startPct = parseTimeToPercent(meet.startTime || '09:00');
                                    const endPct = parseTimeToPercent(meet.endTime || '11:00');
                                    const barWidth = Math.max(endPct - startPct, 3);

                                    return (
                                      <div 
                                        key={meet.id}
                                        className="absolute top-1.5 bottom-1.5 bg-[#00a2e8]/20 border border-[#00a2e8] rounded-xl flex items-center justify-between px-1 shadow-md shadow-[#00a2e8]/10 group transition duration-200 hover:bg-[#00a2e8]/30 cursor-move"
                                        style={{ left: `${startPct}%`, width: `${barWidth}%` }}
                                        onDoubleClick={() => setSchMeetingLayout('by-department')}
                                        onMouseDown={(e) => {
                                          // Start moving
                                          setDraggingMeeting({
                                            meetingId: meet.id,
                                            type: 'move',
                                            startX: e.clientX,
                                            initialStartTime: meet.startTime,
                                            initialEndTime: meet.endTime
                                          });
                                        }}
                                      >
                                        {/* Left resize handle */}
                                        <div 
                                          className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-l-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                          onMouseDown={(e) => {
                                            e.stopPropagation();
                                            setDraggingMeeting({
                                              meetingId: meet.id,
                                              type: 'resize-start',
                                              startX: e.clientX,
                                              initialStartTime: meet.startTime,
                                              initialEndTime: meet.endTime
                                            });
                                          }}
                                        >
                                          ⋮
                                        </div>

                                        <div className="text-[10px] text-[#00a2e8] font-bold font-mono tracking-wider truncate flex items-center space-x-1.5 px-2 select-none pointer-events-none">
                                          <Clock size={11} className="shrink-0" />
                                          <span>({meet.startTime} - {meet.endTime})</span>
                                        </div>

                                        {/* Hover Tooltip / Popover */}
                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#181921]/95 border border-[#21232d] text-white text-xs p-3 rounded-xl shadow-2xl z-30 min-w-[200px] backdrop-blur-md">
                                          <div className="flex items-start justify-between gap-2 pointer-events-none">
                                            <div className="font-bold text-slate-100 mb-1 text-left">{meet.title}</div>
                                            <button
                                              type="button"
                                              onMouseDown={(e) => e.stopPropagation()}
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                if (!confirm(`Xoá cuộc họp "${meet.title}"?`)) return;
                                                setDeletingMeetingId(meet.id);
                                                deleteMeeting(meet.id)
                                                  .catch((err: any) => alert(err.message || 'Không thể xoá cuộc họp.'))
                                                  .finally(() => setDeletingMeetingId(null));
                                              }}
                                              disabled={deletingMeetingId === meet.id}
                                              className="pointer-events-auto shrink-0 p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition disabled:opacity-50"
                                              title="Xoá cuộc họp"
                                            >
                                              {deletingMeetingId === meet.id ? <Loader2 size={12} className="animate-spin" /> : <Trash2 size={12} />}
                                            </button>
                                          </div>
                                          <div className="text-[10px] text-[#00a2e8] font-mono mb-2 text-left flex items-center space-x-1 pointer-events-none">
                                            <Clock size={10} />
                                            <span>{meet.startTime} - {meet.endTime}</span>
                                          </div>
                                          <div className="flex flex-wrap gap-1 border-t border-[#21232d] pt-1.5 mt-1.5 pointer-events-none">
                                            {meet.departments && meet.departments.map((d: string) => (
                                              <span key={d} className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[8px] font-semibold border border-slate-700/50">
                                                {d}
                                              </span>
                                            ))}
                                          </div>
                                          {/* Arrow */}
                                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d] pointer-events-none" />
                                        </div>

                                        {/* Right resize handle */}
                                        <div 
                                          className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-r-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                          onMouseDown={(e) => {
                                            e.stopPropagation();
                                            setDraggingMeeting({
                                              meetingId: meet.id,
                                              type: 'resize-end',
                                              startX: e.clientX,
                                              initialStartTime: meet.startTime,
                                              initialEndTime: meet.endTime
                                            });
                                          }}
                                        >
                                          ⋮
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          } else {
                            // Layout: by-department
                            const participatingDeps = Array.from(
                              new Set(activeMeetings.flatMap((m: any) => m.departments || []))
                            ) as string[];

                            if (participatingDeps.length === 0) {
                              return (
                                <div className="py-12 text-center text-slate-500 text-xs font-semibold uppercase tracking-wider">
                                  Không có nhóm nhân viên nào tham gia các cuộc họp ngày hôm nay
                                </div>
                              );
                            }

                            return participatingDeps.map((depName: string) => {
                              // Find all meetings that this department is participating in
                              const depMeetings = activeMeetings.filter(
                                (m: any) => m.departments && m.departments.includes(depName)
                              );

                              return (
                                <div key={depName} className="flex items-center">
                                  {/* Department Column Header */}
                                  <div className="w-[20%] text-left pr-4 flex flex-col justify-center">
                                    <span className="font-bold text-xs text-slate-100 block truncate" title={depName}>
                                      {depName}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-medium">
                                      {depMeetings.length} cuộc họp tham gia
                                    </span>
                                  </div>

                                  {/* Continuous Horizontal Timeline Bar */}
                                  <div 
                                    id={`meeting-track-dep-${depName}`}
                                    className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                                  >
                                    {/* Background Grid Lines */}
                                    {Array.from({ length: 24 }, (_, h) => (
                                      <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                                    ))}

                                    {/* Render multiple meeting blocks if they participate in more than one */}
                                    {depMeetings.map((meet: any) => {
                                      const parseTimeToPercent = (tStr: string) => {
                                        const [h, m] = (tStr || '00:00').split(':').map(Number);
                                        return ((h * 60 + m) / (24 * 60)) * 100;
                                      };

                                      const startPct = parseTimeToPercent(meet.startTime || '09:00');
                                      const endPct = parseTimeToPercent(meet.endTime || '11:00');
                                      const barWidth = Math.max(endPct - startPct, 3);

                                      return (
                                        <div 
                                          key={meet.id}
                                          className="absolute top-1.5 bottom-1.5 bg-[#00a2e8]/20 border border-[#00a2e8] rounded-xl flex items-center justify-between px-1 shadow-md shadow-[#00a2e8]/10 group transition duration-200 hover:bg-[#00a2e8]/30 cursor-move"
                                          style={{ left: `${startPct}%`, width: `${barWidth}%` }}
                                          onDoubleClick={() => setSchMeetingLayout('by-meeting')}
                                          onMouseDown={(e) => {
                                            // Start moving
                                            setDraggingMeeting({
                                              meetingId: meet.id,
                                              type: 'move',
                                              startX: e.clientX,
                                              initialStartTime: meet.startTime,
                                              initialEndTime: meet.endTime
                                            });
                                          }}
                                        >
                                          {/* Left resize handle */}
                                          <div 
                                            className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-l-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                            onMouseDown={(e) => {
                                              e.stopPropagation();
                                              setDraggingMeeting({
                                                meetingId: meet.id,
                                                type: 'resize-start',
                                                startX: e.clientX,
                                                initialStartTime: meet.startTime,
                                                initialEndTime: meet.endTime
                                              });
                                            }}
                                          >
                                            ⋮
                                          </div>

                                          <div className="text-[10px] text-[#00a2e8] font-bold font-mono tracking-wider truncate flex items-center space-x-1.5 px-2 select-none pointer-events-none">
                                            <Clock size={11} className="shrink-0" />
                                            <span className="truncate">{meet.title} ({meet.startTime} - {meet.endTime})</span>
                                          </div>

                                          {/* Hover Tooltip also for department view */}
                                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#181921]/95 border border-[#21232d] text-white text-xs p-3 rounded-xl shadow-2xl z-30 min-w-[200px] backdrop-blur-md">
                                            <div className="flex items-start justify-between gap-2 pointer-events-none">
                                              <div className="font-bold text-slate-100 mb-1 text-left">{meet.title}</div>
                                              <button
                                                type="button"
                                                onMouseDown={(e) => e.stopPropagation()}
                                                onClick={(e) => {
                                                  e.stopPropagation();
                                                  if (!confirm(`Xoá cuộc họp "${meet.title}"?`)) return;
                                                  setDeletingMeetingId(meet.id);
                                                  deleteMeeting(meet.id)
                                                    .catch((err: any) => alert(err.message || 'Không thể xoá cuộc họp.'))
                                                    .finally(() => setDeletingMeetingId(null));
                                                }}
                                                disabled={deletingMeetingId === meet.id}
                                                className="pointer-events-auto shrink-0 p-1 rounded text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition disabled:opacity-50"
                                                title="Xoá cuộc họp"
                                              >
                                                {deletingMeetingId === meet.id ? <Loader2 size={12} className="animate-spin" /> : <Trash2 size={12} />}
                                              </button>
                                            </div>
                                            <div className="text-[10px] text-[#00a2e8] font-mono mb-2 text-left flex items-center space-x-1 pointer-events-none">
                                              <Clock size={10} />
                                              <span>{meet.startTime} - {meet.endTime}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-1 border-t border-[#21232d] pt-1.5 mt-1.5 pointer-events-none">
                                              {meet.departments && meet.departments.map((d: string) => (
                                                <span key={d} className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[8px] font-semibold border border-slate-700/50">
                                                  {d}
                                                </span>
                                              ))}
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d] pointer-events-none" />
                                          </div>

                                          {/* Right resize handle */}
                                          <div 
                                            className="w-2.5 h-full bg-[#00a2e8]/50 hover:bg-[#00a2e8] rounded-r-lg cursor-ew-resize flex items-center justify-center text-white text-[8px] font-bold"
                                            onMouseDown={(e) => {
                                              e.stopPropagation();
                                              setDraggingMeeting({
                                                meetingId: meet.id,
                                                type: 'resize-end',
                                                startX: e.clientX,
                                                initialStartTime: meet.startTime,
                                                initialEndTime: meet.endTime
                                              });
                                            }}
                                          >
                                            ⋮
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            });
                          }
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* BOTTOM SAVE ACTIONS GROUP */}
                  {isFillingMeetingTable ? (
                    <div className="flex items-center justify-between bg-[#151722] border-2 border-amber-500/20 rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center space-x-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                        <span className="text-xs text-amber-300 font-semibold">Bạn đang ở chế độ Xem trước Lịch họp (Chưa Lưu). Hãy nhấn Lưu cuộc họp để cập nhật chính thức.</span>
                      </div>
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => {
                            setSchMeetingPreviewData(null);
                            setIsFillingMeetingTable(false);
                          }}
                          className="px-4 py-2 border border-[#2d2f3c] text-slate-400 hover:text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer"
                        >
                          Hủy xem trước
                        </button>
                        <button 
                          disabled={isSavingMeeting}
                          onClick={async () => {
                            if (!schMeetingPreviewData) return;

                            // Check overwrite with saved meeting data on that specific day
                            let hasOverwrite = false;
                            const activeM = schMeetingPreviewData.filter((m: any) => m.date === schMeetingDate && (schMeetingAreaId === 'all' || m.areaId === schMeetingAreaId));
                            for (let i = 0; i < activeM.length; i++) {
                              for (let j = i + 1; j < activeM.length; j++) {
                                const m1 = activeM[i];
                                const m2 = activeM[j];
                                if (m1.areaId === m2.areaId || m1.areaId === 'all' || m2.areaId === 'all') {
                                  const s1 = timeStrToMinutes(m1.startTime);
                                  const e1 = timeStrToMinutes(m1.endTime);
                                  const s2 = timeStrToMinutes(m2.startTime);
                                  const e2 = timeStrToMinutes(m2.endTime);
                                  if (s1 < e2 && s2 < e1) {
                                    hasOverwrite = true;
                                    break;
                                  }
                                }
                              }
                              if (hasOverwrite) break;
                            }

                            if (hasOverwrite) {
                              setShowMeetingOverwriteConfirm(true);
                              return;
                            }

                            // Persist: các bản ghi mới (isNew) -> createMeeting; các bản ghi có sẵn
                            // đã bị sửa giờ trong preview -> updateMeeting. Gọi API thật tới /meeting.
                            setIsSavingMeeting(true);
                            setMeetingSaveError('');
                            try {
                              for (const m of schMeetingPreviewData) {
                                if (m.isNew) {
                                  const groupIds = m.groupIds.includes('all') ? humanGroups.map(hg => hg.id) : m.groupIds;
                                  if (m.areaId === 'all') {
                                    for (const area of areasData) {
                                      await createMeeting({
                                        title: m.title,
                                        location_id: area.id,
                                        group_ids: groupIds,
                                        time_start: m.startTime,
                                        time_end: m.endTime,
                                        date_organize: m.date,
                                        time_before_begin: m.timeBeforeBegin ?? 30,
                                        time_after_end: m.timeAfterEnd ?? 30,
                                      });
                                    }
                                  } else {
                                    await createMeeting({
                                      title: m.title,
                                      location_id: m.areaId,
                                      group_ids: groupIds,
                                      time_start: m.startTime,
                                      time_end: m.endTime,
                                      date_organize: m.date,
                                      time_before_begin: m.timeBeforeBegin ?? 30,
                                      time_after_end: m.timeAfterEnd ?? 30,
                                    });
                                  }
                                } else {
                                  const original = localMeetings.find(lm => lm.id === m.id);
                                  if (original && (original.startTime !== m.startTime || original.endTime !== m.endTime)) {
                                    await updateMeeting(m.id, { time_start: m.startTime, time_end: m.endTime });
                                  }
                                }
                              }
                              setSchMeetingPreviewData(null);
                              setIsFillingMeetingTable(false);
                              setShowMeetingSaveToast(true);
                              setTimeout(() => setShowMeetingSaveToast(false), 4000);
                            } catch (err: any) {
                              setMeetingSaveError(err.message || 'Không thể lưu cuộc họp. Vui lòng thử lại.');
                            } finally {
                              setIsSavingMeeting(false);
                            }
                          }}
                          className="px-5 py-2.5 bg-[#0078d7] hover:bg-[#006fca] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-[#0078d7]/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSavingMeeting ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                          <span>Lưu cuộc họp</span>
                        </button>
                      </div>
                      {meetingSaveError && (
                        <p className="text-[11px] text-red-400 font-medium mt-2 text-right">{meetingSaveError}</p>
                      )}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-2xl p-4 shadow-md">
                      <span className="text-xs text-slate-400 font-medium">Lịch họp đã được lưu chính thức và đồng bộ hóa tới các nhóm nhân viên.</span>
                      <button 
                        disabled
                        className="px-5 py-2.5 bg-slate-800 text-slate-500 rounded-xl text-xs font-bold flex items-center space-x-2 cursor-not-allowed border border-slate-700/30"
                      >
                        <Save size={14} />
                        <span>Đã lưu</span>
                      </button>
                    </div>
                  )}

                </div>
              )}
            </div>

      {/* 4. MODALS & POPUPS FOR SIMULATION */}
      {showPathModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-xl shadow-2xl overflow-hidden text-xs"
          >
            <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between">
              <span className="font-bold text-slate-200">Duyệt Thư Mục Cục Bộ</span>
              <button onClick={() => setShowPathModal(false)} className="text-slate-400 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <p className="text-slate-400 mb-2">Chọn thư mục đích để ghi ảnh mặt và file video check-in camera:</p>
              
              <div className="border border-[#2a2c3a] bg-[#111218] rounded-lg p-3 space-y-2 h-48 overflow-y-auto">
                <div className="flex items-center space-x-2 text-slate-300 py-1 hover:bg-slate-800 rounded px-1 cursor-pointer">
                  <FolderOpen size={14} className="text-yellow-500" />
                  <span>C: (Ổ đĩa hệ thống)</span>
                </div>
                <div className="pl-4 space-y-2">
                  <div className="flex items-center space-x-2 text-slate-300 py-1 hover:bg-slate-800 rounded px-1 cursor-pointer">
                    <FolderOpen size={14} className="text-yellow-500" />
                    <span>Program Files</span>
                  </div>
                  <div className="pl-4 space-y-1 border-l border-slate-700">
                    <div className="flex items-center space-x-2 text-[#00a2e8] py-1 bg-slate-800/50 rounded px-1 cursor-pointer font-semibold">
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
                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Đường dẫn đã chọn</label>
                <input 
                  type="text" 
                  value={savePath} 
                  onChange={(e) => setSavePath(e.target.value)}
                  className="w-full bg-[#111218] border border-[#2d2f3c] rounded px-3 py-1.5 font-mono text-slate-300 focus:outline-none focus:border-[#00a2e8]"
                />
              </div>
            </div>

            <div className="p-4 bg-[#14151c] border-t border-transparent flex justify-end space-x-2">
              <button 
                onClick={() => setShowPathModal(false)}
                className="py-1.5 px-3 border border-[#2d2f3c] rounded text-slate-400 hover:text-slate-200 transition"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={() => setShowPathModal(false)}
                className="py-1.5 px-4 bg-[#0078d7] hover:bg-[#0069be] text-white rounded font-medium transition"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {showScheduleSaveToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-emerald-950/95 rounded-xl shadow-2xl p-4 w-96 z-50 flex items-start space-x-3 text-xs"
          >
            <div className="p-1.5 bg-emerald-500/20 rounded-full text-emerald-400 shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-200">Lưu lịch biểu thành công!</h4>
              <p className="text-emerald-400 text-[11px] mt-0.5">Lịch chấm công đã được cập nhật thành công và đồng bộ hóa tới các thiết bị.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showOverwriteConfirm && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between">
              <span className="font-bold text-slate-200 text-xs uppercase tracking-wide flex items-center space-x-2 text-red-400">
                <span>⚠️ Xác Nhận Ghi Đè Lịch Trình</span>
              </span>
              <button onClick={() => setShowOverwriteConfirm(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X size={16} />
              </button>
            </div>
            <div className="p-6 space-y-3 text-left">
              <p className="text-slate-300 text-xs leading-relaxed">
                Phát hiện lịch phân công mới <span className="text-amber-400 font-semibold">đang bị trùng lắp và sẽ ghi đè lên thời gian cũ đã được phân trước đó</span>.
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Bạn có chắc chắn muốn ghi đè lên các ca làm việc hiện tại của nhân sự và lưu các thay đổi này không? Hành động này không thể hoàn tác.
              </p>
            </div>
            <div className="p-4 bg-[#14151c] border-t border-transparent flex flex-col sm:flex-row sm:justify-end gap-2 text-xs">
              <button 
                onClick={() => {
                  alert("Tính năng bỏ qua khu vực ghi đè đang được phát triển.");
                  setShowOverwriteConfirm(false);
                }}
                className="py-2 px-3 bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 rounded-xl font-semibold border border-amber-500/30 transition cursor-pointer text-center"
              >
                Bỏ qua các khu vực ghi đè
              </button>
              <button 
                onClick={() => setShowOverwriteConfirm(false)}
                className="py-2 px-3.5 border border-[#2d2f3c] rounded-xl text-slate-400 hover:text-slate-200 font-semibold transition cursor-pointer text-center"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={() => {
                  if (schedulePreviewData) {
                    setScheduleSavedData(schedulePreviewData);
                    setSchedulePreviewData(null);
                    setIsFillingTable(false);
                  }
                  setShowOverwriteConfirm(false);
                  setShowScheduleSaveToast(true);
                  setTimeout(() => setShowScheduleSaveToast(false), 4000);
                }}
                className="py-2 px-4 bg-[#0078d7] hover:bg-[#006cc1] text-white rounded-xl font-bold transition shadow-lg shadow-[#0078d7]/20 cursor-pointer text-center"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {showMeetingOverwriteConfirm && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between">
              <span className="font-bold text-slate-200 text-xs uppercase tracking-wide flex items-center space-x-2 text-red-400">
                <span>⚠️ Xác Nhận Ghi Đè Lịch Họp</span>
              </span>
              <button onClick={() => setShowMeetingOverwriteConfirm(false)} className="text-slate-400 hover:text-white cursor-pointer">
                <X size={16} />
              </button>
            </div>
            <div className="p-6 space-y-3 text-left">
              <p className="text-slate-300 text-xs leading-relaxed">
                Phát hiện lịch họp mới <span className="text-amber-400 font-semibold">đang bị trùng lắp và sẽ ghi đè lên thời gian cũ đã được phân trước đó</span>.
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Bạn có chắc chắn muốn ghi đè lên các lịch họp hiện tại của nhóm nhân viên và lưu các thay đổi này không? Hành động này không thể hoàn tác.
              </p>
            </div>
            <div className="p-4 bg-[#14151c] border-t border-transparent flex flex-col sm:flex-row sm:justify-end gap-2 text-xs">
              <button 
                onClick={() => {
                  alert("Tính năng bỏ qua khu vực ghi đè đang được phát triển.");
                  setShowMeetingOverwriteConfirm(false);
                }}
                className="py-2 px-3 bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 rounded-xl font-semibold border border-amber-500/30 transition cursor-pointer text-center"
              >
                Bỏ qua các khu vực ghi đè
              </button>
              <button 
                onClick={() => setShowMeetingOverwriteConfirm(false)}
                className="py-2 px-3.5 border border-[#2d2f3c] rounded-xl text-slate-400 hover:text-slate-200 font-semibold transition cursor-pointer text-center"
              >
                Hủy bỏ
              </button>
              <button 
                disabled={isSavingMeeting}
                onClick={async () => {
                  if (!schMeetingPreviewData) return;
                  // Người dùng đã xác nhận ghi đè -> vẫn persist qua API thật, bỏ qua check trùng.
                  setIsSavingMeeting(true);
                  setMeetingSaveError('');
                  try {
                    for (const m of schMeetingPreviewData) {
                      if (m.isNew) {
                        const groupIds = m.groupIds.includes('all') ? humanGroups.map(hg => hg.id) : m.groupIds;
                        if (m.areaId === 'all') {
                          for (const area of areasData) {
                            await createMeeting({
                              title: m.title,
                              location_id: area.id,
                              group_ids: groupIds,
                              time_start: m.startTime,
                              time_end: m.endTime,
                              date_organize: m.date,
                              time_before_begin: m.timeBeforeBegin ?? 30,
                              time_after_end: m.timeAfterEnd ?? 30,
                            });
                          }
                        } else {
                          await createMeeting({
                            title: m.title,
                            location_id: m.areaId,
                            group_ids: groupIds,
                            time_start: m.startTime,
                            time_end: m.endTime,
                            date_organize: m.date,
                            time_before_begin: m.timeBeforeBegin ?? 30,
                            time_after_end: m.timeAfterEnd ?? 30,
                          });
                        }
                      } else {
                        const original = localMeetings.find(lm => lm.id === m.id);
                        if (original && (original.startTime !== m.startTime || original.endTime !== m.endTime)) {
                          await updateMeeting(m.id, { time_start: m.startTime, time_end: m.endTime });
                        }
                      }
                    }
                    setSchMeetingPreviewData(null);
                    setIsFillingMeetingTable(false);
                    setShowMeetingOverwriteConfirm(false);
                    setShowMeetingSaveToast(true);
                    setTimeout(() => setShowMeetingSaveToast(false), 4000);
                  } catch (err: any) {
                    setMeetingSaveError(err.message || 'Không thể lưu cuộc họp. Vui lòng thử lại.');
                    setShowMeetingOverwriteConfirm(false);
                  } finally {
                    setIsSavingMeeting(false);
                  }
                }}
                className="py-2 px-4 bg-[#0078d7] hover:bg-[#006cc1] text-white rounded-xl font-bold transition shadow-lg shadow-[#0078d7]/20 cursor-pointer text-center disabled:opacity-50"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {showMeetingSaveToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-emerald-950/95 rounded-xl shadow-2xl p-4 w-96 z-50 flex items-start space-x-3 text-xs text-left"
          >
            <div className="p-1.5 bg-emerald-500/20 rounded-full text-emerald-400 shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-200">Lưu lịch họp thành công!</h4>
              <p className="text-emerald-400 text-[11px] mt-0.5">Lịch họp của các nhóm nhân viên đã được cập nhật thành công và đồng bộ hóa tới các thiết bị.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ==========================================
