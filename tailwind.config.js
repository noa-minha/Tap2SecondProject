module.exports = {
  content: [
    './src/**/*.{html,js,svelte}', 
    './node_modules/tailwindcss/**/*.js'
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 100,
        'semi-bold': 600,
      }
    }
  },
  plugins: [],
};
