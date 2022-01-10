
export const barChart = ( dataFromApi, field ) => {

  dataFromApi.unshift([field.toLocaleUpperCase(), 'TOTAL']);
  const data = new google.visualization.arrayToDataTable(dataFromApi);
  const options = {
    title: 'Chess opening moves',
    width: 900,
    legend: { position: 'none' },
    chart: { title: field.toLocaleUpperCase(),
              subtitle: `${ field } by percentage` },
    bars: 'horizontal', // Required for Material Bar Charts.
    axes: {
      x: {
        0: { side: 'top', label: 'Total'} // Top x-axis.
      }
    },
    bar: { groupWidth: "90%" }
  };
  return {data,options};
};