/** @type {import('tailwindcss').Config} **/
module.exports = {
  // content: [],
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {},
    colors: {
      'text1': 'var(--text1)',
      'text2': 'var(--text2)',
      'accent': 'var(--accent)',
      'background': 'var(--background)',
      'foreground': 'var(--foreground)',
    }
  },
  plugins: [],
}
