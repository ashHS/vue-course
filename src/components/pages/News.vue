<template>
	<div class="container">
		<div class="row">
			<!-- 左侧 -->
			<div class="co-xs-12 col-sm-2 col-md-2 col-lg-2">
				<!-- <div class="list-group">
					<a href="xuanke.html" class="list-group-item">选课中心</a>
					<a href="taolun.html" class="list-group-item">学习论坛</a>
					<a href="#" class="list-group-item active">信息公告</a>
					<a href="yixuanke.html" class="list-group-item" id="selected">已选课程</a>
				</div> -->
				<Navbar></Navbar>
			</div>
			<!-- 右侧 -->
			<div class="co-xs-12 col-sm-10 col-md-10 col-lg-10">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>信息中心</h4>
					</div>
					<div class="panel-body">
						<table class="table">
							<tbody>
								<tr>
									<th>序号</th>
									<th>标题</th>
									<th>类别</th>
									<th>发送人</th>
									<th>发送时间</th>
								</tr>
								<tr>
									<td>1</td>
									<td><a href="#">关于公布停开公选课名单的通知</a></td>
									<td>日常通知</td>
									<td>Tina</td>
									<td>2018.7.22 11:17</td>
								</tr>
								<tr>
									<td>2</td>
									<td><a href="#">软件工程培养方案2016版培养方案及教学计划</a></td>
									<td>教学计划</td>
									<td>Anda</td>
									<td>2016.7.22 11:17</td>
								</tr>
							</tbody>
						</table>
						<!--小屏后在下面显示翻页-->
						<div>
							<ul class="pagination visible-md visible-lg visible-sm" id="page-right">
								<li><a href="#">&laquo;</a></li>
								<li class="active"><a href="#">1</a></li>
								<li><a href="#">&raquo;</a></li>
							</ul>
						</div>
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
			return{}
		},
		components:{
			Navbar:Navbar
		}
	}
</script>

<style scoped>
	#page-right  {
	  float:right;
	  margin: 0;
	  display: inline
	}
</style>
