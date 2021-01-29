module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'sans': ['Libre Franklin', 'ui-sans-serif', 'system-ui'],
     },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '20rem',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
