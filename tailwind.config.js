const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      light: '#fafafa',
      dark: '#111',
      white: '#fff',
      success: {
        lighter: '#d3e5ff',
        light: '#3291ff',
        DEFAULT: '#0070f3',
        dark: '#0761d1',
      },
      error: {
        lighter: '#f7d4d6',
        light: '#ff1a1a',
        DEFAULT: '#e00',
        dark: '#c50000',
      },
      warning: {
        lighter: '#ffefcf',
        light: '#f7b955',
        DEFAULT: '#f5a623',
        dark: '#ab570a',
      },
      accents: {
        1: '#fafafa',
        2: '#eaeaea',
        3: '#999',
        4: '#888',
        5: '#666',
        6: '#444',
        7: '#333',
        8: '#111',
      },
      cyan: '#50e3c2',
    },
    fontFamily: {
      sans: ['IBM Plex Sans', fontFamily.sans],
    },
    extend: {
      width: {
        200: '200px',
      },
      minWidth: {
        200: '200px',
      },
      borderRadius: {
        md: '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
