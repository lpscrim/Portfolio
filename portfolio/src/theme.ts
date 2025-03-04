  export const  setTheme = () => {
  var root = document.getElementsByTagName('html')[0];
  if (root.className == null) {
    root.className = 'dark'
  } else if (root.className === 'dark') {
    root.className = 'light'
  }
  else {
    root.className = 'dark'
  }
}

(window as any).setTheme = setTheme;