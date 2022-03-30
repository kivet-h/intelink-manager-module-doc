---
title: MarqueeScroll 组件

group:
  title: 公共组件
---

## MarqueeScroll 组件

滚动区域

## 何时使用

一些文字的展示，超出父级容器宽度，要求不换行展示，不超出省略号，UI 要求需滚动展示，如用户名。

## 代码演示

```tsx
/**
 * title: 默认基本
 * desc: 使用组件标签包裹滚动内容
 */

import React from 'react';
import { MarqueeScroll } from 'dumi-module-doc';

export default () => <MarqueeScroll>滚动内容，滚动内容。。</MarqueeScroll>;
```

```tsx
/**
 * title: 默认基本
 * desc: 使用组件属性传入的形式传入滚动内容
 */

import React from 'react';
import { MarqueeScroll } from 'dumi-module-doc';

export default () => <MarqueeScroll children={<span>滚动内容，滚动内容。。</span>} />;
```

```tsx
/**
 * title: 滚动区域定宽
 * desc: 可使用 scrollWidth 属性来配置可滚动区域的宽度，单位：px
 */

import React from 'react';
import { MarqueeScroll } from 'dumi-module-doc';

export default () => <MarqueeScroll scrollWidth={300}>滚动内容，滚动内容。。</MarqueeScroll>;
```

其它详细属性配置如下：

<API></API>

## 一些问题

**1. 当滚动内容的长度超过滚动区域滚动时，会存在首尾相连的情况，这个时候就不容易看出哪是头哪是尾了，如下面例子**

```tsx
import React from 'react';
import { MarqueeScroll } from 'dumi-module-doc';

export default () => (
  <MarqueeScroll scrollWidth={300} style={{ border: '1px solid #eee' }}>
    滚动内容，滚动内容，滚动内容，滚动内容，滚动内容
  </MarqueeScroll>
);
```

**解决:**

```tsx
/**
 * title: 滚动区域定宽
 * desc: 可使用 scrollWidth 属性来配置可滚动区域的宽度，单位：px
 */
import React from 'react';
import { MarqueeScroll } from 'dumi-module-doc';

export default () => (
  <MarqueeScroll scrollWidth={300} style={{ border: '1px solid #eee' }}>
    <span style={{ marginRight: '50px' }}>滚动内容，滚动内容，滚动内容，滚动内容，滚动内容</span>
  </MarqueeScroll>
);
```
