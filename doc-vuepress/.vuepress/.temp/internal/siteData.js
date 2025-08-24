export const siteData = JSON.parse("{\"base\":\"/guoguo-notes/\",\"lang\":\"zh-CN\",\"title\":\"Guoguo-notes\",\"description\":\"袁果锅笔记\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}],[\"script\",{},\"\\n            var _hmt = _hmt || [];\\n            (function() {\\n            var hm = document.createElement(\\\"script\\\");\\n            hm.src = \\\"https://hm.baidu.com/hm.js?83576236cbb63909bd3679ae4c21c5fa\\\";\\n            var s = document.getElementsByTagName(\\\"script\\\")[0];\\n            s.parentNode.insertBefore(hm, s);\\n            })();\\n      \"]],\"locales\":{}}")

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
