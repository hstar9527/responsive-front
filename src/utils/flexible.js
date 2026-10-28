import { ref, computed } from 'vue'
import { PC_DEVICE_WIDTH } from '@/constants'

// 视口宽度。主动监听 resize / orientationchange，
// 保证鼠标拖动改变窗口大小时 width 也能实时更新
export const width = ref(window.innerWidth)
const updateWidth = () => {
  width.value = window.innerWidth
}
window.addEventListener('resize', updateWidth)
window.addEventListener('orientationchange', updateWidth)

/**
 * 判断当前是否为移动设备
 */
export const isMobileTerminal = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

/**
 * 初始化 rem 基准值，最大为 40px
 */
export const useREM = () => {
  // 定义最大的 fontSize
  const MAX_FONT_SIZE = 40

  const setREM = () => {
    // 获取 html 标签
    const html = document.querySelector('html')
    if (!html) return
    // 获取根元素 fontSize 标准，屏幕宽度 / 10。（以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5）
    let fontSize = window.innerWidth / 10
    // 获取到的 fontSize 不允许超过我们定义的最大值
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    // 定义根元素（html）fontSize 的大小 （rem）
    html.style.fontSize = fontSize + 'px'
  }

  // 初始化执行一次
  setREM()
  // 窗口尺寸变化（拖动窗口大小、旋转屏幕）时重新计算，保证 rem 布局跟随视口变化
  window.addEventListener('resize', setREM)
  window.addEventListener('orientationchange', setREM)
}
