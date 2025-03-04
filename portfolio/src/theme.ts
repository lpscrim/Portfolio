  export const  setTheme = () => {
  var root = document.getElementsByTagName('html')[0];
  if (root.className == null) {
    root.className = 'light'
  } else if (root.className === 'light') {
    root.className = 'dark'
  } else if (root.className === 'dark') {
    root.className = 'black'
  } else if (root.className === 'black') {
    root.className = 'white'
  }  else {
    root.className = 'light'
  }
}

(window as any).setTheme = setTheme;