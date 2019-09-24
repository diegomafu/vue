import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import LoginLayout     from "@/layout/dashboard/LoginLayout.vue";

// GeneralViews
import NotFound        from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard     = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard1.vue");
const Profile       = () => import(/* webpackChunkName: "common"    */"@/pages/Profile.vue");
const Icons         = () => import(/* webpackChunkName: "common"    */"@/pages/Icons.vue");
const Login         = () => import(/* webpackChunkName: "common"    */"@/pages/Login.vue");

const routes = [
  {
    path      : "/",
    component : DashboardLayout,
    redirect  : "/dashboard",
    children  : [
      {
        path     : "dashboard",
        name     : "dashboard",
        component: Dashboard
      },
      {
        path     : "profile",
        name     : "profile",
        component: Profile
      },
      {
        path     : "icons",
        name     : "icons",
        component: Icons
      },
    ]
  },
  
  // rodrigo
  {
    path     : "/login",
    component: LoginLayout,
    redirect : "/login",
    children : [
      {
        path     : "login",
        name     : "login",
        component: Login
      }
    ]
  },

  {
    path     : "*", 
    component: NotFound
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
