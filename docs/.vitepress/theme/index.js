import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'virtual:group-icons.css'
import DemoPreview, { useComponents } from '@vitepress-code-preview/container'
import '@vitepress-code-preview/container/dist/style.css'
import ZoomPlugin from './plugins/zoom.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    DefaultTheme.enhanceApp({ app, router, siteData })
    useComponents(app, DemoPreview)
    ZoomPlugin().enhanceApp({ app, router, siteData })
  }
}
