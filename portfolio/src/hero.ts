
document.querySelector<HTMLDivElement>('#hero')!.innerHTML = `
  <div>
    <p class="text-2xl font-bold p-50 w-full text-center">
      Hello, I'm <strong>John Doe</strong>, a software engineer based in New York City.
    </p>

  </div>
`

//replace text here with a function that takes the innerHTML from the main doc and animates it plus additional text from here//
//Lewis Scrimgeour//
                    //School taught Architectural Engineer//
                    //Self taught English Teacher//
                    //Self Taught Chef//
                    //Self taught Photographer//
                    //self taught Music producer//
                    //Self taught Artist//                                   
// Self taught web developer//



  const typeElement = document.querySelector<HTMLDivElement>('#typeTest')!;
  const typeOriginal = typeElement.innerHTML;
  const texts = [
    'Architectural Engineer Graduate',
    'English Teacher',
    'Chef de Cuisine',
    'Photographer',
    'Music producer',
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
      }, 50 * i);
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