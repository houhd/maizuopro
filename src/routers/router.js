import vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/index.vue';
import Film from '../components/film.vue';
import Detail from '../components/detail.vue';
import NowPlaying from '../components/nowPlaying.vue';
import ComingSoon from '../components/comingSoon.vue';
vue.use(VueRouter);
var router = new VueRouter({
	routes : [
		{ path : '/index' , component : Index },
		{ 
			path : '/film' , 
			component : Film ,
			children : [
				{ path : 'now-playing' , component : NowPlaying},
				{ path : 'coming-soon' , component : ComingSoon}
			],
			redirect : '/film/now-playing'
		},
		{ path : '/detail/:id?' , component : Detail },
		{ path : '/*' , redirect : '/index' }
		
	],
	scrollBehavior(to,from,savedPosition){
		return { x:0,y:0}//表示每次切换路由都会返回0 0点
	}
});
export default router;
//安装路由的时候需要执行:cnpm i -S vue-router vuex