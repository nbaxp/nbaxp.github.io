import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { withSidebar } from 'vitepress-sidebar'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import { demoPreviewPlugin } from '@vitepress-code-preview/plugin'
import { viteDemoPreviewPlugin } from '@vitepress-code-preview/plugin'

// https://vitepress.dev/reference/site-config

const config = {
  title: 'Nbaxp',
  description: '个人知识库',
  markdown: {
    math: true,
    config(md) {
      md.use(groupIconMdPlugin)
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, '../demos')
      })
      const docRoot = fileURLToPath(new URL('../', import.meta.url))
      md.use(demoPreviewPlugin, { docRoot })
    }
  },
  vite: {
    resolve: {
      alias: {
        '^vue$': 'vue/dist/vue.esm-bundler.js'
      }
    },
    plugins: [groupIconVitePlugin(), viteDemoPreviewPlugin()]
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['script', { src: '/runtime.js' }]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: '首页', link: '/' },
      { text: '索引', link: '/indexes/index' },
      { text: '知识点', link: '/points/index' },
      { text: '总结', link: '/posts/index' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/nbaxp' }],
    outline: [2, 3, 4],
    search: {
      provider: 'local'
    },
    lastUpdated: {
      text: 'Last Updated'
    }
  }
}

const sidebarConfig = [
  {
    documentRootPath: 'docs',
    scanStartPath: 'indexes',
    resolvePath: '/indexes/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'points',
    resolvePath: '/points/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true
  },
  {
    documentRootPath: 'docs',
    scanStartPath: 'posts',
    resolvePath: '/posts/',
    useTitleFromFileHeading: true,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    sortMenusByFrontmatterOrder: true
  }
]

export default defineConfig(withMermaid(withSidebar(config, sidebarConfig)))
