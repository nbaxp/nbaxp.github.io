# CSS

纯 CSS 滚动指示器 <https://codepen.io/MadeByMike/pen/ezLYQL>

## RESET

```css
* {
  margin: 0;
  box-sizing: border-box;
}
```

## 参考

- [Blink（Chromium 的渲染引擎）所使用的 默认样式表](https://chromium.googlesource.com/chromium/blink/+/main/Source/core/css/html.css)
- [Firefox（Gecko 引擎）的默认 user-agent 样式表](https://searchfox.org/firefox-main/source/layout/style/res/html.css)
- [HTML5 Reset Stylesheet](https://html5doctor.com/html-5-reset-stylesheet/)
- [浏览器默认样式查询](https://browserdefaultstyles.com/)
- [Normalize.css](https://github.com/necolas/normalize.css)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [Modern CSS Reset](https://piccalil.li/blog/a-more-modern-css-reset/)
- [Bootstrap 5 基础样式](https://github.com/twbs/bootstrap/blob/v5.0.2/dist/css/bootstrap-reboot.css)
- [TailwindCSS 预设](https://github.com/tailwindlabs/tailwindcss/blob/main/packages/tailwindcss/preflight.css)

:::demo

```vue
<template>
  <div class="flex">
    <!-- Sidebar -->
    <div
      id="sidebar"
      class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 transform -translate-x-full md:translate-x-0 transition-transform"
    >
      <h2 class="text-xl font-bold mb-4">导航菜单</h2>
      <ul>
        <li><a href="#" class="block py-2">首页</a></li>
        <li><a href="#" class="block py-2">关于</a></li>
        <li><a href="#" class="block py-2">服务</a></li>
        <li><a href="#" class="block py-2">联系</a></li>
      </ul>
    </div>

    <!-- Menu Button (mobile only) -->
    <button onclick="toggleMenu()" class="md:hidden fixed top-4 left-4 bg-gray-800 text-white px-3 py-2 rounded">
      ☰
    </button>

    <!-- Content -->
    <div class="flex-1 p-4 md:ml-64">
      <h1 class="text-2xl font-bold">主内容</h1>
      <p>移动端收缩为菜单，桌面端显示边栏。</p>
    </div>
  </div>
</template>
```

:::
