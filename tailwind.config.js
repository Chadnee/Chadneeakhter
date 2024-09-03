/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        titilliumWeb: ['Titillium Web', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'], // Added Raleway
        sairaExtraCondensed: ['Saira Extra Condensed', 'sans-serif'], // Added ultra-thin font
        robotoThin: ['Roboto', 'sans-serif', '100'], // Roboto thin
        robotoLight: ['Roboto', 'sans-serif', '300'], // Roboto light
        ralewayThin: ['Raleway', 'sans-serif', '100'], // Raleway ultra thin
        sairaThin: ['Saira Extra Condensed', 'sans-serif', '100'], // Saira ultra thin
        oswald: ['Oswald', 'sans-serif'], // Added Oswald
        exo: ['Exo 2', 'sans-serif'], // Added Exo 2
        bebasNeue: ['Bebas Neue', 'sans-serif'], // Added Bebas Neue
        robotoCondensed: ['Roboto Condensed', 'sans-serif'], // Added Roboto Condensed
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
