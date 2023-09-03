import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import NavSide from './NavSide';
import MarkdownContent from './Content';

import styles from './style.module.less';

const Home = () => {
  const { Sider, Content } = Layout;

  return (
    <>
      <Sider className={styles['page-sider']}>
        <NavSide />
      </Sider>
      <Content>
        <MarkdownContent />
      </Content>
    </>
  );
};

export default Home;
