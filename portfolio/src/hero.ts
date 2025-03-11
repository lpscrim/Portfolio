  const typeElement = document.querySelector<HTMLDivElement>('#typeTest')!;
  const typeOriginal = typeElement.innerHTML.trim();
  const texts = [
    'Architectural Engineer',
    'English Teacher',
    'Chef de Cuisine',
    'Photographer',
    'Music Producer',
    'Artist',
    typeOriginal
  ];

  function typewriter(element: HTMLDivElement, text: string, callback?: () => void): void {
    const textArray = text.split('');
    element.innerHTML = '';
    textArray.forEach((letter: string, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
        if (i === textArray.length - 1 && callback) {
          setTimeout(callback, 1000); 
        }
      }, 35 * i);
    });
  }
  
  function deleteText(element: HTMLDivElement, callback?: () => void): void {
    const textArray = element.innerHTML.split('');
    textArray.forEach((_, i) => {
      setTimeout(() => {
        textArray.pop();
        element.innerHTML = textArray.join('');
        if (textArray.length === 0 && callback) {
          setTimeout(callback, 500); 
        }
      }, 20 * i);
    });
  }
  
  function typeSequence(element: HTMLDivElement, texts: string[]) {
    let index = 0;
  
    function next() {
      if (index < texts.length) {
        if (index === texts.length - 1) {
          typewriter(element, texts[index]);
        } else {
          typewriter(element, texts[index], () => {
            deleteText(element, next);
          });
        }
        index++;
      }
    }
  
    next();
  }
  
typeSequence(typeElement, texts);

const main = document.querySelector('main');
const topOfMain = main?.getBoundingClientRect().top;
const scrollButton = document.querySelector("#scrollButton");

scrollButton?.addEventListener("click", function () {
  window.scroll({ top: topOfMain, behavior: "smooth" });
})