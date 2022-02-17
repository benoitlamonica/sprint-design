module.exports = {
  plugins: {
    tailwindcss: {  
      content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        colors: {
          red: '#d1161e',
          yellow: '#fecc02',
          black: '#111111',
          gray: '#666666',
          lightgray: '#E8E9EB'
        },
        extend: {},
      },
      plugins: [] 
    },
    autoprefixer: {},
  },
};
