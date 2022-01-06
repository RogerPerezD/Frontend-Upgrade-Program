import { fetchData } from './fetchApi.js'

type Options = {
    'title': string,
    is3D?: boolean
}


export const drawPie =  async ( url: string ):Promise<{
    data: Array<[string, number]>;
    options: Options;
    }> => {
    const todos = await fetchData( url );
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
        'title':'Todos Status',
        is3D: true
    };

  return {data,options};
}