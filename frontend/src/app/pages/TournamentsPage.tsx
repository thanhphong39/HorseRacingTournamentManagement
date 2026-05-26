import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import {
  Trophy,
  Calendar,
  MapPin,
  Users,
  Timer,
  ChevronRight,
  Filter,
  Search,
  Clock,
  Medal,
  Eye,
  X,
  Shield,
  Star,
  TrendingUp,
  Award,
  Flag,
  Zap,
  ChevronLeft,
  Info,
  Play,
  CheckCircle2,
  CircleDot,
  Circle
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const tournaments = [
  {
    id: 1,
    name: 'Giải Hoàng Gia 2026',
    subtitle: 'Giải đấu đỉnh cao của mùa giải',
    status: 'live',
    category: 'Vô Địch Quốc Gia',
    location: 'Trường Đua Phú Thọ, TP.HCM',
    address: '1 Lữ Gia, Phường 15, Quận 11, TP.HCM',
    date: '25/05/2026',
    time: '14:00',
    endTime: '18:00',
    prize: '500,000,000 VNĐ',
    participants: 16,
    rounds: 4,
    currentRound: 3,
    distance: '2400m',
    surface: 'Cỏ tự nhiên',
    weather: 'Nắng, 28°C, gió nhẹ',
    viewers: 12405,
    color: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    badge: 'TRỰC TIẾP',
    image: 'https://images.unsplash.com/photo-1613085411234-9c83af5562d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'Liên Đoàn Đua Ngựa Việt Nam',
    sponsor: 'VietRace Corp & HDFC Bank',
    referee: 'Ông Trần Đức Anh',
    horses: [
      { pos: 1, name: 'Tia Chớp', jockey: 'Nguyễn Văn Anh', owner: 'Nguyễn Minh Tâm', weight: '58kg', odds: 2.5, form: [1,1,2,1], color: '#D4A843', number: 1, age: 5 },
      { pos: 2, name: 'Ngôi Sao Đêm', jockey: 'Trần Thị Bích', owner: 'Trần Gia Bảo', weight: '56kg', odds: 3.8, form: [2,1,1,3], color: '#8B9DC3', number: 2, age: 6 },
      { pos: 3, name: 'Thần Gió', jockey: 'Lê Văn Cường', owner: 'Lê Công Vinh', weight: '57kg', odds: 5.0, form: [3,2,1,2], color: '#CD7F32', number: 3, age: 4 },
      { pos: 4, name: 'Móng Vàng', jockey: 'Phạm Minh Đức', owner: 'Phạm Thái Sơn', weight: '55kg', odds: 12.0, form: [1,3,4,1], color: '#4CAF82', number: 4, age: 5 },
      { pos: 5, name: 'Vinh Quang Đỏ', jockey: 'Hoàng Văn Em', owner: 'Hoàng Văn Nam', weight: '59kg', odds: 15.0, form: [4,4,3,5], color: '#E74C3C', number: 5, age: 7 },
      { pos: 6, name: 'Bão Tốc', jockey: 'Ngô Thị Phương', owner: 'Vũ Đình Hùng', weight: '56kg', odds: 18.0, form: [2,5,2,4], color: '#9B59B6', number: 6, age: 4 },
    ],
    roundResults: [
      { round: 1, winner: 'Tia Chớp', time: '2:24.3', date: '25/05/2026 14:15', status: 'done' },
      { round: 2, winner: 'Ngôi Sao Đêm', time: '2:26.1', date: '25/05/2026 15:00', status: 'done' },
      { round: 3, winner: 'Tia Chớp', time: '—', date: '25/05/2026 15:45', status: 'live' },
      { round: 4, winner: '—', time: '—', date: '25/05/2026 16:30', status: 'pending' },
    ],
    schedule: [
      { time: '13:30', event: 'Mở cổng, đón khán giả' },
      { time: '14:00', event: 'Khai mạc, giới thiệu ngựa & kỵ sĩ' },
      { time: '14:15', event: 'Vòng 1 — Vòng loại' },
      { time: '15:00', event: 'Vòng 2 — Bán kết A' },
      { time: '15:45', event: 'Vòng 3 — Bán kết B (ĐANG DIỄN RA)' },
      { time: '16:30', event: 'Vòng 4 — Chung kết' },
      { time: '17:30', event: 'Lễ trao giải' },
    ],
    rules: [
      'Mỗi ngựa tham gia tối đa 2 vòng đấu',
      'Trọng lượng kỵ sĩ tối thiểu 55kg, tối đa 60kg',
      'Khoảng cách an toàn giữa các ngựa tối thiểu 1m',
      'Kết quả dựa trên thời gian về đích chính xác đến 0.01 giây',
      'Ngựa vi phạm sẽ bị loại khỏi vòng đấu đó',
    ]
  },
  {
    id: 2,
    name: 'Cup Mùa Hè 2026',
    subtitle: 'Giải đấu hấp dẫn dành cho các tay đua trẻ',
    status: 'upcoming',
    category: 'Hạng A',
    location: 'Trường Đua Đại Nam, Bình Dương',
    address: 'Khu Du Lịch Đại Nam, Bình Dương',
    date: '01/06/2026',
    time: '09:00',
    endTime: '13:00',
    prize: '200,000,000 VNĐ',
    participants: 12,
    rounds: 3,
    currentRound: 0,
    distance: '1800m',
    surface: 'Đất nén',
    weather: 'Dự báo: Mây rải rác, 26°C',
    viewers: 0,
    color: 'from-blue-500 to-cyan-600',
    accentColor: 'blue',
    badge: 'SẮP DIỄN RA',
    image: 'https://images.unsplash.com/photo-1760041870925-0a6ed8220ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'CLB Đua Ngựa Bình Dương',
    sponsor: 'Bình Dương FC & SunLife',
    referee: 'Bà Nguyễn Thị Mai',
    horses: [
      { pos: 1, name: 'Bão Tốc', jockey: 'Ngô Thị Phương', owner: 'Vũ Đình Hùng', weight: '56kg', odds: 2.1, form: [1,2,1,1], color: '#9B59B6', number: 1, age: 4 },
      { pos: 2, name: 'Hổ Phong', jockey: 'Dương Minh Giang', owner: 'Đinh Quốc Bảo', weight: '57kg', odds: 3.5, form: [2,1,2,2], color: '#3498DB', number: 2, age: 6 },
      { pos: 3, name: 'Long Mã', jockey: 'Lý Hữu Hùng', owner: 'Bùi Thanh Hải', weight: '55kg', odds: 6.0, form: [3,3,3,1], color: '#1ABC9C', number: 3, age: 5 },
      { pos: 4, name: 'Tia Chớp', jockey: 'Nguyễn Văn Anh', owner: 'Nguyễn Minh Tâm', weight: '58kg', odds: 8.0, form: [1,2,1,3], color: '#D4A843', number: 4, age: 5 },
    ],
    roundResults: [
      { round: 1, winner: '—', time: '—', date: '01/06/2026 09:15', status: 'pending' },
      { round: 2, winner: '—', time: '—', date: '01/06/2026 10:30', status: 'pending' },
      { round: 3, winner: '—', time: '—', date: '01/06/2026 11:45', status: 'pending' },
    ],
    schedule: [
      { time: '08:30', event: 'Mở cổng, đón khán giả' },
      { time: '09:00', event: 'Khai mạc & giới thiệu' },
      { time: '09:15', event: 'Vòng 1' },
      { time: '10:30', event: 'Vòng 2 — Bán kết' },
      { time: '11:45', event: 'Vòng 3 — Chung kết' },
      { time: '12:30', event: 'Lễ trao giải' },
    ],
    rules: [
      'Mỗi ngựa tham gia tối đa 2 vòng đấu',
      'Trọng lượng kỵ sĩ tối thiểu 55kg',
      'Kết quả dựa trên thời gian về đích',
    ]
  },
  {
    id: 3,
    name: 'Giải Trẻ Năng Động',
    subtitle: 'Sân chơi cho ngựa dưới 4 tuổi và kỵ sĩ mới',
    status: 'upcoming',
    category: 'Hạng B',
    location: 'Trường Đua Phú Thọ, TP.HCM',
    address: '1 Lữ Gia, Phường 15, Quận 11, TP.HCM',
    date: '08/06/2026',
    time: '08:00',
    endTime: '12:00',
    prize: '100,000,000 VNĐ',
    participants: 20,
    rounds: 5,
    currentRound: 0,
    distance: '1200m',
    surface: 'Cỏ nhân tạo',
    weather: 'Dự báo: Nắng đẹp, 27°C',
    viewers: 0,
    color: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    badge: 'SẮP DIỄN RA',
    image: 'https://images.unsplash.com/photo-1546700990-7b6416f2d90c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'Hội Đua Ngựa TP.HCM',
    sponsor: 'Saigon Horse Club',
    referee: 'Ông Lê Minh Trí',
    horses: [
      { pos: 1, name: 'Gió Xuân', jockey: 'Trần Thị Lan', owner: 'Nguyễn Hải Long', weight: '55kg', odds: 1.9, form: [1,1,2,1], color: '#27AE60', number: 1, age: 3 },
      { pos: 2, name: 'Sét Đánh', jockey: 'Nguyễn Tuấn Anh', owner: 'Trần Gia Phát', weight: '56kg', odds: 3.2, form: [2,2,1,2], color: '#E67E22', number: 2, age: 4 },
      { pos: 3, name: 'Nắng Hạ', jockey: 'Lê Thị Hoa', owner: 'Phạm Văn Đức', weight: '55kg', odds: 4.5, form: [3,1,3,3], color: '#F39C12', number: 3, age: 3 },
    ],
    roundResults: [],
    schedule: [
      { time: '07:30', event: 'Mở cổng' },
      { time: '08:00', event: 'Khai mạc' },
      { time: '08:15', event: 'Vòng 1–3 (vòng loại)' },
      { time: '10:00', event: 'Vòng 4 — Bán kết' },
      { time: '11:00', event: 'Vòng 5 — Chung kết' },
      { time: '11:45', event: 'Lễ trao giải' },
    ],
    rules: ['Chỉ dành cho ngựa dưới 4 tuổi', 'Kỵ sĩ mới tham gia dưới 3 năm kinh nghiệm', 'Cự ly tối đa 1200m']
  },
  {
    id: 4,
    name: 'Đại Giải Cuối Năm',
    subtitle: 'Siêu giải đấu — Tổng giải thưởng 1 tỷ đồng',
    status: 'upcoming',
    category: 'Vô Địch Quốc Gia',
    location: 'Trường Đua Đại Nam, Bình Dương',
    address: 'Khu Du Lịch Đại Nam, Bình Dương',
    date: '15/12/2026',
    time: '10:00',
    endTime: '17:00',
    prize: '1,000,000,000 VNĐ',
    participants: 24,
    rounds: 6,
    currentRound: 0,
    distance: '3200m',
    surface: 'Cỏ tự nhiên cao cấp',
    weather: 'Chưa có dự báo',
    viewers: 0,
    color: 'from-violet-500 to-purple-700',
    accentColor: 'violet',
    badge: 'ĐẶC BIỆT',
    image: 'https://images.unsplash.com/photo-1766170449400-be0022117c24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'Liên Đoàn Đua Ngựa Việt Nam',
    sponsor: 'VietRace Corp, BIDV & VinGroup',
    referee: 'Hội đồng trọng tài 5 người',
    horses: [],
    roundResults: [],
    schedule: [
      { time: '09:30', event: 'Mở cổng VIP' },
      { time: '10:00', event: 'Lễ khai mạc hoành tráng' },
      { time: '10:30', event: 'Vòng 1–4 (vòng loại)' },
      { time: '14:00', event: 'Vòng 5 — Bán kết' },
      { time: '15:30', event: 'Vòng 6 — Đại Chung Kết' },
      { time: '16:30', event: 'Lễ trao giải & bế mạc' },
    ],
    rules: [
      'Đăng ký trước 30/11/2026',
      'Phí đăng ký: 5,000,000 VNĐ/ngựa',
      'Kỵ sĩ phải có tối thiểu 3 năm kinh nghiệm',
      'Ngựa phải được kiểm tra sức khỏe 7 ngày trước giải',
    ]
  },
  {
    id: 5,
    name: 'Giải Miền Bắc Lần 3',
    subtitle: 'Giải đấu truyền thống của khu vực phía Bắc',
    status: 'finished',
    category: 'Hạng A',
    location: 'Trường Đua Hà Nội',
    address: 'Trường Đua Ngựa Hà Nội, Gia Lâm, Hà Nội',
    date: '10/05/2026',
    time: '09:00',
    endTime: '14:00',
    prize: '300,000,000 VNĐ',
    participants: 14,
    rounds: 4,
    currentRound: 4,
    distance: '2000m',
    surface: 'Đất nén',
    weather: 'Mây một phần, 22°C',
    viewers: 8320,
    color: 'from-slate-500 to-slate-700',
    accentColor: 'slate',
    badge: 'ĐÃ KẾT THÚC',
    image: 'https://images.unsplash.com/photo-1764333672837-e490785e8306?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'Liên Đoàn Đua Ngựa Miền Bắc',
    sponsor: 'Hà Nội Motor & TPBank',
    referee: 'Ông Phạm Đức Thắng',
    horses: [
      { pos: 1, name: 'Tia Chớp', jockey: 'Nguyễn Văn Anh', owner: 'Nguyễn Minh Tâm', weight: '58kg', odds: 2.2, form: [1,1,1,1], color: '#D4A843', number: 1, age: 5 },
      { pos: 2, name: 'Ngôi Sao Đêm', jockey: 'Trần Thị Bích', owner: 'Trần Gia Bảo', weight: '56kg', odds: 3.5, form: [2,2,2,2], color: '#8B9DC3', number: 2, age: 6 },
      { pos: 3, name: 'Thần Gió', jockey: 'Lê Văn Cường', owner: 'Lê Công Vinh', weight: '57kg', odds: 4.8, form: [3,3,3,3], color: '#CD7F32', number: 3, age: 4 },
    ],
    roundResults: [
      { round: 1, winner: 'Tia Chớp', time: '2:18.4', date: '10/05/2026 09:30', status: 'done' },
      { round: 2, winner: 'Tia Chớp', time: '2:19.1', date: '10/05/2026 10:30', status: 'done' },
      { round: 3, winner: 'Ngôi Sao Đêm', time: '2:20.5', date: '10/05/2026 11:30', status: 'done' },
      { round: 4, winner: 'Tia Chớp', time: '2:17.8', date: '10/05/2026 13:00', status: 'done' },
    ],
    schedule: [],
    rules: []
  },
  {
    id: 6,
    name: 'Tranh Tài Mùa Xuân',
    subtitle: 'Khai xuân với những màn đua kịch tính',
    status: 'finished',
    category: 'Hạng B',
    location: 'Trường Đua Phú Thọ, TP.HCM',
    address: '1 Lữ Gia, Phường 15, Quận 11, TP.HCM',
    date: '20/04/2026',
    time: '08:30',
    endTime: '12:30',
    prize: '150,000,000 VNĐ',
    participants: 18,
    rounds: 5,
    currentRound: 5,
    distance: '1600m',
    surface: 'Cỏ tự nhiên',
    weather: 'Nắng, 30°C',
    viewers: 5890,
    color: 'from-slate-500 to-slate-700',
    accentColor: 'slate',
    badge: 'ĐÃ KẾT THÚC',
    image: 'https://images.unsplash.com/photo-1613085411234-9c83af5562d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    organizer: 'CLB Đua Ngựa TP.HCM',
    sponsor: 'Saigon Horse Club & Techcombank',
    referee: 'Bà Vũ Thị Thanh',
    horses: [
      { pos: 1, name: 'Vinh Quang Đỏ', jockey: 'Hoàng Văn Em', owner: 'Hoàng Văn Nam', weight: '59kg', odds: 3.1, form: [1,2,1,1,1], color: '#E74C3C', number: 1, age: 7 },
      { pos: 2, name: 'Bão Tốc', jockey: 'Ngô Thị Phương', owner: 'Vũ Đình Hùng', weight: '56kg', odds: 4.2, form: [2,1,2,2,2], color: '#9B59B6', number: 2, age: 4 },
    ],
    roundResults: [
      { round: 1, winner: 'Bão Tốc', time: '1:54.2', date: '20/04/2026 08:45', status: 'done' },
      { round: 2, winner: 'Vinh Quang Đỏ', time: '1:52.8', date: '20/04/2026 09:30', status: 'done' },
      { round: 3, winner: 'Bão Tốc', time: '1:53.5', date: '20/04/2026 10:15', status: 'done' },
      { round: 4, winner: 'Vinh Quang Đỏ', time: '1:51.9', date: '20/04/2026 11:00', status: 'done' },
      { round: 5, winner: 'Vinh Quang Đỏ', time: '1:50.4', date: '20/04/2026 11:45', status: 'done' },
    ],
    schedule: [],
    rules: []
  }
];

const categories = ['Tất Cả', 'Vô Địch Quốc Gia', 'Hạng A', 'Hạng B'];
const statusFilters = ['Tất Cả', 'Đang Diễn Ra', 'Sắp Tới', 'Đã Kết Thúc'];

type Tournament = typeof tournaments[number];

// ─── Detail Panel ─────────────────────────────────────────────────────────────

function TournamentDetail({ t, onClose }: { t: Tournament; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'horses' | 'rounds' | 'schedule'>('overview');

  const accentMap: Record<string, string> = {
    amber: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
    blue: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    emerald: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    violet: 'text-violet-400 border-violet-500/30 bg-violet-500/10',
    slate: 'text-slate-400 border-slate-500/30 bg-slate-500/10',
  };
  const accent = accentMap[t.accentColor] || accentMap.amber;
  const accentText = accent.split(' ')[0];

  const formColor = (pos: number) => {
    if (pos === 1) return 'bg-emerald-500';
    if (pos === 2) return 'bg-blue-500';
    if (pos === 3) return 'bg-amber-500';
    return 'bg-slate-600';
  };

  const tabs = [
    { key: 'overview', label: 'Tổng Quan', icon: Info },
    { key: 'horses', label: `Ngựa Đua (${t.horses.length})`, icon: Zap },
    { key: 'rounds', label: 'Kết Quả Vòng', icon: Flag },
    { key: 'schedule', label: 'Lịch Trình', icon: Calendar },
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] flex items-stretch">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative ml-auto w-full max-w-2xl bg-slate-950 border-l border-white/10 flex flex-col overflow-hidden animate-[slideIn_0.3s_ease]">
        {/* Hero Image */}
        <div className="relative h-56 shrink-0">
          <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white ${
              t.status === 'live' ? 'bg-red-500' : t.status === 'upcoming' ? 'bg-blue-600' : 'bg-slate-600'
            }`}>
              {t.status === 'live' && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
              {t.badge}
            </div>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${accentText}`}>{t.category}</div>
            <h2 className="text-2xl font-extrabold text-white leading-tight">{t.name}</h2>
            <p className="text-sm text-slate-400 mt-0.5">{t.subtitle}</p>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-4 border-b border-white/8 shrink-0">
          {[
            { label: 'Giải Thưởng', value: t.prize.replace(' VNĐ', ''), icon: Trophy },
            { label: 'Ngựa', value: `${t.participants}`, icon: Users },
            { label: 'Cự Ly', value: t.distance, icon: Timer },
            { label: 'Vòng', value: `${t.currentRound}/${t.rounds}`, icon: Flag },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center py-4 border-r border-white/5 last:border-r-0">
              <Icon className={`w-4 h-4 mb-1 ${accentText}`} />
              <div className="text-sm font-bold text-white">{value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* Live viewers if live */}
        {t.status === 'live' && (
          <div className="flex items-center gap-3 px-6 py-3 bg-red-500/10 border-b border-red-500/20 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wide">Đang phát trực tiếp</span>
            </div>
            <div className="flex items-center gap-1 ml-auto text-xs text-slate-400">
              <Eye className="w-3.5 h-3.5" />
              <span>{t.viewers.toLocaleString()} đang xem</span>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex border-b border-white/8 shrink-0 overflow-x-auto">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-1.5 px-5 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === key
                  ? `border-amber-400 text-amber-400`
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto">

          {/* ── OVERVIEW ── */}
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6">
              {/* Info grid */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Thông Tin Giải Đấu</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Địa Điểm', value: t.location, icon: MapPin },
                    { label: 'Địa Chỉ', value: t.address, icon: MapPin },
                    { label: 'Ngày Thi Đấu', value: `${t.date} · ${t.time} — ${t.endTime}`, icon: Calendar },
                    { label: 'Mặt Sân', value: t.surface, icon: Star },
                    { label: 'Thời Tiết', value: t.weather, icon: Zap },
                    { label: 'Số Người Xem', value: t.viewers > 0 ? `${t.viewers.toLocaleString()} khán giả` : 'Chưa diễn ra', icon: Eye },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-xl border border-white/5">
                      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${accentText}`} />
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">{label}</div>
                        <div className="text-sm text-white font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organizer */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Ban Tổ Chức</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Đơn Vị Tổ Chức', value: t.organizer, icon: Shield },
                    { label: 'Nhà Tài Trợ', value: t.sponsor, icon: Award },
                    { label: 'Trọng Tài', value: t.referee, icon: Medal },
                  ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-white/5">
                      <Icon className={`w-4 h-4 shrink-0 ${accentText}`} />
                      <div>
                        <div className="text-xs text-slate-500">{label}</div>
                        <div className="text-sm text-white">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              {t.rules.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Quy Định</h3>
                  <div className="space-y-2">
                    {t.rules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-xl border border-white/5">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-950 shrink-0 mt-0.5 ${
                          t.accentColor === 'amber' ? 'bg-amber-400' :
                          t.accentColor === 'blue' ? 'bg-blue-400' :
                          t.accentColor === 'emerald' ? 'bg-emerald-400' :
                          t.accentColor === 'violet' ? 'bg-violet-400' : 'bg-slate-400'
                        }`}>{i + 1}</div>
                        <span className="text-sm text-slate-300">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── HORSES ── */}
          {activeTab === 'horses' && (
            <div className="p-6">
              {t.horses.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <Users className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Danh sách ngựa đua chưa được công bố.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Danh Sách {t.horses.length} Ngựa Tham Gia
                  </h3>
                  {t.horses.map((h) => (
                    <div key={h.number} className="p-4 bg-slate-900/60 border border-white/8 rounded-2xl hover:border-white/15 transition-colors">
                      <div className="flex items-center gap-4 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-lg shrink-0"
                          style={{ backgroundColor: h.color + '33', border: `2px solid ${h.color}55` }}
                        >
                          <span style={{ color: h.color }}>{h.number}</span>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white flex items-center gap-2">
                            {h.name}
                            {h.pos === 1 && <span className="text-[10px] px-1.5 py-0.5 bg-amber-500/20 text-amber-400 rounded font-semibold">Ứng Viên #1</span>}
                          </div>
                          <div className="text-xs text-slate-400">Kỵ sĩ: {h.jockey} · Chủ: {h.owner}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-amber-400">{h.odds}x</div>
                          <div className="text-[10px] text-slate-500">Tỷ Lệ</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3 text-center border-t border-white/5 pt-3">
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Trọng Lượng</div>
                          <div className="text-sm font-medium text-white">{h.weight}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Tuổi</div>
                          <div className="text-sm font-medium text-white">{h.age} tuổi</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 mb-1">Phong Độ Gần Đây</div>
                          <div className="flex gap-1 justify-center">
                            {h.form.map((pos, i) => (
                              <div key={i} className={`w-5 h-5 rounded text-[9px] font-bold flex items-center justify-center text-white ${formColor(pos)}`}>
                                {pos}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── ROUNDS ── */}
          {activeTab === 'rounds' && (
            <div className="p-6">
              {t.roundResults.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <Flag className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Kết quả chưa có. Giải đấu chưa bắt đầu.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    Kết Quả Từng Vòng ({t.currentRound}/{t.rounds})
                  </h3>

                  {/* Progress */}
                  <div className="p-4 bg-slate-900/60 rounded-2xl border border-white/8 mb-5">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-slate-400">Tiến Độ Giải Đấu</span>
                      <span className="text-white font-medium">{Math.round((t.currentRound / t.rounds) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${t.color} rounded-full transition-all`}
                        style={{ width: `${(t.currentRound / t.rounds) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-slate-600">
                      <span>Vòng 1</span>
                      <span>Vòng {t.rounds}</span>
                    </div>
                  </div>

                  {t.roundResults.map((r) => (
                    <div key={r.round} className={`p-4 rounded-2xl border flex items-center gap-4 ${
                      r.status === 'live' ? 'bg-red-500/10 border-red-500/30' :
                      r.status === 'done' ? 'bg-slate-900/60 border-white/8' :
                      'bg-slate-900/30 border-white/5 opacity-60'
                    }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        r.status === 'live' ? 'bg-red-500/20' :
                        r.status === 'done' ? 'bg-emerald-500/20' : 'bg-slate-800'
                      }`}>
                        {r.status === 'done' ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> :
                         r.status === 'live' ? <CircleDot className="w-5 h-5 text-red-400 animate-pulse" /> :
                         <Circle className="w-5 h-5 text-slate-600" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-white text-sm">Vòng {r.round}</span>
                          {r.status === 'live' && (
                            <span className="px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded uppercase tracking-wide">Live</span>
                          )}
                          {r.status === 'done' && (
                            <span className="text-[10px] text-emerald-400 font-medium">Hoàn Thành</span>
                          )}
                          {r.status === 'pending' && (
                            <span className="text-[10px] text-slate-500">Chưa Diễn Ra</span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400">{r.date}</div>
                      </div>
                      <div className="text-right">
                        {r.status !== 'pending' && (
                          <>
                            <div className="font-bold text-white text-sm">{r.winner}</div>
                            <div className="text-xs text-slate-500">⏱ {r.time}</div>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── SCHEDULE ── */}
          {activeTab === 'schedule' && (
            <div className="p-6">
              {t.schedule.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Lịch trình chưa có.</p>
                </div>
              ) : (
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                    Lịch Trình Ngày {t.date}
                  </h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[34px] top-0 bottom-0 w-px bg-white/8" />
                    <div className="space-y-1">
                      {t.schedule.map((s, i) => {
                        const isActive = s.event.includes('ĐANG DIỄN RA');
                        return (
                          <div key={i} className={`flex items-start gap-4 p-3 rounded-xl transition-colors ${isActive ? 'bg-red-500/10 border border-red-500/20' : 'hover:bg-white/3'}`}>
                            <div className={`w-16 text-xs font-bold shrink-0 pt-0.5 ${isActive ? 'text-red-400' : 'text-slate-500'}`}>
                              {s.time}
                            </div>
                            <div className={`w-3 h-3 rounded-full shrink-0 mt-1 z-10 ${isActive ? 'bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-slate-700 border border-slate-600'}`} />
                            <div className={`text-sm ${isActive ? 'text-white font-semibold' : 'text-slate-300'}`}>
                              {s.event.replace(' (ĐANG DIỄN RA)', '')}
                              {isActive && <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-red-500 text-white rounded font-bold uppercase">Live</span>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function TournamentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tất Cả');
  const [selectedStatus, setSelectedStatus] = useState('Tất Cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [detailTournament, setDetailTournament] = useState<Tournament | null>(null);

  const statusMap: Record<string, string> = {
    'Tất Cả': 'all', 'Đang Diễn Ra': 'live', 'Sắp Tới': 'upcoming', 'Đã Kết Thúc': 'finished'
  };

  const filtered = tournaments.filter(t => {
    const matchCat = selectedCategory === 'Tất Cả' || t.category === selectedCategory;
    const matchStatus = selectedStatus === 'Tất Cả' || t.status === statusMap[selectedStatus];
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchStatus && matchSearch;
  });

  const liveCount = tournaments.filter(t => t.status === 'live').length;
  const upcomingCount = tournaments.filter(t => t.status === 'upcoming').length;
  const finishedCount = tournaments.filter(t => t.status === 'finished').length;

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-amber-950/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative pt-28 pb-14 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/30 rounded-full mb-6">
                <Trophy className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400 uppercase tracking-wider">Giải Đấu</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                Tất Cả Giải Đấu
              </h1>
              <p className="text-lg text-slate-400 max-w-xl">
                Theo dõi mọi giải đấu đua ngựa — từ trực tiếp đến sắp diễn ra và lịch sử kết quả.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="text-center px-6 py-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-2xl font-bold text-white">{liveCount}</span>
                </div>
                <div className="text-xs text-red-400 font-medium uppercase tracking-wider">Trực Tiếp</div>
              </div>
              <div className="text-center px-6 py-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-2xl font-bold text-white">{upcomingCount}</span>
                </div>
                <div className="text-xs text-blue-400 font-medium uppercase tracking-wider">Sắp Tới</div>
              </div>
              <div className="text-center px-6 py-4 bg-slate-700/30 border border-white/10 rounded-2xl">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <Medal className="w-4 h-4 text-slate-400" />
                  <span className="text-2xl font-bold text-white">{finishedCount}</span>
                </div>
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Hoàn Thành</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[72px] z-30 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm giải đấu..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/60 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            {statusFilters.map(s => (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedStatus === s ? 'bg-amber-500 text-slate-950' : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-500/50"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-500">
            <Trophy className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg">Không tìm thấy giải đấu nào.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(t => (
              <div
                key={t.id}
                className="group relative bg-slate-900/60 border border-white/8 rounded-2xl overflow-hidden hover:border-amber-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white ${
                    t.status === 'live' ? 'bg-red-500 flex items-center gap-2' :
                    t.status === 'upcoming' ? 'bg-blue-600' : 'bg-slate-600'
                  }`}>
                    {t.status === 'live' && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                    {t.badge}
                  </div>
                  {t.status === 'live' && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2.5 py-1.5 rounded-lg text-xs text-white border border-white/10">
                      <Eye className="w-3.5 h-3.5" />
                      {t.viewers.toLocaleString()}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-medium text-amber-400 border border-amber-500/20">
                    {t.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-amber-400 transition-colors">{t.name}</h3>
                  <p className="text-xs text-slate-500 mb-3">{t.subtitle}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{t.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-slate-800/50 rounded-xl p-3 text-center">
                      <Calendar className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-xs font-medium text-white">{t.date}</div>
                      <div className="text-[10px] text-slate-500">{t.time}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3 text-center">
                      <Users className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-xs font-medium text-white">{t.participants}</div>
                      <div className="text-[10px] text-slate-500">Ngựa</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-3 text-center">
                      <Timer className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-xs font-medium text-white">{t.distance}</div>
                      <div className="text-[10px] text-slate-500">Cự Ly</div>
                    </div>
                  </div>

                  {t.status !== 'upcoming' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-400">Tiến Độ</span>
                        <span className="text-white font-medium">Vòng {t.currentRound}/{t.rounds}</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${t.color} rounded-full`}
                          style={{ width: `${(t.currentRound / t.rounds) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Giải Thưởng</div>
                      <div className="text-sm font-bold text-amber-400">{t.prize}</div>
                    </div>
                    <button
                      onClick={() => setDetailTournament(t)}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500/20 transition-colors"
                    >
                      {t.status === 'live'
                        ? <><Play className="w-3.5 h-3.5" /> Xem Chi Tiết</>
                        : <><ChevronRight className="w-3.5 h-3.5" /> Xem Chi Tiết</>
                      }
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Detail panel */}
      {detailTournament && (
        <TournamentDetail t={detailTournament} onClose={() => setDetailTournament(null)} />
      )}
    </div>
  );
}
