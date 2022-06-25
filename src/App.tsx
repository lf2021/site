import { Layout } from '@douyinfe/semi-ui';
import HeaderContent from './pages/Header';
import SiderContent from './pages/Sider';
import MarkdownContent from './pages/Content';

import styles from './App.module.less';

function App() {
  const { Header, Sider, Content } = Layout;

  return (
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
  );
}

export default App;
