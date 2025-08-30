import { onMounted, onUnmounted, nextTick } from 'vue'

export default function mermaidZoomPlugin() {
  const debounce = (fn, delay) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => fn(...args), delay)
    }
  }

  const addZoom = () => {
    document.querySelectorAll('.mermaid svg,.main img').forEach((el) => {
      if (el.dataset.zoomInitialized) return

      el.dataset.zoomInitialized = 'true'
      el.style.cursor = 'zoom-in'

      el.addEventListener('click', () => {
        const overlay = document.createElement('div')
        overlay.style.position = 'fixed'
        overlay.style.top = 0
        overlay.style.left = 0
        overlay.style.width = '100vw'
        overlay.style.height = '100vh'
        overlay.style.background = 'rgba(0,0,0,0.8)'
        overlay.style.display = 'flex'
        overlay.style.alignItems = 'center'
        overlay.style.justifyContent = 'center'
        overlay.style.zIndex = 9999
        overlay.style.transition = 'opacity 0.3s'
        overlay.style.opacity = 0

        const clone = el.cloneNode(true)
        clone.style.cursor = 'zoom-out'
        clone.style.maxWidth = '90%'
        clone.style.maxHeight = '90%'
        clone.style.transition = 'transform 0.3s'
        // 添加关闭按钮
        const closeBtn = document.createElement('button')
        closeBtn.innerText = '×'
        closeBtn.style.position = 'absolute'
        closeBtn.style.top = '20px'
        closeBtn.style.right = '20px'
        closeBtn.style.fontSize = '32px'
        closeBtn.style.color = '#fff'
        closeBtn.style.background = 'transparent'
        closeBtn.style.border = 'none'
        closeBtn.style.cursor = 'pointer'
        closeBtn.style.zIndex = 10000
        closeBtn.style.transition = 'transform 0.2s'
        closeBtn.onmouseover = () => (closeBtn.style.transform = 'scale(1.2)')
        closeBtn.onmouseout = () => (closeBtn.style.transform = 'scale(1)')
        overlay.appendChild(closeBtn)
        overlay.appendChild(clone)
        // Esc 键关闭
        const keyHandler = (e) => {
          if (e.key === 'Escape') {
            overlay.click()
            document.removeEventListener('keydown', keyHandler)
          }
        }
        document.addEventListener('keydown', keyHandler)
        document.body.appendChild(overlay)
        requestAnimationFrame(() => (overlay.style.opacity = 1))

        overlay.addEventListener('click', () => {
          overlay.style.opacity = 0
          setTimeout(() => overlay.remove(), 300)
        })

        overlay.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') overlay.click()
        })
      })
    })
  }

  return {
    enhanceApp({ app }) {
      if (typeof window === 'undefined') return

      onMounted(() => {
        nextTick(addZoom)
      })

      onUnmounted(() => {
        observer.disconnect()
      })

      const observer = new MutationObserver(debounce(addZoom, 300))
      observer.observe(document.body, { childList: true, subtree: true })
    }
  }
}
