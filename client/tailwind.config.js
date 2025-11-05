/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        // sm: '640px' (default)
        // md: '768px' (default)
        // lg: '1024px' (default)
        // xl: '1280px' (default)
        '2xl': '1440px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',   // 72px
        '22': '5.5rem',   // 88px
        '26': '6.5rem',   // 104px
        '30': '7.5rem',   // 120px
        '34': '8.5rem',   // 136px
        '38': '9.5rem',   // 152px
        '42': '10.5rem',  // 168px
        '46': '11.5rem',  // 184px
        '50': '12.5rem',  // 200px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },
      maxWidth: {
        '8xl': '88rem',   // 1408px
        '9xl': '96rem',   // 1536px
      },
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3e5ff',
          200: '#80d4ff',
          300: '#4dc2ff',
          400: '#1ab1ff',
          500: '#00A8E8', // Main brand blue
          600: '#0086ba',
          700: '#00648c',
          800: '#00425d',
          900: '#00212f',
        },
        navy: {
          50: '#e8edf2',
          100: '#c5d1de',
          200: '#9fb5ca',
          300: '#7999b6',
          400: '#537da2',
          500: '#1E3A5F', // Main navy
          600: '#182e4c',
          700: '#122339',
          800: '#0c1726',
          900: '#060c13',
        },
        accent: {
          green: '#2C5F2D',
          metallic: '#C0C0C0',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Enhanced typography scale with line heights
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],     // 14px
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],       // 16px - WCAG minimum
        'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '0.01em' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0' }],           // 24px
        '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],       // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],    // 60px
        '7xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],     // 72px
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],         // 96px
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.02em' }],         // 128px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
