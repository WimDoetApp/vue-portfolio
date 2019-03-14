import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import ResumeDutch from '@/components/ResumeDutch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/resumeDutch',
      name: 'ResumeDutch',
      component: ResumeDutch
    }
  ]
})
