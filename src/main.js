import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { Button , Image as VanImage ,Field, CellGroup} from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';
import 'amfe-flexible';
import { createPinia } from 'pinia'

const pinia=createPinia()

createApp(App).use(router).use(pinia).use(Button).use(VanImage).use(Field).use(CellGroup).mount('#app')
