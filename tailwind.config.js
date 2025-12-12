/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#9333ea',
        background: '#f9fafb',
        darkbg: '#111827',
        'text-gray': '#374151',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      spacing: {
        'section': '4rem',
        'card': '1.5rem',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}