import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Feeder(피더) - 익명소셜, 랜덤채팅, 랜덤통화 앱';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(circle at 20% 20%, #8B5CF6 0%, #4C1D95 35%, #0A0A0B 75%)',
          color: '#F4F4F5',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
              borderRadius: 9999,
              boxShadow: '0 10px 30px rgba(139,92,246,0.5)',
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 800 }}>Feeder · 피더</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 28, color: '#A78BFA' }}>
            랜덤채팅 · 익명소셜 · 랜덤통화
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
            오늘, 새로운 친구를
            <br />
            만나는 가장 가벼운 방법
          </div>
        </div>
        <div style={{ fontSize: 22, color: '#B4B4BC' }}>feeder.siflab.org</div>
      </div>
    ),
    { ...size },
  );
}
