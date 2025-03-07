export const displayNumber = () => {

    const number = document.getElementById('number')
    let newClass = 'off'

    if (number?.className === 'off') {
        newClass = 'on'
    } else if (number?.className === 'on'){
        newClass = 'off'
    }

    number.className = newClass;
}

(window as any).displayNumber = displayNumber;