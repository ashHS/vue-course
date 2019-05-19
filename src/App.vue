<template>
  <div id="app">
    <Header v-if="!tologin"></Header>
    <router-view/>
	<p id="copyright" v-if="!tologin">&copy; Copyright &copy; 2016.Bootstrap All rights reserved.</p>
  </div>
</template>

<script>
	import Header from '@/components/Header.vue'
	export default {
	  name: 'App',
		components:{
			Header:Header
		},
		computed:{
			tologin:function(){
				return this.$store.state.toLogin;
			}
		}
	}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	background-color: #fff;
	#copyright{
		margin: 32px auto;
		text-align:center;
	}
}
</style>
