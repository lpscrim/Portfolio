  export const  setTheme = (className: string) => {
  var root = document.getElementsByTagName('html')[0];
  root.className = className;
}

(window as any).setTheme = setTheme;