import Vue from "vue";
import Router from "vue-router";
import PageHome from "@/pages/PageHome";
import PageThreadReveal from "@/pages/PageThreadReveal";
import PageNotFound from "@/pages/PageNotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: PageHome
    },
    {
      path: "/thread/:id",
      name: "PageThreadReveal",
      component: PageThreadReveal,
      props: true // pass params
    },
    {
      path: "*",
      name: "NotFound",
      component: PageNotFound
    }
  ],
  mode: "history"
});
