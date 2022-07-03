import { Layout } from '@douyinfe/semi-ui';
import SiderContent from './Sider';
import MarkdownContent from './Content';

import styles from './style.module.less';

const Home = () => {
  const { Sider, Content } = Layout;

  return (
    <>
      <Sider className={styles['page-sider']}>
        <SiderContent />
      </Sider>
      <Content>
        <MarkdownContent />
      </Content>
    </>
  );
};

export default Home;
