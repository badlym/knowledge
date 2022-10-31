export default {
  base: '/knowledge/',
  title: '前端知识点及个人笔记',
  description: '前端知识点及个人笔记',
  themeConfig: {
    siteTitle: false,
    logo: '/logo.png',
    nav: [
      {text: '个人笔记', link: '/guild/installation'},
      {text: '面试题', link: '/interview/'}
    ],
    socialLinks: [{icon: 'github', link: 'https://github.com/badlym'}],
    sidebar: {
      '/guild/installation': [
        {
          text: '前端个人笔记',
          items: [
            {
              text: '前端个人笔记',
              link: '/guild/installation',
            },
            {
              text: '快速开始',
              link: '/guild/quickstart'
            }
          ]
        },
        {
          text: '进阶',
          items: [
            {
              text: 'xx',
              link: '/xx'
            }
          ]
        }
      ],
      '/interview/': [
        {
          text: '前端面试题',
          items: [
            {
              text: 'promise',
              link: '/examples/button/'
            },
            {
              text: 'Icon图标',
              link: '/examples/Icon/'
            }
          ]
        }
      ]
    }
  }

};
