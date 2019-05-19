<template>
	<div>
		<div class="container">
			<div class="row">
				<!-- 左侧 -->
				
				<!-- 右侧 -->
				<div class="co-xs-12">
					<div class="panel panel-default">
						<div class="panel-heading">
		                    <h4>评价信息</h4>
						</div>
						<div class="panel-body">
							<table class="table">
								<tbody>
									<tr>
										<th>序号</th>
										<th>课程编号</th>
										<th>课程名称</th>
										<th>上课老师</th>
										<th>评分</th>
										<th>已评</th>
									</tr>
									<tr v-for="(item,index) in Ping" :key="index">
										<td>{{item.id}}</td>
										<td>{{item.number}}</td>
										<td><router-link :to="'/ping/'+item.id">{{item.name}}</router-link></td>
										<td>{{item.teacher}}</td>
										<td>91</td>
										<td>{{item.isPing}}</td>
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
	</div>
</template>

<script>
	import Axios from 'axios'
	// import store from '../../store/store.js'
	export default{
		data(){
			return{
				Ping:[],
				isPing:[]
			}
		},
		mounted() {
			this.getData();
		},
		methods:{
			getData(){
				Axios.get('../../../static/data/course.json').then((response)=>{
					this.Ping = response.data.data.courses;
					this.$store.commit('isEval',this.Ping)
					// 最开始pingId是-2
					var pingId = this.$store.state.pingId-1;
					this.Ping[pingId].isPing = '是'
				}).catch((error)=>{
					console.log(error)
				})
			}
		}
	}
</script>

<style>
</style>
