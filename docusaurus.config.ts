import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gap Based Development',
  tagline: 'Engineering clarity through gap-based execution',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages or custom-domain canonical host.
  url: 'https://gbd.github.io',
  // Root deploy since this is configured for a root-domain host.
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'nirnex-ai',
  projectName: 'gbd',
  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/nirnex-ai/gbd/tree/main/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          editUrl: 'https://github.com/nirnex-ai/gbd/tree/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gap Based Development',
      logo: {
        alt: 'Gap Based Development Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Journal', position: 'left'},
        {
          href: 'https://github.com/nirnex-ai/gbd',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Explore',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Blog', to: '/blog'},
          ],
        },
        {
          title: 'Build',
          items: [
            {label: 'GitHub', href: 'https://github.com/nirnex-ai/gbd'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gap Based Development. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
