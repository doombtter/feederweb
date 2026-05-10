import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF1EE',
          100: '#FFE0DA',
          200: '#FFC1B6',
          300: '#FF9C8A',
          400: '#FF7E69',
          500: '#FF6B5C',
          600: '#E5503F',
          700: '#BF3D2F',
          800: '#992F23',
          900: '#73221A',
        },
        accent: {
          400: '#5EE2C2',
          500: '#3CCFAB',
          600: '#2AA889',
        },
        ink: {
          900: '#0E0E12',
          700: '#2C2C35',
          500: '#5A5A66',
          300: '#A6A6B2',
          100: '#F1F1F4',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(255, 107, 92, 0.35)',
        card: '0 8px 24px -10px rgba(14, 14, 18, 0.12)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
