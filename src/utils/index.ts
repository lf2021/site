export * from './helper';

export const getMdFileUrl = (name: string) => {
  return new URL(`../markdown/${name}.md?url`, import.meta.url).href;
};
