import React from 'react';
import ReactMarkdown from 'react-markdown'; // 解析 markdown
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar';
import { getMdFile } from '@/hooks/getMdFile';

import 'markdown-navbar/dist/navbar.css';
import styles from './style.module.less';

const content = () => {
  const { md } = getMdFile();

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
