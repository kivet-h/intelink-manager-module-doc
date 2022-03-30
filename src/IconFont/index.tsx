/*
 * @Description: iconfont 渲染组件
 */

import React from 'react';
import type { FC } from 'react';
import styles from './index.less';

interface IProps {
  /**
   * 图标名称，值为 iconfont 文件定义值
   * @type string
   * @default ''
   */
  iconName: string;
  /**
   * 自定义类名，控制样式
   * @type string
   * @default ''
   */
  className?: string;
  /**
   * 样式属性
   * @type React.CSSProperties
   * @default {}
   */
  style?: React.CSSProperties;
  /** 点击事件
   * @type React.MouseEventHandler<SVGSVGElement>
   * @default function(e)
   */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const IconFont: FC<IProps> = (props: IProps) => {
  const { iconName, className, style, onClick } = props;
  return (
    <svg
      className={`${styles.container} ${className}`}
      style={{
        cursor: onClick ? 'pointer' : 'auto',
        ...style,
      }}
      onClick={onClick}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${iconName}`} />
    </svg>
  );
};

export default IconFont;
