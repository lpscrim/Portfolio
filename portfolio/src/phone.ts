export const displayNumber = () => {

    const number = document.getElementById('number')
    let newClass = 'on'

    if (number?.className === 'off') {
        newClass = 'on'
    } else if (number?.className === 'on'){
        newClass = 'off'
    }

    if (number) {
        number.className = newClass;
    }
}

(window as any).displayNumber = displayNumber;