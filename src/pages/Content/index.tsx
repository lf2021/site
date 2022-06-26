import React from 'react';
import ReactMarkdown from 'react-markdown'; // 解析 markdown
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

import styles from './style.module.less';

const content = () => {
  const [md, setMd] = React.useState('');
  
  // 获取md文件
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

  const mdRef = React.useRef<HTMLDivElement>(null);

  const onHashChange = (newHash: any, oldHash: any) => {
    const nodeList = mdRef.current?.childNodes || [];
    for (let i = 0; i < nodeList.length; i++) {
      const node: any = nodeList[i];
      if (node?.dataset?.id === newHash) {
        node?.scrollIntoView();
        return;
      }
    }
  }

  return (
    <div className={styles['md-content']} ref={mdRef}>
      <MarkNav
        className={styles['md-toc']}
        source={md}
        ordered={true}
        onHashChange={onHashChange}
      />
      <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default content;
