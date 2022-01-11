
export const fetchApi = async ( url ) => {
    console.log('this is the', url) 
    const resp = await fetch(url);
    const data = await resp.json();
    return 'results' in data ? data.results : data;
}