import Vue from "vue";
import { upperFirst, camelCase } from "lodash-es";

const requireComponent = require.context(
  "@/modules/test/components",
  true,
  /\.vue$/,
  "lazy"
);

// Dynamically load all components
// and lazily load them
requireComponent.keys().forEach(fileName => {
  const componentName = upperFirst(
    camelCase(fileName.replace(/^.*[\\]/, "").replace(/\.\w+$/, ""))
  );

  Vue.component(componentName, () =>
    import(
      /* webpackChunkName: "test" */ `@/modules/test/components/${fileName.substr(
        2
      )}`
    )
  );
});
