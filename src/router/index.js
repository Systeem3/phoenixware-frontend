import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const requireAuthenticated = (to, from, next) => {
  store.dispatch('auth/initialize').then(() => {
    if (!store.getters['auth/isAuthenticated']) {
      next('/login/identifier')
    } else {
      next()
    }
  })
}

const requireUnauthenticated = (to, from, next) => {
  store.dispatch('auth/initialize').then(() => {
    if (store.getters['auth/isAuthenticated']) {
      next('/')
    } else {
      next()
    }
  })
}

const redirectLogout = (to, from, next) => {
  store.dispatch('auth/logout').then(() => next('/login/identifier'))
}

const routes = [
  {
    path: '/auth',
    component: () => import('@/views/auth/Auth'),
    children: [
      {
        path: '/login',
        component: () => import('@/views/auth/Login'),
        children: [
          {
            path: 'identifier',
            name: 'identifier',
            component: () => import('@/views/auth/LoginIdentifier'),
            beforeEnter: requireUnauthenticated,
          },
          {
            path: 'password-reset',
            name: 'Password Reset',
            component: () => import('@/views/auth/PasswordReset'),
          },
          {
            path: '/password-reset/:uid/:token',
            name: 'Password Reset Confirm',
            component: () => import('@/views/auth/PasswordResetConfirm'),
          },
          {
            path: '/logout',
            beforeEnter: redirectLogout,
          },
        ],
      },
    ],
  },
  {
    path: '/pages',
    component: () => import('@/views/pages/Index'),
    children: [
      {
        name: 'Lock',
        path: 'lock',
        component: () => import('@/views/pages/Lock'),
      },
      {
        name: 'Login',
        path: 'login',
        component: () => import('@/views/pages/Login'),
      },
      {
        name: 'Pricing',
        path: 'pricing',
        component: () => import('@/views/pages/Pricing'),
      },
      {
        name: 'Register',
        path: 'register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/views/dashboard/Index'),

    beforeEnter: requireAuthenticated,
    children: [
      // Dashboard
      {
        name: 'Dashboard',
        path: '',
        component: () => import('@/views/dashboard/Dashboard'),
      },
      // Pages
      {
        name: 'RTL',
        path: 'pages/rtl',
        component: () => import('@/views/dashboard/pages/Rtl'),
      },
      {
        name: 'User Profile',
        path: 'pages/user',
        component: () => import('@/views/dashboard/pages/UserProfile'),
      },
      {
        name: 'Timeline',
        path: 'pages/timeline',
        component: () => import('@/views/dashboard/pages/Timeline'),
      },
      // Components
      {
        name: 'Buttons',
        path: 'components/buttons',
        component: () => import('@/views/dashboard/component/Buttons'),
      },
      {
        name: 'Grid System',
        path: 'components/grid-system',
        component: () => import('@/views/dashboard/component/Grid'),
      },
      {
        name: 'Tabs',
        path: 'components/tabs',
        component: () => import('@/views/dashboard/component/Tabs'),
      },
      {
        name: 'Notifications',
        path: 'components/notifications',
        component: () => import('@/views/dashboard/component/Notifications'),
      },
      {
        name: 'Icons',
        path: 'components/icons',
        component: () => import('@/views/dashboard/component/Icons'),
      },
      {
        name: 'Typography',
        path: 'components/typography',
        component: () => import('@/views/dashboard/component/Typography'),
      },
      // Forms
      {
        name: 'Regular Forms',
        path: 'forms/regular',
        component: () => import('@/views/dashboard/forms/RegularForms'),
      },
      {
        name: 'Extended Forms',
        path: 'forms/extended',
        component: () => import('@/views/dashboard/forms/ExtendedForms'),
      },
      {
        name: 'Validation Forms',
        path: 'forms/validation',
        component: () => import('@/views/dashboard/forms/ValidationForms'),
      },
      {
        name: 'Wizard',
        path: 'forms/wizard',
        component: () => import('@/views/dashboard/forms/Wizard'),
      },
      // Tables
      {
        name: 'Regular Tables',
        path: 'tables/regular-tables',
        component: () => import('@/views/dashboard/tables/RegularTables'),
      },
      {
        name: 'Extended Tables',
        path: 'tables/extended-tables',
        component: () => import('@/views/dashboard/tables/ExtendedTables'),
      },
      {
        name: 'Data Tabels',
        path: 'tables/data-tables',
        component: () => import('@/views/dashboard/tables/DataTables'),
      },
      // Maps
      {
        name: 'Google Maps',
        path: 'maps/google-maps',
        component: () => import('@/views/dashboard/maps/GoogleMaps'),
      },
      {
        name: 'Full Screen Map',
        path: 'maps/full-screen-map',
        component: () => import('@/views/dashboard/maps/FullScreenMap'),
      },
      // Root level
      {
        name: 'Widgets',
        path: 'widgets',
        component: () => import('@/views/dashboard/Widgets'),
      },
      {
        name: 'Charts',
        path: 'charts',
        component: () => import('@/views/dashboard/Charts'),
      },
      {
        name: 'Calendar',
        path: 'calendar',
        component: () => import('@/views/dashboard/Calendar'),
      },

      // Users
      {
        name: 'UserList',
        path: '/users/list',
        component: () => import('@/views/dashboard/pages/user/List'),
        props: true,
        //beforeEnter: requireAuthenticated,
      },
      {
        name: 'UserCreate',
        path: '/users/create',
        component: () => import('@/views/dashboard/pages/user/Create'),
      },
      {
        name: 'UserUpdate',
        path: '/users/edit/:id',
        component: () => import('@/views/dashboard/pages/user/Update'),
        props: true,
      },
      {
        name: 'UserShow',
        path: '/users/show/:id',
        component: () => import('@/views/dashboard/pages/user/Show'),
        props: true,
      },
      // Meeting
      {
        name: 'MeetingList',
        path: '/meetings/:id_project',
        component: () => import('@/views/dashboard/pages/meeting/List'),
        props: true,
      },
      {
        name: 'MeetingCreate',
        path: '/meetings/create/:id_project',
        component: () => import('@/views/dashboard/pages/meeting/Create'),
      },
      {
        name: 'MeetingUpdate',
        path: '/meetings/edit/:id/:id_project',
        component: () => import('@/views/dashboard/pages/meeting/Update'),
        props: true,
      },
      {
        name: 'MeetingShow',
        path: '/meetings/show/:id',
        component: () => import('@/views/dashboard/pages/meeting/Show'),
        props: true,
      },

      //Project
      {
        name: 'ProjectList',
        path: '/projects/list',
        component: () => import('@/views/dashboard/pages/project/List'),
        props: true,
        //beforeEnter: requireAuthenticated,
      },
      {
        name: 'ProjectUpdate',
        path: 'projects/edit/:id_project',
        component: () => import('@/views/dashboard/pages/project/Update'),
        props: true,
        //beforeEnter: requireAuthenticated,
      },
      {
        name: 'ProjectCreate',
        path: '/projects/create',
        component: () => import('@/views/dashboard/pages/project/Wizard'),
        props: true,
        //beforeEnter: requireAuthenticated,
      },
      //Profile
      {
        name: 'Profile',
        path: '/userprofile/edit',
        component: () => import('@/views/dashboard/pages/user/UserProfile'),
      },

      // Members
      {
        name: 'MembersList',
        path: '/members/list/:id_project',
        component: () => import('@/views/dashboard/pages/members/List'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('@/views/pages/Index'),
    children: [
      {
        name: '404 Error',
        path: '',
        component: () => import('@/views/pages/Error'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
