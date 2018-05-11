import Vue from 'vue'
import App from './App.vue'
import router from './routers/router.js'
import store from './stores/store.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
//卖座的组件的架构：
//    /pages
//       /index
//				index.vue
//  			/components
//					banner.vue
//					movie.vue
//		/film
//			film.vue
//			/components
//				nowPlaying.vue
//				commingSoon.vue
//		/detail
//			detail.vue
//		header.vue
//		nav.vue
//		/components
//			index.vue
//			film.vue
//			detail.vue
//			header.vue
//			nav.vue
//			banner.Vue
//			movie.vue
//			nowPlaying.vue
//			comingSoon.vue