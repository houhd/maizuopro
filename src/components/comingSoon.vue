<template>
	<div class="list">
			<ul>
				<li v-for="item in comingSoonList">
					<div class="img"><img :src="item.poster.thumbnail"></div>
					<div class="info">
						<p><span>{{ item.name }}</span><span>{{ item.grade }}<i class="iconfont icon-more"></i></span></p>
						<p>{{ item.intro }}</p>
						<p><span>{{ item.cinemaCount }}家影院上映</span><span>{{ item.watchCount }}人购票</span></p>
					</div>
				</li>
			</ul>
		</div>
</template>
<script type="text/javascript">
	import axios from 'axios';
	export default {
		name : 'coming-soon',
		data(){
			return {
				comingSoonList:[]
			};
		},
		mounted(){
			axios.get('/v4/api/film/coming-soon',{
				params : {
					page : 1,
					count : 7
				}
			}).then((res)=>{
				var status=res.data.status;
				if(status === 0){
					window.localStorage.setItem('comingSoonList',JSON.stringify(res.data.data.films))
					this.comingSoonList=res.data.data.films
				}
			},(err)=>{
				this.comingSoonList=JSON.parse(window.localStorage.getItem('comingSoonList'))
			})
		}
	}
</script>
<style type="text/css">
	#mz_film .list{}
	#mz_film .list ul{}
	#mz_film .list li{ height: 124px; border-bottom:1px #c9c9c9 dashed; padding-top: 20px; box-sizing:border-box; display: flex;}
	#mz_film .list .img{ width: 60px; float:left; }
	#mz_film .list .img img{ width: 100%; }
	#mz_film .list .info{ float:left; margin-left: 15px; flex:1;}
	#mz_film .list .info p{ height: 28px; display: flex; line-height: 28px; font-size: 12px;}
	#mz_film .list .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
	#mz_film .list .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; margin-right: 20px; color:#fc7103;}

	#mz_film .list .info span{}
</style>