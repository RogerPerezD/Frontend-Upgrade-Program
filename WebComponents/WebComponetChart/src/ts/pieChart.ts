// type PieChart = {
//     data: any[],
//     options: {}
// };


export const pieChart = ( values: any[] ) => {
    // Create the data table.
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Status');
    data.addColumn('number', 'NumberTodos');
    data.addRows(
      values
    );
    // Set chart options
    const options = {'title':'Todos Status',
    is3D: true};
  
    return {data,options};
  } 