<template>
	<div id="denglu">
		<h1 @click="leaveLogin()"><router-link to="/index"><span></span>学生选课评教系统</router-link></h1>
		<div class="bvg">
			<h2>登录</h2>
			<form action="javascript:void(0)" id="my_form">
					<div class="left">
						<label>学号：</label>
					</div>
					<div class="right">
						<input type="text" for="my_form" id="account" required="required">
					</div>
					<div class="left">
						<label>密码：</label>
					</div>
					<div class="right">
						<input type="password" for="my_form" id="password" required="required">
					</div>
					<button type="submit" id="index" for="my_form" name="index" @click="login()">登录</button>
					<button  id="login" form="my_form" name="login" @click="toReg()">注册</button>
			</form>
		</div>
	</div>
</template>

<script>
	import Axios from 'axios'
	// import store from '../../store/store.js'
	export default{
		data(){
			return{
				tologin:true,
				user:[]
			}
		},
		mounted() {
			this.$store.commit('login',this.tologin)
			this.getData()
		},
		methods:{
			getData(){
				Axios.get('../../../static/data/user.json').then((response)=>{
					this.user = response.data.data.user;
					// console.log(this.user)
				}).catch((error)=>{
					console.log(error)
				})
			},
			leaveLogin(){
				this.$store.commit('login',false);
				this.$store.commit('headLogin','登录')
			},
			toReg(){
				this.$router.push({path:'/register'})
			},
			login(){
				var acc = $('#account').val();
				var paw = $('#password').val();
				for(var i=0;i<this.user.length;i++){
					if(acc==this.user[i].account&&paw==this.user[i].password){
						this.$store.commit('login',false);
						this.$store.commit('headLogin','Admin');
						this.$router.push({path:'/index'})
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{margin: 0;padding: 0;}
	#denglu{
		height: 728px;
		// position: relative;
		padding-bottom: 125px;
		background: url(../../assets/img/indexbg.jpg) no-repeat;
	}
	h1{
		position: relative;
		text-align: center;
		font-size: 50px;
		padding-top: 100px;
		margin-bottom: -100px;
		letter-spacing: 20px;
		color: rgb(31, 68, 150);
	}
	h1 span{
		top: 103px;
		left: 415px;
		position: absolute;
		display: inline-block;
		width: 55px;
		height:55px;
		background: url(../../assets/img/login.png) no-repeat;
	}
	.bvg{
		width: 400px;
		height: 320px;
		border: 1px solid #ccc;
		border-radius: 15px;
		background: rgba(144, 144 ,238, 0.5);
		margin-top: 200px;
		margin: 200px auto 0;
		z-index: 220;
	}
	h2{
		color: #347685;
		margin: 20px auto 30px;
		text-align:center;
	}
	.left{
		width: 100px;
		height: 30px;
		line-height: 30px;
		float: left;
		text-align: right;
		font-size: 18px;
		margin-bottom: 30px;
	}
	.right{
		width: 297px;
		height: 30px;
		line-height: 30px;
		margin-bottom: 30px;
		float: left;
	}
	input{
		width: 250px;
		height: 30px;
		padding-left: 15px;
		border: 1px solid #888;
		border-radius: 15px;
		box-shadow: 0 2px 1px #aaa inset;
		vertical-align: middle;
	}
	button{
		width: 100px;
		background: #F8FDFF;
		cursor: pointer;
	}
	#index{
		margin: 30px 20px 0 85px;
	}
	a{
		text-decoration: none;
	}
</style>
