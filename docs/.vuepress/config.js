module.exports = {
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
    sidebarDepth: 2, // 将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    sidebar: [
      {
        title: '入门',
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
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast',
          '/components/collapse',
          '/components/popover',
        ]
      }
    ]
  }
};