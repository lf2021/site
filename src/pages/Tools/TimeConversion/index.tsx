import React, { useEffect, useState } from 'react';
import { Button, Input, Space } from '@douyinfe/semi-ui';
import { IconChevronRight } from '@douyinfe/semi-icons';
import { transformTimestamp2String } from '@/utils';

import $s from './style.module.less';

const TimeConversion = () => {
  const [currentTime, setCurrentTime] = useState(String(Math.floor(Date.now() / 1000)));
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(String(Math.floor(Date.now() / 1000)));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // 时间戳转时间
  const [timestamp, setTimestamp] = useState(String(Math.floor(Date.now() / 1000)));
  const resetTimeStamp = () => {
    setTimestamp(currentTime);
  };

  const [timeString, setTimeString] = useState('');
  const onTimeConversion = () => {
    setTimeString(transformTimestamp2String(parseInt(timestamp) * 1000));
  };

  // 时间转时间戳
  const [userTimeStringByUser, setUserTimeStringByUser] = useState(
    transformTimestamp2String(parseInt(currentTime) * 1000)
  );
  const [generatedTimestamp, setGeneratedTimestamp] = useState('');

  const onTimeConversion2 = () => {
    setGeneratedTimestamp(String(Date.parse(userTimeStringByUser) / 1000));
  };
  return (
    <div>
      <h1>时间戳转换</h1>
      <span className={$s['timetool_tips']}>
        Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。
      </span>

      <div className={$s['timetool_line']}>
        <Space spacing="medium">
          <div className={$s['timetool_label']}>当前时间</div>
          <div className={$s['timetool_value']} onClick={resetTimeStamp}>
            {currentTime}
          </div>
        </Space>
      </div>

      {/* 时间戳转时间字符串 */}
      <div className={$s['timetool_line']}>
        <Space spacing="medium">
          <div className={$s['timetool_label']}>时间戳</div>
          <Input size="large" suffix={'秒(s)'} value={timestamp} onChange={setTimestamp} />
          <Button
            size="large"
            theme="light"
            type="primary"
            icon={<IconChevronRight />}
            iconPosition="right"
            onClick={onTimeConversion}>
            转换
          </Button>
          <Input size="large" suffix={'北京时间'} value={timeString} />
        </Space>
      </div>

      {/* 时间字符串转时间戳 */}
      <div className={$s['timetool_line']}>
        <Space spacing="medium">
          <div className={$s['timetool_label']}>时间</div>
          <Input size="large" suffix={'北京时间'} value={userTimeStringByUser} onChange={setUserTimeStringByUser} />
          <Button
            size="large"
            theme="light"
            type="primary"
            icon={<IconChevronRight />}
            iconPosition="right"
            onClick={onTimeConversion2}>
            转换
          </Button>
          <Input size="large" suffix={'秒(s)'} value={generatedTimestamp} />
        </Space>
      </div>
    </div>
  );
};

export default TimeConversion;
