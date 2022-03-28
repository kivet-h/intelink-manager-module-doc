/*
 * @Description:
 * @Author: kivet
 * @Date: 2022-03-28 15:57:04
 * @LastEditTime: 2022-03-28 17:04:33
 */
/*
 * @Description: 滚动区域
 */

import type { FC } from 'react';
import React from 'react';
import Marquee from 'react-fast-marquee';

interface IProps {
  /**
   * 滚动容器的宽度，默认转换成 px 单位
   * @type number or string
   * @default ''
   */
  scrollWidth?: number | string;
  /**
   * 容器内联样式
   * @type React.CSSProperties
   * @default {}
   */
  style?: React.CSSProperties;
  /**
   * 容器 Class 类名
   * @type string
   * @default ""
   */
  className?: string;
  /**
   * 是否默认播放。true-播放  false-不播放
   * @type boolean
   * @default true
   */
  play?: boolean;
  /**
   * 鼠标悬停时，是否暂停。 true-暂停  false-不暂停
   * @type boolean
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * 鼠标点击不松时，是否暂停。 true-暂停  false-不暂停
   * @type boolean
   * @default false
   */
  pauseOnClick?: boolean;
  /**
   * 滚动方向，left-从右至左,right-从左至右
   * @type 'left' or 'right'
   * @default 'left'
   */
  direction?: 'left' | 'right';
  /**
   * 滚动速度。单位：像素/s
   * @type number
   * @default 20
   */
  speed?: number;
  /**
   * 渲染完成，delay 秒后开始滚动
   * @type number
   * @default 0（表示立即开始滚动）
   */
  delay?: number;
  /**
   * 循环次数
   * @type number
   * @default 0（表示无穷次）
   */
  loop?: number;
  /**
   * 是否显示渐变，true-显示 false-不显示
   * @type boolean
   * @default false
   */
  gradient?: boolean;
  /**
   * 渐变的 rgb 颜色，一个长度为 3 的数字数组
   * @type [number, number, number]
   * @default [255, 255, 255]
   */
  gradientColor?: [number, number, number];
  /**
   * 两边渐变的宽度
   * @type number
   * @default 200
   */
  gradientWidth?: number;
  /**
   * 渲染内容
   * @type React.ReactNode
   * @default null
   */
  children?: React.ReactNode;
}

const MarqueeScroll: FC<IProps> = (props: IProps) => {
  const {
    scrollWidth = '',
    style = {},
    className = '',
    play = true,
    pauseOnHover = false,
    pauseOnClick = false,
    direction = 'left',
    speed = 20,
    delay = 0,
    loop = 0,
    gradient = false,
    gradientColor = [255, 255, 255],
    gradientWidth = 200,
    children = null,
  } = props;

  return (
    <div
      style={{
        width: scrollWidth && `${scrollWidth}px`,
      }}
    >
      <Marquee
        style={style}
        className={className}
        play={play}
        pauseOnHover={pauseOnHover}
        pauseOnClick={pauseOnClick}
        direction={direction}
        speed={speed}
        delay={delay}
        loop={loop}
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
      >
        {children}
      </Marquee>
    </div>
  );
};

export default MarqueeScroll;
