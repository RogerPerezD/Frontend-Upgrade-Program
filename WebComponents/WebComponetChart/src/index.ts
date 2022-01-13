
import { Chart } from './ts/Chart';
import './css/main.css';
import './scss/main.scss';

const formChart = document.querySelector('#formChart')! as HTMLFormElement;
const inputEndPoint = document.querySelector('#endpoint')! as HTMLInputElement;
const inputTypeChart = document.querySelector('#typeChart')! as HTMLInputElement;
const inputField = document.querySelector('#field')! as HTMLInputElement;
const inputOptions = document.querySelector('#options')! as HTMLInputElement;

formChart.addEventListener('submit',(e) =>{ 
    e.preventDefault();
    const mychart = document.createElement('my-chart');
    mychart.setAttribute('type',inputTypeChart.value);
    mychart.setAttribute('data-source',inputEndPoint.value);
    mychart.setAttribute('field',inputField.value);
    if (inputOptions.value !== '') {
        mychart.setAttribute('options',inputOptions.value);
    }
    document.querySelector('body')?.appendChild(mychart);
    window.customElements.define('my-chart', Chart);
});

console.log('fue desde type')