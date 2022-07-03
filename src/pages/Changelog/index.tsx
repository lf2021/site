import { Divider, Timeline } from '@douyinfe/semi-ui';
import Content from './Content.tsx';
import { isMobile } from '@/constants';
import { changelogs } from '@/data/changelog';
import cls from 'classnames';

import type { IType } from './interface';

import styles from './style.module.less';

const Changelog = () => {
  return (
    <div className={cls(styles['changelog-wrapper'], !isMobile && styles['changelog-wrapper-pc'])}>
      <div className={styles['changelog-guide']}>
        <Divider margin="16px" />
        <h4>关于 ChangeLog</h4>
        <ul>
          <li>
            <b>🎁Feature: </b>新特性的提交
          </li>
          <li>
            <b>🔧Fix: </b>bug 的修复
          </li>
          <li>
            <b>🗃Chore: </b>工程配置化的操作
          </li>
          <li>
            <b>💥Breaking Change: </b>重大性能/使用变更
          </li>
          <li>
            <b>💅Style: </b>样式的改动
          </li>
        </ul>
        <Divider margin="16px" />
      </div>
      <Timeline mode={isMobile ? 'left' : 'center'}>
        {changelogs.map(({ time, content, type }) => (
          <Timeline.Item key={time} time={time} type={type as IType}>
            <Content content={content} />
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Changelog;
