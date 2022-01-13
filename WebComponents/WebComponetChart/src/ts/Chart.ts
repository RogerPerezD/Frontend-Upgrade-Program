import { pieChart } from './pieChart';
import { barChart } from './barChart';
import { fetchApi } from './fetchApi';

class Chart extends HTMLElement{ 
    private template: HTMLTemplateElement; 
    private type: string;
    private url: string;
    private field: string;
    private cardChart: HTMLElement;
    constructor(){
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <div class="card-chart" style="width: 900px; height: 500px;">
        </div>`;
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot!.appendChild( this.template.content.cloneNode(true) );
        this.type = this.getAttribute('type')!;
        this.url = this.getAttribute('data-source')!;
        this.field = this.getAttribute('field')!;
        this.cardChart = this.shadowRoot!.querySelector('.card-chart')!;
    }

    async getData (){
        const data = await fetchApi( this.url );
        let optionsObj: any = {};
        let dataFilter: any[] = [];

        if (this.hasAttribute('options')) {
            const options: string[] = this.getAttribute('options')?.split(' ')!;
            options.forEach( (option: string) =>{
                optionsObj[option ] = 0;
            });

            data.forEach((element: any) => {
                if (element[this.field] in optionsObj) {
                    optionsObj[element[this.field]] = optionsObj[element[this.field]]+1;
                }
            });
        }else{
            data.forEach((element: any) => {
                    optionsObj[element[this.field]] = optionsObj[element[this.field]]+1 || 1;
            });
            console.log(this.field)
        }

        Object.keys(optionsObj).forEach( (key:string) =>{
            const value: [string, number] = [key, (optionsObj[key] as number) ];
            dataFilter.push(value);
        });
        
        return dataFilter; 
    }

    async drawBar(){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback( async () =>{
            const dataFromApi = await this.getData();
            const {data, options} = barChart(dataFromApi, this.field);
            const chart = new google.visualization.BarChart(this.cardChart);
            chart.draw(data, {
                title: "Density of Precious Metals, in g/cm^3",
                width: 600,
                height: 400,
                bar: {groupWidth: "95%"},
                legend: { position: "none" },
            });
        });
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
    
    render(){
        this.type == 'bar' && this.drawBar();
        this.type == 'pie' && this.drawPie();
    }

    connectedCallback(){
       this.render();
    }
}

export{ Chart };