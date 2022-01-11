import { pieChart } from './pieChart.js';
import { barChart } from './barChart.js';
import { fetchApi } from './fetchApi.js';

class Chart extends HTMLElement{ 
    template = document.createElement('template');
    constructor(){
        super();
        this.attachShadow( { mode: 'open' } );
        this.template.innerHTML = `
        <div class="card-chart" style="width: 900px; height: 500px;">
        </div>`;
        this.shadowRoot.appendChild( this.template.content.cloneNode(true) );
        this.type = this.getAttribute('type');
        this.url = this.getAttribute('data-source');
        this.field = this.getAttribute('field');
        this.cardChart = this.shadowRoot.querySelector('.card-chart')
        console.log(this.getAttributeNames())
    }

    async getData (){
        const data = await fetchApi( this.url );
        let optionsObj = {};
        let dataFilter = [];

        if (this.hasAttribute('options')) {
            const options = this.getAttribute('options').split(' ');
            options.forEach( option =>{
                optionsObj[option] = 0;
            });

            data.forEach(element => {
                if (element[this.field] in optionsObj) {
                    optionsObj[element[this.field]] = optionsObj[element[this.field]]+1;
                }
            });
        }else{
            data.forEach(element => {
                    optionsObj[element[this.field]] = optionsObj[element[this.field]]+1 || 1;
            });
            console.log(this.field)
        }

        Object.keys(optionsObj).forEach( key =>{
            const value = [key, optionsObj[key]];
            dataFilter.push(value);
        });
        
        return dataFilter; 
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

    async drawBar(){
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback( async () =>{
            const dataFromApi = await this.getData();
            const {data, options} = barChart(dataFromApi, this.field);
            const chart = new google.charts.Bar(this.cardChart);
            chart.draw(data, options);
        });
    }

    render(){
        this.type == 'bar' && this.drawBar();
        this.type == 'pie' && this.drawPie();
    }

    connectedCallback(){
       this.render();
    }
}

export{ Chart };