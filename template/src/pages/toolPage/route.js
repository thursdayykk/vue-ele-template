const NotFound = () => import('./views/404Error/404Error.vue' /* webpackChunkName: "notFound" */)

export default {
  path: '/notFound',
  name: 'notFound',
  component: NotFound
}
