# Scrollbar

## scrollbar-width

1. Chrome 下取值为 `thin` 会导致滚动箭头出现，不建议使用
1. Firefox 下必须使用，防止滚动箭头显示

## scrollbar-color

1. Chrome 下设置第二个值会导致滚动箭头出现，不建议使用
1. Firefox 下用于设置滚动条颜色

## Chrome

### ::-webkit-scrollbar

- width → 纵向滚动条宽度
- height → 横向滚动条高度
- background → 滚动条轨道背景

### ::-webkit-scrollbar-thumb

滚动条上的滑块，设置背景颜色和边框改变样式

### ::-webkit-scrollbar-corner

同时出现横向和纵向滚动条时，两者交汇的区域

<demo html="scrollbar.html" />
