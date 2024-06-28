import type {
  PortfolioTitleType,
  PortfolioDataType,
} from '../../types/showcases.d.ts'

export function getPortfolioTitle(i18n: any): PortfolioTitleType[] {
  return [
    {
      name: i18n.t('all'),
      activetab: [true, false, false, false, false],
    },
    {
      name: i18n.t('app'),
      activetab: [false, true, false, false, false],
    },
    {
      name: i18n.t('templates'),
      activetab: [false, false, true, false, false],
    },
    {
      name: i18n.t('games'),
      activetab: [false, false, false, true, false],
    },
    {
      name: i18n.t('graphicDesign'),
      activetab: [false, false, false, false, true],
    },
  ]
}

export function getPortfolioData(i18n: any): PortfolioDataType[] {
  return [
    {
      all: [
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName0'),
          pic: 'bg-DigitalRepair',
          githubLink:
            'https://github.com/Mehdi0-0Keramati/RepairDigitalFactory',
          viewOnline:
            'https://mehdi0-0keramati.github.io/RepairDigitalFactory/',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName1'),
          pic: 'bg-dashboard',
          githubLink: 'https://github.com/Mehdi0-0Keramati/AdminDashboard',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/AdminDashboard',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName2'),
          pic: 'bg-weatherforecast',
          githubLink: 'https://github.com/Mehdi0-0Keramati/weather_forecast',
          viewOnline: 'https://mehdi0-0keramati.github.io/weather_forecast',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName3'),
          pic: 'bg-musicPlayer',
          githubLink: 'https://github.com/Mehdi0-0Keramati/MUSICPLAYER',
          viewOnline: 'https://mehdi0-0keramati.github.io/MUSICPLAYER',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName4'),
          pic: 'bg-alannews',
          githubLink: 'https://github.com/Mehdi0-0Keramati/AlanNews',
          viewOnline: 'https://mehdi0-0keramati.github.io/AlanNews',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName5'),
          pic: 'bg-cryptocurrency',
          githubLink: 'https://github.com/Mehdi0-0Keramati/crypto-currency',
          viewOnline: 'https://mehdi0-0keramati.github.io/crypto-currency',
        },

        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName6'),
          pic: 'bg-legends_landingpage',
          githubLink: 'https://github.com/Mehdi0-0Keramati/legends-landingpage',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/legends-landingpage',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName7'),
          pic: 'bg-GPT3',
          githubLink: 'https://github.com/Mehdi0-0Keramati/GPT-3',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/GPT-3',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName8'),
          pic: 'bg-business',
          githubLink: 'https://github.com/Mehdi0-0Keramati/business',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/business',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName9'),
          pic: 'bg-covid19',
          githubLink: 'https://github.com/Mehdi0-0Keramati/covid19',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/covid19',
        },
        {
          title: i18n.t('reactjs'),
          projectName: i18n.t('projectName10'),
          pic: 'bg-littleProject',
          githubLink:
            'https://github.com/Mehdi0-0Keramati/LittlePorject-ReactJs',
          viewOnline: 'https://littleproject-reactjs.netlify.app',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName11'),
          pic: 'bg-bootstrapTemplate',
          githubLink:
            'https://github.com/Mehdi0-0Keramati/modern_bootstrap_template',
          viewOnline:
            'https://mehdi0-0keramati.github.io/modern_bootstrap_template',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName12'),
          pic: 'bg-videograph',
          githubLink:
            'https://github.com/Mehdi0-0Keramati/videograph_portfolio',
          viewOnline: 'https://mehdi0-0keramati.github.io/videograph_portfolio',
        },
        {
          title: i18n.t('vanillajs'),
          projectName: i18n.t('projectName13'),
          pic: 'bg-eCommerceTemplate',
          githubLink:
            'https://github.com/Mehdi0-0Keramati/eCommerce_tailwind_template',
          viewOnline:
            'https://mehdi0-0keramati.github.io/eCommerce_tailwind_template',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName22'),
          pic: 'bg-SomeGames',
          githubLink: 'https://github.com/Mehdi0-0Keramati/somegames',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/somegames',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName18'),
          pic: 'bg-quizapp',
          githubLink: 'https://github.com/Mehdi0-0Keramati/QuizApp',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/QuizApp',
        },
        {
          title: i18n.t('graphicDesign'),
          projectName: i18n.t('projectName20'),
          pic: 'bg-SportWebsiteUI',
          githubLink: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
          viewOnline: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
        },
        {
          title: i18n.t('graphicDesign'),
          projectName: i18n.t('projectName21'),
          pic: 'bg-dashboardUI',
          githubLink: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
          viewOnline: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
        },
      ],

      app: [
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName1'),
          pic: 'bg-dashboard',
          githubLink: 'https://github.com/Mehdi0-0Keramati/AdminDashboard',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/AdminDashboard',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName2'),
          pic: 'bg-weatherforecast',
          githubLink: 'https://github.com/Mehdi0-0Keramati/weather_forecast',
          viewOnline: 'https://mehdi0-0keramati.github.io/weather_forecast',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName3'),
          pic: 'bg-musicPlayer',
          githubLink: 'https://github.com/Mehdi0-0Keramati/MUSICPLAYER',
          viewOnline: 'https://mehdi0-0keramati.github.io/MUSICPLAYER',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName4'),
          pic: 'bg-alannews',
          githubLink: 'https://github.com/Mehdi0-0Keramati/AlanNews',
          viewOnline: 'https://mehdi0-0keramati.github.io/AlanNews',
        },
        {
          title: i18n.t('app'),
          projectName: i18n.t('projectName5'),
          pic: 'bg-cryptocurrency',
          githubLink: 'https://github.com/Mehdi0-0Keramati/crypto-currency',
          viewOnline: 'https://mehdi0-0keramati.github.io/crypto-currency',
        },
      ],

      templates: [
        {
          react: [
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName0'),
              pic: 'bg-DigitalRepair',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/RepairDigitalFactory',
              viewOnline:
                'https://mehdi0-0keramati.github.io/RepairDigitalFactory/',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName6'),
              pic: 'bg-legends_landingpage',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/legends-landingpage',
              viewOnline:
                ' https://Mehdi0-0Keramati.github.io/legends-landingpage',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName7'),
              pic: 'bg-GPT3',
              githubLink: 'https://github.com/Mehdi0-0Keramati/GPT-3',
              viewOnline: 'https://Mehdi0-0Keramati.github.io/GPT-3',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName8'),
              pic: 'bg-business',
              githubLink: 'https://github.com/Mehdi0-0Keramati/business',
              viewOnline: ' https://Mehdi0-0Keramati.github.io/business',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName9'),
              pic: 'bg-covid19',
              githubLink: 'https://github.com/Mehdi0-0Keramati/covid19',
              viewOnline: 'https://Mehdi0-0Keramati.github.io/covid19',
            },
            {
              title: i18n.t('reactjs'),
              projectName: i18n.t('projectName10'),
              pic: 'bg-littleProject',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/LittlePorject-ReactJs',
              viewOnline: 'https://littleproject-reactjs.netlify.app',
            },
          ],
          vanillaJS: [
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName11'),
              pic: 'bg-bootstrapTemplate',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/modern_bootstrap_template',
              viewOnline:
                'https://mehdi0-0keramati.github.io/modern_bootstrap_template',
            },
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName12'),
              pic: 'bg-videograph',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/videograph_portfolio',
              viewOnline:
                'https://mehdi0-0keramati.github.io/videograph_portfolio',
            },
            {
              title: i18n.t('vanillajs'),
              projectName: i18n.t('projectName13'),
              pic: 'bg-eCommerceTemplate',
              githubLink:
                'https://github.com/Mehdi0-0Keramati/eCommerce_tailwind_template',
              viewOnline:
                'https://mehdi0-0keramati.github.io/eCommerce_tailwind_template',
            },
          ],
        },
      ],

      games: [
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName18'),
          pic: 'bg-quizapp',
          githubLink: 'https://github.com/Mehdi0-0Keramati/QuizApp',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/QuizApp',
        },
        {
          title: i18n.t('games'),
          projectName: i18n.t('projectName22'),
          pic: 'bg-SomeGames',
          githubLink: 'https://github.com/Mehdi0-0Keramati/somegames',
          viewOnline: 'https://Mehdi0-0Keramati.github.io/somegames',
        },
      ],

      graphicDesign: [
        {
          title: i18n.t('graphicDesign'),
          projectName: i18n.t('projectName20'),
          pic: 'bg-SportWebsiteUI',
          githubLink: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
          viewOnline: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
        },
        {
          title: i18n.t('graphicDesign'),
          projectName: i18n.t('projectName21'),
          pic: 'bg-dashboardUI',
          githubLink: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
          viewOnline: 'https://github.com/Mehdi0-0Keramati/webdesign_UIUX',
        },
      ],
    },
  ]
}
