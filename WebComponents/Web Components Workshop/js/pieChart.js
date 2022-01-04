import { fetchTodos } from './fetchTodos.js'

export const drawChart =  async ( url ) => {
    const todos = await fetchTodos( url );
    let completed = 0;
    let incompleted = 0;
    todos.forEach(todo => {
        if (todo.completed) {
            completed++;
        } else {
            incompleted++;
        }
    });
  // Create the data table.
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Status');
  data.addColumn('number', 'NumberTodos');
  data.addRows([
    ['Completed', completed],
    ['Incompleted', incompleted],
  ]);

  // Set chart options
  const options = {'title':'Todos Status',
  is3D: true};

  return {data,options};

  // const chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  // chart.draw(data, options);
}

// google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(drawChart);