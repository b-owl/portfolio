/** @type {import('tailwindcss').Config} */
const dir = require('tailwindcss-dir')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  darkMode: 'class',
  daisyui: {
    themes: ['nord', 'retro', 'sunset', 'night', 'dim', 'business'],
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
        DigitalRepair: "url('$lib/assets/images/DigitalRepair.webp')",
        musicPlayer: "url('$lib/assets/images/musicplayer.webp')",
        dashboard: "url('$lib/assets/images/dashboard.webp')",
        weatherforecast: "url('$lib/assets/images/weatherforecast.webp')",
        alannews: "url('$lib/assets/images/alannews.webp')",
        cryptocurrency: "url('$lib/assets/images/cryptocurrency.webp')",
        business: "url('$lib/assets/images/business.webp')",
        GPT3: "url('$lib/assets/images/GPT3.webp')",
        quizapp: "url('$lib/assets/images/quizapp.webp')",
        SportWebsiteUI: "url('$lib/assets/images/SportWebsiteUI.webp')",
        dashboardUI: "url('$lib/assets/images/dashboardUI.webp')",
        bootstrapTemplate: "url('$lib/assets/images/bootstrapTemplate.webp')",
        videograph: "url('$lib/assets/images/videograph.webp')",
        eCommerceTemplate: "url('$lib/assets/images/eCommerceTemplate.webp')",
        littleProject: "url('$lib/assets/images/littleProject.webp')",
        legends_landingpage:
          "url('$lib/assets/images/legends_landingpage.webp')",
        SomeGames: "url('$lib/assets/images/SomeGames.webp')",
        covid19: "url('$lib/assets/images/covid19.webp')",
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
