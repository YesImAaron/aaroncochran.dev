module.exports = {
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        700: '#4a5568',
        800: '#2d3748',
      },
      blue: {
        400: '#63b3ed',
      },
    },
    spacing: {
      '0': '0',
      '5': '1.25rem',
      '10': '2.5rem',
      '16': '4rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'Merriweather',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    fontSize: {
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh',
    }),
    maxWidth: {
      '4xl': '56rem',
    },
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    padding: theme => theme('spacing'),
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    container: {}
  }
}
