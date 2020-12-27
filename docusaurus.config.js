module.exports = {
  title: 'DevArchitecture',
  tagline: 'Open Source Rapid Application Framework for .Net 5',
  url: 'https://DevArchitecture.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DevArchitecture',
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },       
        {
          href: 'https://github.com/DevArchitecture',
          label: 'DevArchitecture GitHub',
          position: 'right',
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
              label: 'Documents',
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
            {
              label: 'Twitter',
              href: 'https://twitter.com/DevArchitecture',
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
          editUrl:
            'https://github.com/DevArchitecture',
        },
        blog: {
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
