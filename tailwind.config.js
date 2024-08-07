/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        "open-toggle-menu": {
          "from": { opacity: 0, transform: "translateX(-100%)" },
          'to': { opacity: 1, transform: 'translateX(0)' },
        },
        'close-toggle-menu': {
          "from": {opacity: 1, transform: "translateX(100%)" },
          'to': {opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'close-toggle-menu': 'close-toggle-menu ease-in-out 0.5s',
        'open-toggle-menu': 'open-toggle-menu ease-in-out 0.5s',
      },
      colors: {
        'heroBg': '#C9CCD5',
        'footerBg': '#1F3F54',
        'navbar': '#91C8E4',
        'veryTop': '#749BC2',
        'titlesBg': '#EEE0C9',
        'darkerBg': '#4D4D4D',
        'anchor': '#F0B36A',
        'btn-red': '#c50227'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-img': '',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'lg+': '1200px',
        'xl': '1310px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
