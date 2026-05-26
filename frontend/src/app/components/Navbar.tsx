import { useNavigate, useLocation } from 'react-router';
import { Trophy, Medal, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@mui/material';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-9 h-9 bg-gradient-to-br from-[#FFDE42] to-[#B8860B] rounded-lg flex items-center justify-center shadow-lg shadow-[#FFDE42]/30">
            <Trophy className="w-5 h-5 text-slate-950" />
          </div>
          <span className="text-lg font-extrabold text-white tracking-tight">
            RaceTrack<span className="text-[#FFDE42]">Pro</span>
          </span>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-1">

          {/* Tournaments */}
          <div className="relative group">
            <button
              onClick={() => navigate('/tournaments')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/tournaments')
                  ? 'text-[#FFDE42] bg-[#FFDE42]/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Trophy className="w-4 h-4 text-[#FFDE42] group-hover:scale-110 transition-transform" />
              Giải Đấu
              <ChevronRight className="w-3.5 h-3.5 rotate-90 group-hover:rotate-[270deg] transition-transform duration-200" />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-2">
                <div className="px-3 py-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Danh Mục</span>
                </div>
                {[
                  { label: 'Đang Diễn Ra', desc: '1 giải trực tiếp', icon: '🔴' },
                  { label: 'Sắp Diễn Ra', desc: '3 giải sắp tới', icon: '🔵' },
                  { label: 'Lịch Sử', desc: 'Kết quả đã qua', icon: '📋' },
                  { label: 'Vô Địch Quốc Gia', desc: 'Giải đấu cao nhất', icon: '🏆' },
                ].map(item => (
                  <button
                    key={item.label}
                    onClick={() => navigate('/tournaments')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Rankings */}
          <div className="relative group">
            <button
              onClick={() => navigate('/rankings')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive('/rankings')
                  ? 'text-[#FFDE42] bg-[#FFDE42]/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Medal className="w-4 h-4 text-[#FFDE42] group-hover:scale-110 transition-transform" />
              Bảng Xếp Hạng
              <ChevronRight className="w-3.5 h-3.5 rotate-90 group-hover:rotate-[270deg] transition-transform duration-200" />
            </button>
            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
              <div className="bg-slate-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden p-2">
                <div className="px-3 py-2 mb-1">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Xếp Hạng</span>
                </div>
                {[
                  { label: 'Ngựa Đua', desc: 'Top ngựa mùa 2026', icon: '🐎' },
                  { label: 'Kỵ Sĩ', desc: 'Top jockey chuyên nghiệp', icon: '🏇' },
                ].map(item => (
                  <button
                    key={item.label}
                    onClick={() => navigate('/rankings')}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-left"
                  >
                    <span className="text-base">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-white">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  </button>
                ))}
                <div className="border-t border-white/5 mt-2 pt-2">
                  <button
                    onClick={() => navigate('/rankings')}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-medium text-[#FFDE42]">Xem đầy đủ</span>
                    <ChevronRight className="w-4 h-4 text-[#FFDE42]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Predictions */}
          <button
            onClick={() => navigate('/predictions')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isActive('/predictions')
                ? 'text-[#FFDE42] bg-[#FFDE42]/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <TrendingUp className="w-4 h-4 text-[#FFDE42]" />
            Dự Đoán
            <span className="px-1.5 py-0.5 bg-emerald-500 text-slate-950 text-[9px] font-bold rounded uppercase tracking-wide">LIVE</span>
          </button>

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="text"
            onClick={() => navigate('/login')}
            sx={{
              color: '#94a3b8',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '14px',
              px: 2,
              '&:hover': { color: '#FFDE42', backgroundColor: 'transparent' }
            }}
          >
            Đăng Nhập
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate('/register')}
            sx={{
              background: 'linear-gradient(135deg, #FFDE42 0%, #B8860B 100%)',
              color: '#1a0a00',
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '14px',
              borderRadius: '10px',
              px: 3,
              py: 1,
              boxShadow: '0 4px 14px 0 rgba(255, 222, 66, 0.35)',
              '&:hover': {
                background: 'linear-gradient(135deg, #FFE862 0%, #D4A420 100%)',
                boxShadow: '0 6px 20px 0 rgba(255, 222, 66, 0.5)',
                transform: 'translateY(-1px)'
              }
            }}
          >
            Bắt Đầu Ngay
          </Button>
        </div>
      </div>
    </nav>
  );
}
