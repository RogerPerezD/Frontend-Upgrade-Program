import { fetchTodos } from './fetchTodos.js'

export const drawStuff = async ( url ) => {
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

  const data = new google.visualization.arrayToDataTable([
    ['Status', 'Todos'],
    ["Completed", completed],
    ["Incompleted", incompleted]
  ]);

  const options = {
    title: 'Chess opening moves',
    width: 900,
    legend: { position: 'none' },
    chart: { title: 'Todos',
              subtitle: 'Current Status' },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Total'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };
  return {data,options};

  // const chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // chart.draw(data, options);
};