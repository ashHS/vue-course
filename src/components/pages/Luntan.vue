<template>
	<div class="container">
		<div class="row">
			<!-- 左侧 -->
			<div class="co-xs-12 col-sm-2 col-md-2 col-lg-2">
				<!-- <div class="list-group">
					<a href="xuanke.html" class="list-group-item">选课中心</a>
					<a href="#" class="list-group-item active">学习论坛</a>
					<a href="xinxi.html" class="list-group-item">信息公告</a>
					<a href="yixuanke.html" class="list-group-item" id="selected">已选课程</a>
				</div> -->
				<Navbar></Navbar>
			</div>
			<!-- 右侧 -->
			<div class="co-xs-12 col-sm-10 col-md-10 col-lg-10">
	            <input type="text" placeholder="输入话题" style="margin-bottom: -120px;float: left;height: 30px;border-radius: 12px;"/>
	                <button class="btn btn-primary visible-md visible-lg visible-sm" id="page-left" style="margin:0 0 5px 180px;display: inline-block" @click="publish()">发布话题</button>
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>综合求职区</h4>
					</div>
					<div class="panel-body">
						<table class="table">
							<tr>
								<td style="width:50%;"><a href="#">名企2019校园招聘笔试面试日程</a></td>
	                            <td style="width:50%;"><a href="#">简历模板、制作、点评及修改</a></td>
							</tr>
							<tr style="background:rgb(224, 224, 224);">
	                            <td><a href="#">2019校园招聘求职大礼包及电子杂志 </a></td>
	                            <td><a href="#">职业规划及测评</a></td>
	                        </tr>
	                        <tr>
	                            <td><a href="#">笔试题目、笔经大全</a></td>
	                            <td><a href="#">面试技巧、面经大全</a></td>
	                        </tr>
	                    </table>
	                </div>
	                <div class="panel-heading">
						<h4>公务员资料及讨论</h4>
					</div>
					<div class="panel-body">
						<table class="table">
							<tr>
								<td style="width:50%;"><a href="#">公务员综合资料及讨论</a></td>
	                            <td style="width:50%;"><a href="#">行政职业能力测试</a></td>
							</tr>
							<tr style="background:rgb(224, 224, 224);">
	                            <td><a href="#">公务员面试 </a></td>
	                            <td><a href="#">地方公务员</a></td>
	                        </tr>
	                        <tr>
	                            <td><a href="#">招警考试及考警资料 </a></td>
	                            <td><a href="#">消防/边防/警卫/军校 </a></td>
	                        </tr>
						</table>
	                </div>
	                <div class="panel-heading">
						<h4>考研专区</h4>
	                </div>
					<div class="panel-body">
						<table class="table">
						    <tr>
						        <td style="width:50%;"><a href="#">在职研究生考试将加大难度</a></td>
						        <td style="width:50%;"><a href="#">招生宣讲会</a></td>
						    </tr>
						</table>
					</div>
	                <div>
	                    <ul class="pagination visible-md visible-lg visible-sm" id="page-right">
	                        <li><a href="#">&laquo;</a></li>
	                        <li class="active"><a href="#">1</a></li>
	                        <li><a href="#">2</a></li>
	                        <li><a href="#">3</a></li>
	                        <li><a href="#">4</a></li>
	                        <li><a href="#">5</a></li>
	                        <li><a href="#">&raquo;</a></li>
	                    </ul>
	                </div>
	                <!--小屏后在下面显示翻页-->
						<div class="visible-xs">
							<ul class="pagination">
								<li><a href="#">&laquo;</a></li>
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
								<li><a href="#">&raquo;</a></li>
							</ul>
						</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from '../Navbar.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			Navbar:Navbar
		},
		methods:{
			publish(){
				alert("话题已提交，请等待审核。");
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	#page-right  {
	  float:right;
	  margin: 0;
	  display: inline
	}
	td{
		padding: 10px;
		a{
		  padding: 10px
		}
	}
	.panel-heading{
		margin-top: 0px;
		padding-bottom: 0px;
	}
	.panel-body{
		padding-top: 0px;
		padding-bottom: 0px;
	}
	 
</style>
