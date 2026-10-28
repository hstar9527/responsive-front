import { createRouter, createWebHistory } from 'vue-router'
import pcTerminalRoutes from './modules/pc-routes'

// 创建 vueRouter 实例
// 注意：路由表只在创建时被确定一次，如果这里再根据 isMobileTerminal 选择路由表，
// 那么拖动窗口跨越断点时整个首页会被销毁重建（白屏 + 重新请求数据）。
// PC / 移动端的布局差异交给 layout 组件通过 isMobileTerminal 响应式处理。
const router = createRouter({
  history: createWebHistory(),
  routes: pcTerminalRoutes
})

export default router
