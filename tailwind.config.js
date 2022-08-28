/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Fira': ['"Fira Sans"', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'ftBlue':'#084C61',
        'ftRed':'#DB504A',
        'ftYellow':'#E3B505',
        'ftGrayish':'#4F6D7A',
        'ftGreenBlue':'#56A3A6'
      }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
}
