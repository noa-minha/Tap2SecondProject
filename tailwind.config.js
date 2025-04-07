module.exports = {
  content: [
    './src/**/*.{html,js,svelte}', // Add Svelte files here
    './node_modules/tailwindcss/**/*.js' // Include tailwind paths if necessary
  ],
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