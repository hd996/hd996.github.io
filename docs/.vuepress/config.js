module.exports = {
  lang: 'zh-CN',
  title: 'hd996 的博客',
  description: 'hd996 blog',
  themeConfig: {
    darkMode: true,
    repo: 'https://github.com/hd996',
    docsRepo: 'https://github.com/hd996/hd996.github.io',
    docsBranch: 'master',
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "项目",
        link: "/project/",
      },
      {
        text: "技术",
        link: "/tech/",
      },
    ],
    sidebar: [
      {
        text: '项目',
        link: '/project/'
      },
      {
        text: '技术',
        link: '/tech/',
        children: [
          {
            text: '安全',
            link: '/tech/security/',
          },
        ]
      },
    ]
  }
}