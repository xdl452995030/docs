module.exports = {
    base: "/docs/",
    // 站点配置
    lang: 'zh-CN',
    title: '牛妈妈',
    description: '牛妈妈',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    search:true,
    themeConfig: {
        // logo: 'https://vuejs.org/images/logo.png',
        // 导航配置
        navbar: [
            {// 右上导航航条 docs/.vuepress/README.md
                text: '牛妈妈',
                link: '/'
            },
            {
                text: '牛小匠',
                link: '/guide/vue/',
                children:[
                    {text:'小匠', link: '/guide/vue/test01.md'}, // 可不写后缀 .md
                    {text:'笔记', link: '/guide/vue/test02.md'}, // 可不写后缀 .md
                    {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
                ]
            },
            {
                text: '值牛',
                children:[
                    {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
                    {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
                ]
            },
            {
                text: '老男孩',
                children:[
                    {text: 'API', link: 'https://cn.bing.com/'},
                    {
                        text: '学习视频',
                        children: [
                            {text: '慕客', link: 'https://cn.bing.com/'},
                            {text: 'B 站', link: 'https://cn.bing.com/'}
                        ]
                    },
                    {
                        text: '开源项目',
                        children: [
                            {text: '项目 01', link: 'https://cn.bing.com/'},
                            {text: '项目 02', link: 'https://cn.bing.com/'},
                            {text: '项目 03', link: 'https://cn.bing.com/'},
                            {text: '项目 04', link: 'https://cn.bing.com/'}
                        ]
                    }
                ]
            }
        ],
        sidebar: {//左侧列表
            '/guide/vue/': [{
                text: '扭打哈哈',
                collapsable:true,
                children:['test01.md','test02.md','test03.md']
            }],
            '/guide/ts/': [
                {
                    text: 'Typescript 学习',
                    children: [
                        '/guide/ts/test01.md'
                    ]
                }
            ],
            // fallback 侧边栏被最后定义
            // '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用
            // sidebarDepth: 3,
        }

    },
}
