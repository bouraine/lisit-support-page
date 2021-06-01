/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "List'it",
  tagline: 'Never lose that webpage again',
  url: 'https://github.com/bouraine/pages/listit-support-page',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bouraine', // Usually your GitHub org/user name.
  projectName: "listit-support-page", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'List\'it support page',
      logo: {
        alt: "List'it Logo",
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Support',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright List'it © ${new Date().getFullYear()}.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          // showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
