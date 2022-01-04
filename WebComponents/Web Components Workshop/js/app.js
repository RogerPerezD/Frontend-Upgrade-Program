import { drawChart } from './pieChart.js';
import { drawStuff } from './barChart.js';

const template = document.createElement('template');
template.innerHTML = `
<div class="card-chart" style="width: 900px; height: 500px;">
Hola
</div>
`;

class Chart extends HTMLElement{
    constructor(){
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode(true) );
        this.type = this.getAttribute('type');
        this.url = this.getAttribute('data-source');
        this.cardChart = this.shadowRoot.querySelector('.card-chart')
    }

    drawChartTodos(){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback( async () =>{
            const {data, options} = await drawChart(this.url);
            const chart = new google.visualization.PieChart(this.cardChart);
            chart.draw(data, options);
        });
    }

    drawBar(){
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback( async () =>{
            const {data, options} = await drawStuff(this.url);
            const chart = new google.charts.Bar(this.cardChart);
            chart.draw(data, options);
        });
    }

    connectedCallback(){
        if (this.type === 'pie') {
        this.drawChartTodos();
        } 
        if (this.type === 'bar') {
            this.drawBar();
        }
    }
}

window.customElements.define('my-chart', Chart);






