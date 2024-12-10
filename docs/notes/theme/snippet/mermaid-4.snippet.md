---
title: mermaid-4.snippet
createTime: 2024/12/10 09:10:41
permalink: /article/f4fa7ggh/
---
````md
```state Check if n is negative

state if_state <<choice>>
[*] --> IsPositive
IsPositive --> if_state
if_state --> False: if n < 0
if_state --> True : if n >= 0
```
````
