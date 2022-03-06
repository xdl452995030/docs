export const themeData = {
  "navbar": [
    {
      "text": "牛妈妈",
      "link": "/"
    },
    {
      "text": "牛小匠",
      "link": "/guide/vue/",
      "children": [
        {
          "text": "小匠",
          "link": "/guide/vue/test01.md"
        },
        {
          "text": "笔记",
          "link": "/guide/vue/test02.md"
        },
        {
          "text": "其它链接",
          "link": "https://www.baidu.com/"
        }
      ]
    },
    {
      "text": "值牛",
      "children": [
        {
          "text": "笔记",
          "link": "/guide/ts/"
        },
        {
          "text": "其它链接",
          "link": "https://www.baidu.com/"
        }
      ]
    },
    {
      "text": "老男孩",
      "children": [
        {
          "text": "API",
          "link": "https://cn.bing.com/"
        },
        {
          "text": "学习视频",
          "children": [
            {
              "text": "慕客",
              "link": "https://cn.bing.com/"
            },
            {
              "text": "B 站",
              "link": "https://cn.bing.com/"
            }
          ]
        },
        {
          "text": "开源项目",
          "children": [
            {
              "text": "项目 01",
              "link": "https://cn.bing.com/"
            },
            {
              "text": "项目 02",
              "link": "https://cn.bing.com/"
            },
            {
              "text": "项目 03",
              "link": "https://cn.bing.com/"
            },
            {
              "text": "项目 04",
              "link": "https://cn.bing.com/"
            }
          ]
        }
      ]
    }
  ],
  "sidebar": {
    "/guide/vue/": [
      {
        "text": "扭打哈哈",
        "collapsable": true,
        "children": [
          "test01.md",
          "test02.md",
          "test03.md"
        ]
      }
    ],
    "/guide/ts/": [
      {
        "text": "Typescript 学习",
        "children": [
          "/guide/ts/test01.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
