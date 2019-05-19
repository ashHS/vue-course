import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var state = {
	ping:[],
	toLogin:false,
	login:'登录',
	selectCourse:[],
	pingId:-1
}

var mutations = {
	isEval(state,data){
		state.ping = data;
	},
	login(state,data){
		state.toLogin = data;
	},
	headLogin(state,data){
		state.login = data;
	},
	selectedCourse(state,data){
		state.selectCourse = data
		console.log(state.selectCourse)
	},
	isPing(state,data){
		state.pingId = data;
	}
}

const store = new Vuex.Store({
	state,
	mutations
})
export default store;