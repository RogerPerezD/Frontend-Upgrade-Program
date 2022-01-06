var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from './fetchApi.js';
export const drawPie = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield fetchData(url);
    // let completed = 0;
    // let incompleted = 0;
    // todos.forEach(todo => {
    //     if (todo.completed) {
    //         completed++;
    //     } else {
    //         incompleted++;
    //     }
    // });
    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Status');
    data.addColumn('number', 'NumberTodos');
    data.addRows([
        ['Completed', 1],
        ['Incompleted', 2],
    ]);
    // Set chart options
    const options = {
        'title': 'Todos Status',
        is3D: true
    };
    return { data, options };
});
