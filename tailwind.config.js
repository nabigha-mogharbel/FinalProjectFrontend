/** @type {import('tailwindcss').Config} */
const tailwindcss = require('tailwindcss');
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        'green-d': '#204E66',
        'green-l': '#CBD5D9',
        'yellow-d': '#FCDA23',
        'yellow-l': '#F7F1CC',
        'orange-d': '#D68527',
        'orange-l': '#EAC9A4',
        'gray-d': '#B3B3B3',
        'gray-l': '#E9E9E9',
        'blue-l': '#C5DBE7',
        'blue-d': '#0270A9',
  
      },
    },
  },
  plugins: [
    tailwindcss('./tailwind.js'),
        require('autoprefixer')
  ],
}

