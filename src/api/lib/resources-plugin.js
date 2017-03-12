/**
 * Thie plugin exposes API resources inside components as this.$resources
 */

const RESOURCES_PROP_NAME = 'resources';

function createdHook() {
  const options = this.$options;
  if (options[RESOURCES_PROP_NAME]) {
    this[`$${RESOURCES_PROP_NAME}`] = options[RESOURCES_PROP_NAME];
  } else if (options.parent && options.parent[`$${RESOURCES_PROP_NAME}`]) {
    this[`$${RESOURCES_PROP_NAME}`] = options.parent[`$${RESOURCES_PROP_NAME}`];
  }
}

const mixin = {
  created: createdHook
};

export default class ResourcesPlugin {
  static install(Vue) {
    Vue.mixin(mixin);
  }
}
