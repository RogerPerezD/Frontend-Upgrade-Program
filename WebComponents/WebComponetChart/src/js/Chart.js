import { pieChart } from './pieChart.js';
// import { drawStuff } from './barChart.js';
import { fetchApi } from './fetchApi';

const template = document.createElement('template');
template.innerHTML = `
<div class="card-chart" style="width: 900px; height: 500px;">
</div>
`;

class Chart extends HTMLElement{ 
    constructor(){
        super();
        this.attachShadow( { mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode(true) );
        this.type = this.getAttribute('type');
        this.url = this.getAttribute('data-source');
        this.field = this.getAttribute('field');
        this.options = this.getAttribute('options').split(' ');
        this.cardChart = this.shadowRoot.querySelector('.card-chart')
    }

    async getData (){
        const data = await fetchApi( this.url );
        let optionsObj = {};
        this.options.forEach( option =>{
            optionsObj[option] = 0;
            });

            data.forEach(element => {
                if (element[this.field] in optionsObj) {
                    optionsObj[element[this.field]] = optionsObj[element[this.field]]+1;
                }
            });

        let arr = [];
        Object.keys(optionsObj).forEach( key =>{
            const value = [key, optionsObj[key]];
            arr.push(value);
        });

        return arr;
    }

    async drawPie(){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback( async () =>{
            const dataFromApi = await this.getData();
            const {data, options} = pieChart(dataFromApi);
            const chart = new google.visualization.PieChart(this.cardChart);
            chart.draw(data, options);
        });
    }

    connectedCallback(){
        console.log('Hola2');
        this.drawPie();
    }
}

export{ Chart };