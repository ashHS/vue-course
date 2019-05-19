<template>
	<div>
		<div class="container" id="one" v-show="left">
			<div class="row">
				<!-- 左侧 -->
				
				<!-- 右侧 -->
				<div class="co-xs-12">
					<div class="panel panel-default">
						<div class="panel-heading">
		                    <h4>教师评价</h4>
						</div>
						<div class="panel-body">
							<table class="table">
								<tbody>
									<tr>
										<th>课程名称：{{course.name}} &emsp;上课老师：{{course.teacher}}</th>
									</tr>
									<tr>
										<td>热情关怀学生，教学要求严格</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina" /> A</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina" /> B</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina" /> C</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina" /> D</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina" /> E</td>
									</tr>
								</tbody>
		                    </table>
		                    <div>
		                        <button id="page-right" class="btn btn-primary glyphicon glyphicon-arrow-right" @click="next()"></button>
		                    </div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="two" class="container" v-show="right">
			<div class="row">
				<!-- 左侧 -->
				
				<!-- 右侧 -->
				<div class="col-xs-12">
					<div class="panel panel-default">
						<div class="panel-heading">
		                    <h4>评价</h4>
						</div>
						<div class="panel-body">
							<table class="table">
								<tbody>
									<tr>
										<th>课程名称：{{course.name}} &emsp;上课老师：{{course.teacher}}</th>
									</tr>
									<tr>
										<td>总体评价</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina2" /> A</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina2" /> B</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina2" /> C</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina2" /> D</td>
									</tr>
									<tr>
									    <td><input type="radio" name="tina2" /> E</td>
									</tr>
								</tbody>
		                    </table>
		                    <div>
								<button id="page-left" class="btn btn-primary glyphicon glyphicon-arrow-left" @click="prev()"></button>
		                        <button id="page-right" class="btn btn-primary" @click="tijiao(id)">提交</button>
		                    </div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import Axios from 'axios'
	
	Vue.use(VueRouter);
	const router = new VueRouter()
	// import '../../assets/js/ping.js'
	export default{
		data(){
			return{
				left:true,
				right:false,
				id:0,
				courses:[],
				course:{}
			}
		},
		mounted() {
			this.id = this.$route.params.id
			this.getData(this.id)
		},
		methods:{
			getData(id){
				Axios.get('../../../static/data/course.json').then((response)=>{
					this.courses = response.data.data.courses;
					this.course = this.courses[id-1]
				})
			},
			tijiao(id){
				var val = $('input:radio[name=tina]:checked').val()
				var val2 = $('input:radio[name=tina2]:checked').val()
				if(val==null||val2==null){
					alert('请完成所有评价后再提交！');
				}else{
					alert('提交成功！');
					this.$store.commit('isPing',id);
					this.$router.push({path:'/evaluation'})
				}
			},
			prev(){
				this.left = true;
				this.right = false;
			},
			next(){
				this.right = true;
				this.left = false;
			}
		}
	}
</script>

<style scoped>
/* 	#two{
		display: none;
	} */
	#page-right  {
	  float:right;
	  margin: 0;
	  display: inline
	}
</style>
