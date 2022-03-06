import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-5d496b56","/guide/vue/",{"title":"Hello VuePress"},["/guide/vue/index.html","/guide/vue/README.md"]],
  ["v-5d496b56","/guide/vue/",{"title":""},["/guide/vue/index.html","/guide/vue/index.md"]],
  ["v-06710531","/guide/vue/test01.html",{"title":"一级标题"},["/guide/vue/test01","/guide/vue/test01.md"]],
  ["v-0825ddd0","/guide/vue/test02.html",{"title":""},["/guide/vue/test02","/guide/vue/test02.md"]],
  ["v-09dab66f","/guide/vue/test03.html",{"title":""},["/guide/vue/test03","/guide/vue/test03.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
