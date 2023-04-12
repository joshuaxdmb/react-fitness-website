/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'al-red': 'rgb(255,59,48)',
        'al-orange': 'rgb(255,149,0)',
        'al-yellow': 'rgb(255,204,0)',
        'al-green': 'rgb(152,199,89)',
        'al-mint': 'rgb(0,199,190)',
        'al-teal': 'rgb(48,176,199)',
        'al-cyan': 'rgb(50,173,230)',
        'al-blue': 'rgb(0,122,255)',
        'al-indigo': 'rgb(88,86,214)',
        'al-purple': 'rgb(175,82,222)',
        'al-pink': 'rgb(255,45,85)',
        'al-brown': 'rgb(162,132,94)',
        'al-gray': 'rgb(142,142,147)',
        'ad-gray': 'rgb(142,142,147)',
        'ad-gray2': 'rgb(99,99,102)',
        'ad-gray3': 'rgb(72,72,74)',
        'ad-gray4': 'rgb(58,58,60)',
        'ad-gray5': 'rgb(44,44,46)',
        'ad-gray6': 'rgb(28,28,30)',
        'gray-10': '#F6F1F1',
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#5E0000',
        'primary-100': '#FFE1E0',
        'primary-300': '#FFA6A3',
        'primary-500': '#FF6B66',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#FFC132',
      },
      backgroundImage: (theme) => ({
        'gradient-yellowred': 'linear-gradient(90deg,#FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        monserrat: ['Montserrat', 'sans-serif'],
      },
      content: {
        evolvetext: "url('./assets/Evolvetext.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};