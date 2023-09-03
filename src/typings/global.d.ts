declare module '*.md' {
  const attributes: Record<string, unknown>;
  import React from 'react';
  const ReactComponent: React.VFC;
  export { attributes, ReactComponent };
}

declare module 'markdown-navbar';

type ILogger = {
  title: string;
  content: any;
  isCollapsed?: boolean;
};
declare interface IGlobalVariables {
  Logger(params: ILogger): void
}

declare interface Window extends IGlobalVariables {}
declare interface global extends IGlobalVariables {}
