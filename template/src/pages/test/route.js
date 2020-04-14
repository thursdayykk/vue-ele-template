const App = () => import('./app/index.vue' /* webpackChunkName: "test_app" */)
// clock
const ShopCar = () => import('./views/shopcar'/* webpackChunkName:"shopcar" */)
export default {
  component: App,
  redirect: '/notFound',
  children: [{
    path: '/shopcar',
    name: 'shopcar',
    component: ShopCar
  }]
}
