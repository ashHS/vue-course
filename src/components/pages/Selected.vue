<template>
	<div class="container">
		<div class="row">
			<!-- 左侧 -->
			<div class="co-xs-12 col-sm-2 col-md-2 col-lg-2">
				<!-- <div class="list-group">
					<a href="xuanke.html" class="list-group-item">选课中心</a>
					<a href="taolun.html" class="list-group-item">学习论坛</a>
					<a href="xinxi.html" class="list-group-item">信息公告</a>
					<a href="#" class="list-group-item active">已选课程</a>
				</div> -->
				<Navbar></Navbar>
			</div>
			<!-- 右侧 -->
			<div class="co-xs-12 col-sm-10 col-md-10 col-lg-10">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>选课中心</h4>
						<div class="form-group">
							<span>全选 <input type="checkbox" id="all"/></span>
							<button class="btn btn-danger">删除</button>
						</div>
					</div>
					<div class="panel-body">
						<table class="table">
							<tbody>
								<tr>
									<th></th>
									<th>选课状态</th>
									<th>课程名称</th>
									<th>上课老师</th>
									<th>选课时间</th>
									<th></th>
								</tr>
								<tr v-for="(item,index) in selected" :key="index">
									<td><input type="checkbox" id="single" /></td>
									<td><span class="label label-success">{{item.select}}</span></td>
									<td><a href="#">{{item.name}}</a></td>
									<td><a href="#">{{item.teacher}}</a></td>
									<td>{{item.date}}</td>
									<td>
										<a href="#collapse2" @click="desc(index)" class="detail-link" data-toggle="collapse" data-parent="#accordion">
											<span class="glyphicon glyphicon-chevron-down"></span>
										</a>
									</td>
									<tr id="collapse2" class="collapse">
										<td colspan="10">{{describe}}</td>
									</tr>
								</tr>
								
							</tbody>
						</table>
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
	</div>
</template>

<script>
	import Navbar from '../Navbar.vue'
	export default{
		data(){
			return{
				selected:[
					{
						"id":3,
						"number":"0631002701",
						"isSelect":"true",
						"select":"已选课",
						"name":"数据库理论",
						"teacher":"Sandy",
						"date":"2017年1月8日 15:50",
						"desc":"数据库理论 专业选修课 1.5学分",
						"isPing":"否"
					}
				],
				selectedCourse:[],
				describe:''
			}
		},
		mounted() {
			this.selectedCourse = this.$store.state.selectCourse;
			if(this.selectedCourse!=''){
				this.selected= this.selectedCourse
			}
			// for(var i=1;i<this.selectedCourse.length;i++){
			// 	this.selected[i] = this.selectedCourse[i]
			// }
			console.log(this.selected)
		},
		components:{
			Navbar:Navbar
		},
		methods:{
			desc(index){
				this.describe = this.selected[index].desc;
			}
		}
	}
</script>

<style>
</style>
