import React from "react";

import type { IContent, IContentItem } from "../interface";
import { IContentType } from "../interface";

import styles from '../style.module.less';

const changelogContentTitle = {
  [IContentType.Feature]: '🎁【Feature】',
  [IContentType.Fix]: '🔧【Fix】',
  [IContentType.Chore]: '🗃【Chore】',
  [IContentType.BreakingChange]: '💥【Breaking Change】',
  [IContentType.Style]: '💅【Style】',
};

interface IProps {
  content: IContent
}
const Content = (props: IProps): JSX.Element => {
  const { content } = props;
  return (
    <div>
      {Object.entries(content).map(([title, items]) => {
        return (
          <React.Fragment key={title}>
            {title && (
              <>
                <h2 className={styles['content-title']}>{changelogContentTitle[title as IContentType]}</h2>
                <Item items={items} />
              </>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

const Item = ({ items }: { items: IContentItem }): JSX.Element => {
  return (
    <ul>
      {items.map(({ desc, link, linkTitle }) => (
        <li key={desc}>
          {desc}
          <a href={link} target="_blank" style={{ marginLeft: '8px' }} rel="noreferrer">
            {linkTitle}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Content;
