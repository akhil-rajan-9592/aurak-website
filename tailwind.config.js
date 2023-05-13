/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
        'sm': {'min': '0px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1023px'},
        'lg': {'min': '1024px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1535px'},
        '2xl': {'min': '1536px'},
    },
    extend: {
        colors: {
            "primary" : "#ac001f",
            "gray-bg" : "#e4e2e2",
            "box-gray" : '#5d6770',
            "blog-bg" : "#eeeeef"
        },
        boxShadow : {
            "bannerbox" : "inset 0px -20px 20px 20px #12111191" ,
            "topbannerbox" : 'inset 0px 100px 100px 0px #121111db'
        },
    },
  },
  plugins: [],
}

