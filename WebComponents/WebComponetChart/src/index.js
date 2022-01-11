import { Chart } from './js/Chart';

const formChart = document.querySelector('#formChart');
const inputEndPoint = document.querySelector('#endpoint');
const inputTypeChart = document.querySelector('#typeChart');
const inputField = document.querySelector('#field');
const inputOptions = document.querySelector('#options');

formChart.addEventListener('submit',(e) =>{ 
    e.preventDefault();
    const mychart = document.createElement('my-chart');
    mychart.setAttribute('type',inputTypeChart.value);
    mychart.setAttribute('data-source',inputEndPoint.value);
    mychart.setAttribute('field',inputField.value);
    if (inputOptions.value !== '') {
        mychart.setAttribute('options',inputOptions.value);
    }
    document.querySelector('body').appendChild(mychart);
    window.customElements.define('my-chart', Chart);
});

