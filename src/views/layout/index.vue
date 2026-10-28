<template>
  <div class="h-screen">
    <!-- 移动端不展示 header，对应 mobile 路由下没有 header 的表现 -->
    <header-vue v-if="!isMobileTerminal" class="h-header"></header-vue>
    <!-- 移动端占满整屏，PC 端需要减去 header 的高度 -->
    <div :class="isMobileTerminal ? 'h-screen' : 'h-main'">
      <main-vue></main-vue>
    </div>
    <floating-vue v-if="!isMobileTerminal"></floating-vue>
  </div>
</template>

<script setup>
import HeaderVue from './components/header/index.vue'
import mainVue from './components/main.vue'
import floatingVue from './components/floating/index.vue'
import { isMobileTerminal } from '@/utils/flexible'
</script>

<style lang="scss" scoped></style>
