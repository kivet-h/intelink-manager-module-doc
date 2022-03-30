import { defineConfig } from 'dumi';

// ? iconfont 地址
const ICONFONT_URL = '//at.alicdn.com/t/font_3173501_lkxsku9aden.js';

export default defineConfig({
  title: '组件文档(试用)',
  base: '/intelink-manager-module-doc',
  publicPath: '/intelink-manager-module-doc/',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'build',
  hash: true,
  headScripts: [ICONFONT_URL],
  // more config: https://d.umijs.org/config
});
