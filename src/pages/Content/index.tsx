import React from 'react';
import ReactMarkdown from 'react-markdown'; // 解析 markdown
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import styles from './style.module.less';

const content = () => {
  const [md, setMd] = React.useState('');
  React.useEffect(() => {
    fetch('src/assets/browser.md')
      .then(res => res.text())
      .then(text => {
        setMd(text);
      })
      .catch(() => {
        console.log('加载失败')
      })
  }, []);
  return (
    <div className={styles['md-wrapper']}>
      <MarkNav className={styles['md-toc']} source={md} ordered={true} />
      <ReactMarkdown className={styles['md-content']} children={md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default content;
