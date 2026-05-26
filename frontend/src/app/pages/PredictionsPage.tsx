import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import {
  Zap,
  TrendingUp,
  TrendingDown,
  Star,
  Target,
  BarChart3,
  Clock,
  Trophy,
  Users,
  Flame,
  ChevronRight,
  Activity,
  Eye,
  Check,
  AlertCircle
} from 'lucide-react';
import { Button } from '@mui/material';

const races = [
  {
    id: 1,
    name: 'Giải Hoàng Gia 2026 - Chung Kết',
    status: 'live',
    time: 'ĐANG ĐUA',
    participants: [
      { pos: 1, horse: 'Tia Chớp', jockey: 'Nguyễn Văn Anh', odds: 2.5, communityPick: 42, trend: 'up', form: [1,1,2,1,1], color: 'amber' },
      { pos: 2, horse: 'Ngôi Sao Đêm', jockey: 'Trần Thị Bích', odds: 3.8, communityPick: 28, trend: 'up', form: [2,1,1,3,2], color: 'slate' },
      { pos: 3, horse: 'Thần Gió', jockey: 'Lê Văn Cường', odds: 5.0, communityPick: 16, trend: 'same', form: [3,2,1,2,3], color: 'orange' },
      { pos: 4, horse: 'Móng Vàng', jockey: 'Phạm Minh Đức', odds: 12.0, communityPick: 9, trend: 'down', form: [1,3,4,1,4], color: 'green' },
      { pos: 5, horse: 'Vinh Quang Đỏ', jockey: 'Hoàng Văn Em', odds: 15.0, communityPick: 5, trend: 'down', form: [4,4,3,5,5], color: 'red' },
    ]
  },
  {
    id: 2,
    name: 'Cup Mùa Hè 2026 - Vòng 1',
    status: 'upcoming',
    time: '2 giờ nữa',
    participants: [
      { pos: 1, horse: 'Bão Tốc', jockey: 'Ngô Thị Phương', odds: 2.1, communityPick: 38, trend: 'up', form: [1,2,1,1,2], color: 'purple' },
      { pos: 2, horse: 'Hổ Phong', jockey: 'Dương Minh Giang', odds: 3.5, communityPick: 31, trend: 'up', form: [2,1,2,2,1], color: 'blue' },
      { pos: 3, horse: 'Long Mã', jockey: 'Lý Hữu Hùng', odds: 6.0, communityPick: 18, trend: 'same', form: [3,3,3,1,3], color: 'teal' },
      { pos: 4, horse: 'Tia Chớp', jockey: 'Nguyễn Văn Anh', odds: 8.0, communityPick: 13, trend: 'down', form: [1,2,1,3,4], color: 'amber' },
    ]
  }
];

const formColor = (pos: number) => {
  if (pos === 1) return 'bg-emerald-500';
  if (pos === 2) return 'bg-blue-500';
  if (pos === 3) return 'bg-amber-500';
  return 'bg-slate-600';
};

const userPredictions = [
  { race: 'Giải Hoàng Gia - Chung Kết', horse: 'Tia Chớp', odds: 2.5, amount: 500000, status: 'pending', potential: 1250000 },
  { race: 'Cup Mùa Hè - Vòng 1', horse: 'Bão Tốc', odds: 2.1, amount: 200000, status: 'pending', potential: 420000 },
  { race: 'Giải Miền Bắc - Chung Kết', horse: 'Ngôi Sao Đêm', odds: 3.8, amount: 300000, status: 'won', potential: 1140000 },
  { race: 'Tranh Tài Mùa Xuân - Bán Kết', horse: 'Thần Gió', odds: 5.0, amount: 100000, status: 'lost', potential: 500000 },
];

