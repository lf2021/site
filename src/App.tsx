import { Layout } from '@douyinfe/semi-ui';
import HeaderContent from './pages/Header';
import SiderContent from './pages/Sider';
import MarkdownContent from './pages/Content';
import { GlobalInfoProvider } from './components/GlobalProvider';

import styles from './App.module.less';
import React from 'react';

const App = () => {
  const [initGlobalInfo, _] = React.useState(() => ({ navKey: '浏览器' }))
  const { Header, Sider, Content } = Layout;

  return (
    <GlobalInfoProvider initState={ initGlobalInfo }>
      <Layout className={styles['page']}>
        <Header className={styles['page-header']}>
          <HeaderContent />
        </Header>
        <Layout className={styles['page-body']}>
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
