import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/component'

// 猜你喜欢上拉加载
export const useGuessList = () => {
  // 获取实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回
  return {
    guessRef,
    onScrolltolower,
  }
}
