import { Avatar } from '@douyinfe/semi-ui';
import AvatarUrl from '@/assets/svg/avatar.svg'

import styles from './style.module.less';

const Header = () => {
  return (
    <div className={styles['header-content']}>
      <Avatar alt="avatar" src={AvatarUrl} style={{ margin: '0 8px' }} />
      <span>木子凡的小站</span>
    </div>
  );
};

export default Header;
