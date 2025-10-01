/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Tailwind will scan these files for class names
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite', // Custom marquee animation with smooth easing
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },  // Starts off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Ends off-screen to the left
        },
      },
      colors: {
        'marquee-color': '#3490dc',
        'navy': {
          DEFAULT: '#1e3a5f',
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1e3a5f',
        },
        'bronze': {
          DEFAULT: '#cd7f32',
          50: '#fdf8f3',
          100: '#f9ece0',
          200: '#f2d5ba',
          300: '#eab98f',
          400: '#e19d64',
          500: '#cd7f32',
          600: '#b86f2c',
          700: '#9a5c24',
          800: '#7c4a1d',
          900: '#5e3816',
        },
      },
    },
  },
  plugins: [],
};
