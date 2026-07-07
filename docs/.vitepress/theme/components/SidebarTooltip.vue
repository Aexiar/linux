<template>
  <div
      v-show="state.visible"
      id="vp-custom-sidebar-tooltip"
      :style="{
      position: 'fixed',
      backgroundColor: '#303133',
      color: '#ffffff',
      padding: '7px 12px',
      fontSize: '13px',
      borderRadius: '4px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.18)',
      zIndex: '99999',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      left: state.left + 'px',
      top: state.top + 'px',
      opacity: state.opacity,
      transform: 'translate(-50%, ' + state.translateY + 'px)',
      transition: 'opacity 0.12s ease, transform 0.12s ease'
    }"
  >
    {{ state.text }}

    <div :style="{
      position: 'absolute',
      bottom: '-4px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '0',
      height: '0',
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: '5px solid #303133'
    }"></div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// 定义 Props
const props = defineProps({
  onlyEllipsis: {
    type: Boolean,
    default: false // 默认全部显示 tooltip
  }
})

const route = useRoute()

const state = reactive({
  visible: false,
  text: '',
  left: 0,
  top: 0,
  opacity: '0',
  translateY: 4
})

const initTooltipListeners = () => {
  if (typeof document === 'undefined') return

  const textNodes = document.querySelectorAll('#VPSidebarNav .item .text')

  textNodes.forEach(node => {
    node.onmouseenter = () => {
      const textVal = node.innerText.trim()

      // 判断是否开启了“仅在 ... 上显示”的控制逻辑
      if (props.onlyEllipsis) {
        // 如果开启，则必须实际文本宽度大于容器可见宽度，否则不渲染气泡
        if (node.scrollWidth <= node.clientWidth) {
          return
        }
      }

      state.text = textVal
      state.visible = true

      const rect = node.getBoundingClientRect()

      // 动态虚拟计算文字的视觉真实宽度
      const span = document.createElement('span')
      span.style.visibility = 'hidden'
      span.style.whiteSpace = 'nowrap'
      span.style.font = window.getComputedStyle(node).font
      span.innerText = state.text
      document.body.appendChild(span)

      const actualTextWidth = span.getBoundingClientRect().width
      document.body.removeChild(span)

      // 根据文字是否溢出截断，计算真实的视觉中心点
      const textVisualWidth = actualTextWidth > rect.width ? rect.width : actualTextWidth
      state.left = rect.left + textVisualWidth / 2

      nextTick(() => {
        const tooltipEl = document.getElementById('vp-custom-sidebar-tooltip')
        const tooltipHeight = tooltipEl ? tooltipEl.offsetHeight : 32

        state.top = rect.top - tooltipHeight - 8
        state.opacity = '1'
        state.translateY = 0
      })
    }

    node.onmouseleave = () => {
      state.opacity = '0'
      state.translateY = 4
      state.visible = false
    }
  })
}

onMounted(() => {
  setTimeout(initTooltipListeners, 400)
})

watch(() => route.path, () => {
  setTimeout(initTooltipListeners, 450)
}, { flush: 'post' })

onUnmounted(() => {
  state.visible = false
})
</script>