import React from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconApartment, IconLayers, IconLikeThumb, IconUserGroup, IconWrench } from '@douyinfe/semi-icons';
import { GlobalInfoCtx } from '@/components/GlobalProvider';

import styles from './style.module.less';
// import { mobileDetectHelper } from '@/utils';
// import { isMobile } from '@/constants';

const Sider = () => {
  const { updateGlobalInfo } = React.useContext(GlobalInfoCtx);

  const items = React.useMemo(
    () => [
      {
        itemKey: 'basic',
        text: '基础篇',
        icon: <IconApartment />,
        items: ['浏览器', '数据结构与算法', 'HTML', 'CSS', 'JavaScript'],
      },
      {
        itemKey: 'framework',
        text: '框架篇',
        icon: <IconLayers />,
        items: ['Vue', 'React'],
      },
      {
        itemKey: 'engineering',
        text: '工程篇',
        icon: <IconUserGroup />,
        items: ['Git', 'Webpack'],
      },
      {
        itemKey: 'code',
        text: '手撕代码',
        icon: <IconLikeThumb />,
        items: ['面试高频手撕代码题', '剑指 offer', 'LeetCode 算法思路', '企业笔试题', '智力题'],
      },
      {
        itemKey: 'combat',
        text: '实战篇',
        icon: <IconWrench />,
        items: ['VScode Plugin', 'Chrome Plugin', 'Mac 使用小技巧'],
      },
    ],
    []
  );

  const defaultOpenKeys = React.useMemo(() => [items[0].itemKey], []);

  const onClick = (data: { itemKey: React.ReactText; domEvent: MouseEvent; isOpen: boolean } | undefined) => {
    if (items.find(({ itemKey }) => itemKey === data?.itemKey)) return;
    updateGlobalInfo({ navKey: data?.itemKey as string });
  };

  const isMobile = React.useMemo(() => window.visualViewport.width < 600, []);
  const [isCollapsed, setIsCollapsed] = React.useState(isMobile);
  const onCollapseChange = (isCollapse: boolean) => {
    setIsCollapsed(isCollapse);
  };

  return (
    <Nav
      items={items}
      isCollapsed={isCollapsed}
      onCollapseChange={onCollapseChange}
      limitIndent={false}
      defaultOpenKeys={defaultOpenKeys}
      onClick={onClick}
      className={styles['sider-nav']}
      footer={{ collapseButton: !isMobile }}
    />
  );
};

export default Sider;
