import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Course from '@/components/pages/Course'
import Evaluation from '@/components/pages/Evaluation'
import Luntan from '@/components/pages/Luntan'
import News from '@/components/pages/News'
import Selected from '@/components/pages/Selected'
import Ping from '@/components/pages/Ping'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
		{
			path:'*',
			redirect:'/index'
		},
		{
			path:'/course',
			component:Course
		},
		{
			path:'/evaluation',
			component:Evaluation
		},
		{
			path:'/luntan',
			component:Luntan,
		},
		{
			path:'/news',
			component:News
		},
		{
			path:'/selected',
			component:Selected
		},
		{
			path:'/ping/:id',
			component:Ping
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/register',
			component:Register
		}
  ]
})
