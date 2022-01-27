import { Todo } from "./TodoApp";

type Action = {
    type: string,
    payload: Todo,
};

// Inicializamos un arreglo vacio del tipo Todo
export const todoReducer = ( state = ([] as Todo []), action: Action): Todo[] => {
  
    switch (action.type) {
        case 'add':
            return [ ...state, action.payload];
        case 'delete':
            return state.filter( (todo) => todo.id !== action.payload.id);
        case 'update':
            return state.map( todo => ( 
                todo.id === action.payload.id 
                ? {...todo, done: !todo.done} 
                : todo
                ));
        // case 'update-old':
        // return state.map( (todo) => {
        //     if (todo.id === action.payload.id) {
        //         return {...todo, done: !todo.done}
        //     }
        //     return todo;
        // });
        default:
            return state;
    }
};
