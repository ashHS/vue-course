<template>
  <div class="header">
  	<nav class="navbar navbar-default" role="navigation" id="bg">
  		<div class="container">
  			<div class="navbar-header">
  				<button class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
  					<span class="sr-only">Toggle navigation</span>
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  					<span class="icon-bar"></span>
  				</button>
  			    <router-link to="/index" class="navbar-brand">学生选课评教系统</router-link>
  		    </div>
  		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
  			    <ul class="nav navbar-nav" id="changeHover">
  				    <li><router-link to="/course">选课管理</router-link></li>
							<li><router-link to="/evaluation">教学评价</router-link></li>
  			    </ul>
						<ul class="nav navbar-nav navbar-right">
							<form action="" class="navbar-form navbar-left" role="search">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="">
								</div>
								<button class="btn btn-default btn-info">搜索</button>
							</form>
							<li @click="login()">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">{{headLogin}}<b class="caret" v-if="isLogin"></b></a>
								<ul class="dropdown-menu">
									<li><a href="#">我删除的条目</a></li>
									<li><a href="#">我修改的条目</a></li>
									<li><a href="#">我恢复的条目</a></li>
									<li class="divider"></li>
									<li><a href="#" @click="cancel()">注销</a></li>
								</ul>
							</li>
							<!-- <li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">换肤<b class="caret"></b></a>
								<ul class="dropdown-menu" id="color">
									<li id="blue"><a href="#">蓝色</a></li>
									<li id="red"><a href="#">红色</a></li>
									<li id="yellow"><a href="#">黄色</a></li>
									<li id="green"><a href="#">绿色</a></li>
									<li id="default" class="active"><a href="#">默认</a></li>
								</ul>
							</li> -->
						</ul>
  		    </div>
  		</div>
  	</nav>
  </div>
</template>

<script>
	// import '../assets/js/header.js'
	export default {
	  name: 'HelloWorld',
	  data () {
		return {
		  msg: '',
		  toLogin:false,
		  headLogin:'',
		  isLogin:false,
		  isCancel:false
		}
	  },
	  mounted() {
	  	this.headLogin = this.$store.state.login
		this.isCancel = false
		if(this.headLogin!='登录'){
			this.isLogin = true;
		}
	  },
	  methods:{
		  login(){
			  this.isCancel = false
			  if(this.headLogin==='登录'&&!this.isCancel){
				  this.toLogin = true;
				  this.$store.commit('login',this.toLogin);
				  this.$router.push({path:'/login'})
			  }
			  if(this.headLogin=='登录'){
			  	this.isLogin = false;
			  }
			  
		  },
		  cancel(){
			  this.headLogin='登录'
			  this.isCancel = true
		  }
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.router-link-active{
		background-color: #eee;
	}
	#changeHover a:hover{
		color:#333;
		background-color: #f8f8f8;
	}
	#changeHover a:focus{
		color:#777;
		background-color: #eee;
	}
</style>
