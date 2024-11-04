/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{html,js,jsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}}',
    
  ],
  theme: {
    extend: {
      colors: {
        dark: {
            100: 'rgb(18, 18, 18)',
            200: 'rgb(51, 51, 51)'
        },
        claro: {
            100: '#167BF7',
            200: '#051933'
        }
      }
    }
  },
  plugins: [],
}