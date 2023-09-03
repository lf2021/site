import React from 'react';
import { Layout } from '@douyinfe/semi-ui';
import NavSide from './NavSide';

const Blog = () => {
  const { Sider, Content } = Layout;

  return (
    <>
      <Sider>
        <NavSide />
      </Sider>
      <Content />
    </>
  );
};

export default Blog;
