import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary: 앱과 동일한 보라 (Color(0xFF8B5CF6))
        brand: {
          50: '#F5F1FE',
          100: '#EBE3FD',
          200: '#D6C7FB',
          300: '#BFA9F8',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Secondary: 앱의 female 컬러 (Color(0xFFFB7185))
        accent: {
          400: '#FBA1B0',
          500: '#FB7185',
          600: '#E11D48',
        },
        // Tertiary: 앱의 male 컬러 (Color(0xFF60A5FA))
        sky: {
          400: '#60A5FA',
          500: '#3B82F6',
        },
        // 다크 배경 (앱과 동일)
        ink: {
          950: '#000000',
          900: '#0A0A0B',
          800: '#111113',
          700: '#18181B',
          600: '#27272A',
          500: '#3F3F46',
          400: '#7C7C85',
          300: '#9CA3AF',
          200: '#B4B4BC',
          100: '#F4F4F5',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px -10px rgba(139, 92, 246, 0.45)',
        card: '0 8px 24px -10px rgba(0, 0, 0, 0.6)',
        floating: '0 14px 32px -12px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
        'logo-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'hero-radial':
          'radial-gradient(circle at 20% 10%, rgba(139,92,246,0.25), transparent 45%), radial-gradient(circle at 85% 30%, rgba(236,72,153,0.18), transparent 45%)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
