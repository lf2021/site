import React from 'react';
import { Nav } from '@douyinfe/semi-ui';

import styles from './style.module.less';

const Sider = () => {
  const items = React.useMemo(
    () => [
      {
        itemKey: 'basic',
        text: '基础篇',
        items: ['浏览器', '数据结构与算法', 'HTML', 'CSS', 'JavaScript 🌟'],
      },
      {
        itemKey: 'framework',
        text: '框架篇',
        items: ['Vue', 'React'],
      },
      {
        itemKey: 'engineering',
        text: '工程篇',
        items: ['Git', 'Webpack'],
      },
      {
        itemKey: 'code',
        text: '手撕代码',
        items: ['面试高频手撕代码题 🌟', '剑指 offer 🌟', 'LeetCode 算法思路', '企业笔试题', '智力题'],
      },
      {
        itemKey: 'combat',
        text: '实战篇',
        items: ['VScode Plugin', 'Chrome Plugin', 'Mac 使用小技巧'],
      },
    ],
    []
  );

  const defaultOpenKeys = React.useMemo(() => [items[0].itemKey], []);

  const onClick = React.useCallback(
    (data: { itemKey: React.ReactText; domEvent: MouseEvent; isOpen: boolean } | undefined) => {
      console.log('data', data);
    },
    []
  );

  return <Nav items={items} defaultOpenKeys={defaultOpenKeys} onClick={onClick} className={styles['sider-nav']} />;
};

export default Sider;
