import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Feeder - 가볍게 시작하는 랜덤채팅, 익명소셜 앱';
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
          background: 'linear-gradient(135deg, #FF6B5C 0%, #FF8A6F 50%, #3CCFAB 100%)',
          color: '#fff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              background: '#fff',
              borderRadius: 9999,
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 800 }}>Feeder</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            랜챗 · 랜덤채팅 · 익명소셜
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
            오늘, 새로운 친구를
            <br />
            만나는 가장 가벼운 방법
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.85 }}>
          feeder.siflab.org
        </div>
      </div>
    ),
    { ...size },
  );
}
