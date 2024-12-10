---
title: echarts-5.snippet
createTime: 2024/12/10 09:10:41
permalink: /article/mnx3unf9/
---
````md
::: echarts Two Value-Axes in Polar
```js
const data = []

for (let i = 0; i <= 100; i++) {
  const theta = (i / 100) * 360
  const r = 5 * (1 + Math.sin((theta / 180) * Math.PI))
  data.push([r, theta])
}

const height = 450

const option = {
  legend: {
    data: ['line'],
  },
  polar: {},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  angleAxis: {
    type: 'value',
    startAngle: 0,
  },
  radiusAxis: {},
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      data,
    },
  ],
}
```
:::
````
