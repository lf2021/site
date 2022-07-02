import { Layout } from '@douyinfe/semi-ui';
import SiderContent from './Sider';
import MarkdownContent from './Content';

import styles from './style.module.less';

const Home = () => {
  const { Sider, Content } = Layout;

  return (
    <Layout className={styles['page-body']}>
      <Sider className={styles['page-sider']}>
        <SiderContent />
      </Sider>
      <Content>
        <MarkdownContent />
      </Content>
    </Layout>
  );
};

export default Home;
