import React from 'react';

/* createContext的参数是上下文对象的默认值 */
const ThemeContext = React.createContext({
  color: 'blue',
  size: 20
})

export default ThemeContext