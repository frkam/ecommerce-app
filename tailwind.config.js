const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'josefin-sans': ['Josefin Sans', 'sans-serif'],
    },
    screens: {
      tn: '450px',
      tn1: '540px',
      xl3: '1708px',
      xl4: '1920px',
      ...defaultTheme.screens,
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        'text': '#151875',
        'accent': '#FB2E86',
        'primary': '#F6F5FF',
        'disabled': '#6c757d',
        'text-dark': '#0D0E43',
        'text-sub-light': '#F1F0FF',
        'text-sub-dark': {
          500: '#9DA0AE',
          700: '#8A8FB9',
        },
        'text-transparent': 'rgba(21, 24, 117, 0.1)',
        'primary-dark': {
          900: '#7E33E0',
          300: '#EEEFFB',
          500: '#E7E4F8',
        },
        'border-color': '#E1E1E4',
        'cart-quantity': {
          'button': 'rgba(190, 191, 194, 1)',
          'button-bg': 'rgba(231, 231, 239, 1)',
          'number': 'rgba(190, 191, 194, 1)',
          'number-bg': '#F0EFF2',
        },
        'input': {
          ok: 'rgba(164, 182, 200, 0.7)',
          error: '#FB2E86',
          successfull: 'rgba(25, 209, 111, 1)',
        },
        'color-circles': {
          turquoise: 'rgba(55, 218, 243, 1)',
          pink: 'rgba(255, 39, 183, 1)',
          violet: 'rgba(86, 37, 223, 1)',
          orange: 'rgba(255, 178, 101, 1)',
          green: 'rgba(27, 233, 130, 1)',
        },
        'stars': {
          filled: '#FFC416',
          outlined: '#B2B2B2',
        },
      },
      dropShadow: {
        'top': '0 -2px 8px rgb(0 0 0 / 15%)',
        'input-ok': '0px 0px 5px rgba(164, 182, 200, 0.25)',
        'input-error': '0px 0px 5px rgba(251, 46, 134, 0.25)',
        'input-successfull': '0px 0px 5px rgba(25, 209, 111, 0.25)',
      },
      boxShadow: {
        top: '0 -2px 8px rgb(0 0 0 / 15%)',
        card: '0px 0px 25px rgba(0, 0, 0, 0.1);',
        controlCircle: '0px 0px 27.6px 0px rgba(0, 0, 0, 0.05)',
      },
      width: {
        sm: '8.4rem',
      },
      maxWidth: {
        '8xl': '79.8rem',
      },
      keyframes: {
        shiftdown: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
            bottom: '0',
          },
        },
      },
      animation: {
        shiftdown: 'shiftdown 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
