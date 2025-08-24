export const siteData = JSON.parse("{\"base\":\"/guoguo-notes/\",\"lang\":\"zh-CN\",\"title\":\"Guoguo-notes\",\"description\":\"袁果锅笔记\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"script\",{\"async\":true,\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-51R33TNWKN\"}],[\"script\",{},\"\\n                window.dataLayer = window.dataLayer || [];\\n                function gtag(){dataLayer.push(arguments);}\\n                gtag('js', new Date());\\n                gtag('config', 'G-51R33TNWKN');\\n            \"]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
