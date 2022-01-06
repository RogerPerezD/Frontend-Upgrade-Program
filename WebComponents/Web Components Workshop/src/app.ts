import { drawPie } from './pieChart.js';

const template: HTMLTemplateElement = document.createElement('template');
template.innerHTML = `
    <div class="card-chart" style="width: 900px; height: 500px;">
    </div>
`;

class Chart extends HTMLElement{
    constructor(){
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot!.appendChild( template.content.cloneNode(true) );
    }

    connectedCallback(): void{
        console.log('My chart');
        this.drawChartPie();
    }

    drawChartPie(): void{
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback( async () =>{
            const {data, options} = await drawPie( this.getAttribute('data-source')! );
            const chart = new google.visualization.PieChart( this.shadowRoot!.querySelector('.card-chart') );
            chart.draw(data, options);
        });
    }

    drawChartBar(): void{
        
    }
}

window.customElements.define('my-chart', Chart);