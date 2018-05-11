<template>
	<transition name="slide"><!-- 添加动画 -->
		<div id="mz_menu" v-if="isHeaderShow">
			<ul>
				<router-link to="/index" tag="li">首页<i class="iconfont icon-more"></i></router-link>
				<router-link to="/film" tag="li">影片<i class="iconfont icon-more"></i></router-link>
				<router-link to="/index" tag="li">影院<i class="iconfont icon-more"></i></router-link>
				<router-link to="/index" tag="li">商城<i class="iconfont icon-more"></i></router-link>
				<router-link to="/index" tag="li">我的<i class="iconfont icon-more"></i></router-link>
				<router-link to="/index" tag="li">卖座卡<i class="iconfont icon-more"></i></router-link>
			</ul>
		</div>
	</transition>	
	
</template>
<script type="text/javascript">
	import { mapState } from 'vuex';
	export default {
		name : 'mz-nav',
		data(){
			return {};
		},
		computed : {
			...mapState(['isHeaderShow'])
		}
	}
</script>
<style type="text/css" scoped>
	/*vue组件中的style标签标有scoped属性时表明style里的css样式只适用于当前组件元素*/
	#mz_menu{ width: 265px; height: 100%; background: #282828; color:#999999; position: fixed; left: 0; top:50px;  z-index:10;}
	#mz_menu ul{}
	#mz_menu li{ line-height: 50px; height: 50px; border-bottom: 1px dashed #333333; padding-left: 10px; }
	#mz_menu li i{ float:right; padding-right: 10px; }
	.slide-enter-active{
		animation: .3s navMove linear;
	}
	.slide-leave-active{
		animation: .3s navMove linear reverse;
	}
	@keyframes navMove{
		0%{
			transform: translateX(-100%);
			opacity: 0;
		}
		100%{
			transform: translateX(0);
			opacity: 1;
		}
	}
</style>