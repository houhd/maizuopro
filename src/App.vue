<template>
  <div id="app" @tap="handleAllClick">
      <mz-header></mz-header>
      <mz-nav></mz-nav>
      <keep-alive exclude="mz-detail">
          <router-view></router-view>
      </keep-alive> <!-- 进行缓存 除了mz-detail  -->   
  </div>
</template>

<script>
import axios from 'axios'  
import Header from './components/header.vue'
import Nav from './components/nav.vue'
axios.defaults.timeout = 5000;//引入axios设置请求时间
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components : {
    [Header.name] : Header,
    [Nav.name] : Nav
  },
  methods : {
    handleAllClick(){
      this.$store.commit('CHANGE_HEADER_SHOW',false);
    }
  }
}
</script>

<style lang="scss">
*{ margin:0; padding:0; }
  html,body{ height: 100%; font-size:14px; background: #ebebeb; }
  li{ list-style:none; }
  img{ display:block; }
</style>
