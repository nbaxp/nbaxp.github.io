# Web 前端布局

## 使用 FlexBox 3 个属性实现常见页面布局!

FlexBox 弹性盒子是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间。

```css
.flex {
  display: flex; /*应用在容器元素，启用 Flexbox 布局*/
}
.flex-col {
  flex-direction: column; /*应用在容器元素，设置主轴方向为垂直*/
}
.flex-1 {
  flex: 1; /*应用在容器子级元素，设置自动填充剩余空间*/
}
```

:::demo

```vue
<template>
  <div class="html-body flex">
    <section class="flex-1 flex flex-col">
      <header>Header</header>
      <main class="flex-1">Main</main>
      <footer>Footer</footer>
    </section>
  </div>

  <div class="html-body flex">
    <section class="flex-1 flex flex-col">
      <header>Header</header>
      <section class="flex flex-1">
        <aside>Aside</aside>
        <main class="flex-1">Main</main>
      </section>
      <footer>Footer</footer>
    </section>
  </div>

  <div class="html-body flex">
    <section class="flex-1 flex">
      <aside>Aside</aside>
      <section class="flex flex-1 flex-col">
        <header>Header</header>
        <main class="flex flex-1">Main</main>
        <footer>Footer</footer>
      </section>
    </section>
  </div>

  <div class="html-body flex">
    <section class="flex-1 flex flex-col">
      <header>Header</header>
      <section class="flex flex-1">
        <aside>Aside</aside>
        <section class="flex flex-1 flex-col">
          <main class="flex-1">Main</main>
          <footer>Footer</footer>
        </section>
      </section>
    </section>
  </div>

  <div class="html-body flex">
    <section class="flex-1 flex flex-col">
      <header class="flex">Header</header>
      <section class="flex flex-1 overflow-y-auto">
        <aside class="flex flex-col">
          <div>Avatar</div>
          <div class="flex-1 overflow-y-auto scrollbar">
            <nav>Nav</nav>
          </div>
          <div>Version</div>
        </aside>
        <section class="flex flex-1 flex-col">
          <div class="tabs">Tabs</div>
          <section class="flex-1 flex flex-col overflow-y-auto scrollbar">
            <div class="breadcrumb">Breadcrumb</div>
            <section class="flex-1 flex flex-col ">
              <main class="flex-1">Main</main>
              <footer>Footer</footer>
            </section>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>
```

:::

## 添加滚动处理

:::demo

```vue
<template>
  <div class="html-body flex">
    <section class="flex-1 flex flex-col">
      <header class="flex">Header</header>
      <section class="flex flex-1 overflow-y-auto">
        <aside class="flex flex-col">
          <div>Avatar</div>
          <div class="flex1 overflow-y-auto scrollbar">
            <nav style="height: 150vh">Nav</nav>
          </div>
          <div>Version</div>
        </aside>
        <section class="flex flex-1 flex-col">
          <div class="tabs">Tabs</div>
          <section class="flex-1 flex flex-col overflow-y-auto scrollbar">
            <div class="breadcrumb">Breadcrumb</div>
            <section class="flex-1 flex flex-col ">
              <main id="top" class="flex flex-1">
                <div style="height: 200vh">Main</div>
              </main>
              <footer class="flex">Footer</footer>
            </section>
          </section>
        </section>
      </section>
    </section>
  </div>
</template>
<style scoped>
@supports selector(::-webkit-scrollbar) {
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: transparent;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: green;
  }
}

@supports not selector(::-webkit-scrollbar) {
  * {
    scrollbar-width: thin;
    scrollbar-color: green transparent;
  }
}
</style>
```

:::

## 媒体查询

:::demo

```vue
<template>
  <div class="container">.container</div>
</template>
<style scoped>
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  --max-width: 100%;
  --color-bg: #fff;
  --color-text: #000;
}
.container {
  width: 100%;
  max-width: var(--max-width);
  background-color: var(--color-bg);
  color: var(--color-text);
}

@media (min-width: var(--breakpoint-sm)) {
  :root {
    --max-width: var(--breakpoint-sm);
  }
}

@media (min-width: var(--breakpoint-md)) {
  :root {
    --max-width: var(--breakpoint-md);
  }
}

@media (min-width: var(--breakpoint-lg)) {
  :root {
    --max-width: var(--breakpoint-lg);
  }
}

@media (min-width: var(--breakpoint-xl)) {
  :root {
    --max-width: var(--breakpoint-xl);
  }
}

@media (min-width: var(--breakpoint-2xl)) {
  :root {
    --max-width: var(--breakpoint-2xl);
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #000;
    --color-text: #fff;
  }
}
</style>
```

:::
