<template>
	<div class="container">
		<div class="row">
			<!-- 左侧 -->
			<div class="co-xs-10 col-sm-2 col-md-2 col-lg-2">
				<Navbar></Navbar>
			</div>
			<!-- 右侧 -->
			<div class="co-xs-2 col-sm-10 col-md-10 col-lg-10">
				<div id="myCarousel" class="carousel slide">
					<!-- 轮播指标 -->
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1"></li>
						<li data-target="#myCarousel" data-slide-to="2"></li>
						<li data-target="#myCarousel" data-slide-to="3"></li>
					</ol>
					<!-- 轮播项目 -->
					<div class="carousel-inner">
						<div class="item active">
							<img src="../../assets/img/p5.jpg" title="1">
							<div class="carousel-caption">1</div>
						</div>
						<div class="item">
							<img src="../../assets/img/p2.jpg" alt="2">
							<div class="carousel-caption">2</div>
						</div>
						<div class="item">
							<img src="../../assets/img/p3.jpg" alt="3">
							<div class="carousel-caption">3</div>
						</div>
						<div class="item">
							<img src="../../assets/img/p4.jpg" alt="4">
							<div class="carousel-caption">4</div>
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
	
</style>
