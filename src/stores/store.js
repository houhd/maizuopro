import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
var store = new vuex.Store({
	state : {
		isHeaderShow : false,
		headerTitle : '卖座电影'
	},
	mutations : {
		CHANGE_HEADER_SHOW(state,payload){
			state.isHeaderShow=payload;
		},//一种方法
		CHANGE_HEADER_TITLE(state,payload){
			state.headerTitle = payload;
		}
	}
});
export default store;