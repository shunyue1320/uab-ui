const path = require('path')
module.exports = {
  base: '/uab-ui/',
  title: 'Uab-UI',
  description: '一款帮助开放者成长的 UI 库',
  head: [
    ['link', { rel: 'icon', href: '/uabmi.png' }],
  ],
  themeConfig: {
    logo: '/uabmi.png',
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/getting-started/'},
      {text: 'Github', link: 'https://github.com/shunyue1320/uab-ui'},
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/introduce/',
          '/install/',
          '/getting-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/popover',
          '/components/grid',
          '/components/tabs',
          '/components/input',
          '/components/layout',
          '/components/table',
        ]
      }
    ]
  }
};