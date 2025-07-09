module.exports = {
  title: '我的知识库',
  description: '使用VuePress构建的文档网站',
  base: '/', // 如果仓库名不是username.github.io，改为 '/仓库名/'
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: 'GitHub', link: 'https://github.com/fishp666/fishp666.github.io' }
    ],
    
    sidebar: {
      '/guide/': [
        '',
        'getting-started',
        'basic-config',
        'advanced'
      ],
      '/config/': [
        '',
        'theme',
        'plugins'
      ]
    },
    
    // 启用编辑链接
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',
    repo: 'fishp666/fishp666.github.io',
    
    lastUpdated: '上次更新',
    
    // 搜索
    search: true,
    searchMaxSuggestions: 10
  }
}
