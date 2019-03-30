import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import AppCategory from '@/components/AppCategory'
import AppHome from '@/components/AppHome'
import AppList from '@/components/AppList'
import AppReg from '@/components/AppReg'
import AppLogin from '@/components/AppLogin'
import AppShopcart from '@/components/AppShopcart'
import AppUserhome from '@/components/AppUserhome'
import AppViews from '@/components/AppViews'
import AppError from '@/common/AppError'

let routes=[
  {path:'/home',component:AppHome},
  {path:'/category',component:AppCategory},
  {path:'/list/:id',component:AppList},
  {path:'/reg',component:AppReg},
  {path:'/login',component:AppLogin},
  {path:'/shopcart',component:AppShopcart},
  {path:'/userhome',component:AppUserhome},
  {path:'/views/:goodsId',component:AppViews},
  {path:'/',redirect:'/home'},
  {path:'*',component:AppError}
];

const router = new VueRouter({routes,mode:'history'});

export default router;