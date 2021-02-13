module.exports = {
  title: 'DevArchitecture',
  tagline: '.NET 5 ve Sonrası İçin Açık Kaynak Kodlu Hızlı Uygulama Geliştirme Çatısı',
  url: 'https://DevArchitecture.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DevArchitecture', // Usually your GitHub org/user name.
  projectName: 'DevArchitecture', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  themeConfig: {
    navbar: {
      title: 'DevArchitecture',
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Dokümanlar',
          position: 'right',
        }, 
        {
          to: 'team',         
          label: 'Ekibimiz',
          position: 'right',
        },       
        {
          href: 'https://github.com/DevArchitecture',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'DevArchitecture GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokümanlar',
          items: [ 
            {
              label: 'Dokümanlar',
              to: 'docs/',
            },                   
          ],
        },
        {
          title: 'Topluluk',
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
};
