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
      },
      colors: {
        'heroBg': '#C9CCD5',
        'footerBg': '#4682A9',
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
        'xl': '1310px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
