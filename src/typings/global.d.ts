declare module '*.md' {
  const attributes: Record<string, unknown>;
  import React from 'react';
  const ReactComponent: React.VFC;
  export { attributes, ReactComponent };
}

declare module 'markdown-navbar';
