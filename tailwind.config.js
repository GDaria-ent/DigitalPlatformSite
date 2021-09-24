module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '40px': '2.5rem',
      '50px': '3.125rem',
      '0px': '0rem',
      '10px': '0.625rem',
      
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bright-red': '#FE5F5F',
      'dark-blue': '#3865A7',
      'dark-black': '#2B2B2B',
      'footer-bg': '#2F2F2F'
    }),
    borderRadius: {
      'standard': '50px',
       
    },
    textColor: theme => theme('colors'),
    textColor: {
      'button-text': 'rgba(255, 255, 255, 1)',
      'primary-text': '#2B2B2B',
      'highlight-blue': '#3865A7',
      'highlight-red': '#FE5F5F',
    },
    lineHeight: {
      '19': '1.18rem',
      '18': '1.1538rem'
    },
    rotate: {
      '220': '220deg',
      '80': '80deg',
      '-50': '-50deg',
      '165': '165deg'
    },
    extend: { 
      spacing: {
        '54': '3.375rem',
        '43': '2.687rem'
      },
      backgroundImage: {
        'header-image': 'url("../assets/hero-bg.svg")',
        'rectangle': 'url("../assets/rectangle.svg")',
        'rotated-rectangle': 'url("../assets/rectangle-rotate.svg")',
        'bg0': 'url("../assets/spot0.svg")',
        'bg90': 'url("../assets/spot90.svg")',
        'bg180': 'url("../assets/spot180.svg")',
        'successBg0': 'url("../assets/successStoryImgs/bgImg0.svg")',
        'successBg90': 'url("../assets/successStoryImgs/bgImg90.svg")',
        'successBg45': 'url("../assets/successStoryImgs/bgImg45.svg")'
      }
    },
    screens: {
      'xl-1': {'max': '925px'},
      'xl': {'max': '830px'},
      'md': {'max': '654px'},
      'md-1': {'max': '500px'},
      's': {'max': '391px'},
      'xs': {'max': '350px'},
      'xs-1': {'max': '315px'}
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
