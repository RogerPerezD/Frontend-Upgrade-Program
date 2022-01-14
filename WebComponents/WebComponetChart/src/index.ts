
import { Chart } from './ts/Chart';
import { fetchApi } from './ts/fetchApi';

import './css/main.css';
import './scss/main.scss';

const formChart = document.querySelector('#formChart')! as HTMLFormElement;
const inputEndPoint = document.querySelector('#endpoint')! as HTMLInputElement;
const inputTypeChart = document.querySelector('#typeChart')! as HTMLSelectElement;
const inputField = document.querySelector('#field')! as HTMLSelectElement;
const inputOptions = document.querySelector('#options')! as HTMLInputElement;
const containerForm = document.querySelector('.form')! as HTMLElement;
const btnGetFields = document.querySelector('#getFields')! as HTMLElement;
// const btnForm = document.querySelector('.form__submit') as HTMLElement;

formChart.addEventListener('submit',(e) =>{ 
    e.preventDefault();
    const mychart = document.createElement('my-chart');
    // console.log(inputTypeChart.options[inputTypeChart.selectedIndex].value);
    mychart.setAttribute('data-source',inputEndPoint.value);
    mychart.setAttribute('field',inputField.options[inputField.selectedIndex].value);
    mychart.setAttribute('type',inputTypeChart.options[inputTypeChart.selectedIndex].value);
    if (inputOptions.value !== '') {
        mychart.setAttribute('options',inputOptions.value);
    }
    containerForm.removeChild(formChart);
    containerForm.appendChild(mychart);
    window.customElements.define('my-chart', Chart);
});

btnGetFields.addEventListener('click', async() =>{
    const data = await fetchApi(inputEndPoint.value);
    const keys: string[] = Object.keys(data[0]);
    keys.forEach(element => {
        const option = document.createElement('option');
        option.textContent = element;
        option.value = element;
        inputField.appendChild(option);
    });
});