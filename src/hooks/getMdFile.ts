import React from "react";
import { GlobalInfoCtx } from "@/components/GlobalProvider";

import $1 from '@/markdown/浏览器.md?url';
import $2 from '@/markdown/数据结构与算法.md?url';
import $3 from '@/markdown/HTML.md?url';
import $4 from '@/markdown/CSS.md?url';
import $5 from '@/markdown/JavaScript.md?url';
import $6 from '@/markdown/Vue.md?url';
import $7 from '@/markdown/React.md?url';
import $8 from '@/markdown/Git.md?url';
import $9 from '@/markdown/Webpack.md?url';
import $10 from '@/markdown/面试高频手撕代码题.md?url';
import $11 from '@/markdown/剑指 offer.md?url';
import $12 from '@/markdown/LeetCode 算法思路.md?url';
import $13 from '@/markdown/企业笔试题.md?url';
import $14 from '@/markdown/智力题.md?url';
import $15 from '@/markdown/VScode Plugin.md?url';
import $16 from '@/markdown/Chrome Plugin.md?url';
import $17 from '@/markdown/Mac 使用小技巧.md?url';


const navMap: Record<string, string> = {
  '浏览器': $1,
  '数据结构与算法': $2,
  'HTML': $3,
  'CSS': $4,
  'JavaScript 🌟': $5,
  'Vue': $6,
  'React': $7,
  'Git': $8,
  'Webpack': $9,
  '面试高频手撕代码题 🌟': $10,
  '剑指 offer 🌟': $11,
  'LeetCode 算法思路': $12,
  '企业笔试题': $13,
  '智力题': $14,
  'VScode Plugin': $15,
  'Chrome Plugin': $16,
  'Mac 使用小技巧': $17,
};

export const getMdFile = () => {
  const { globalInfo } = React.useContext(GlobalInfoCtx);

  const [md, setMd] = React.useState('浏览器');

  React.useEffect(() => {
    fetch(navMap[globalInfo.navKey])
      .then(res => res.text())
      .then(text => {
        setMd(text);
      })
      .catch(() => {
        console.log('加载失败');
      });
  }, [globalInfo.navKey]);

  return { md }
}
