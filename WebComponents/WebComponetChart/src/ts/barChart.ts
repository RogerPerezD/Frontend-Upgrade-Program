
export const barChart = ( dataFromApi: any[], field: string ) => {

    dataFromApi.unshift([field.toLocaleUpperCase(), 'TOTAL']);
    const data = google.visualization.arrayToDataTable(dataFromApi);
    const options = {
        title: "Density of Precious Metals, in g/cm^3",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };
    return {data,options};
  };