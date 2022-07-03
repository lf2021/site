import React from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Space } from '@douyinfe/semi-ui';
import AvatarUrl from '@/assets/svg/avatar.svg';
import cls from 'classnames';

import styles from './style.module.less';

const Header = () => {
  const paths = React.useMemo(
    () => [
      {
        name: 'Home',
        to: '/site/home',
      },
      {
        name: 'Changelog',
        to: '/site/changelog',
      },
    ],
    []
  );

  return (
    <div className={styles['header-content']}>
      <NavLink to="/site/home">
        <Avatar alt="avatar" src={AvatarUrl} className={styles['header-avatar']} />
      </NavLink>
      <span>木子小站</span>
      <Space wrap spacing="loose" style={{ marginLeft: '16px' }}>
        {paths.map(({ name, to }) => (
          <NavLink
            key={name}
            to={to}
            className={({ isActive }) =>
              isActive ? cls(styles['header-tag'], styles['header-tag-active']) : styles['header-tag']
            }
          >
            {name}
          </NavLink>
        ))}
      </Space>
    </div>
  );
};

export default Header;
