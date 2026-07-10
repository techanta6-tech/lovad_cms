import { useState, useEffect, FormEvent } from 'react';
import { 
  List, 
  TrendingUp, 
  RotateCw, 
  Filter, 
  Camera, 
  FolderOpen, 
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
  Sparkles,
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
import { mockEventLogs, mockAreas } from './data';
import { EventLog, Area, CameraInfo, DeviceInfo, ChannelInfo } from './types';

export default function App() {
  // Navigation and view states
  const [activeSidebar, setActiveSidebar] = useState<'reports' | 'areas' | 'devices' | 'employees' | 'access-schedule'>('reports');
  const [activeTab, setActiveTab] = useState<'list' | 'attendance' | 'meeting' | 'chart'>('list');
  const [activeDeviceSubTab, setActiveDeviceSubTab] = useState<'device' | 'channel'>('device');
  const [activeScheduleSubTab, setActiveScheduleSubTab] = useState<'attendance-schedule' | 'meeting-schedule'>('attendance-schedule');
  const [activeEmployeeSubTab, setActiveEmployeeSubTab] = useState<'employees-list' | 'departments-list' | 'add-employee'>('employees-list');
  
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
  const [newEmployees, setNewEmployees] = useState<NewEmployee[]>([
    {
      id: 'EMP_1',
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
    }
  ]);
  const [showEmployeeSaveToast, setShowEmployeeSaveToast] = useState<boolean>(false);
  const [savedCount, setSavedCount] = useState<number>(0);
  const [departments, setDepartments] = useState<string[]>(['Phòng Ban 1', 'Phòng Ban 2', 'Ban Giám Đốc', 'Phòng Nhân Sự']);
  const [newDepartmentInput, setNewDepartmentInput] = useState('');

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
  const [filterTime, setFilterTime] = useState('');
  const [searchType, setSearchType] = useState<'text' | 'image'>('text');
  const [searchImage, setSearchImage] = useState<string | null>(null);
  const [threshold, setThreshold] = useState<number>(0.8);
  const [isOpenSearchTypeDropdown, setIsOpenSearchTypeDropdown] = useState(false);
  const [isOpenZoneDropdown, setIsOpenZoneDropdown] = useState(false);
  const [isOpenListDropdown, setIsOpenListDropdown] = useState(false);
  const [zoneSearch, setZoneSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjusted to show nicely inside layout
  
  // Selected event (default: Tran Phuoc Loi, STT 22)
  const [selectedEventId, setSelectedEventId] = useState<number>(22);
  
  // Selected area in Area Management (default: Checkin Area)
  const [selectedAreaId, setSelectedAreaId] = useState<string>('area-1');
  
  // Camera face capture settings for each Area
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
  
  // Save directory state
  const [savePath, setSavePath] = useState('C:\\Program Files\\DVMS System\\DVMS Client\\EventData\\');
  const [showPathModal, setShowPathModal] = useState(false);
  
  // Live ticking clock for camera view
  const [liveTime, setLiveTime] = useState(new Date());

  // Camera settings and mock feed variables
  const [cameraView, setCameraView] = useState('CAMERA CHECKIN');
  const [isCapturing, setIsCapturing] = useState(false);
  const [flashActive, setFlashActive] = useState(false);

  // Toast / Export status simulation
  const [exporting, setExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showExportToast, setShowExportToast] = useState(false);

  // New Camera creation in Area Management
  const [areasData, setAreasData] = useState<Area[]>(mockAreas);
  const [showAddCamModal, setShowAddCamModal] = useState(false);
  const [newCamName, setNewCamName] = useState('');
  const [newCamIp, setNewCamIp] = useState('192.168.1.100');
  const [newCamPort, setNewCamPort] = useState(554);
  const [newCamResolution, setNewCamResolution] = useState('1920x1080 (1080P)');
  const [showAddAreaInput, setShowAddAreaInput] = useState(false);
  const [newAreaName, setNewAreaName] = useState('');

  // Selected avatar view in the thumbnails panel
  // By default, it follows the selected event, but user can click a thumbnail to switch zoom/angle
  const [selectedThumbIndex, setSelectedThumbIndex] = useState(0);

  // Meeting report states
  const [meetingDate, setMeetingDate] = useState('2026-07-09');
  const [meetingStartTime, setMeetingStartTime] = useState('16:00');
  const [meetingEndTime, setMeetingEndTime] = useState('17:00');
  const [meetingGroups, setMeetingGroups] = useState<string[]>(['Phòng ban A', 'Phòng ban B', 'Phòng ban C', 'Phòng ban D', 'Khách hàng / Khác']);
  const [isMeetingGroupDropdownOpen, setIsMeetingGroupDropdownOpen] = useState(false);
  const [meetingSearchQuery, setMeetingSearchQuery] = useState('');
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

  // Device management states
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
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('dev-1');
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

  // Channels state (Quản lý kênh)
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

  // Attendance Report (Báo cáo chấm công) states
  const [attendanceType, setAttendanceType] = useState<string>('Overtime Hours');
  const [attendanceStartDate, setAttendanceStartDate] = useState<string>('2026-07-01');
  const [attendanceEndDate, setAttendanceEndDate] = useState<string>('2026-07-09');
  const [attendanceGroup, setAttendanceGroup] = useState<string>('All');
  const [isAttTypeOpen, setIsAttTypeOpen] = useState<boolean>(false);
  const [isAttGroupOpen, setIsAttGroupOpen] = useState<boolean>(false);
  const [isAttExportOpen, setIsAttExportOpen] = useState<boolean>(false);
  const [attendanceExportFormat, setAttendanceExportFormat] = useState<'CSV' | 'XLSX'>('CSV');
  const [exportedFileName, setExportedFileName] = useState<string>('ThongKeSuKien_DVMS.xlsx');

  // Access Schedule Management States
  const [scheduleDisplay, setScheduleDisplay] = useState<'Ngày' | 'Tuần' | 'Tháng' | 'Năm'>('Ngày');
  const [scheduleSelectedAreas, setScheduleSelectedAreas] = useState<string[]>(['Checkin Area']);
  const [scheduleStartTime, setScheduleStartTime] = useState<string>('08:00');
  const [scheduleEndTime, setScheduleEndTime] = useState<string>('17:00');
  const [scheduleType, setScheduleType] = useState<string>('Chấm công');
  const [scheduleCalendarDate, setScheduleCalendarDate] = useState<string>('2026-07-10');
  
  // Custom dropdown toggle states
  const [isSchDisplayOpen, setIsSchDisplayOpen] = useState<boolean>(false);
  const [isSchAreasOpen, setIsSchAreasOpen] = useState<boolean>(false);
  const [isSchTypeOpen, setIsSchTypeOpen] = useState<boolean>(false);

  // Scheduling data models
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

  const [schedulePreviewData, setSchedulePreviewData] = useState<any[] | null>(null);
  const [isFillingTable, setIsFillingTable] = useState<boolean>(false);
  const [showOverwriteConfirm, setShowOverwriteConfirm] = useState<boolean>(false);
  const [showScheduleSaveToast, setShowScheduleSaveToast] = useState<boolean>(false);

  // Meeting Schedule States
  const [schMeetingLayout, setSchMeetingLayout] = useState<'by-meeting' | 'by-department'>('by-meeting');
  const [schMeetingTitle, setSchMeetingTitle] = useState<string>('Họp giao ban tuần');
  const [schMeetingArea, setSchMeetingArea] = useState<string>('Phòng họp A');
  const [schMeetingDepartments, setSchMeetingDepartments] = useState<string[]>(['Phòng Ban 1']);
  const [schMeetingDate, setSchMeetingDate] = useState<string>('2026-07-10');
  const [schMeetingStartTime, setSchMeetingStartTime] = useState<string>('09:00');
  const [schMeetingEndTime, setSchMeetingEndTime] = useState<string>('11:00');
  const [isSchMeetingAreaOpen, setIsSchMeetingAreaOpen] = useState<boolean>(false);
  const [isSchMeetingDepsOpen, setIsSchMeetingDepsOpen] = useState<boolean>(false);

  // Saved/Preview Meeting Data
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
  const [schMeetingPreviewData, setSchMeetingPreviewData] = useState<any[] | null>(null);
  const [isFillingMeetingTable, setIsFillingMeetingTable] = useState<boolean>(false);
  const [showMeetingOverwriteConfirm, setShowMeetingOverwriteConfirm] = useState<boolean>(false);
  const [showMeetingSaveToast, setShowMeetingSaveToast] = useState<boolean>(false);

  // Mouse Drag State for Meeting Schedule
  const [draggingMeeting, setDraggingMeeting] = useState<{
    meetingId: string;
    type: 'move' | 'resize-start' | 'resize-end';
    startX: number;
    initialStartTime: string;
    initialEndTime: string;
  } | null>(null);

  // Mouse Drag State for Attendance Schedule
  const [draggingAttendance, setDraggingAttendance] = useState<{
    empId: string;
    type: 'move' | 'resize-start' | 'resize-end';
    startX: number;
    initialStartTime: string;
    initialEndTime: string;
  } | null>(null);

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

  // Real-time ticking clock
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Time conversion helpers for drag timeline
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
  }, [draggingMeeting, schMeetingPreviewData, schMeetingSavedData, isFillingMeetingTable]);

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

  // Format date-time for display
  const formatLiveTime = () => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const d = liveTime;
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  };

  // Find the currently selected event details
  const currentSelectedEvent = mockEventLogs.find(e => e.stt === selectedEventId) || mockEventLogs[21]; // Fallback to Tran Phuoc Loi

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
        // Format log date as "YYYY-MM-DD"
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

  // Calculate pagination
  const totalItems = filteredLogs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLogs = filteredLogs.slice(indexOfFirstItem, indexOfLastItem);

  // Trigger refresh simulation
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  // Trigger Excel export simulation
  const handleExportExcel = () => {
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

  // Capture snapshot simulation
  const handleCapture = () => {
    setIsCapturing(true);
    setFlashActive(true);
    setTimeout(() => setFlashActive(false), 200);
    setTimeout(() => {
      setIsCapturing(false);
    }, 600);
  };

  // Add camera to currently selected area
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

    // Reset form
    setNewCamName('');
    setShowAddCamModal(false);
  };

  // Add new area
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

  // Toggle face capture camera for enter (In)
  const toggleFaceInCamera = (areaId: string, camId: string) => {
    setAreaFaceInCameras(prev => {
      const current = prev[areaId] || [];
      const updated = current.includes(camId)
        ? current.filter(id => id !== camId)
        : [...current, camId];
      return { ...prev, [areaId]: updated };
    });
  };

  // Toggle face capture camera for exit (Out)
  const toggleFaceOutCamera = (areaId: string, camId: string) => {
    setAreaFaceOutCameras(prev => {
      const current = prev[areaId] || [];
      const updated = current.includes(camId)
        ? current.filter(id => id !== camId)
        : [...current, camId];
      return { ...prev, [areaId]: updated };
    });
  };

  const selectedArea = areasData.find(a => a.id === selectedAreaId) || areasData[0];

  // Helper for generating custom user avatar placeholders with robust seed support
  const getAvatarUrl = (seed: string, isLoi: boolean) => {
    // Elegant, highly specific visual elements that don't rely on random unseeded images
    if (isLoi) {
      // Return a professional-looking Vietnamese man with glasses photo
      return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150";
    }
    // Alternate high quality portraits
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

  return (
    <div id="app-window" className="min-h-screen bg-[#0e0f14] text-slate-100 font-sans flex flex-col overflow-hidden select-none">
      
      {/* Main Container Layout: Sidebar + Main Content Panel */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* 2. Sidebar (Taylor-made left panel with exactly 2 items: Báo cáo / Quản lý khu vực) */}
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
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group ${
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
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group ${
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
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group ${
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
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group ${
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
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg rounded-l-none text-xs font-medium transition-all duration-200 group ${
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

        {/* 3. Main Application Workspace Area */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#111216]">
          
          {/* CONDITIONAL VIEW 1: BÁO CÁO (Event Log Dashboard) */}
          {activeSidebar === 'reports' && (
            <div className="flex-1 flex flex-col overflow-hidden relative">
              
              {/* Header Tab Navigator */}
              <div id="tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400 font-semibold tracking-wider">Thống Kê Sự Kiện</div>
                  
                  {/* Sliding Big Pill Segmented Control Container */}
                  <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
                    {/* Tab 1: Danh sách sự kiện */}
                    <button 
                      id="tab-btn-list"
                      onClick={() => {
                        setActiveTab('list');
                        // Make sure filter modal is not open if we switch
                      }}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 ${
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
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 ${
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
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 ${
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
                    className={`p-2 bg-[#20212b] border border-[#2d2f3c] rounded hover:bg-[#2c2d3c] text-slate-300 transition shrink-0 ${isRefreshing ? 'opacity-50' : ''}`}
                    title="Refresh data"
                  >
                    <RotateCw size={13} className={isRefreshing ? 'animate-spin' : ''} />
                  </button>
                  
                  <button 
                    id="btn-filter"
                    onClick={() => setShowFilterModal(true)}
                    className={`px-3 py-1.5 bg-[#20212b] border ${showFilterModal ? 'border-[#00a2e8] text-[#00a2e8]' : 'border-[#2d2f3c] text-slate-300'} rounded hover:bg-[#2c2d3c] text-xs font-medium flex items-center space-x-1 transition`}
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
                            setCurrentPage(1); // Reset to page 1 on search
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
                                  setSelectedThumbIndex(0); // Reset thumbnail zoom index
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
                        <button className="p-1.5 bg-[#1f202b] rounded hover:bg-[#2c2d3c] text-slate-400 hover:text-white transition" title="Cấu hình hệ thống">
                          <Settings size={14} />
                        </button>
                      </div>

                      {/* Pagination: << < Page 1/3 > >> */}
                      <div className="flex items-center space-x-1.5 font-mono text-xs">
                        <button 
                          onClick={() => setCurrentPage(1)} 
                          disabled={currentPage === 1}
                          className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition"
                        >
                          <ChevronsLeft size={16} />
                        </button>
                        <button 
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                          disabled={currentPage === 1}
                          className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center"
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
                          className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition text-xs flex items-center"
                        >
                          <span>Trang</span>
                          <ChevronRight size={16} className="ml-0.5" />
                        </button>
                        <button 
                          onClick={() => setCurrentPage(totalPages)} 
                          disabled={currentPage === totalPages}
                          className="p-1 rounded hover:bg-[#1f202b] text-slate-400 disabled:opacity-30 disabled:hover:bg-transparent transition"
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
                          className={`px-4 py-1.5 bg-[#0078d7] hover:bg-[#0069be] text-white font-medium rounded text-xs transition shadow flex items-center space-x-1.5 ${exporting ? 'opacity-70 cursor-wait' : ''}`}
                        >
                          <Download size={13} />
                          <span>{exporting ? 'Đang xuất...' : 'Xuất Excel'}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT PANEL: CAMERA MONITOR (Replicated directly from the image) */}
                  <div id="camera-panel" className="w-[450px] bg-[#111218] flex flex-col shrink-0 overflow-y-auto">
                    
                    {/* Main Simulated Camera Viewport Container */}
                    <div className="p-4 space-y-4">
                      
                      {/* Simulated Camera Window */}
                      <div className="relative aspect-[4/3] bg-black rounded-lg border border-[#2d2f3e] overflow-hidden group shadow-lg">
                        
                        {/* Selected Person Image */}
                        <img 
                          src={getAvatarUrl(currentSelectedEvent.avatarSeed, currentSelectedEvent.ma === "010203045567")} 
                          alt="Face checkin capture"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-90 transition duration-300"
                        />

                        {/* Flash effect animation */}
                        <AnimatePresence>
                          {flashActive && (
                            <motion.div 
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 0 }}
                              className="absolute inset-0 bg-white z-40 pointer-events-none"
                            />
                          )}
                        </AnimatePresence>

                        {/* 2. Technical OSD details overlaid on CCTV (Only display image quality) */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm border border-slate-700/40 px-2.5 py-1 rounded text-[10px] font-mono text-emerald-400 font-bold z-20">
                          CHẤT LƯỢNG: <span className="text-white">1080P</span>
                        </div>

                        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] font-mono text-slate-300 z-20 border border-slate-700/40">
                          {currentSelectedEvent.thoiGian}
                        </div>
                      </div>

                      {/* 3. Thumbnails Strip Below Camera View */}
                      <div className="grid grid-cols-4 gap-2">
                        {/* Selected thumbnail 1 */}
                        <button 
                          onClick={() => setSelectedThumbIndex(0)}
                          className={`relative aspect-square rounded border overflow-hidden transition ${
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

                        {/* Thumbnail 2: Alternative scene layout */}
                        <button 
                          onClick={() => setSelectedThumbIndex(1)}
                          className={`relative aspect-square rounded border overflow-hidden transition ${
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

                        {/* Thumbnail 3: Zoomed camera frame */}
                        <button 
                          onClick={() => setSelectedThumbIndex(2)}
                          className={`relative aspect-square rounded border overflow-hidden transition ${
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

                        {/* Thumbnail 4: Empty slot (bôi xám, bỏ cái nút có hình camera) */}
                        <div className="aspect-square rounded border border-[#2d2f3e] bg-[#1c1d24]" />
                      </div>

                      {/* Dropdown Camera Select Block (Removed) */}

                      {/* Download attached images & videos button with main blue theme */}
                      <div className="space-y-1.5 border-t border-[#21232d] pt-4">
                        <button 
                          onClick={() => {
                            alert("Đang chuẩn bị tải xuống toàn bộ tập tin hình ảnh và video đính kèm chất lượng cao...");
                          }}
                          className="w-full bg-[#0078d7] hover:bg-[#0062ac] text-white font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md text-xs"
                        >
                          <Download size={14} />
                          <span>Tải các ảnh & video đính kèm</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : activeTab === 'attendance' ? (
                /* Tab 2 Content: Báo cáo chấm công (Report Builder) */
                <div className="flex-1 p-6 flex flex-col bg-[#0d0e12] overflow-y-auto space-y-6">
                  
                  {/* REPORT BUILDER CONTROLS PANEL */}
                  <div className="bg-[#14151b] border border-[#21232d] rounded-2xl p-6 shadow-2xl relative">
                    <div className="flex items-center justify-between mb-5 border-b border-[#21232d] pb-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-100 tracking-tight">Report Builder</h3>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
                      {/* Type Select */}
                      <div className="md:col-span-3 space-y-2 text-left relative">
                        <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Type</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAttTypeOpen(!isAttTypeOpen);
                              setIsAttGroupOpen(false);
                              setIsAttExportOpen(false);
                            }}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px]"
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
                                    className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
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

                      {/* Chọn nhóm Select */}
                      <div className="md:col-span-3 space-y-2 text-left relative">
                        <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Chọn nhóm</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setIsAttGroupOpen(!isAttGroupOpen);
                              setIsAttTypeOpen(false);
                              setIsAttExportOpen(false);
                            }}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-xl px-4 py-2.5 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[42px]"
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
                                    className={`w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between ${
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

                      {/* Start Date */}
                      <div className="md:col-span-2 space-y-2 text-left relative">
                        <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">Start Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            value={attendanceStartDate}
                            onChange={(e) => setAttendanceStartDate(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] focus:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white focus:outline-none transition-all h-[42px] [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      {/* End Date */}
                      <div className="md:col-span-2 space-y-2 text-left relative">
                        <label className="text-[11px] font-bold text-slate-400 tracking-wider uppercase block">End Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            value={attendanceEndDate}
                            onChange={(e) => setAttendanceEndDate(e.target.value)}
                            className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] focus:border-[#00a2e8] rounded-xl px-4 py-2 text-xs text-white focus:outline-none transition-all h-[42px] [color-scheme:dark]"
                          />
                        </div>
                      </div>

                      {/* Combined Export Split Button (CSV Dropdown) */}
                      <div className="md:col-span-2 flex items-center justify-end relative h-[42px]">
                        <div className="flex h-full w-full rounded-xl overflow-hidden shadow-lg border border-[#2d2f3c] bg-[#1c1d26]">
                          <button
                            type="button"
                            onClick={() => {
                              handleExportAttendance(attendanceExportFormat);
                            }}
                            className="flex-1 flex items-center justify-center space-x-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer h-full"
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
                            className="px-3 bg-[#00a2e8] hover:bg-[#008cc9] text-white flex items-center justify-center transition-colors duration-150 cursor-pointer h-full"
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
                                className="w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between text-slate-300 hover:text-white"
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
                                className="w-full text-left px-4 py-2 text-xs transition-colors hover:bg-[#20212a] flex items-center justify-between text-slate-300 hover:text-white"
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
                        {/* Render table header and rows dynamically based on selected type */}
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
                    /* Search Form view (Centered, spacious) */
                    <div className="flex-1 flex flex-col items-center py-6 px-4">
                      <div className="w-full max-w-4xl space-y-6">
                        {/* Top Filters Block */}
                        <div className="grid grid-cols-12 gap-5 w-full bg-[#14151b] border border-[#21232d] p-6 rounded-2xl shadow-2xl relative items-end">
                          
                          {/* Time filter: col-span-7 */}
                          <div className="col-span-7 space-y-2 text-left">
                            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <Clock size={14} className="text-[#00a2e8]" />
                              Thời gian từ Giờ phút ngày tháng năm tới giờ phút ngày tháng năm
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                              {/* Từ */}
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
                              {/* Đến */}
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

                          {/* Room filter: col-span-3 */}
                          <div className="col-span-3 space-y-2 relative text-left">
                            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                              <Layers size={14} className="text-[#00a2e8]" />
                              Khu vực / Phòng họp
                            </label>
                            <div className="relative">
                              <button 
                                type="button"
                                onClick={() => setIsMeetingAreaDropdownOpen(!isMeetingAreaDropdownOpen)}
                                className="w-full bg-[#1c1d26] border border-[#2d2f3c] hover:border-[#00a2e8] rounded-lg px-3 py-2 text-xs text-white text-left flex items-center justify-between transition-all focus:outline-none h-[38px]"
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
                                        className="text-[10px] text-[#00a2e8] hover:underline font-semibold"
                                      >
                                        Chọn tất cả
                                      </button>
                                      <button 
                                        type="button"
                                        onClick={() => setSelectedMeetingAreas([])}
                                        className="text-[10px] text-slate-400 hover:underline font-semibold"
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
                                            className="w-full flex items-center justify-between px-2.5 py-1.5 rounded text-left text-xs text-slate-200 hover:bg-[#20212a] transition cursor-pointer"
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

                          {/* Filter Reset Button: col-span-2 */}
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

                        {/* List of Created Meetings */}
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
                                        <h5 className="font-bold text-xs text-white group-hover:text-[#00a2e8] transition truncate animate-pulse" title={meet.title}>
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
                    /* Table View (Display results with criteria summary and a Back button) */
                    <div className="flex-1 flex flex-col space-y-4">
                      {/* Active Meeting Dashboard & Attendees Table */}
                      <div className="flex-1 min-h-[300px] flex flex-col bg-[#14151b] border border-[#21232d] rounded-2xl shadow-xl overflow-hidden">
                        {/* Dashboard Header */}
                        <div className="px-5 py-4 border-b border-[#2d2f3c] bg-[#111218] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                          <div className="space-y-1 text-left">
                            <div className="flex items-center gap-2.5">
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
                                  <span>{selectedMeetingReport ? `Báo cáo: ${selectedMeetingReport.title}` : 'Báo cáo Chi Tiết Tham Dự Cuộc Họp'}</span>
                                  <span className="text-[11px] bg-[#00a2e8]/20 text-[#00a2e8] font-bold px-2 py-0.5 rounded border border-[#00a2e8]/25 uppercase font-mono">
                                    {selectedMeetingReport?.area || 'Phòng Họp'}
                                  </span>
                                </h4>
                                <p className="text-[10px] text-slate-400 font-medium">
                                  Thời gian: <span className="text-slate-300 font-semibold font-mono">{meetingStartTime} - {meetingEndTime}</span> ngày <span className="text-slate-300 font-semibold font-mono">{(() => {
                                    if (!meetingDate) return '';
                                    const parts = meetingDate.split('-');
                                    if (parts.length === 3) {
                                      return `${parts[2]}/${parts[1]}/${parts[0]}`;
                                    }
                                    return meetingDate;
                                  })()}</span> | Ban tham gia: <span className="text-[#00a2e8] font-bold">{(selectedMeetingReport?.departments || []).join(', ')}</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Search & Action Buttons */}
                          <div className="flex items-center space-x-2.5">
                            <div className="relative">
                              <span className="absolute left-3 top-2.5 text-slate-400">
                                <Search size={12} />
                              </span>
                              <input 
                                type="text"
                                placeholder="Tìm tên/mã nhân sự..."
                                value={meetingSearchQuery}
                                onChange={(e) => {
                                  setMeetingSearchQuery(e.target.value);
                                  setMeetingCurrentPage(1);
                                }}
                                className="bg-[#181921] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white w-44 focus:outline-none transition-all"
                              />
                            </div>
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
                              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-lg text-xs font-semibold transition shadow-md shadow-[#00a2e8]/10"
                            >
                              <Download size={13} />
                              <span>Xuất báo cáo</span>
                            </button>
                          </div>
                        </div>

                        {/* Dynamic Stats Row inside Meeting */}
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
                          const meetingDur = meetingEndSec - meetingStartSec || 3600;

                          // Perform logic to get unique employees from mock logs
                          const allEmployees = Array.from(
                            new Map(
                              mockEventLogs.map(log => [log.ma, { ten: log.ten, ma: log.ma, danhSach: log.danhSach, avatarSeed: log.avatarSeed }])
                            ).values()
                          );

                          // Filter based on selected meeting groups and search query
                          const attendeeRoster = allEmployees.filter(emp => {
                            const matchesGroup = meetingGroups.includes(emp.danhSach);
                            const matchesSearch = !meetingSearchQuery 
                              ? true 
                              : emp.ten.toLowerCase().includes(meetingSearchQuery.toLowerCase()) || 
                                emp.ma.includes(meetingSearchQuery);
                            return matchesGroup && matchesSearch;
                          }).map(emp => {
                            // Find all logs on meetingDate
                            const empLogs = mockEventLogs.filter(log => {
                              if (log.ma !== emp.ma) return false;
                              if (!log.thoiGian) return false;
                              const [datePart] = log.thoiGian.split('-');
                              if (!datePart) return false;
                              const [day, month, year] = datePart.split('/');
                              const logDateStr = `${year}-${month}-${day}`;
                              return logDateStr === meetingDate;
                            });

                            // Sort logs by time ascending
                            const sortedEmpLogs = [...empLogs].sort((a, b) => {
                              const timeA = a.thoiGian ? a.thoiGian.split('-')[1] : '';
                              const timeB = b.thoiGian ? b.thoiGian.split('-')[1] : '';
                              return timeA.localeCompare(timeB);
                            });

                            let thoiGianVao: string | undefined = undefined;
                            let thoiGianRa: string | undefined = undefined;

                            if (sortedEmpLogs.length === 1) {
                              const log = sortedEmpLogs[0];
                              const timeStr = log.thoiGian ? log.thoiGian.split('-')[1] : '';
                              if (log.vung === 'Checkout Area') {
                                thoiGianRa = timeStr;
                              } else {
                                thoiGianVao = timeStr;
                              }
                            } else if (sortedEmpLogs.length >= 2) {
                              thoiGianVao = sortedEmpLogs[0].thoiGian ? sortedEmpLogs[0].thoiGian.split('-')[1] : '';
                              thoiGianRa = sortedEmpLogs[sortedEmpLogs.length - 1].thoiGian ? sortedEmpLogs[sortedEmpLogs.length - 1].thoiGian.split('-')[1] : '';
                            }

                            // Calculate evaluation
                            let evaluationText = "";
                            let evaluationType: 'good' | 'early' | 'absent' | 'manual' = 'absent';
                            let ratioPercent = 0;

                            if (!thoiGianVao && !thoiGianRa) {
                              evaluationText = "Vắng";
                              evaluationType = 'absent';
                            } else if (!thoiGianVao || !thoiGianRa) {
                              evaluationText = "Cần xử lý riêng";
                              evaluationType = 'manual';
                            } else {
                              const inSec = timeStringToSeconds(thoiGianVao);
                              const outSec = timeStringToSeconds(thoiGianRa);
                              const spentSec = outSec - inSec;
                              const ratio = Math.max(0, Math.min(100, Math.round((spentSec / meetingDur) * 100)));
                              ratioPercent = ratio;
                              if (ratio > 95) {
                                evaluationText = `${ratio}%, Hoàn thành tốt`;
                                evaluationType = 'good';
                              } else {
                                evaluationText = `${ratio}%, Rời phòng sớm`;
                                evaluationType = 'early';
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
                                if (latenessSec <= 900) { // lateness <= 15 min
                                  entryColorClass = 'text-white';
                                  entryBadgeClass = 'text-white bg-slate-800/40 border-slate-700/50';
                                  entryImageBorderClass = 'border-emerald-500/30';
                                  entryImageCornersClass = 'border-emerald-400';
                                  entryMatchBadgeClass = 'text-white border-emerald-500/20';
                                } else if (latenessSec <= 1800) { // lateness <= 30 min
                                  entryColorClass = 'text-amber-400';
                                  entryBadgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
                                  entryImageBorderClass = 'border-amber-500/30';
                                  entryImageCornersClass = 'border-amber-400';
                                  entryMatchBadgeClass = 'text-white border-amber-500/20';
                                } else { // lateness > 30 min
                                  entryColorClass = 'text-rose-500';
                                  entryBadgeClass = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
                                  entryImageBorderClass = 'border-rose-500/30';
                                  entryImageCornersClass = 'border-rose-400';
                                  entryMatchBadgeClass = 'text-white border-rose-500/20';
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
                                if (earlinessSec <= 900) { // earliness <= 15 min
                                  exitColorClass = 'text-white';
                                  exitBadgeClass = 'text-white bg-slate-800/40 border-slate-700/50';
                                  exitImageBorderClass = 'border-emerald-500/30';
                                  exitImageCornersClass = 'border-emerald-400';
                                  exitMatchBadgeClass = 'text-white border-emerald-500/20';
                                } else if (earlinessSec <= 1800) { // earliness <= 30 min
                                  exitColorClass = 'text-amber-400';
                                  exitBadgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
                                  exitImageBorderClass = 'border-amber-500/30';
                                  exitImageCornersClass = 'border-amber-400';
                                  exitMatchBadgeClass = 'text-white border-amber-500/20';
                                } else { // earliness > 30 min
                                  exitColorClass = 'text-rose-500';
                                  exitBadgeClass = 'text-rose-500 bg-rose-500/10 border-rose-500/20';
                                  exitImageBorderClass = 'border-rose-500/30';
                                  exitImageCornersClass = 'border-rose-400';
                                  exitMatchBadgeClass = 'text-white border-rose-500/20';
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

                          // Sort roster so present people are shown first, then manual, then absent!
                          const sortedAttendeeRoster = [...attendeeRoster].sort((a, b) => {
                            const order = { good: 1, early: 2, manual: 3, absent: 4 };
                            return order[a.evaluationType] - order[b.evaluationType];
                          });

                          // Find active selected attendee or default to the first one in the filtered list
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

                          // Calculate metrics
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

                          // Meeting pagination calculation
                          const totalMeetingItems = sortedAttendeeRoster.length;
                          const totalMeetingPages = Math.ceil(totalMeetingItems / meetingItemsPerPage) || 1;
                          
                          // Bound check current page
                          const activeMeetingPage = Math.min(meetingCurrentPage, totalMeetingPages);
                          
                          const indexLastMeetingItem = activeMeetingPage * meetingItemsPerPage;
                          const indexFirstMeetingItem = indexLastMeetingItem - meetingItemsPerPage;
                          const currentMeetingRoster = sortedAttendeeRoster.slice(indexFirstMeetingItem, indexLastMeetingItem);

                          return (
                            <>
                              {/* Mini Stats Badges */}
                              <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#2d2f3c]/60 bg-[#16171d]/40 shrink-0">
                                {/* Stat 1 */}
                                <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                                  <div className="space-y-0.5 text-left">
                                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Người tham dự</span>
                                    <span className="text-xl font-bold text-white font-mono">{presentCount}/{totalRosterCount}</span>
                                  </div>
                                  <div className="p-2 rounded-lg bg-[#00a2e8]/10 text-[#00a2e8] border border-[#00a2e8]/20">
                                    <Clock size={16} />
                                  </div>
                                </div>

                                {/* Stat 2 */}
                                <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                                  <div className="space-y-0.5 text-left">
                                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Phòng ban tham gia</span>
                                    <span className="text-xl font-bold text-white font-mono">{deptsCount}</span>
                                  </div>
                                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                    <Layers size={16} />
                                  </div>
                                </div>

                                {/* Stat 3 */}
                                <div className="bg-[#181921] border border-[#2d2f3c]/60 rounded-xl p-3 flex items-center justify-between">
                                  <div className="space-y-0.5 text-left">
                                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Tỷ lệ đúng giờ</span>
                                    <span className="text-xl font-bold text-white font-mono">
                                      {onTimePercentage}%
                                    </span>
                                  </div>
                                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    <Star size={16} fill="currentColor" />
                                  </div>
                                </div>
                              </div>

                              {/* Split Layout: Table + Sidebar Details */}
                              <div className="flex-1 flex overflow-hidden min-h-[250px]">
                                {/* Table Area (Scrollable) */}
                                <div className="flex-1 overflow-auto bg-[#0d0e12] border-r border-[#21232d]/50">
                                  {sortedAttendeeRoster.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center p-8 text-slate-500 text-center">
                                      <AlertTriangle size={36} className="text-slate-600 mb-2.5 animate-bounce" />
                                      <span className="text-xs font-semibold uppercase tracking-wider mb-1 text-slate-400">Không tìm thấy người tham gia</span>
                                      <p className="text-[11px] max-w-xs text-slate-500 leading-relaxed">
                                        Vui lòng đổi ngày (ví dụ: 09/07/2026), thay đổi khoảng thời gian check-in hoặc chọn thêm phòng ban tham dự họp.
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

                                {/* Right Sidebar Details Panel */}
                                <div className="w-72 bg-[#14151c]/95 flex flex-col shrink-0 overflow-y-auto border-l border-[#21232d]/40">
                                  {selectedAttendee ? (
                                    <div className="p-4 space-y-4 text-left">
                                      {/* Entry Section */}
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

                                      {/* Exit Section */}
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

                              {/* Bottom Status Bar with Pagination & Page size limit switcher */}
                              <div className="h-14 bg-[#14151c] border-t border-[#21232d] px-4 flex items-center justify-between shrink-0">
                                {/* Page size switcher: 20 - 30 - 40 - 50 */}
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

                                {/* Pagination Controls (same design as first tab) */}
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

                                {/* Total counts info */}
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

              {/* Sidebar Filter Overlay (Full-height right drawer) */}
              <AnimatePresence>
                {showFilterModal && (
                  <>
                    {/* Dark backdrop overlay to dismiss when clicked outside */}
                    <motion.div 
                      key="filter-backdrop"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black z-40 cursor-pointer"
                      onClick={() => setShowFilterModal(false)}
                    />

                    {/* Scrollable sidebar panel matching image layout */}
                    <motion.div 
                      key="filter-sidebar"
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ type: 'tween', duration: 0.25 }}
                      className="absolute right-0 top-0 bottom-0 w-80 bg-[#16171d] z-50 flex flex-col text-slate-200 shadow-2xl h-full"
                    >
                      {/* Top Header */}
                      <div className="p-4 border-b border-transparent flex items-center justify-between bg-[#111218] shrink-0">
                        <div className="flex items-center space-x-2">
                          <Filter size={16} className="text-[#00a2e8]" />
                          <span className="font-bold text-xs text-slate-200 uppercase tracking-wider">Bộ lọc</span>
                        </div>
                        <button 
                          onClick={() => setShowFilterModal(false)}
                          className="p-1 rounded bg-[#20212a] hover:bg-[#2c2d3a] text-slate-400 hover:text-white transition"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      {/* Filter inputs body (scrollable) */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                        
                        {/* 1. Chế độ Tìm kiếm (Dropdown / Option selection) */}
                        <div className="space-y-1 text-left relative">
                          <label className="text-[11px] text-slate-300 font-semibold block">Chế độ Tìm kiếm</label>
                          <div className="relative">
                            <button 
                              type="button"
                              onClick={() => setIsOpenSearchTypeDropdown(!isOpenSearchTypeDropdown)}
                              className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none font-semibold"
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
                                    className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] ${
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
                                    className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] ${
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

                        {/* Interactive Image Search Interface */}
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
                                  className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full shadow transition"
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
                                        // Pretend we matched Phan Huu Thien Phuc
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

                            {/* Threshold slider */}
                            <div className="space-y-1.5 border-t border-[#2d2f3c]/60 pt-2.5">
                              <div className="flex items-center justify-between">
                                <span className="text-[11px] text-slate-300 font-semibold">Ngưỡng</span>
                                <div className="flex items-center space-x-1.5">
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

                        {/* 2. Từ Ngày (Time included) */}
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

                        {/* 3. Đến Ngày (Time included) */}
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
                              onChange={(e) => setEndTime(e.target.value)}
                              className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#00a2e8] [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        {/* 4. Vùng/Kịch Bản */}
                        <div className="space-y-1 text-left relative">
                          <label className="text-[11px] text-slate-300 font-semibold block">Vùng/Kịch Bản</label>
                          <div className="relative">
                            <button 
                              type="button"
                              onClick={() => setIsOpenZoneDropdown(!isOpenZoneDropdown)}
                              className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none"
                            >
                              <span>{filterZone === 'All' ? 'Tất Cả' : filterZone}</span>
                              <ChevronDown size={14} className="text-[#00a2e8]" />
                            </button>
                            
                            <AnimatePresence>
                              {isOpenZoneDropdown && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 5 }}
                                  className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded shadow-2xl z-50 overflow-hidden"
                                >
                                  <div className="p-2 border-b border-[#2d2f3c] flex items-center bg-[#111218]">
                                    <Search size={12} className="text-slate-500 mr-1.5 shrink-0" />
                                    <input 
                                      type="text"
                                      placeholder="Tìm nhanh vùng..."
                                      value={zoneSearch}
                                      onChange={(e) => setZoneSearch(e.target.value)}
                                      className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-2 py-1 text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-[#00a2e8]"
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                  </div>
                                  <div className="max-h-40 overflow-y-auto">
                                    {["All", "Checkin Area", "Checkout Area", "Lobby Area"]
                                      .filter(z => z === 'All' || z.toLowerCase().includes(zoneSearch.toLowerCase()))
                                      .map(zoneOption => (
                                        <button
                                          key={zoneOption}
                                          type="button"
                                          onClick={() => {
                                            setFilterZone(zoneOption);
                                            setIsOpenZoneDropdown(false);
                                            setZoneSearch('');
                                          }}
                                          className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] ${
                                            filterZone === zoneOption ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-medium' : 'text-slate-300'
                                          }`}
                                        >
                                          {zoneOption === 'All' ? 'Tất Cả' : zoneOption}
                                        </button>
                                      ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* 5. Nhóm */}
                        <div className="space-y-1 text-left relative">
                          <label className="text-[11px] text-slate-300 font-semibold block">Nhóm</label>
                          <div className="relative">
                            <button 
                              type="button"
                              onClick={() => setIsOpenListDropdown(!isOpenListDropdown)}
                              className="w-full bg-[#181921] border border-[#2d2f3c] hover:border-[#00a2e8] rounded px-3 py-2 text-xs text-white text-left flex items-center justify-between transition focus:outline-none"
                            >
                              <span>{filterList === 'All' ? 'Tất Cả' : filterList}</span>
                              <ChevronDown size={14} className="text-[#00a2e8]" />
                            </button>
                            
                            <AnimatePresence>
                              {isOpenListDropdown && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 5 }}
                                  className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded shadow-2xl z-50 overflow-hidden"
                                >
                                  <div className="max-h-40 overflow-y-auto">
                                    {[
                                      { id: 'All', name: 'Tất Cả' },
                                      { id: 'Phòng ban A', name: 'Phòng ban A' },
                                      { id: 'Phòng ban B', name: 'Phòng ban B' },
                                      { id: 'Phòng ban C', name: 'Phòng ban C' },
                                      { id: 'Phòng ban D', name: 'Phòng ban D' },
                                      { id: 'Khách hàng / Khác', name: 'Khách hàng / Khác' }
                                    ].map(listOption => (
                                      <button
                                        key={listOption.id}
                                        type="button"
                                        onClick={() => {
                                          setFilterList(listOption.id);
                                          setIsOpenListDropdown(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors hover:bg-[#20212a] ${
                                          filterList === listOption.id ? 'text-[#00a2e8] bg-[#00a2e8]/10 font-medium' : 'text-slate-300'
                                        }`}
                                      >
                                        {listOption.name}
                                      </button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* 6. Mã Đối Tượng / Tên */}
                        <div className="space-y-1 text-left">
                          <label className="text-[11px] text-slate-300 font-semibold block">Mã Đối Tượng / Tên</label>
                          <div className="relative">
                            <input 
                              type="text"
                              placeholder="Nhập tên hoặc mã..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full bg-[#181921] border border-[#2d2f3c] rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00a2e8]"
                            />
                          </div>
                        </div>

                      </div>

                      {/* Footer Buttons */}
                      <div className="p-4 border-t border-transparent bg-[#111218] flex items-center justify-center space-x-2 shrink-0">
                        <button 
                          type="button"
                          onClick={() => {
                            setSearchQuery('');
                            setFilterZone('All');
                            setFilterList('All');
                            setStartDate('');
                            setEndDate('');
                            setStartTime('');
                            setEndTime('');
                            setFilterTime('');
                            setSearchType('text');
                            setSearchImage(null);
                            setThreshold(0.8);
                          }}
                          className="px-3 py-1.5 border border-[#2d2f3c] rounded text-xs text-slate-400 hover:text-white hover:bg-[#20212a] transition font-medium"
                        >
                          Xóa bộ lọc
                        </button>
                        <button 
                          type="button"
                          onClick={() => setShowFilterModal(false)}
                          className="bg-[#008bc8] hover:bg-[#007cb3] text-white font-semibold text-xs py-1.5 px-6 rounded transition-all duration-200 shadow-md"
                        >
                          Tìm Kiếm
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* CONDITIONAL VIEW 2: QUẢN LÝ KHU VỰC (Area Management Dashboard) */}
          {activeSidebar === 'areas' && (
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
                        className="px-2 py-1 bg-[#00a2e8] hover:bg-[#008cc9] text-white text-[11px] font-semibold rounded transition"
                      >
                        Thêm
                      </button>
                      <button 
                        onClick={() => {
                          setShowAddAreaInput(false);
                          setNewAreaName('');
                        }}
                        className="p-1 hover:bg-slate-800 rounded text-slate-400 transition"
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
                <div className="col-span-8 space-y-4 overflow-visible">

                  {/* THIẾT LẬP CHỨC NĂNG */}
                  <div className="bg-[#14151c] border border-[#21232d] rounded-xl shadow-lg p-5 space-y-4 overflow-visible">
                    <div className="flex items-center justify-between pb-3 border-b border-[#21232d]">
                      <div className="flex items-center space-x-2">
                        <Settings size={15} className="text-[#00a2e8]" />
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">THIẾT LẬP CHỨC NĂNG</span>
                      </div>
                    </div>

                    {/* Business Logic Note / Tip - Hidden as requested */}
                    {/*
                    <div className="flex items-start gap-2 bg-[#00a2e8]/5 border border-[#00a2e8]/20 rounded-lg p-3 text-slate-400 text-[11px] leading-relaxed">
                      <Info size={14} className="text-[#00a2e8] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#00a2e8] font-semibold">Ghi chú Nghiệp vụ:</span> Kênh camera trong Danh sách Camera đã kết nối bên dưới tương ứng with <strong>Kênh camera</strong> trong phần <i>Quản lý thiết bị &rarr; Kênh</i> chứ không phải map trực tiếp tới thiết bị Camera gốc. Các Camera bắt khuôn mặt đi vào và đi ra được chọn lọc từ Danh sách Camera đã kết nối này.
                      </div>
                    </div>
                    */}

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
                            <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d] animate-in fade-in slide-in-from-top-1 duration-150">
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
                                          onChange={() => {}} // Handled by parent onClick
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
                            <div className="absolute left-0 right-0 mt-1 bg-[#181921] border border-[#2d2f3c] rounded-xl shadow-xl z-20 max-h-48 overflow-y-auto divide-y divide-[#21232d] animate-in fade-in slide-in-from-top-1 duration-150">
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
                                          onChange={() => {}} // Handled by parent onClick
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
                        className="text-[11px] text-[#00a2e8] hover:underline font-medium flex items-center gap-1"
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
                        {selectedArea.cameras.map(camera => {
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
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONDITIONAL VIEW 3: QUẢN LÝ THIẾT BỊ (Device Management Dashboard) */}
          {activeSidebar === 'devices' && (
            <div className="flex-1 flex flex-col overflow-hidden relative">
              
              {/* Header Tab Navigator */}
              <div id="device-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400 font-semibold tracking-wider">Thiết Bị & Kênh Ghi Hình</div>
                  
                  {/* Sliding Big Pill Segmented Control Container */}
                  <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
                    {/* Tab 1: Quản lý camera */}
                    <button 
                      id="tab-btn-device-manage"
                      onClick={() => setActiveDeviceSubTab('device')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 ${
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
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 ${
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
                          className="p-1 hover:bg-[#2c2e3e] rounded text-[#00a2e8] transition"
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
                                onClick={() => {
                                  setSelectedDeviceId(dev.id);
                                  setIsAddingDevice(false);
                                }}
                                className={`w-full flex items-center space-x-3 px-4 py-3.5 text-left text-xs font-medium transition ${
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
                        <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-6 pb-2 border-b border-[#252731]">
                          {isAddingDevice ? 'Thêm Thiết Bị Mới' : 'Thông Tin Camera'}
                        </h2>

                        {isAddingDevice ? (
                          /* ADD DEVICE FORM */
                          <div className="space-y-5 text-xs text-slate-300">
                            {/* Row 1: Tên Gợi Nhớ */}
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
                                  placeholder="Nhập tên gọi nhớ..."
                                />
                              </div>
                              <div className="col-span-3 text-red-400 text-[11px] font-medium min-h-[1.5rem] flex items-center">
                                {addDevErrors.name || (!addDevName.trim() && "Không được để trống nội dung!")}
                              </div>
                            </div>

                            {/* Row 2: Mô Tả */}
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

                            {/* Row 3: Địa Chỉ IP */}
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

                            {/* Row 4: Cổng ONVIF */}
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

                            {/* Row 5: Cổng RTSP */}
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

                            {/* Row 6: Tên Tài Khoản */}
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

                            {/* Row 7: Mật Khẩu */}
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

                            {/* Form Buttons */}
                            <div className="grid grid-cols-12 gap-4 pt-6 border-t border-[#252731] mt-8">
                              <div className="col-span-3"></div>
                              <div className="col-span-6 flex items-center space-x-3">
                                <button 
                                  onClick={() => {
                                    // Validation check
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
                                  className="px-6 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-semibold rounded text-xs transition shadow"
                                >
                                  Hoàn Tất
                                </button>
                                <button 
                                  onClick={() => setIsAddingDevice(false)}
                                  className="px-6 py-2 bg-[#3a3b46] hover:bg-[#474958] text-slate-200 font-semibold rounded text-xs transition"
                                >
                                  Hủy
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* VIEW & UPDATE DEVICE PROFILE FORM */
                          <div className="space-y-5 text-xs text-slate-300">
                            {/* Row 1: Tên Gợi Nhớ */}
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

                            {/* Row 2: Mô Tả */}
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

                            {/* Row 5: Loại Thiết Bị */}
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

                            {/* Row 6: Main Stream */}
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

                            {/* Row 7: Sub Stream */}
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

                            {/* Row 8: Địa Chỉ IP */}
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

                            {/* Row 9: Cổng ONVIF */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Cổng ONVIF</label>
                              <div className="col-span-6">
                                <input 
                                  type="text"
                                  value={editDevOnvifPort}
                                  onChange={(e) => setEditDevOnvifPort(e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                                />
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Row 10: Cổng RTSP */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Cổng RTSP</label>
                              <div className="col-span-6">
                                <input 
                                  type="text"
                                  value={editDevRtspPort}
                                  onChange={(e) => setEditDevRtspPort(e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                                />
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Row 11: Luồng Lưu Trữ */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Luồng Lưu Trữ</label>
                              <div className="col-span-6">
                                <select 
                                  value={editDevStorageStream}
                                  onChange={(e) => setEditDevStorageStream(e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8] cursor-pointer"
                                >
                                  <option value="Main Stream">Main Stream</option>
                                  <option value="Sub Stream">Sub Stream</option>
                                </select>
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Row 12: Tên Tài Khoản */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Tên Tài Khoản</label>
                              <div className="col-span-6">
                                <input 
                                  type="text"
                                  value={editDevUser}
                                  onChange={(e) => setEditDevUser(e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                                />
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Row 13: Mật Khẩu */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Mật Khẩu</label>
                              <div className="col-span-6">
                                <input 
                                  type="password"
                                  value={editDevPass}
                                  onChange={(e) => setEditDevPass(e.target.value)}
                                  className="w-full px-3 py-2 bg-[#1b1c24] border border-[#2d2f3c] rounded text-slate-100 focus:outline-none focus:border-[#00a2e8]"
                                />
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Row 14: Thông Số Kết Nối RTSP */}
                            <div className="grid grid-cols-12 items-center gap-4">
                              <label className="col-span-3 text-right font-medium text-slate-400">Thông Số Kết Nối RTSP</label>
                              <div className="col-span-6 flex items-center space-x-2">
                                <button 
                                  onClick={() => alert(`Kết nối RTSP tới IP ${editDevIp} - Luồng Main Stream`)}
                                  className="flex-1 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-semibold rounded text-xs transition"
                                >
                                  Main Stream
                                </button>
                                <button 
                                  onClick={() => alert(`Kết nối RTSP tới IP ${editDevIp} - Luồng Sub Stream`)}
                                  className="flex-1 py-2 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-semibold rounded text-xs transition"
                                >
                                  Sub Stream
                                </button>
                              </div>
                              <div className="col-span-3"></div>
                            </div>

                            {/* Action Button: Cập Nhật Profile */}
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
                                  className="px-5 py-2.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold rounded text-xs transition shadow-lg shadow-[#00a2e8]/25"
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
                  <div className="flex-1 flex flex-col overflow-hidden bg-[#111216] p-6">
                    <div className="flex-1 flex flex-col overflow-hidden max-w-4xl w-full mx-auto">
                      {/* Header row */}
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

                      {/* Channels scroll list */}
                      <div className="flex-1 overflow-y-auto space-y-2.5 pr-2">
                        {channels.map((chan) => (
                          <div key={chan.stt} className="grid grid-cols-12 gap-3 items-center text-xs">
                            {/* STT Column */}
                            <div className="col-span-1 text-center font-semibold text-slate-300 bg-[#1c1d26] py-2 rounded-md border border-[#2d2f3c]/60 select-none">
                              {chan.stt}
                            </div>
                            
                            {/* Tên Kênh Column */}
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

                            {/* Tên Camera Column */}
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

                      {/* Footer Actions */}
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
                              className={`px-6 py-2.5 rounded-lg text-xs font-bold text-white transition flex items-center space-x-2 ${
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
          )}

          {/* CONDITIONAL VIEW 4: QUẢN LÝ NHÂN VIÊN */}
          {activeSidebar === 'employees' && (
            <div className="flex-1 flex flex-col overflow-hidden relative bg-[#0d0e12]">
              {/* Header Tab Navigator */}
              <div id="employee-tabs-bar" className="h-14 bg-[#181921] border-b border-[#252731] flex items-center justify-between px-4 shrink-0">
                <div className="flex items-center space-x-4">
                  <div className="text-xs text-slate-400 font-semibold tracking-wider">Nhân Viên</div>
                  
                  {/* Sliding Big Pill Segmented Control Container */}
                  <div className="flex bg-[#111218] p-1 rounded-full border border-[#2d2f3c] space-x-1">
                    {/* Tab 1: Quản lý nhân sự */}
                    <button 
                      id="tab-btn-employee-manage"
                      onClick={() => setActiveEmployeeSubTab('employees-list')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                        activeEmployeeSubTab === 'employees-list' 
                          ? 'bg-[#00a2e8]/10 text-[#00a2e8] shadow-lg shadow-[#00a2e8]/10' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Users size={14} />
                      <span>Quản lý nhân sự</span>
                    </button>

                    {/* Tab 2: Quản lý phòng ban */}
                    <button 
                      id="tab-btn-department-manage"
                      onClick={() => setActiveEmployeeSubTab('departments-list')}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                        activeEmployeeSubTab === 'departments-list' 
                          ? 'bg-[#00a2e8]/10 text-[#00a2e8] shadow-lg shadow-[#00a2e8]/10' 
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Layers size={14} />
                      <span>Quản lý phòng ban</span>
                    </button>

                    {/* Tab 3: Thêm nhân viên */}
                    <button 
                      id="tab-btn-add-employee"
                      onClick={() => {
                        setNewEmployees([createEmptyNewEmployee()]);
                        setActiveEmployeeSubTab('add-employee');
                      }}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-2 transition-all duration-200 cursor-pointer ${
                        activeEmployeeSubTab === 'add-employee' 
                          ? 'bg-[#00a2e8]/10 text-[#00a2e8] shadow-lg shadow-[#00a2e8]/10' 
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
                    {/* Header bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#14151c] border border-[#21232d] p-4 rounded-xl shadow-md">
                      <div>
                        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                          <Users size={16} className="text-[#00a2e8]" />
                          Danh sách nhân sự ({employees.length})
                        </h3>
                        <p className="text-[11px] text-slate-400 mt-1">Quản lý, tìm kiếm và phân phòng ban cho toàn bộ cán bộ nhân viên trong hệ thống.</p>
                      </div>
                      
                      {/* Button Thêm nhân viên */}
                      <button
                        onClick={() => {
                          setNewEmployees([createEmptyNewEmployee()]);
                          setActiveEmployeeSubTab('add-employee');
                        }}
                        className="py-2 px-4 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-xl text-xs font-bold transition shadow-lg shadow-[#00a2e8]/20 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                      >
                        <Plus size={14} />
                        <span>Thêm nhân viên</span>
                      </button>
                    </div>

                    {/* Employees list table/cards */}
                    <div className="bg-[#14151c] border border-[#21232d] rounded-2xl overflow-hidden shadow-xl">
                      {employees.length === 0 ? (
                        <div className="p-16 text-center text-slate-500 flex flex-col items-center justify-center">
                          <Users size={40} className="text-slate-600 mb-3 opacity-60" />
                          <span className="text-xs font-medium">Không có nhân viên nào trong danh sách.</span>
                          <button
                            onClick={() => {
                              setNewEmployees([createEmptyNewEmployee()]);
                              setActiveEmployeeSubTab('add-employee');
                            }}
                            className="mt-3 text-[#00a2e8] hover:underline text-xs font-semibold"
                          >
                            Thêm nhân viên ngay
                          </button>
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
                                  {/* STT */}
                                  <td className="p-4 text-center font-mono text-slate-400">{index + 1}</td>
                                  
                                  {/* Profile & Name */}
                                  <td className="p-4">
                                    <div className="flex items-center space-x-3">
                                      {/* Avatar with hover preview if exists */}
                                      <div className="relative group/avatar">
                                        <img 
                                          src={emp.anhDaiDien?.url || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'} 
                                          alt={emp.hoTen} 
                                          className="w-8 h-8 rounded-full object-cover border border-slate-700/60"
                                          referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-black/40 opacity-0 group-hover/avatar:opacity-100 flex items-center justify-center transition text-[9px] text-white font-bold pointer-events-none">
                                          INFO
                                        </div>
                                      </div>
                                      
                                      <div>
                                        <div className="font-bold text-slate-100">{emp.hoTen}</div>
                                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">{emp.id}</div>
                                      </div>
                                    </div>
                                  </td>
                                  
                                  {/* Identity papers */}
                                  <td className="p-4">
                                    <div className="font-semibold text-slate-300">{emp.maGiayTo}</div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">Loại: {emp.loaiGiayTo || 'CCCD'}</div>
                                  </td>

                                  {/* Departments badge array */}
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

                                  {/* Contact */}
                                  <td className="p-4">
                                    <div className="text-slate-300 font-medium">{emp.soDienThoai && emp.soDienThoai !== 'Chưa cập nhật' ? emp.soDienThoai : 'N/A'}</div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">{emp.email && emp.email !== 'Chưa cập nhật' ? emp.email : 'N/A'}</div>
                                  </td>

                                  {/* Actions */}
                                  <td className="p-4 text-center">
                                    <button
                                      onClick={() => {
                                        if (confirm(`Bạn có chắc chắn muốn xóa nhân sự "${emp.hoTen}" khỏi hệ thống không?`)) {
                                          setEmployees(employees.filter(e => e.id !== emp.id));
                                        }
                                      }}
                                      className="p-1.5 hover:bg-red-500/10 text-slate-500 hover:text-red-400 rounded-lg transition cursor-pointer"
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
                ) : activeEmployeeSubTab === 'add-employee' ? (
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
                          {/* Card Header & Remove Button */}
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
                                className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 hover:bg-red-500/20 px-2 py-1 rounded-lg transition"
                              >
                                <X size={12} />
                                <span>Xóa bớt</span>
                              </button>
                            )}
                          </div>

                          {/* 1. CÁC TRƯỜNG BẮT BUỘC (Họ tên, Mã giấy tờ, Phòng ban) */}
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                            {/* Họ tên */}
                            <div className="md:col-span-4 space-y-1.5 text-left">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
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

                            {/* Mã giấy tờ */}
                            <div className="md:col-span-4 space-y-1.5 text-left">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
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

                            {/* Phòng ban (Multiselectable) */}
                            <div className="md:col-span-4 space-y-1.5 text-left">
                              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center">
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

                          {/* DISCLOSURE: NÚT HIỂN THỊ CÁC THÔNG TIN KHÔNG BẮT BUỘC */}
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

                          {/* 2. CÁC TRƯỜNG KHÔNG BẮT BUỘC (MẶC ĐỊNH ẨN, BẬT DISCLOSURE ĐỂ HIỆN) */}
                          {emp.showOptional && (
                            <div className="mt-5 space-y-5 animate-fadeIn">
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Loại giấy tờ */}
                                <div className="space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Loại giấy tờ</label>
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

                                {/* Ngày sinh */}
                                <div className="space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ngày sinh</label>
                                  <input 
                                    type="date"
                                    value={emp.ngaySinh}
                                    onChange={(e) => updateNewEmployee(index, 'ngaySinh', e.target.value)}
                                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                                  />
                                </div>

                                {/* Giới tính */}
                                <div className="space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Giới tính</label>
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

                                {/* Số điện thoại */}
                                <div className="space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Số điện thoại</label>
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
                                {/* Ngày cấp */}
                                <div className="md:col-span-3 space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ngày cấp</label>
                                  <input 
                                    type="date"
                                    value={emp.ngayCap}
                                    onChange={(e) => updateNewEmployee(index, 'ngayCap', e.target.value)}
                                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                                  />
                                </div>

                                {/* Nơi cấp */}
                                <div className="md:col-span-3 space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Nơi cấp</label>
                                  <input 
                                    type="text"
                                    value={emp.noiCap}
                                    onChange={(e) => updateNewEmployee(index, 'noiCap', e.target.value)}
                                    placeholder="Cục Cảnh Sát QLHC..."
                                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                                  />
                                </div>

                                {/* Email */}
                                <div className="md:col-span-3 space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</label>
                                  <input 
                                    type="email"
                                    value={emp.email}
                                    onChange={(e) => updateNewEmployee(index, 'email', e.target.value)}
                                    placeholder="example@company.com"
                                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                                  />
                                </div>

                                {/* Địa chỉ */}
                                <div className="md:col-span-3 space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Địa chỉ</label>
                                  <input 
                                    type="text"
                                    value={emp.diaChi}
                                    onChange={(e) => updateNewEmployee(index, 'diaChi', e.target.value)}
                                    placeholder="Thành phố, Quận..."
                                    className="w-full bg-[#1c1d26] border border-[#2d2f3c] focus:border-[#00a2e8] rounded-xl px-3 py-2 text-xs text-white focus:outline-none transition-all h-[38px]"
                                  />
                                </div>
                              </div>

                              {/* HÀNH ẢNH TÀI LIỆU (Ảnh đại diện, Ảnh thẻ, Ảnh khuôn mặt) */}
                              <div className="pt-3 border-t border-[#1e202b] grid grid-cols-1 md:grid-cols-3 gap-5">
                                {/* Ảnh Đại diện */}
                                <div className="space-y-1.5 text-left">
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
                                          {/* Hover Preview Tooltip */}
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
                                        className="text-red-400 hover:text-red-300 shrink-0"
                                      >
                                        <X size={12} />
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {/* Ảnh Thẻ */}
                                <div className="space-y-1.5 text-left">
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
                                          {/* Hover Preview Tooltip */}
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
                                        className="text-red-400 hover:text-red-300 shrink-0"
                                      >
                                        <X size={12} />
                                      </button>
                                    )}
                                  </div>
                                </div>

                                {/* Ảnh Khuôn Mặt */}
                                <div className="space-y-1.5 text-left">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Ảnh Khuôn Mặt</label>
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
                                          {/* Hover Preview Tooltip */}
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
                                        className="text-red-400 hover:text-red-300 shrink-0"
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

                      {/* Footer Actions of Form (Tạo thêm nhân viên & Lưu) */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#21232d]">
                        {/* Nút Tạo thêm nhân viên (chữ xanh dương, nền xanh dương nhạt giống sidebar active) */}
                        <button
                          type="button"
                          onClick={() => {
                            setNewEmployees([...newEmployees, createEmptyNewEmployee()]);
                          }}
                          className="px-4 py-2.5 bg-[#00a2e8]/10 text-[#00a2e8] hover:bg-[#00a2e8]/20 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Plus size={14} />
                          <span>Tạo thêm nhân viên</span>
                        </button>

                        {/* Nút LƯU (chữ trắng, nền màu đại diện của hệ thống) */}
                        <button
                          type="submit"
                          className="px-6 py-2.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 uppercase tracking-wider shadow-lg shadow-[#00a2e8]/20 cursor-pointer"
                        >
                          <Save size={14} />
                          <span>Lưu</span>
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  /* Quản lý phòng ban */
                  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-fadeIn">
                    
                    {/* Left Panel: Danh sách phòng ban */}
                    <div className="md:col-span-7 bg-[#14151c] border border-[#21232d] rounded-2xl overflow-hidden shadow-xl">
                      <div className="p-4 bg-[#181921] border-b border-[#21232d] flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a2e8]" />
                          <span>Danh sách phòng ban ({departments.length})</span>
                        </span>
                      </div>
                      
                      <div className="divide-y divide-[#1e202b] max-h-[500px] overflow-y-auto">
                        {departments.map((dep, index) => (
                          <div 
                            key={index}
                            className="p-4 hover:bg-[#181a24] transition flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 font-bold text-xs select-none">
                                {index + 1}
                              </div>
                              <span className="text-sm font-bold text-slate-100">{dep}</span>
                            </div>
                            <button 
                              onClick={() => {
                                if (confirm(`Bạn có chắc chắn muốn xóa phòng ban "${dep}" không?`)) {
                                  setDepartments(departments.filter(d => d !== dep));
                                }
                              }}
                              className="p-1.5 hover:bg-red-500/10 text-slate-500 hover:text-red-400 rounded-lg transition cursor-pointer"
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

                    {/* Right Panel: Phòng ban builder */}
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
                          className="w-full py-2.5 bg-[#00a2e8] hover:bg-[#008cc9] text-white rounded-xl text-xs font-bold transition shadow-lg shadow-[#00a2e8]/20 cursor-pointer flex items-center justify-center space-x-2"
                        >
                          <Plus size={14} />
                          <span>Tạo phòng ban</span>
                        </button>
                      </form>
                    </div>

                  </div>
                )}
              </div>
            </div>
          )}

          {/* CONDITIONAL VIEW 5: QUẢN LÝ LỊCH RA VÀO */}
          {activeSidebar === 'access-schedule' && (
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
                    
                    {/* LEFT PANEL: CHỌN PHÒNG HỌP & PHÒNG BAN */}
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

                          {/* Dropdown Khu vực (Phòng họp) */}
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

                          {/* Multiselect Phòng ban */}
                          <div className="space-y-1.5 text-left relative">
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
                                            readOnly
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

                        {/* Pick Ngày & Button Tạo cuộc họp */}
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

                          {/* Button "Tạo cuộc họp" */}
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

                                // Clone saved data to preview
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
                              className="w-full bg-[#00a2e8] hover:bg-[#008cc9] text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 transition-all duration-200 active:scale-95 shadow-md shadow-[#00a2e8]/25 cursor-pointer h-[42px] text-xs"
                            >
                              <Plus size={14} />
                              <span>Tạo cuộc họp</span>
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
                                title="Hiển thị theo phòng ban"
                                className={`px-2 py-1 rounded-md text-[10px] font-semibold flex items-center space-x-1 transition duration-150 cursor-pointer ${
                                  schMeetingLayout === 'by-department'
                                    ? 'bg-[#00a2e8] text-white font-bold'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                <Users size={11} />
                                <span>Phòng ban</span>
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
                          const activeSchedules = isFillingMeetingTable && schMeetingPreviewData ? schMeetingPreviewData : schMeetingSavedData;

                          // Filter meetings of that room and that date
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
                                          {/* Arrow */}
                                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d]" />
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
                                  Không có phòng ban nào tham gia các cuộc họp ngày hôm nay
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
                                            {/* Arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#21232d]" />
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
                          onClick={() => {
                            if (!schMeetingPreviewData) return;

                            // Check overwrite with saved meeting data on that specific day
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
                          className="px-5 py-2.5 bg-[#0078d7] hover:bg-[#006fca] text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition shadow-lg shadow-[#0078d7]/20 cursor-pointer"
                        >
                          <Save size={14} />
                          <span>Lưu cuộc họp</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-[#14151c] border border-[#21232d] rounded-2xl p-4 shadow-md">
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
            </div>
          )}
        </div>
      </div>

      {/* 4. MODALS & POPUPS FOR SIMULATION */}

      {/* MODAL 1: BROWSE PATH MODAL */}
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

            {/* Folder selection simulation */}
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

      {/* MODAL 2: ADD CAMERA MODAL */}
      {showAddCamModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-[#1b1c25] rounded-xl shadow-2xl overflow-hidden text-xs"
          >
            <form onSubmit={handleAddCamera}>
              <div className="p-4 bg-[#14151c] border-b border-transparent flex items-center justify-between">
                <span className="font-bold text-slate-200">Đăng ký kết nối Camera mới</span>
                <button type="button" onClick={() => setShowAddCamModal(false)} className="text-slate-400 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Khu vực phân luồng</label>
                  <input 
                    type="text" 
                    value={selectedArea.name}
                    disabled
                    className="w-full bg-slate-800 text-slate-400 border border-[#2d2f3c] rounded px-3 py-1.5 cursor-not-allowed font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Tên thiết bị Camera</label>
                  <input 
                    type="text" 
                    placeholder="ví dụ: Camera Sảnh Đợi 03"
                    value={newCamName}
                    onChange={(e) => setNewCamName(e.target.value)}
                    required
                    className="w-full bg-[#111218] border border-[#2d2f3c] rounded px-3 py-1.5 text-white focus:outline-none focus:border-[#00a2e8]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">IP Address</label>
                    <input 
                      type="text" 
                      value={newCamIp}
                      onChange={(e) => setNewCamIp(e.target.value)}
                      className="w-full bg-[#111218] border border-[#2d2f3c] rounded px-3 py-1.5 text-white font-mono focus:outline-none focus:border-[#00a2e8]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Port RTSP</label>
                    <input 
                      type="number" 
                      value={newCamPort}
                      onChange={(e) => setNewCamPort(parseInt(e.target.value) || 554)}
                      className="w-full bg-[#111218] border border-[#2d2f3c] rounded px-3 py-1.5 text-white font-mono focus:outline-none focus:border-[#00a2e8]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Độ phân giải tối đa</label>
                  <select 
                    value={newCamResolution}
                    onChange={(e) => setNewCamResolution(e.target.value)}
                    className="w-full bg-[#111218] border border-[#2d2f3c] text-white rounded px-3 py-1.5 focus:outline-none focus:border-[#00a2e8]"
                  >
                    <option value="1920x1080 (1080P)">1920x1080 (1080P)</option>
                    <option value="2560x1440 (2K)">2560x1440 (2K)</option>
                    <option value="3840x2160 (4K UltraHD)">3840x2160 (4K UltraHD)</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-[#14151c] border-t border-transparent flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={() => setShowAddCamModal(false)}
                  className="py-1.5 px-3 border border-[#2d2f3c] rounded text-slate-400 hover:text-slate-200 transition"
                >
                  Hủy bỏ
                </button>
                <button 
                  type="submit"
                  className="py-1.5 px-4 bg-[#0078d7] hover:bg-[#0069be] text-white rounded font-medium transition"
                >
                  Đăng ký kết nối
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* EXPORTING TO EXCEL INTERACTIVE DRAWER */}
      {exporting && (
        <div className="fixed bottom-4 right-4 bg-[#1a1b24] rounded-xl shadow-2xl p-4 w-80 z-50 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-200">Đang xuất tệp Excel...</span>
            <span className="font-mono text-[#00a2e8] font-bold">{exportProgress}%</span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#00a2e8] h-full transition-all duration-150" style={{ width: `${exportProgress}%` }} />
          </div>
          <p className="text-[10px] text-slate-400 font-mono italic">Đang tổng hợp dữ liệu lịch sử check-in ({totalItems} sự kiện)</p>
        </div>
      )}

      {/* SUCCESS TOAST MESSAGE */}
      <AnimatePresence>
        {showExportToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-emerald-950/90 rounded-xl shadow-2xl p-4 w-96 z-50 flex items-start space-x-3 text-xs"
          >
            <div className="p-1.5 bg-emerald-500/20 rounded-full text-emerald-400 shrink-0">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-bold text-emerald-200">Xuất dữ liệu thành công!</h4>
              <p className="text-emerald-400 text-[11px] mt-0.5">Tệp <span className="font-mono bg-black/30 px-1 py-0.5 rounded text-white">{exportedFileName}</span> đã được biên dịch thành công.</p>
              <span className="text-[10px] text-slate-400 block mt-1">Đường dẫn: {savePath}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SCHEDULE SAVE TOAST */}
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

      {/* OVERWRITE CONFIRMATION DIALOG MODAL */}
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

      {/* MEETING OVERWRITE CONFIRMATION DIALOG MODAL */}
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
                Bạn có chắc chắn muốn ghi đè lên các lịch họp hiện tại của phòng ban và lưu các thay đổi này không? Hành động này không thể hoàn tác.
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
                className="py-2 px-4 bg-[#0078d7] hover:bg-[#006cc1] text-white rounded-xl font-bold transition shadow-lg shadow-[#0078d7]/20 cursor-pointer text-center"
              >
                Xác nhận
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* MEETING SCHEDULE SAVE TOAST */}
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
              <p className="text-emerald-400 text-[11px] mt-0.5">Lịch họp của các phòng ban đã được cập nhật thành công và đồng bộ hóa tới các thiết bị.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
