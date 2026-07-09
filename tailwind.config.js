/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Near-black cinematic base + warm off-white text
        noir: {
          950: '#0a0a0a',
          900: '#0e0e0e',
          800: '#151515',
          700: '#1c1c1c',
          600: '#262626',
        },
        paper: '#f4f3ef', // warm off-white
      },
      fontFamily: {
        'display': ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fadeIn 1s ease-out both',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
