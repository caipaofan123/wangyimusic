import Vue from 'vue';
import App from './App.vue';
import './assets/styles/reset.css';
import './assets/mobile/flexible.js';
import router from './router';
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Image as VanImage,
  Icon,
  Tag,
  Search,
  List,
  Toast,
} from 'vant';

Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(VanImage);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Search);
Vue.use(List);
Vue.use(Toast);
Vue.config.productionTip = false;
// import { getRecommendListApi } from '@/apis';//不能算全局的方法，要设置过，像Vue.use(NavBar);
// async function fn() {
//   try {
//     const res = await getRecommendListApi({
//       limit:6
//     });
//     console.log(res);
//     // console.log(aa);
//   } catch (e) {
//     console.log('错了');
//   }
// }
// fn();
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
