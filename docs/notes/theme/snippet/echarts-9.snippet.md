---
title: echarts-9.snippet
createTime: 2024/12/10 09:10:41
permalink: /article/lup5inzr/
---
````md
::: echarts Tree
```js
const data = await fetch(
  '/data/flare.json',
).then(res => res.json())

const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
  },
  series: [
    {
      type: 'tree',
      data: [data],
      top: '18%',
      bottom: '14%',
      layout: 'radial',
      symbol: 'emptyCircle',
      symbolSize: 7,
      initialTreeDepth: 3,
      animationDurationUpdate: 750,
      emphasis: {
        focus: 'descendant',
      },
    },
  ],
}

const height = 600
```
:::
````
