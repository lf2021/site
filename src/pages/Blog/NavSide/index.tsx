import React, { ReactText, useContext, useMemo, useState } from 'react';
import { Nav } from '@douyinfe/semi-ui';
import { IconHome, IconApps, IconGallery } from '@douyinfe/semi-icons';
import { GlobalInfoCtx } from '@/components';
import { isMobile } from '@/constants';

import { IItem } from '@/interfaces';

import styles from './style.module.less';

const items: IItem[] = [
  {
    itemKey: 'home',
    text: '首页',
    icon: <IconHome />
  },
  {
    itemKey: 'categories',
    text: '分类',
    icon: <IconApps />
  },
  {
    itemKey: 'archives',
    text: '归类',
    icon: <IconGallery />
  }
];

const NavSide = () => {
  const { updateGlobalInfo } = useContext(GlobalInfoCtx);

  const onClick = (data: { itemKey?: ReactText; domEvent?: MouseEvent; isOpen?: boolean } | undefined) => {
    if (items.find(({ itemKey }) => itemKey === data!.itemKey)) return;
    updateGlobalInfo({ navKey: data!.itemKey as string });
  };

  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const onCollapseChange = (isCollapse: boolean) => {
    setIsCollapsed(isCollapse);
  };

  const defaultOpenKeys = useMemo(() => [items[0].itemKey], []);

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

export default NavSide;
