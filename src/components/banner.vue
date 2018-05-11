<template>
	<div id="mz_banner" class="swiper-container">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="item in bannerList"><img :src="item.imageUrl"></li>
			</ul>
		</div>
</template>
<script type="text/javascript">
import axios from 'axios';	
	export default { 
		name : 'mz-banner',
		data(){
			return {
				bannerList : []
			};
		},
		mounted(){
			//反向代理发送ajax
			axios.get('/v4/api/billboard/home').then((res)=>{//对返回的code码进行判断，一般返回0为成功其他为失败
				var status = res.data.status;
				if(status===0){
					window.localStorage.setItem('bannerList',JSON.stringify(res.data.data.billboards));//成功之后进行本地缓存，第一个参数为名，第二个参数为值
					this.bannerList=res.data.data.billboards;
					this.$nextTick().then(()=>{
						//DOM 更新了
						//Swiper必须等到DOM加载完成后，js才会生效

						var $mz_banner = $('#mz_banner');
						new Swiper($mz_banner,{
							loop : true
						})//swiper实现banner轮播
					})	
				}
				//如果成功了返回billboards的数据
			},(err)=>{
				this.bannerList=JSON.parse(window.localStorage.getItem('bannerList'))
				this.$nextTick().then(()=>{
						//DOM 更新了
						//Swiper必须等到DOM加载完成后，js才会生效

						var $mz_banner = $('#mz_banner');
						new Swiper($mz_banner,{
							loop : true
						})//swiper实现banner轮播
					})	
			});//成功后本地的缓存在这里取得
			
		}
	}
</script>
<style type="text/css">
	#mz_banner{ margin-top: 50px; width: 100%; overflow:hidden; }
	#mz_banner img{ width: 100%; }

</style>