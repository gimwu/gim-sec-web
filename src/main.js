import { createApp } from 'vue'
import App from './App.vue'
import Router from './router/index'
import {ElBreadcrumb, ElBreadcrumbItem, ElCarousel, ElCarouselItem, ElIcon, ElImage, ElImageViewer} from "element-plus";
import 'element-plus/dist/index.css'
const app = createApp(App);

app.use(Router)

app.use(ElIcon).use(ElCarousel).use(ElCarouselItem).use(ElImage).use(ElImageViewer).use(ElBreadcrumb).use(ElBreadcrumbItem)

app.mount('#app')
