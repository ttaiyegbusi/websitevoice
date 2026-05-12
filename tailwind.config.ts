import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand blues
        brand: {
          50: '#EEF3FF',
          100: '#DCE6FF',
          200: '#B8CCFF',
          300: '#8FAEFF',
          400: '#6B8FFB',
          500: '#4F7DF3', // hero gradient top
          600: '#3B5FE0', // hero gradient bottom
          700: '#2D6BFF', // primary CTA
          800: '#1E47B8',
          900: '#16358A',
        },
        // Accent orange (Most Popular, 10% off badge, final CTA)
        accent: {
          400: '#FFA15C',
          500: '#FF8A3D',
          600: '#F47020',
        },
        ink: {
          900: '#1A1F36', // body
          700: '#374151',
          500: '#6B7280', // muted
          400: '#9CA3AF',
          200: '#E5E7EB', // borders
          100: '#F3F4F6', // FAQ section bg
        },
        success: {
          500: '#00B67A', // trustpilot green
        },
      },
      fontFamily: {
        sans: ['var(--font-assistant)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(180deg, #5183F5 0%, #3B5FE0 100%)',
        'footer-gradient':
          'linear-gradient(180deg, #3B5FE0 0%, #2A4BB8 100%)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(16, 24, 40, 0.05), 0 1px 2px rgba(16, 24, 40, 0.06)',
        'card-hover':
          '0 10px 25px -5px rgba(59, 95, 224, 0.15), 0 4px 6px -2px rgba(59, 95, 224, 0.05)',
        'card-popular':
          '0 20px 40px -10px rgba(45, 107, 255, 0.25), 0 8px 16px -4px rgba(45, 107, 255, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
