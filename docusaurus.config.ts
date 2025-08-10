import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'BotMiX',
  tagline: 'Чат-Менеджер',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://doc.miksa.site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',                 // доки на корне
          sidebarPath: './sidebars.ts',
          editUrl: undefined,                 // убрать "Edit this page"
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        blog: false,                          // блог отключён
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/botmix-social-card.jpg',
    navbar: {
      title: 'BotMiX',
      logo: { alt: 'BotMiX', src: 'img/logo.svg' },
      items: [
        { to: '/', label: 'Документация', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            { label: 'Связка с сервером', to: '/servers/css-link' },
            { label: 'Серверная часть', to: '/servers/server' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} BotMiX.`,
    },
    /* algolia: {
      appId: 'appId',
      apiKey: 'apiKey',
      indexName: 'indexName',
      contextualSearch: true,
    }, */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
