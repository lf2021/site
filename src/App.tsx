import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from '@douyinfe/semi-ui';
import HeaderContent from '@/components/Header';
import Home from '@/pages/Home';
import Changelog from '@/pages/Changelog';
import Site from '@/pages/Site';
import { GlobalInfoProvider } from './components/GlobalProvider';
import cls from 'classnames';
import { isMobile } from './constants';

import type { IInitState } from './components/GlobalProvider/type';

import styles from './App.module.less';
import { render } from 'react-dom';

// use: https://marketplace.visualstudio.com/items?itemName=helixquar.asciidecorator
const welcomeText = `
██╗  ██╗███████╗███████╗██████╗     ██████╗ ██╗   ██╗███╗   ██╗███╗   ██╗██╗███╗   ██╗ ██████╗ ██╗
██║ ██╔╝██╔════╝██╔════╝██╔══██╗    ██╔══██╗██║   ██║████╗  ██║████╗  ██║██║████╗  ██║██╔════╝ ██║
█████╔╝ █████╗  █████╗  ██████╔╝    ██████╔╝██║   ██║██╔██╗ ██║██╔██╗ ██║██║██╔██╗ ██║██║  ███╗██║
██╔═██╗ ██╔══╝  ██╔══╝  ██╔═══╝     ██╔══██╗██║   ██║██║╚██╗██║██║╚██╗██║██║██║╚██╗██║██║   ██║╚═╝
██║  ██╗███████╗███████╗██║         ██║  ██║╚██████╔╝██║ ╚████║██║ ╚████║██║██║ ╚████║╚██████╔╝██╗
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝         ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝
`;

console.log(`%c${welcomeText}`, 'color: green');

const components: Record<string, JSX.Element> = {
  home: <Home />,
  changelog: <Changelog />,
  default: <Site />,
};

const App = () => {
  const [initGlobalInfo, _] = React.useState<IInitState>(() => ({ navKey: '浏览器' }));
  const { Header } = Layout;
  
  window.Logger({
    title: 'Test title',
    content: { name: { age: 18 } },
  });

  const { search } = useLocation();

  const renderComponent = () => {
    const query = search.split('=')[1];
    return components[query] || components.default;
  }
  
  return (
    <GlobalInfoProvider initState={initGlobalInfo}>
      <Layout className={cls(styles['page'], isMobile && styles['page-mobile'])}>
        <Header className={styles['page-header']}>
          <HeaderContent />
        </Header>

        <Layout className={styles['page-body']}>
          {renderComponent()}
        </Layout>
      </Layout>
    </GlobalInfoProvider>
  );
}

export default App;
