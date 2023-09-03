
/**
 * logger 方法接收一个对象
 * 
 */
const color = ['blue','green','magenta','gray'];

export const Logger = (params: ILogger) => {
  const { title, content, isCollapsed = true } = params;
  console[isCollapsed ? "groupCollapsed" : "group"](
    `%c${title}`,
    `color: #fff; background-color: ${getBackgroundColor()}; padding: 2px 10px; border-radius: 4px; font-weight: normal;`
  );
  console.log(content);
  console.groupEnd();
}

const getBackgroundColor = () => {
  const idx = Math.floor(Math.random() * color.length);
  return color[idx];
}
