import React from "react";
import { Button } from "@douyinfe/semi-ui";
import { debounce } from "lodash";
import $s from './style.module.less';

const Default = () => {
  const [src, setSrc] = React.useState('https://api.lovelive.tools/api/SweetNothings');
  const onClick = debounce(() => {
    setSrc(preSrc => `${preSrc}?id=${Math.random}`);
  }, 200);

  return (
    <div>
      <div className={$s['change_button']}>
        <Button size="large" style={{ margin: '20px' }} onClick={onClick}>
          生成情话
        </Button>
      </div>
      <div className={$s['sweetContent']}>
        <iframe frameBorder="0" width="50%" src={src}></iframe>
      </div>
    </div>
  );
}

export default Default;
