$(function(){
	
	var account = $("#account");
	var password = $("#password");
	var password2 = $("#password2");
	var notice1 = $(".notice1");
	var notice2 = $(".notice2");
	var form = $("form");
	var submit = $("[type=submit]");
	var finish=0;
	//账号控件获得焦点的时候触发的事件
		account.click(function(){
			console.log(1)
			notice1.css("display","block");
		})
		account.blur(function(){
			if(account.val().length==8){
				notice1.css("display","none");
				finish=1;
			}
		})
		
	//重输密码控件获得焦点的时候触发的事件
		password2.focus(function(){
			notice2.css("display","block");
		})
		
	//密码控件内容改变失去焦点的时候判断两次输入的是否一致
	password2.change(function(){
		//获取第一次输入密码的结果
		var pw2_1 = password.val();
		//获取第二次
		var pw2_2 = password2.val();
		//如果不同
		if(pw2_1!=pw2_2){
			notice2.css("display","block");
			finish=0;
		}else{
			notice2.css("display","none");
			finish=1;
		}
	})
	password.change(function(){
		// 获取第一次输入密码的结果
		var pw1_1 = password.val();
		// 获取第二次
		var pw1_2 = password2.val();
		// 如果不同
		if(pw1_1!=pw1_2){
			notice2.css("display","block");
			finish=0;
		}else{
			notice2.css("display","none");
			finish=1;
		}
	})
	submit.click(function(){
		if(finish==1){
			alert('注册成功！请点击去登陆按钮')
		}
	})
})
