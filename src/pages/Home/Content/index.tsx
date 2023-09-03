import React from 'react';
import ReactMarkdown from 'react-markdown'; // 解析 markdown
import remarkGfm from 'remark-gfm'; // markdown 对表格/删除线/脚注等的支持
import MarkNav from 'markdown-navbar';
import { getMdFile } from '@/hooks/getMdFile';
import { mobileDetectHelper } from '@/utils';

import 'markdown-navbar/dist/navbar.css';
import styles from './style.module.less';

const content = () => {
  const { md } = getMdFile();

  const mdRef = React.useRef<HTMLDivElement>(null);

  const onHashChange = (newHash: string) => {
    const nodeList = mdRef.current!.childNodes || [];
    for (let i = 0; i < nodeList.length; i++) {
      const node: ChildNode = nodeList[i];
      if (node?.dataset?.id === newHash) {
        node?.scrollIntoView();
        return;
      }
    }
  }

  // 移动端的情况下不展示目录，展示成悬浮按钮
  const [showToc, setShowToc] = React.useState(false);

  React.useEffect(() => {
    mobileDetectHelper(setShowToc);
    const handler = () => {
      mobileDetectHelper(setShowToc);
    };
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    }
  }, []);

  return (
    <div className={styles['md-content']} ref={mdRef}>
      {showToc && <MarkNav className={styles['md-toc']} source={md} ordered={true} onHashChange={onHashChange} />}
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default content;
