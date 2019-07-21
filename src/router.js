import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//一级路由
import Movie from '@/views/Movie.vue'
import Seek from  '@/components/seek'
import Cirtys from '@/components/cirtys'
//二级路由
import Cinema from '@/views/Cinema'
import Mine from '@/views/Mine'
import MoviePro from '@/views/MoviePro'
import Login from '@/views/login'
import Register from '@/views/Register'
import Details  from '@/views/Details'
import Retrieve from '@/views/Retrieve'
import Self from '@/views/Self'
import CinemaDetail from'@/views/CinemaDetail'
import Ticket from '@/views/Ticket'
import Picture from '@/views/Picture'
//三级路由
import HotMovie from '@/components/HotMovie'
import UpcomingMovie from '@/components/UpComingMovie/UpcomingMovie'

export default new Router({
	mode:'hash',
	bash:process.env.BASE_URL,
  routes: [
      { 
      path: '/Movie', 
      component: Movie, 
      name:'Movie'

        ,children:[
        { 
        path: 'MoviePro', 
        component: MoviePro, 
        name:'MoviePro'
         
          ,children:[
            { 
            path: 'HotMovie',
            component: HotMovie, 
            name:'HotMovie'},
            {
            path: 'UpcomingMovie',
            component:UpcomingMovie,
            name:'UpcomingMovie'}
          ]
      },
      
        { 
        path: 'Cinema',
        component: Cinema,
        name:'Cinema' 
        },
       
        {
        path:'/Login',
        component:Login,
        name:'Login'
        },
       
        ]
     },
     {
     path:'/seek',
     component: Seek,
     name:'seek'
     },
     {
     path:'/Cirtys',
     component: Cirtys, 
     name:'Cirtys'
     },
      { 
      path: '/Mine',
      component:Mine, 
      name:'Mine'
      },
      { 
      path: '/Register',
      component:Register, 
      name:'Register'
      },
      { 
      path: '/Details',
      component:Details,
      name:'Details'
      },
      { 
      path: '/Retrieve',
      component:Retrieve,
      name:'Retrieve'
      },
      { 
      path: '/Self',
      component:Self,
      name:'Self'
      },
      {
      path:'/CinemaDetail',
      component:CinemaDetail,
      name:'CinemaDetail'
      },
      {
      path:'/Ticket',
      component:Ticket,
      name:'Ticket'
      },
      {
      	path:'/Picture',
      	component:Picture,
      	name:'Picture'
      },
      
      


    //重定向
    { 
    path: '/', 
    redirect: 
    { name: 'HotMovie' }
    }
  ]
})
