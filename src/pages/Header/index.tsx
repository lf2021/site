import { Avatar } from '@douyinfe/semi-ui';
import AvatarUrl from '@/assets/svg/avatar.svg'

import styles from './style.module.less';

const Header = () => {
  return (
    <div className={styles['header-content']}>
      <Avatar alt="avatar" src={AvatarUrl} className={styles['header-avatar']} />
      <span style={{ fontSize: '16px' }}>木子小站</span>
    </div>
  );
};

export default Header;
