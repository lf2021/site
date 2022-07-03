export type IType = 'default' | 'ongoing' | 'success' | 'warning' | 'error' | undefined;

export enum IContentType {
  Feature = 'Feature',
  Fix = 'Fix',
  Chore = 'Chore',
  BreakingChange = 'BreakingChange',
  Style = 'Style',
}

export type IContentItem = Array<{ desc: string; link?: string; linkTitle?: string }>;

export type IContent = Partial<Record<IContentType, IContentItem>>;
