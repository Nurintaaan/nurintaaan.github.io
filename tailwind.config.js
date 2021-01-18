module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Lato', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    colors: {
      primary: '#9CA27B',
      secondary: '#A38D6D',
      black: '#4B4B4B',
      grey: '#F2F2F2',
      white: '#FFFFFF',
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
