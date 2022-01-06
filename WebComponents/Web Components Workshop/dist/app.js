var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { drawPie } from './pieChart.js';
const template = document.createElement('template');
template.innerHTML = `
    <div class="card-chart" style="width: 900px; height: 500px;">
    </div>
`;
class Chart extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        console.log('My chart');
        this.drawChartPie();
    }
    drawChartPie() {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(() => __awaiter(this, void 0, void 0, function* () {
            const { data, options } = yield drawPie(this.getAttribute('data-source'));
            const chart = new google.visualization.PieChart(this.shadowRoot.querySelector('.card-chart'));
            chart.draw(data, options);
        }));
    }
    drawChartBar() {
    }
}
window.customElements.define('my-chart', Chart);
