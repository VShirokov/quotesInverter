const form = document.querySelector('.form');
const resultArea = document.querySelector('.result');
const inputArea = document.querySelector('.input');

const submitHandler = (e) => {
    e.preventDefault();

    const regExp = /\'/gi;
    const input = inputArea.value;
    const output = input.replace(regExp, '"');

    resultArea.innerHTML=output;
}

form.addEventListener('submit', submitHandler);
