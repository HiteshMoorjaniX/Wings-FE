/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: '#ff6a00',
        sec: '#222222',
        light: '#F9F9F9',
        lgtheme: '#fadcc7',
        bgdark: '#909090',
        shade: '#f2f2f2',
      },
      borderWidth: {
        0.5: '0.5px',
        12: '12px',
      },
      borderRadius: {
        0.35: '0.35rem',
      },
      maxWidth: {
        62: '62px',
        77: '77px',
        88: '88px',
        100: '90px',
        182: '182px',
        260: '260px',
        360: '360px',
      },
      minWidth: {
        88: '88px',
        100: '95px',
        110: '110px',
        130: '130px',
        182: '182px',
        260: '260px',
        320: '320px',
        500: '500px',
      },
      minHeight: {
        18: '18px',
        42: '42px',
        58: '58px',
      },
      width: {
        18: '4.5rem',        
      },
      height: {
        18: '4.5rem',
        600: '600px',
      },
      backgroundSize: {
        fit: '100% 100%',
      },
      transitionDuration: {
        400: '400ms',
      },
      spacing: {
        9.5: '38px',
        13.1: '55.55px',
        18: '4.5rem',
        22: '85px',
        34: '135px',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/line-clamp'),
  ],
}