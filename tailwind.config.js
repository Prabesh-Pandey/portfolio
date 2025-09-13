module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-left': {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'slide-right': {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'blob1': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out both',
        'slide-left': 'slide-left 1s cubic-bezier(0.4,0,0.2,1) both',
        'slide-right': 'slide-right 1s cubic-bezier(0.4,0,0.2,1) both',
        'blob1': 'blob1 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
