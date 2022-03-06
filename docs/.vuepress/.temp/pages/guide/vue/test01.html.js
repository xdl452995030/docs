export const data = {
  "key": "v-06710531",
  "path": "/guide/vue/test01.html",
  "title": "一级标题",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题-1",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题-2",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题-3",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标",
      "slug": "二级标",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题-4",
      "children": []
    },
    {
      "level": 2,
      "title": "二级标题",
      "slug": "二级标题-5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "guide/vue/test01.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
