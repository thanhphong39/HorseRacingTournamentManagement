import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Trophy, ArrowLeft } from 'lucide-react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('horse-owner');

  const handleLogin = () => {
    navigate(`/${userType}`);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Về Trang Chủ
        </button>

        <div className="bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-8 shadow-xl shadow-black/50">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FFDE42] to-[#1B0C0C] rounded-xl flex items-center justify-center shadow-lg shadow-[#FFDE42]/50">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">RaceTrack Pro</span>
          </div>

          <h2 className="text-2xl font-semibold text-white text-center mb-8">Chào Mừng Trở Lại</h2>

          <div className="space-y-5">
            <FormControl fullWidth>
              <InputLabel sx={{ color: '#94a3b8' }}>Loại Người Dùng</InputLabel>
              <Select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                label="Loại Người Dùng"
                sx={{
                  color: 'white',
                  '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FFDE42' },
                  '.MuiSvgIcon-root': { color: '#94a3b8' }
                }}
              >
                <MenuItem key="horse-owner" value="horse-owner">Chủ Ngựa</MenuItem>
                <MenuItem key="jockey" value="jockey">Kỵ Sĩ</MenuItem>
                <MenuItem key="referee" value="referee">Trọng Tài</MenuItem>
                <MenuItem key="spectator" value="spectator">Khán Giả</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="email@example.com"
              sx={{
                '& .MuiInputLabel-root': { color: '#94a3b8' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-focused fieldset': { borderColor: '#FFDE42' }
                }
              }}
            />

            <TextField
              fullWidth
              label="Mật Khẩu"
              type="password"
              placeholder="••••••••"
              sx={{
                '& .MuiInputLabel-root': { color: '#94a3b8' },
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&.Mui-focused fieldset': { borderColor: '#FFDE42' }
                }
              }}
            />

            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={handleLogin}
              sx={{
                background: 'linear-gradient(135deg, #FFDE42 0%, #1B0C0C 100%)',
                padding: '12px',
                marginTop: '24px',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '1rem',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(255, 222, 66, 0.2), 0 2px 4px -1px rgba(255, 222, 66, 0.1)',
                '&:hover': { background: 'linear-gradient(135deg, #FFDE42 0%, #4C5C2D 100%)' }
              }}
            >
              Đăng Nhập
            </Button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-slate-400">Chưa có tài khoản? </span>
            <button
              onClick={() => navigate('/register')}
              className="text-[#FFDE42] hover:text-[#E6C21E] font-medium transition-colors"
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
