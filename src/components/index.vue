<template>
	<div>
		<mz-banner></mz-banner>
		<mz-movie></mz-movie>
	</div>
</template>
<script type="text/javascript">
	import Banner from './banner.vue';
	import Movie from './movie.vue';
	export default {
		name : 'mz-index',
		data(){
			return { };
		},
		components : {
			[Banner.name] : Banner,
			[Movie.name] : Movie
		},
		activated(){
			this.$store.commit('CHANGE_HEADER_TITLE','卖座电影');
		}
	}
</script>
<style type="text/css">
	
</style>