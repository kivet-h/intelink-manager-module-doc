---
title: IconFont 组件

group:
  title: 公共组件
---

## IconFont 组件

渲染 iconfont 图标

## 何时使用

一些需要 iconfont 图标渲染占位时

## 代码演示

```tsx
/**
 * title: 默认基本
 * desc: 使用组件标签包裹滚动内容
 */

import React from 'react';
import { IconFont } from 'dumi-module-doc';

export default () => <IconFont iconName="tongguo" />;
```

其它详细属性配置如下：

<API></API>

## 一些问题

**1. 如何设置图标颜色？**

```tsx
/**
 * title: 设置图标颜色
 * desc: 直接设置 css 属性 color 即可
 */

import React from 'react';
import { IconFont } from 'dumi-module-doc';

export default () => <IconFont iconName="tianjia" style={{ color: 'red' }} />;
```

**1. 如何设置图标大小？**

图标默认宽高为 15px，如果你需要的图标宽高不是 15px，就需要自定义

```tsx
/**
 * title: 设置图标大小
 * desc: 同上面设置图标颜色，直接设置 css 属性 width 和 height 即可
 */

import React from 'react';
import { IconFont } from 'dumi-module-doc';

export default () => <IconFont iconName="geren" style={{ width: '40px', height: '40px' }} />;
```
