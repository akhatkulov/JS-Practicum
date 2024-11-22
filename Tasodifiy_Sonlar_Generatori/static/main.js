const getRand = (x,y) =>{
    return Math.abs(Math.floor(Math.random() * (x - y + 1)) + x);
}

const generateNumber = () =>{
    const minElement = document.querySelector('.min-input');
    const maxElelement = document.querySelector('.max-input');

    const res = document.querySelector('.result-text');
    res.innerHTML = getRand(+minElement.value, +maxElelement.value) + '';
}

const generateButton = document.getElementById('generateNumber');

generateButton.addEventListener('click',generateNumber);