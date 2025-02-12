import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "F:/my-project/guoguo-notes/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_vuepress-plugin-search-pro@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "F:/my-project/guoguo-notes/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.56_vuepress@2.0.0-rc.14/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "F:/my-project/guoguo-notes/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "F:/my-project/guoguo-notes/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "F:/my-project/guoguo-notes/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.59_markdown-it@14.1.0_vuepress-plugin-search-pro@2.0.0-rc.52_vuepress@2.0.0-rc.14/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
