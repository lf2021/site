import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '@douyinfe/semi-ui';
import HeaderContent from '@/components/Header';
import Home from './pages/Home';
import Changelog from '@/pages/Changelog';
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
        <Header className={styles['page-header']}>
          <HeaderContent />
        </Header>

        <Routes>
          <Route path="/site">
            <Route path="/site/home" element={<Home />} />
            <Route path="changelog" element={<Changelog />} />
          </Route>
        </Routes>
      </Layout>
    </GlobalInfoProvider>
  );
}

export default App;
