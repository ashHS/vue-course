<template>
	<div class="list-group">
		<router-link to="/course" class="list-group-item">选课中心</router-link>
		<router-link to="/luntan" class="list-group-item">学习论坛</router-link>
		<router-link to="/news" class="list-group-item">信息公告</router-link>
		<router-link to="/selected" class="list-group-item" id="selected">已选课程</router-link>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		}
	}
</script>

<style scoped>
	.router-link-active{
		background: #337ab7;
		color: #fff;
	}
</style>
