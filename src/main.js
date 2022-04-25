import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import {ElCarousel, ElCarouselItem, ElIcon, ElImage, ElImageViewer} from "element-plus";
import 'element-plus/dist/index.css'
const app = createApp(App);

app.use(Router)

app.use(ElIcon).use(ElCarousel).use(ElCarouselItem).use(ElImage).use(ElImageViewer)

app.mount('#app')
