(module.exports = {
  title: 'DevArchitecture',
  tagline: 'Open Source Rapid Application Development Framework for .NET 6 and Later',
  url: 'https://DevArchitecture.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DevArchitecture', // Usually your GitHub org/user name.
  projectName: 'DevArchitecture', // Usually your repo name.
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        indexBaseUrl: true
      }
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      tr: {
        label: 'Türkçe',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl:'https://github.com/DevArchitecture',
        },
        team: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/DevArchitecture',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'DevArchitecture',
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        }, 
        {
          to: 'team',         
          label: 'Team',
          position: 'right',
        },       
        {
          href: 'https://github.com/DevArchitecture',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'DevArchitecture GitHub',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [ 
            {
              label: 'Docs',
              to: 'docs/',
            },                   
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/DevArchitecture',
            },            
          ],
        },
        {
          title: 'More',
          items: [            
            {
              label: 'GitHub',
              href: 'https://github.com/DevArchitecture',
            },            
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/solidteams',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevArchitecture, Inc. Built with Docusaurus.`,
    },
  }, 
});
