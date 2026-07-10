"use client";

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Check, 
  ChevronDown, 
  Plus, 
  Users, 
  Save, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Area } from '@/lib/types';

interface AccessScheduleViewProps {
  areasData: Area[];
  scheduleSavedData: any[];
  setScheduleSavedData: React.Dispatch<React.SetStateAction<any[]>>;
  schMeetingSavedData: any[];
  setSchMeetingSavedData: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function AccessScheduleView({
  areasData,
  scheduleSavedData,
  setScheduleSavedData,
  schMeetingSavedData,
  setSchMeetingSavedData
}: AccessScheduleViewProps) {
  const [activeScheduleSubTab, setActiveScheduleSubTab] = useState<'attendance-schedule' | 'meeting-schedule'>('attendance-schedule');
  
  // Attendance schedule states
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

  // Meeting schedule states
  const [schMeetingLayout, setSchMeetingLayout] = useState<'by-meeting' | 'by-department'>('by-meeting');
  const [schMeetingTitle, setSchMeetingTitle] = useState<string>('Họp giao ban tuần');
  const [schMeetingArea, setSchMeetingArea] = useState<string>('Phòng họp A');
  const [schMeetingDepartments, setSchMeetingDepartments] = useState<string[]>(['Phòng Ban 1']);
  const [schMeetingDate, setSchMeetingDate] = useState<string>('2026-07-10');
  const [schMeetingStartTime, setSchMeetingStartTime] = useState<string>('09:00');
  const [schMeetingEndTime, setSchMeetingEndTime] = useState<string>('11:00');
  
  const [isSchMeetingAreaOpen, setIsSchMeetingAreaOpen] = useState<boolean>(false);
  const [isSchMeetingDepsOpen, setIsSchMeetingDepsOpen] = useState<boolean>(false);

  const [schMeetingPreviewData, setSchMeetingPreviewData] = useState<any[] | null>(null);
  const [isFillingMeetingTable, setIsFillingMeetingTable] = useState<boolean>(false);
  const [showMeetingOverwriteConfirm, setShowMeetingOverwriteConfirm] = useState<boolean>(false);
  const [showMeetingSaveToast, setShowMeetingSaveToast] = useState<boolean>(false);

  // Drag states
  const [draggingMeeting, setDraggingMeeting] = useState<{
    meetingId: string;
    type: 'move' | 'resize-start' | 'resize-end';
    startX: number;
    initialStartTime: string;
    initialEndTime: string;
  } | null>(null);

  const [draggingAttendance, setDraggingAttendance] = useState<{
    empId: string;
    type: 'move' | 'resize-start' | 'resize-end';
    startX: number;
    initialStartTime: string;
    initialEndTime: string;
  } | null>(null);

  // Helpers
  const minutesToTimeStr = (mins: number) => {
    const h = Math.max(0, Math.min(23, Math.floor(mins / 60)));
    const m = Math.max(0, Math.min(59, Math.floor(mins % 60)));
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  };

  const timeStrToMinutes = (tStr: string) => {
    const [h, m] = (tStr || '00:00').split(':').map(Number);
    return h * 60 + m;
  };

  // Drag handler for Meeting
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

      const dataToUpdate = isFillingMeetingTable && schMeetingPreviewData ? [...schMeetingPreviewData] : [...schMeetingSavedData];
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
        setSchMeetingSavedData(dataToUpdate);
      }
    };

    const handleMouseUp = () => {
      setDraggingMeeting(null);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggingMeeting, schMeetingPreviewData, schMeetingSavedData, isFillingMeetingTable, setSchMeetingSavedData]);

  // Drag handler for Attendance
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
  }, [draggingAttendance, scheduleCalendarDate, schedulePreviewData, scheduleSavedData, isFillingTable, setScheduleSavedData]);

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative bg-[#0d0e12]">
      {/* Header Tab Navigator */}
      <div id="schedule-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center space-x-4 text-left">
          <div className="text-xs text-slate-400 font-semibold tracking-wider">Lịch Ra Vào</div>
          
          <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
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

      {/* Body Content */}
      {activeScheduleSubTab === 'attendance-schedule' ? (
        /* LỊCH CHẤM CÔNG */
        <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-5">
          
          {/* CALENDAR DATE HEADER */}
          <div id="schedule-calendar-bar" className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-xl p-4 shadow-md text-left">
            <div className="flex items-center space-x-2.5 text-slate-100 font-bold text-xs tracking-wide">
              <Calendar className="text-[#00a2e8]" size={16} />
              <span className="uppercase text-slate-300">Lịch Chấm Công</span>
            </div>
            <div>
              <input 
                type="date"
                value={scheduleCalendarDate}
                onChange={(e) => setScheduleCalendarDate(e.target.value)}
                className="bg-[#1c1d26] border border-[#2d2f3c] text-white text-xs rounded px-3 py-1 focus:outline-none focus:border-[#00a2e8] font-mono cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* LEFT PANEL: CẤU HÌNH HIỂN THỊ */}
            <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between relative text-left">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                  <span>Cấu hình hiển thị</span>
                </h4>
                
                <div className="space-y-4">
                  {/* Dropdown Hiển thị */}
                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Chế độ hiển thị</label>
                    <div className="relative">
                      <button
                        type="button"
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
                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Khu vực kiểm soát (Multiselect)</label>
                    <div className="relative">
                      <button
                        type="button"
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
                          <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden max-h-48 overflow-y-auto">
                            {areasData.map(a => a.name).concat(['Checkin Area', 'Checkout Area', 'Lobby Area', 'Server Room']).filter((v, i, self) => self.indexOf(v) === i).map((areaOption) => {
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
                                    onChange={() => {}}
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
            <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4 text-left">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                  <span>Thiết lập ca & thời gian</span>
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Từ (giờ)</label>
                    <input 
                      type="time" 
                      value={scheduleStartTime}
                      onChange={(e) => setScheduleStartTime(e.target.value)}
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Đến (giờ)</label>
                    <input 
                      type="time" 
                      value={scheduleEndTime}
                      onChange={(e) => setScheduleEndTime(e.target.value)}
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Loại ca</label>
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

                  <div className="flex items-end">
                    <button
                      onClick={() => {
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
                        } else {
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
                      className="w-full bg-[#0078d7] hover:bg-[#006fca] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md shadow-[#0078d7]/20 cursor-pointer h-[42px] text-xs border-none"
                    >
                      <span>Điền vào bảng</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ATTENDANCE CALENDAR TABLE */}
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

                if (scheduleDisplay === 'Tuần') {
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
                          <th className="p-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-[#21232d] w-[20%]">Nhân viên / Nhóm</th>
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
                                        Trống
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
                  return (
                    <div className="p-5 space-y-6 bg-[#111218] min-w-[800px]">
                      {/* Hours Strip */}
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
                        
                        const parseTimeToPercent = (tStr: string) => {
                          const [h, m] = (tStr || '00:00').split(':').map(Number);
                          return ((h * 60 + m) / (24 * 60)) * 100;
                        };

                        const startPct = cell.assigned ? parseTimeToPercent(cell.startTime || '08:00') : 0;
                        const endPct = cell.assigned ? parseTimeToPercent(cell.endTime || '17:00') : 0;
                        const barWidth = cell.assigned ? Math.max(endPct - startPct, 3) : 0;

                        return (
                          <div key={emp.id} className="flex items-center">
                            <div className="w-[20%] text-left pr-4">
                              <span className="font-bold text-xs text-slate-100 block truncate">{emp.name}</span>
                            </div>

                            <div 
                              id={`attendance-track-${emp.id}`}
                              className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                            >
                              {Array.from({ length: 24 }, (_, h) => (
                                <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                              ))}

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
                                  Chưa phân ca
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                } else if (scheduleDisplay === 'Tháng') {
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
                    <div className="p-5 space-y-6 bg-[#111218] min-w-[800px] text-left">
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
                  return (
                    <div className="p-6 bg-[#111218] grid grid-cols-1 md:grid-cols-2 gap-6 min-w-[800px] text-left">
                      {activeSchedules.map((emp) => {
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
                <span className="text-xs text-amber-300 font-semibold">Bạn đang ở chế độ xem trước lịch chấm công (Chưa Lưu).</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => {
                    setSchedulePreviewData(null);
                    setIsFillingTable(false);
                  }}
                  className="px-4 py-2 border border-[#2d2f3c] text-slate-400 hover:text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer bg-transparent"
                >
                  Hủy xem trước
                </button>
                <button 
                  onClick={() => {
                    if (!schedulePreviewData) return;
                    let hasOverwrite = false;
                    for (let i = 0; i < scheduleSavedData.length; i++) {
                      const empSaved = scheduleSavedData[i];
                      const empPreview = schedulePreviewData.find(d => d.id === empSaved.id);
                      if (empPreview) {
                        const daysToCheck = Object.keys(empPreview.days);
                        for (let j = 0; j < daysToCheck.length; j++) {
                          const dateKey = daysToCheck[j];
                          if (empSaved.days[dateKey]?.assigned && empPreview.days[dateKey]?.assigned) {
                            hasOverwrite = true;
                            break;
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
                  className="px-5 py-2.5 bg-[#0078d7] hover:bg-[#006fca] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-[#0078d7]/20 cursor-pointer border-none"
                >
                  <Save size={14} />
                  <span>Lưu lịch biểu</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-2xl p-4 shadow-md text-left">
              <span className="text-xs text-slate-400 font-medium">Lịch biểu đã được lưu chính thức và đồng bộ hóa tới thiết bị check-in.</span>
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
        /* LỊCH HỌP */
        <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-5">
          <div id="meeting-schedule-input-bar" className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-left">
            <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between relative">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                  <span>Thiết lập cuộc họp mới</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Tên cuộc họp</label>
                    <input 
                      type="text"
                      value={schMeetingTitle}
                      onChange={(e) => setSchMeetingTitle(e.target.value)}
                      placeholder="Nhập tên cuộc họp..."
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none h-[42px] font-semibold"
                    />
                  </div>

                  <div className="space-y-1.5 relative">
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
                        <span className="font-semibold text-slate-200">{schMeetingArea}</span>
                        <ChevronDown size={14} className="text-slate-400" />
                      </button>
                      {isSchMeetingAreaOpen && (
                        <>
                          <div className="fixed inset-0 z-30" onClick={() => setIsSchMeetingAreaOpen(false)} />
                          <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                            {['Phòng họp A', 'Phòng họp B', 'Phòng họp Hội nghị', 'Lobby Area', 'Server Room'].map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => {
                                  setSchMeetingArea(opt);
                                  setIsSchMeetingAreaOpen(false);
                                }}
                                className={`w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
                                  schMeetingArea === opt ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-bold' : 'text-slate-300'
                                }`}
                              >
                                <span>{opt}</span>
                                {schMeetingArea === opt && <Check size={14} className="text-[#00a2e8]" />}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5 relative">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Phòng ban tham gia (Multiselect)</label>
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
                          {schMeetingDepartments.length === 0 ? (
                            <span className="text-slate-400">Chọn phòng ban...</span>
                          ) : (
                            schMeetingDepartments.map(depName => (
                              <span key={depName} className="bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20 px-2 py-0.5 rounded text-[10px] font-bold">
                                {depName}
                              </span>
                            ))
                          )}
                        </div>
                        <ChevronDown size={14} className="text-slate-400 shrink-0" />
                      </button>
                      {isSchMeetingDepsOpen && (
                        <>
                          <div className="fixed inset-0 z-30" onClick={() => setIsSchMeetingDepsOpen(false)} />
                          <div className="absolute left-0 right-0 mt-1.5 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-2xl z-40 py-1.5 overflow-hidden">
                            {['Phòng Ban 1', 'Phòng Ban 2', 'Ban Giám Đốc', 'Phòng Nhân Sự'].map((depOption) => {
                              const isSelected = schMeetingDepartments.includes(depOption);
                              return (
                                <button
                                  key={depOption}
                                  type="button"
                                  onClick={() => {
                                    if (isSelected) {
                                      setSchMeetingDepartments(schMeetingDepartments.filter(d => d !== depOption));
                                    } else {
                                      setSchMeetingDepartments([...schMeetingDepartments, depOption]);
                                    }
                                  }}
                                  className="w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-[#20212a] flex items-center space-x-3 text-slate-300 cursor-pointer"
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={isSelected}
                                    onChange={() => {}}
                                    className="rounded border-[#2d2f3c] bg-[#111218] text-[#00a2e8] focus:ring-0 focus:ring-offset-0 cursor-pointer w-3.5 h-3.5"
                                  />
                                  <span className={isSelected ? 'text-[#00a2e8] font-semibold' : ''}>{depOption}</span>
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

            <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-5 shadow-xl flex flex-col justify-between space-y-4">
              <div>
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 pb-2 border-b border-slate-800/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                  <span>Thời gian cuộc họp</span>
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Từ (giờ)</label>
                    <input 
                      type="time" 
                      value={schMeetingStartTime}
                      onChange={(e) => setSchMeetingStartTime(e.target.value)}
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Đến (giờ)</label>
                    <input 
                      type="time" 
                      value={schMeetingEndTime}
                      onChange={(e) => setSchMeetingEndTime(e.target.value)}
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">Ngày họp</label>
                    <input 
                      type="date"
                      value={schMeetingDate}
                      onChange={(e) => setSchMeetingDate(e.target.value)}
                      className="w-full bg-[#1c1d26] border border-[#2d2f3c] text-white rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-[#00a2e8] h-[42px] font-mono cursor-pointer"
                    />
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        if (!schMeetingTitle.trim()) {
                          alert('Vui lòng nhập tên cuộc họp!');
                          return;
                        }
                        if (schMeetingDepartments.length === 0) {
                          alert('Vui lòng chọn ít nhất một phòng ban tham gia!');
                          return;
                        }

                        const dataToModify = JSON.parse(JSON.stringify(schMeetingSavedData));
                        dataToModify.push({
                          id: `meet-${Date.now()}`,
                          title: schMeetingTitle.trim(),
                          area: schMeetingArea,
                          date: schMeetingDate,
                          startTime: schMeetingStartTime,
                          endTime: schMeetingEndTime,
                          departments: [...schMeetingDepartments]
                        });

                        setSchMeetingPreviewData(dataToModify);
                        setIsFillingMeetingTable(true);
                      }}
                      className="w-full bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md shadow-[#00a2e8]/25 cursor-pointer h-[42px] text-xs border-none"
                    >
                      <Plus size={14} />
                      <span>Tạo cuộc họp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MEETING CALENDAR TIMELINE CONTAINER */}
          <div className="bg-[#14151b] border border-[#21232d] rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#181922] border-b border-[#21232d] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#00a2e8]" />
                <h4 className="text-xs font-bold text-slate-200 tracking-wide uppercase">
                  Lịch họp của <span className="text-[#00a2e8] font-mono">{schMeetingArea}</span> ngày <span className="text-[#00a2e8] font-mono">{schMeetingDate}</span>
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
                <div className="flex items-center border-b border-[#21232d]/60 pb-3">
                  <div className="w-[20%] text-left pr-4 flex items-center">
                    <div className="flex bg-[#0d0e12] p-1 rounded-lg border border-[#2d2f3c]/60 space-x-1">
                      <button
                        type="button"
                        onClick={() => setSchMeetingLayout('by-meeting')}
                        className={`px-2 py-1 rounded-md text-[10px] font-semibold flex items-center space-x-1 transition duration-150 cursor-pointer ${
                          schMeetingLayout === 'by-meeting' ? 'bg-[#00a2e8] text-white font-bold' : 'text-slate-400 hover:text-slate-200 font-medium'
                        }`}
                      >
                        <Calendar size={11} />
                        <span>Họp</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSchMeetingLayout('by-department')}
                        className={`px-2 py-1 rounded-md text-[10px] font-semibold flex items-center space-x-1 transition duration-150 cursor-pointer ${
                          schMeetingLayout === 'by-department' ? 'bg-[#00a2e8] text-white font-bold' : 'text-slate-400 hover:text-slate-200 font-medium'
                        }`}
                      >
                        <Users size={11} />
                        <span>Phòng ban</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-24 gap-0 text-[9px] font-mono font-bold text-slate-500 tracking-wider text-center">
                    {Array.from({ length: 24 }, (_, h) => (
                      <div key={h} className="border-r border-[#21232d]/30 last:border-0">
                        {String(h).padStart(2, '0')}:00
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline content */}
                {(() => {
                  const activeSchedules = isFillingMeetingTable && schMeetingPreviewData ? schMeetingPreviewData : schMeetingSavedData;
                  const activeMeetings = activeSchedules.filter(
                    (m: any) => m.area === schMeetingArea && m.date === schMeetingDate
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
                        <div className="w-[20%] text-left pr-4 flex flex-col justify-center">
                          <span className="font-bold text-xs text-slate-100 block">Lịch họp trong ngày</span>
                          <span className="text-[10px] text-slate-500 font-medium">({activeMeetings.length} cuộc họp)</span>
                        </div>

                        <div 
                          id="meeting-track-combined"
                          className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                        >
                          {Array.from({ length: 24 }, (_, h) => (
                            <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                          ))}

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
                                onMouseDown={(e) => {
                                  setDraggingMeeting({
                                    meetingId: meet.id,
                                    type: 'move',
                                    startX: e.clientX,
                                    initialStartTime: meet.startTime,
                                    initialEndTime: meet.endTime
                                  });
                                }}
                              >
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

                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#181921]/95 border border-[#21232d] text-white text-xs p-3 rounded-xl shadow-2xl z-30 min-w-[200px] pointer-events-none backdrop-blur-md">
                                  <div className="font-bold text-slate-100 mb-1 text-left">{meet.title}</div>
                                  <div className="text-[10px] text-[#00a2e8] font-mono mb-2 text-left flex items-center space-x-1">
                                    <Clock size={10} />
                                    <span>{meet.startTime} - {meet.endTime}</span>
                                  </div>
                                  <div className="flex flex-wrap gap-1 border-t border-[#21232d] pt-1.5 mt-1.5">
                                    {meet.departments && meet.departments.map((d: string) => (
                                      <span key={d} className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[8px] font-semibold border border-slate-700/50">
                                        {d}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d]" />
                                </div>

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
                    const participatingDeps = Array.from(
                      new Set(activeMeetings.flatMap((m: any) => m.departments || []))
                    ) as string[];

                    if (participatingDeps.length === 0) {
                      return (
                        <div className="py-12 text-center text-slate-500 text-xs font-semibold uppercase tracking-wider">
                          Không có phòng ban nào tham gia các cuộc họp ngày hôm nay
                        </div>
                      );
                    }

                    return participatingDeps.map((depName: string) => {
                      const depMeetings = activeMeetings.filter(
                        (m: any) => m.departments && m.departments.includes(depName)
                      );

                      return (
                        <div key={depName} className="flex items-center">
                          <div className="w-[20%] text-left pr-4 flex flex-col justify-center">
                            <span className="font-bold text-xs text-slate-100 block truncate" title={depName}>
                              {depName}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium">
                              {depMeetings.length} cuộc họp
                            </span>
                          </div>

                          <div 
                            id={`meeting-track-dep-${depName}`}
                            className="flex-1 h-12 bg-[#171822] border border-[#2d2f3c]/60 rounded-2xl relative overflow-hidden flex items-center shadow-inner"
                          >
                            {Array.from({ length: 24 }, (_, h) => (
                              <div key={h} className="absolute top-0 bottom-0 border-r border-[#21232d]/30" style={{ left: `${(h / 24) * 100}%` }} />
                            ))}

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
                                  onMouseDown={(e) => {
                                    setDraggingMeeting({
                                      meetingId: meet.id,
                                      type: 'move',
                                      startX: e.clientX,
                                      initialStartTime: meet.startTime,
                                      initialEndTime: meet.endTime
                                    });
                                  }}
                                >
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
                                    <span className="truncate">{meet.title}</span>
                                  </div>

                                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-[#181921]/95 border border-[#21232d] text-white text-xs p-3 rounded-xl shadow-2xl z-30 min-w-[200px] pointer-events-none backdrop-blur-md">
                                    <div className="font-bold text-slate-100 mb-1 text-left">{meet.title}</div>
                                    <div className="text-[10px] text-[#00a2e8] font-mono mb-2 text-left flex items-center space-x-1">
                                      <Clock size={10} />
                                      <span>{meet.startTime} - {meet.endTime}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1 border-t border-[#21232d] pt-1.5 mt-1.5">
                                      {meet.departments && meet.departments.map((d: string) => (
                                        <span key={d} className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[8px] font-semibold border border-slate-700/50">
                                          {d}
                                        </span>
                                      ))}
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d]" />
                                  </div>

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

          {/* BOTTOM SAVE MEETING ACTIONS GROUP */}
          {isFillingMeetingTable ? (
            <div className="flex items-center justify-between bg-[#151722] border-2 border-amber-500/20 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs text-amber-300 font-semibold">Bạn đang ở chế độ xem trước lịch họp (Chưa Lưu).</span>
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => {
                    setSchMeetingPreviewData(null);
                    setIsFillingMeetingTable(false);
                  }}
                  className="px-4 py-2 border border-[#2d2f3c] text-slate-400 hover:text-slate-200 rounded-xl text-xs font-bold transition cursor-pointer bg-transparent"
                >
                  Hủy xem trước
                </button>
                <button 
                  onClick={() => {
                    if (!schMeetingPreviewData) return;

                    let hasOverwrite = false;
                    const activeM = schMeetingPreviewData.filter((m: any) => m.date === schMeetingDate && m.area === schMeetingArea);
                    for (let i = 0; i < activeM.length; i++) {
                      for (let j = i + 1; j < activeM.length; j++) {
                        const m1 = activeM[i];
                        const m2 = activeM[j];
                        const s1 = timeStrToMinutes(m1.startTime);
                        const e1 = timeStrToMinutes(m1.endTime);
                        const s2 = timeStrToMinutes(m2.startTime);
                        const e2 = timeStrToMinutes(m2.endTime);
                        if (s1 < e2 && s2 < e1) {
                          hasOverwrite = true;
                          break;
                        }
                      }
                      if (hasOverwrite) break;
                    }

                    if (hasOverwrite) {
                      setShowMeetingOverwriteConfirm(true);
                    } else {
                      setSchMeetingSavedData(schMeetingPreviewData);
                      setSchMeetingPreviewData(null);
                      setIsFillingMeetingTable(false);
                      setShowMeetingSaveToast(true);
                      setTimeout(() => setShowMeetingSaveToast(false), 4000);
                    }
                  }}
                  className="px-5 py-2.5 bg-[#0078d7] hover:bg-[#006fca] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-[#0078d7]/20 cursor-pointer border-none"
                >
                  <Save size={14} />
                  <span>Lưu cuộc họp</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-2xl p-4 shadow-md text-left">
              <span className="text-xs text-slate-400 font-medium">Lịch họp đã được lưu chính thức và đồng bộ hóa tới các phòng ban.</span>
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

      {/* CONFIRMATION OVERWRITE ATTENDANCE MODAL */}
      {showOverwriteConfirm && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between text-left">
              <span className="font-bold text-slate-200 text-xs uppercase tracking-wide flex items-center space-x-2 text-red-400">
                <span>⚠️ Xác Nhận Ghi Đè Lịch Trình</span>
              </span>
              <button onClick={() => setShowOverwriteConfirm(false)} className="text-slate-400 hover:text-white cursor-pointer border-none bg-transparent">
                <X size={16} />
              </button>
            </div>
            <div className="p-6 space-y-3 text-left">
              <p className="text-slate-300 text-xs leading-relaxed">
                Phát hiện lịch phân công mới <span className="text-amber-400 font-semibold">đang bị trùng lắp và sẽ ghi đè lên thời gian cũ đã được phân trước đó</span>.
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Bạn có chắc chắn muốn ghi đè lên các ca làm việc hiện tại của nhân sự và lưu các thay đổi này không?
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
                Bỏ qua ghi đè
              </button>
              <button 
                onClick={() => setShowOverwriteConfirm(false)}
                className="py-2 px-3.5 border border-[#2d2f3c] rounded-xl text-slate-400 hover:text-slate-200 font-semibold transition cursor-pointer text-center bg-transparent"
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
                className="py-2 px-4 bg-[#0078d7] hover:bg-[#006cc1] text-white rounded-xl font-bold transition shadow-lg shadow-[#0078d7]/20 cursor-pointer text-center border-none"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* CONFIRMATION OVERWRITE MEETING MODAL */}
      {showMeetingOverwriteConfirm && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between text-left">
              <span className="font-bold text-slate-200 text-xs uppercase tracking-wide flex items-center space-x-2 text-red-400">
                <span>⚠️ Xác Nhận Ghi Đè Lịch Họp</span>
              </span>
              <button onClick={() => setShowMeetingOverwriteConfirm(false)} className="text-slate-400 hover:text-white cursor-pointer border-none bg-transparent">
                <X size={16} />
              </button>
            </div>
            <div className="p-6 space-y-3 text-left">
              <p className="text-slate-300 text-xs leading-relaxed">
                Phát hiện lịch họp mới <span className="text-amber-400 font-semibold">đang bị trùng lắp và sẽ ghi đè lên thời gian cũ đã được phân trước đó</span>.
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Bạn có chắc chắn muốn ghi đè lên các lịch họp hiện tại của phòng ban và lưu các thay đổi này không?
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
                Bỏ qua ghi đè
              </button>
              <button 
                onClick={() => setShowMeetingOverwriteConfirm(false)}
                className="py-2 px-3.5 border border-[#2d2f3c] rounded-xl text-slate-400 hover:text-slate-200 font-semibold transition cursor-pointer text-center bg-transparent"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={() => {
                  if (schMeetingPreviewData) {
                    setSchMeetingSavedData(schMeetingPreviewData);
                    setSchMeetingPreviewData(null);
                    setIsFillingMeetingTable(false);
                  }
                  setShowMeetingOverwriteConfirm(false);
                  setShowMeetingSaveToast(true);
                  setTimeout(() => setShowMeetingSaveToast(false), 4000);
                }}
                className="py-2 px-4 bg-[#0078d7] hover:bg-[#006cc1] text-white rounded-xl font-bold transition shadow-lg shadow-[#0078d7]/20 cursor-pointer text-center border-none"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* ATTENDANCE SAVE TOAST */}
      <AnimatePresence>
        {showScheduleSaveToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-6 right-6 z-50 bg-[#1c1d27] border border-[#2d2f3d] p-4 rounded-xl shadow-2xl w-80 text-left flex items-start space-x-3 text-xs animate-in slide-in-from-bottom duration-300"
          >
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Check size={14} className="font-bold" />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-white leading-none font-sans">Lưu thành công!</div>
              <p className="text-[10px] text-slate-400 leading-tight">Lịch chấm công đã được đồng bộ hóa tới thiết bị.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MEETING SAVE TOAST */}
      <AnimatePresence>
        {showMeetingSaveToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-6 right-6 z-50 bg-[#1c1d27] border border-[#2d2f3c] p-4 rounded-xl shadow-2xl w-80 text-left flex items-start space-x-3 text-xs animate-in slide-in-from-bottom duration-300"
          >
            <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <Check size={14} className="font-bold" />
            </div>
            <div className="space-y-1">
              <div className="font-bold text-white leading-none font-sans">Lưu thành công!</div>
              <p className="text-[10px] text-slate-400 leading-tight">Lịch họp của các phòng ban đã được đồng bộ hóa.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
