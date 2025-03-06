export const setTheme = () => {
  const root = document.getElementsByTagName('html')[0];
  let newTheme = 'light';

  if (root.className === 'light') {
    newTheme = 'dark';
  } else if (root.className === 'dark') {
    newTheme = 'blue';
  } else if (root.className === 'blue') {
    newTheme = 'black';
  } else if (root.className === 'black') {
    newTheme = 'white';
  } else if (root.className === 'white') {
    newTheme = 'light';
  } 

  root.className = newTheme;
  localStorage.setItem('theme', newTheme);
};

const applyStoredTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    document.getElementsByTagName('html')[0].className = storedTheme;
  } else {
    document.getElementsByTagName('html')[0].className = 'light';
  }
};


window.addEventListener('load', applyStoredTheme);

(window as any).setTheme = setTheme;