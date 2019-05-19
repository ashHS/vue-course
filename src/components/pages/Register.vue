<template>
	<div id="reg">
		<div class="bg">
			<div class="bgv">
				<h2 style="text-align:center;">用户注册</h2>
				<form action="javascript:void(0)" method="post">
					<fieldset>
						<legend>账号信息</legend>
						<div class="left">
							<label for="account">学号：</label>
						</div>
						<div class="right">
							<input type="text" name="my_account" id="account" placeholder="请输入学号..." required="required">
							<div class="notice1">请输入八位长度字符串</div>
						</div>
						<div class="left">
							<label for="password">密码：</label>
						</div>
						<div class="right">
							<input type="password" name="my_password" id="password" required="required">
						</div>
						<div class="left">
							<label for="password2">再次输入密码：</label>
						</div>
						<div class="right">
							<input type="password" name="my_password2" id="password2">
						    <div class="notice2">密码关系到您的账号安全，请记住您的密码，并且保持两次密码输入一致！</div>
						</div>
					</fieldset>
					<fieldset>
						<legend>个人信息</legend>
						<div class="left">
							<label for="name">姓名：</label>
						</div>
						<div class="right">
							<input type="text" name="my_name" id="name">
						</div>
						<div class="left">
							<label for="age">年龄：</label>
						</div>
						<div class="right">
							<input type="number" name="my_age" id="age" min="0" max="130">
						</div>
						<div class="left">
							<label for="date">出生日期：</label>
						</div>
						<div class="right">
							<input type="date" name="my_date" id="date">
						</div>
						<div class="left">
							<label for="sex">性别：</label>
						</div>
						<div class="right">
							<label for="">男：<input type="radio" name="my_sex" id="sex" value="boy" /></label>
							<label for="">女：<input type="radio" name="my_sex" id="sex" value="girl" /></label>
						</div>
					</fieldset>
					<fieldset id="">
						<legend>联系方式</legend>
						<div class="left">
							<label for="tel">手机号码：</label>
						</div>
						<div class="right">
							<input type="tel" name="my_tel" id="tel" placeholder="请输入手机号码..." pattern="^[0-9]{11}$">
						</div>
						<div class="left">
							<label for="email">电子邮件：</label>
						</div>
						<div class="right">
							<input type="email" name="my_email" id="email" placeholder="请输入邮箱账号...">
						</div>
					</fieldset>
					<div class="anniu">
						<button><router-link to="/login">去登陆</router-link></button>
						<button type="submit" id="submit" @click="submit()">提交</button>
					</div>
					
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../assets/js/sign.js'
	export default{
		data(){
			return{
				tologin:true
			}
		},
		mounted() {
			this.$store.commit('login',this.tologin)
		},
		methods:{
			leaveLogin(){
				this.$store.commit('login',false);
			},
			toReg(){
				this.$router.push({path:'/register'})
			},
			submit(){
				
			}
		}
	}
</script>

<style scoped>
	#reg,input,textarea,select,option{
		padding: 0;
		margin: 0;
		font-size: 14px;
	}
	#reg{
		background: url(../../assets/img/indexbg.jpg) no-repeat;
	}
	.bg{
		width: 700px;
		margin: 0 auto;
	}
	h2{
		margin: 0;
		padding: 20px 0 23px;
		font-size: 20px;
		font-weight: 700;
	}
	.left{
		width: 170px;
		height: 30px;
		float: left;
		text-align: right;
		line-height: 30px;
		margin: 10px 0;
		padding-right: 30px;
		color: #fff;
	}
	.right{
		width: 470px;
		height: 30px;
		float: left;
		margin: 10px 0;
		line-height: 30px;
	}
	.right .notice1{
		width: 150px;
		height: 30px;
		float: right;
		font-size: 11px;
		line-height: 13px;
		
		color: red;
		display: none;
	}
	.right .notice2{
		width: 150px;
		height: 30px;
		float: right;
		font-size: 11px;
		line-height: 13px;
		
		color: red;
		display: none;
	}
	legend{
		color: #333;
		font-size: 14px;
	}
	fieldset{
		border: 1px solid #555;
		margin-bottom: 15px;
	}
	label{
		color: #fff;
		font-weight: 500;
	}
	input{
		width: 280px;
		height: 30px;
		border: 1px solid #888;
		border-radius: 15px;
		box-shadow: 0 2px 1px #aaa inset;
		padding-left: 20px;
		padding-right: 5px;
		vertical-align: middle;
	}
	/* 设置表单控件获得焦点通过验证时的样式 */
	input:focus:valid{
		outline: 1px solid blue;
	}
	/* 设置表单控件获得焦点未通过验证 */
	input:focus:invalid{
		outline: 1px solid red;
	}
	/* 设置单选控件样式 */
	input[name=my_sex]{
		width: 30px;
		height: 15px;
		line-height: 30px;
		border: 0;
		border-radius: 0;
		box-shadow: none;
		outline: none!important;
	}
	.anniu{
		text-align: center;
	}
	button{
		width: 100px;
		padding: 0;
		margin: 10px 10px;
		background: #F8FDFF;
		cursor: pointer;
	}
	a{
		color: #000;
		text-decoration: none;
	}
</style>
