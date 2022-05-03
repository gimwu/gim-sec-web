import {createApp} from 'vue'
import App from './App.vue'
import Router from './router/index'
import {
    ElBreadcrumb,
    ElBreadcrumbItem, ElButton,
    ElCarousel,
    ElCarouselItem,
    ElIcon,
    ElImage,
    ElImageViewer, ElMenu, ElMenuItem,
    ElStep, ElSteps, ElTable, ElTableColumn, ElTabPane, ElTabs
} from "element-plus";
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(Router)

app
    .use(ElIcon)
    .use(ElCarousel)
    .use(ElCarouselItem)
    .use(ElImage)
    .use(ElImageViewer)
    .use(ElBreadcrumb)
    .use(ElBreadcrumbItem)
    .use(ElSteps)
    .use(ElStep)
    .use(ElTable)
    .use(ElTableColumn)
    .use(ElButton)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElTabs)
    .use(ElTabPane)

app.mount('#app')
