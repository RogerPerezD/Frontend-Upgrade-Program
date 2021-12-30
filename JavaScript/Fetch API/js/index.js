
const btnFetch = document.querySelector('#btn-fetch');
const divOutput = document.querySelector('#output');

const handleClick = async () => {
    const resp = await fetch('assets/sample.txt');
    const data = await resp.text();

    // console.log(data);
    divOutput.textContent = data;
}

btnFetch.addEventListener('click', handleClick);