import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import Hello from "@/views/Hello.vue";
import NotFound from "@/views/NotFound.vue";

import firebase from "firebase";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "*",
      name: "notfound",
      component: NotFound
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/sign-up",
      name: "signup",
      component: SignUp
    },
    {
      path: "/hello",
      name: "hello",
      component: Hello,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log({ currentUser });

  if (requiresAuth && !currentUser) next("login");
  else if (currentUser && to.name === "login") next("hello");
  else next();
});

export default router;
