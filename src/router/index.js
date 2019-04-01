import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Info from '@/components/Info'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import ResumeDutch from '@/components/ResumeDutch'
import Wikibot from '@/components/Wikibot'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
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
    },
    {
      path: '/wikibot',
      name: 'Wikibot',
      component: Wikibot
    }
  ]
})
