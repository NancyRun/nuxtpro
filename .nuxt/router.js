import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ec8f1d18 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _bb98b6cc = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/[_]id" */))
const _3bec97c6 = () => interopDefault(import('../pages/vod/_id.vue' /* webpackChunkName: "pages/vod/[_]id" */))
const _ad1f678e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ec8f1d18,
    name: "about"
  }, {
    path: "/users/:id?",
    component: _bb98b6cc,
    name: "users-id"
  }, {
    path: "/vod/:id?",
    component: _3bec97c6,
    name: "vod-id"
  }, {
    path: "/",
    component: _ad1f678e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
