<script setup lang="ts">
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'

// 变量
const bannerList = ref<BannerItem[]>([])

// 生命周期
onLoad(() => {
  getHomeBannerData()
})

// 轮播图
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerList" />
  <view class="index"> index </view>
</template>

<style lang="scss" scoped>
//
</style>
