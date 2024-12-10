---
title: mermaid-1.snippet
createTime: 2024/12/10 09:10:41
permalink: /article/4rs7n9f7/
---
````md
```mermaid
---
title: Flowchart
---
flowchart TB
    c1-->a2
    subgraph one
    a1-->a2
    end
    subgraph two
    b1-->b2
    end
    subgraph three
    c1-->c2
    end
    one --> two
    three --> two
    two --> c2
```
````
