
/**
 * logger 方法接收一个对象
 * 
 */
export const Logger = (params: ILogger) => {
  const { title, content } = params;
  console.groupCollapsed(`%c${title}`, `color: #fff; background-color: ${color16()}; padding: 2px 10px; border-radius: 4px; font-weight: normal;`);
  console.log(content);
  console.groupEnd();
}

function color16(){
   let r = Math.floor(Math.random()*256);
   let g = Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);
   let color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
   return color;
}