export function PredictionsPage() {
  const navigate = useNavigate();
  const [selectedRace, setSelectedRace] = useState(races[0]);
  const [selectedHorse, setSelectedHorse] = useState<number | null>(null);
  const [betAmount, setBetAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedParticipant = selectedHorse !== null ? selectedRace.participants[selectedHorse] : null;
  const potentialWin = selectedParticipant && betAmount
    ? (parseFloat(betAmount) * selectedParticipant.odds).toFixed(0)
    : null;

  const handleSubmit = () => {
    if (selectedHorse !== null && betAmount) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setSelectedHorse(null);
      setBetAmount('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar />
      {/* BG Glow */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-emerald-950/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="relative pt-28 pb-16 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6">
                <Target className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Dự Đoán</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                Dự Đoán &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Phân Tích Cuộc Đua</span>
              </h1>
              <p className="text-lg text-slate-400">
                Phân tích xu hướng, đọc chỉ số và đưa ra dự đoán chính xác cho từng cuộc đua.
              </p>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Tỷ Lệ Đúng', value: '68%', color: 'text-emerald-400', icon: Target },
                { label: 'Dự Đoán', value: '24', color: 'text-amber-400', icon: BarChart3 },
                { label: 'Điểm Thưởng', value: '4,200', color: 'text-violet-400', icon: Star },
              ].map(({ label, value, color, icon: Icon }) => (
                <div key={label} className="text-center px-5 py-4 bg-slate-900/60 border border-white/8 rounded-2xl">
                  <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold ${color}`}>{value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8">

        {/* Left: Race Selection + Participants */}
        <div className="lg:col-span-2 space-y-6">
          {/* Race Selector */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" /> Chọn Cuộc Đua
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {races.map(race => (
                <button
                  key={race.id}
                  onClick={() => { setSelectedRace(race); setSelectedHorse(null); }}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedRace.id === race.id
                      ? 'border-emerald-500/50 bg-emerald-500/10'
                      : 'border-white/8 bg-slate-900/50 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-white text-sm leading-tight">{race.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ml-2 shrink-0 ${
                      race.status === 'live' ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {race.status === 'live' ? '● LIVE' : 'SẮP TỚI'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    {race.time}
                    <span className="text-slate-600">·</span>
                    <Users className="w-3.5 h-3.5" />
                    {race.participants.length} ngựa
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Participants Analysis */}
          <div>
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" /> Phân Tích Ứng Viên
            </h2>
            <div className="space-y-3">
              {selectedRace.participants.map((p, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedHorse(idx)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    selectedHorse === idx
                      ? 'border-emerald-500/60 bg-emerald-500/10 shadow-lg shadow-emerald-500/10'
                      : 'border-white/8 bg-slate-900/50 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white ${
                        idx === 0 ? 'bg-amber-500' : idx === 1 ? 'bg-slate-500' : idx === 2 ? 'bg-orange-600' : 'bg-slate-700'
                      }`}>
                        {p.pos}
                      </div>
                      <div>
                        <div className="font-bold text-white flex items-center gap-2">
                          {p.horse}
                          {p.trend === 'up' && <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />}
                          {p.trend === 'down' && <TrendingDown className="w-3.5 h-3.5 text-red-400" />}
                        </div>
                        <div className="text-xs text-slate-400">Kỵ sĩ: {p.jockey}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-amber-400">{p.odds}x</div>
                      <div className="text-xs text-slate-500 uppercase">Tỷ Lệ</div>
                    </div>
                  </div>

                  {/* Form guide */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 shrink-0">Phong Độ:</span>
                    <div className="flex gap-1">
                      {p.form.map((pos, i) => (
                        <div key={i} className={`w-6 h-6 rounded text-[10px] font-bold flex items-center justify-center text-white ${formColor(pos)}`}>
                          {pos}
                        </div>
                      ))}
                    </div>
                    <div className="ml-auto flex-1 max-w-[120px]">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">Cộng đồng</span>
                        <span className="text-white font-medium">{p.communityPick}%</span>
                      </div>
                      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                          style={{ width: `${p.communityPick}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Bet Panel + History */}
        <div className="space-y-6">
          {/* Bet Panel */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 sticky top-28">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" /> Đặt Dự Đoán
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Đã Gửi Dự Đoán!</h4>
                <p className="text-sm text-slate-400">Dự đoán của bạn đã được ghi nhận thành công.</p>
              </div>
            ) : (
              <>
                {selectedHorse !== null && selectedParticipant ? (
                  <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2">Lựa Chọn</div>
                    <div className="font-bold text-white text-lg">{selectedParticipant.horse}</div>
                    <div className="text-sm text-slate-400 mb-1">Kỵ sĩ: {selectedParticipant.jockey}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 font-bold text-xl">{selectedParticipant.odds}x</span>
                      <span className="text-slate-500 text-sm">tỷ lệ</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-5 p-4 bg-slate-800/50 border border-white/5 rounded-xl text-center">
                    <AlertCircle className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                    <p className="text-sm text-slate-500">Chọn ngựa từ danh sách bên trái</p>
                  </div>
                )}

                <div className="mb-4">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">
                    Điểm Đặt Cược
                  </label>
                  <input
                    type="number"
                    placeholder="Nhập số điểm..."
                    value={betAmount}
                    onChange={e => setBetAmount(e.target.value)}
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                  <div className="flex gap-2 mt-2">
                    {[100, 500, 1000].map(v => (
                      <button
                        key={v}
                        onClick={() => setBetAmount(String(v))}
                        className="flex-1 py-1.5 bg-slate-800 hover:bg-slate-700 border border-white/5 rounded-lg text-xs text-slate-400 hover:text-white transition-all"
                      >
                        +{v}
                      </button>
                    ))}
                  </div>
                </div>

                {potentialWin && (
                  <div className="mb-5 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between">
                    <span className="text-sm text-slate-400">Tiềm Năng Thắng</span>
                    <span className="text-xl font-bold text-amber-400">{parseInt(potentialWin).toLocaleString()} điểm</span>
                  </div>
                )}

                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
                  disabled={selectedHorse === null || !betAmount}
                  sx={{
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                    py: 1.5,
                    borderRadius: '12px',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '15px',
                    '&:hover': { background: 'linear-gradient(135deg, #059669 0%, #0891b2 100%)' },
                    '&:disabled': { background: '#1e293b', color: '#475569' }
                  }}
                >
                  Gửi Dự Đoán
                </Button>
              </>
            )}
          </div>

          {/* Prediction History */}
          <div className="bg-slate-900/60 border border-white/8 rounded-2xl p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-slate-400" /> Lịch Sử Dự Đoán
            </h3>
            <div className="space-y-3">
              {userPredictions.map((pred, i) => (
                <div key={i} className="p-3 bg-slate-800/50 rounded-xl border border-white/5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-xs text-slate-400 leading-tight">{pred.race}</span>
                    <span className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      pred.status === 'won' ? 'bg-emerald-500/20 text-emerald-400' :
                      pred.status === 'lost' ? 'bg-red-500/20 text-red-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {pred.status === 'won' ? 'Thắng' : pred.status === 'lost' ? 'Thua' : 'Chờ'}
                    </span>
                  </div>
                  <div className="font-semibold text-white text-sm">{pred.horse}</div>
                  <div className="flex items-center justify-between mt-1.5 text-xs">
                    <span className="text-slate-500">{pred.odds}x · {pred.amount.toLocaleString()}đ</span>
                    <span className={`font-medium ${pred.status === 'won' ? 'text-emerald-400' : pred.status === 'lost' ? 'text-red-400 line-through' : 'text-amber-400'}`}>
                      +{pred.potential.toLocaleString()}đ
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
