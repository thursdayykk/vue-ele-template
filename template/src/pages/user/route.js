const App = () => import('./app/index.vue' /* webpackChunkName: "user_app" */)

// 注册
const Login = () => import('./views/login/login.vue' /* webpackChunkName:"login" */)

export default {
  component: App,
  redirect: '/notFound',
  children: [{
    path: '/login',
    name: 'login',
    component: Login
  }]
}
