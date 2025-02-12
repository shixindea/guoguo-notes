import { hasGlobalComponent } from "F:/my-project/guoguo-notes/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.14/node_modules/@vuepress/helper/lib/client/index.js";

import Badge from "F:/my-project/guoguo-notes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/my-project/guoguo-notes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "F:/my-project/guoguo-notes/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_vuepress@2.0.0-rc.14/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
