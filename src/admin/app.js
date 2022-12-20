const logo = "https://storage.googleapis.com/my-journey-v2.appspot.com/My_Journey_V2_white_f28f36fef2/My_Journey_V2_white_f28f36fef2.jpg";

export default {
  config: {
    head: {
      favicon: logo
    },
    auth: {
      logo: logo
    },
    menu: {
      logo: logo
    },
    theme: {
      colors: {
       //"alternative100": "#192956"
       buttonPrimary500: "#192956",
       buttonPrimary600: "#192956",
      }
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "My Journey",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard Panel",
        "Auth.form.welcome.title": "Welcome to My Journey!",
        "Auth.form.welcome.subtitle": "Login your Journey Admin account",
        "HomePage.helmet.title": "Journey Dashboard",
        "app.components.HomePage.welcome.again": "Welcome to My Journey!",
        "app.components.HomePage.welcomeBlock.content.again": `
            Setup your organization with ease. Feel free to configure your content manager which will be visible to your 
            registered members.
        `,
        "Settings.profile.form.section.experience.interfaceLanguageHelp": `
          Change preference theme for your dashboard profile.
        `,
        "Auth.form.register.news.label": `
           By checking, you agree to our terms in processing your data. Learn more about our {policy}
        `,
        "Auth.form.register.subtitle": `
          Credentials are used to authenticate in Journey. All data will be encrypted and stored for your personal dashboard.
        `,
        "Settings.application.strapiVersion": "Dashboard version"
      }
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
    tutorials: false,
    notifications: { release: false }
  },
  bootstrap() {},
};
