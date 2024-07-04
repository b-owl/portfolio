/** @type {import('tailwindcss').Config} */
const dir = require('tailwindcss-dir')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  darkMode: 'class',
  daisyui: {
    themes: ['nord', 'retro', 'sunset', 'night', 'dim', 'bussiness'],
  },
  theme: {
    extend: {
      fontFamily: {
        casablanca: ['casablanca', 'serif'],
        TitrPlus: ['titrplus', 'serif'],
        BYekan: ['BYekan', 'serif'],
        soltan: ['soltan', 'serif'],
        robotoBold: ['robotoBold', 'serif'],
        summer: ['summer', 'serif'],
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'half-transparent-dark': 'rgba(0, 0, 0, 0.5)',
        'half-transparent-light': 'rgba(255, 255, 255, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        pic: "url('$lib/assets/images/kid.jpg')",
        DigitalRepair: "url('$lib/assets/images/DigitalRepair.png')",
        musicPlayer: "url('$lib/assets/images/musicplayer.png')",
        dashboard: "url('$lib/assets/images/dashboard.png')",
        weatherforecast: "url('$lib/assets/images/weatherforecast.png')",
        alannews: "url('$lib/assets/images/alannews.png')",
        cryptocurrency: "url('$lib/assets/images/cryptocurrency.png')",
        business: "url('$lib/assets/images/business.png')",
        GPT3: "url('$lib/assets/images/GPT3.png')",
        quizapp: "url('$lib/assets/images/quizapp.png')",
        SportWebsiteUI: "url('$lib/assets/images/SportWebsiteUI.png')",
        dashboardUI: "url('$lib/assets/images/dashboardUI.png')",
        bootstrapTemplate: "url('$lib/assets/images/bootstrapTemplate.png')",
        videograph: "url('$lib/assets/images/videograph.png')",
        eCommerceTemplate: "url('$lib/assets/images/eCommerceTemplate.png')",
        littleProject: "url('$lib/assets/images/littleProject.png')",
        legends_landingpage:
          "url('$lib/assets/images/legends_landingpage.png')",
        SomeGames: "url('$lib/assets/images/SomeGames.png')",
        covid19: "url('$lib/assets/images/covid19.png')",
      },
    },
  },
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
  },
  plugins: [require('daisyui'), dir()],
}
