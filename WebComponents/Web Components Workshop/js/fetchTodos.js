// const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async ( url ) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}