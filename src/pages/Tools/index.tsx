import React, { ReactText, useState } from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import { IconBrackets, IconClock } from '@douyinfe/semi-icons';
import TimeConversion from './TimeConversion';
import JSONConversion from './JSONConversion';
import JSONTree from './JSONTree';
import { EnumTool, isMobile } from '@/constants';

import $t from './style.module.less';
// import { Logger } from '@/utils';

const { Sider, Content } = Layout;

const itemKey2Component = {
  [EnumTool.JSON]: <JSONConversion />,
  [EnumTool.JSON_TREE]: <JSONTree />,
  [EnumTool.TIMESTAMP]: <TimeConversion />,
};

const items = [
  {
    itemKey: 'json',
    text: 'JSON',
    icon: <IconBrackets />,
    items: [EnumTool.JSON, EnumTool.JSON_TREE],
  },
  {
    itemKey: EnumTool.TIMESTAMP,
    text: '时间戳转换',
    icon: <IconClock />,
  },
];

const Tools = () => {
  const [selectedKeys, setSelectKeys] = useState(['']);

  const onClick = (data: { itemKey?: ReactText | undefined }) => {
    const { itemKey } = data;
    // Logger({ title: 'onClick', content: data, isCollapsed: false })
    setSelectKeys([itemKey as string]);
  };

  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const onCollapseChange = (isCollapse: boolean) => {
    setIsCollapsed(isCollapse);
  };

  return (
    <>
      <Sider>
        <Nav
          items={items}
          selectedKeys={selectedKeys}
          onClick={onClick}
          isCollapsed={isCollapsed}
          onCollapseChange={onCollapseChange}
          footer={{ collapseButton: !isMobile }}
        />
      </Sider>
      <Content className={$t['content-container']}>
        {itemKey2Component[selectedKeys[0] as EnumTool] || (
          <h1 className={$t['content_default']}>这里记录了平时常用的工具集合，方便开发</h1>
        )}
      </Content>
    </>
  );
};

export default Tools;
