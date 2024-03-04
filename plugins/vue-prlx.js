// plugins/vue-prlx.js

import Vue from 'vue';
import VuePrlx from 'vue-prlx';
import VueLazyload from 'vue-lazyload';
import VueProgressiveImage from 'vue-progressive-image';

Vue.use(VuePrlx);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path/to/error.png',
  loading: 'path/to/loading.gif',
  attempt: 1
});
Vue.use(VueProgressiveImage);


