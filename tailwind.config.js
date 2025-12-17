/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        'surface-dark': 'var(--color-surface-dark)',
      },
      backgroundColor: {
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
      },
    },
  },
  plugins: [],
}
