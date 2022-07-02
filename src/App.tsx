import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import HeaderContent from './pages/Header';
import SiderContent from './pages/Sider';
import MarkdownContent from './pages/Content';
import { GlobalInfoProvider } from './components/GlobalProvider';
import cls from 'classnames';
import { isMobile } from './constants';

import type { IInitState } from './components/GlobalProvider/type';

import styles from './App.module.less';

const App = () => {
  const [initGlobalInfo, _] = React.useState<IInitState>(() => ({ navKey: '浏览器' }));
  const { Header, Sider, Content } = Layout;

  return (
    <GlobalInfoProvider initState={initGlobalInfo}>
      <Layout className={cls(styles['page'], isMobile && styles['page-mobile'])}>
        <Header className={cls([styles['page-header'], styles['page-header__ignore']])}>
          <HeaderContent />
        </Header>
        <Layout className={styles['page-body__ignore']}>
          <Sider className={styles['page-sider']}>
            <SiderContent />
          </Sider>
          <Content>
            <MarkdownContent />
          </Content>
        </Layout>
      </Layout>
    </GlobalInfoProvider>
  );
}

export default App;
