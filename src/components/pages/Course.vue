<template>
	<div class="container">
		<div class="row">
			<!-- 左侧 -->
			<div class="co-xs-12 col-sm-2 col-md-2 col-lg-2">
				<!-- <div class="list-group">
					<a href="#" class="list-group-item active">选课中心</a>
					<a href="taolun.html" class="list-group-item">学习论坛</a>
					<a href="xinxi.html" class="list-group-item">信息公告</a>
					<a href="yixuanke.html" class="list-group-item" id="selected">已选课程</a>
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
							<button class="btn btn-success" @click="queding()">确定</button>
							<button class="btn btn-danger">删除</button>
							<!--<button class="btn btn-danger" id="del">删除</button>-->
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
								<tr v-for="(item,index) in courses" :key="index">
									<td><input type="checkbox" id="single" @click="selectCourse($event,index)" /></td>
									<td><span class="label" :class="[item.isSelect=='true'?xuan:weixuan]">{{item.select}}</span></td>
									<td>{{item.name}}</td>
									<td>{{item.teacher}}</td>
									<td>{{item.date}}</td>
									<td>
										<a href="#collapse1" @click="desc(index)" class="detail-link" data-toggle="collapse" data-parent="#accordion">
											<span class="glyphicon glyphicon-chevron-down"></span>
										</a>
									</td>
									<tr id="collapse1" class="collapse">
										<td colspan="10">{{this.describe}}</td>
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
	import Axios from 'axios'
	import '../../assets/js/course.js'
	import Navbar from '../Navbar.vue'
	export default{
		data(){
			return{
				courses:[],
				xuan:'label-success',
				weixuan:'label-default',
				describe:'',
				selected:false,
				courseName:[],
				// time:'',
				getIndex:[],
				selectedCourse:[]
			}
		},
		components:{
			Navbar:Navbar
		},
		mounted(){
			this.getData();
			// this.getTime();
		},
		methods:{
			getData(){
				Axios.get('../../../static/data/course.json').then((response)=>{
					this.courses = response.data.data.courses;
				}).catch((error)=>{
					console.log(error)
				})
			},
			desc(index){
				this.describe = this.courses[index].desc;
			},
			selectCourse(e,index){
				this.selected = !this.selected;
				var x = e.target.checked;
				if(x){
					// this.courseName.push(this.courses[index].name)
					this.courseName[index] = this.courses[index].name
					// 已选课
					this.selectedCourse.push(this.courses[index])
					this.getIndex[index] = index
					// console.log(this.courseName)
					// console.log(this.getIndex)
				}else{
					this.courseName.splice(index,1)
					this.getIndex.splice(index,1)
					// console.log(this.getIndex)
				}
			},
			queding(){
				alert('您已选择：'+this.courseName)
				this.$store.commit('selectedCourse',this.selectedCourse)
				this.getTime();
			},
			getTime(){
				  var date = new Date();
				  var seperator1 = "-";
				  var year = date.getFullYear();
				  var month = date.getMonth() + 1;
				  var strDate = date.getDate();
				  if (month >= 1 && month <= 9) {
					month = "0" + month;
				  }
				  if (strDate >= 0 && strDate <= 9) {
					strDate = "0" + strDate;
				  }
				  var currentdate = year + seperator1 + month + seperator1 + strDate;
				  // this.time = currentdate
				  for(var i=0;i<this.getIndex.length;i++){
					  console.log(this.getIndex[i])
					  if(this.getIndex[i]!=undefined){
						  var x = this.getIndex[i]
						  this.courses[x].date = currentdate;
						  this.courses[x].isSelect = 'true'
						  this.courses[x].select = '已选课'
					  }
				  }
			}
		}
	}
</script>

<style scoped>
	#page-right  {
	  float:right;
	  margin: 0;
	  display: inline
	}
	td a{
	  padding: 10px
	}
</style>
