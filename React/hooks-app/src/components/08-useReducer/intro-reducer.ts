import React from 'react';


type State = {
    id: number,
    todo: string,
    done: boolean
};

type Action = {
    type: string,
    payload: any,
};

const initialState: State[] = [{
    id: 1,
    todo: 'Buy bread',
    done: false
}];


const todoReducer = ( state: State [] = initialState, action?: Action ) =>{
    if (action?.type === 'add') {
        return [ ...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

console.log(todos);

const newTodo: State = {
    id: 2,
    todo: 'Buy milk',
    done: false
}

const todoAddAction: Action = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, todoAddAction);

console.log(todos);



