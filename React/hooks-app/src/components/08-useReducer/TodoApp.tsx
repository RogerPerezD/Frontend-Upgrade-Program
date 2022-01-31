import React, { MouseEvent, useCallback, useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

export type Todo = {
    id: number,
    desc: string,
    done: boolean
}

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')!) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [],init);
    
    useEffect(() => {
        // Convertimos los todos en un Json en texto plano
        // Ya que el local storage solo puede guardar strings
        localStorage.setItem( 'todos', JSON.stringify( todos ));
    }, [todos]);
    
    const handleAddTodo = ( newTodo: Todo) =>{
        const action = {
            type: 'add',
            payload: newTodo,
        }
        dispatch( action );
    }

    const handleDeleteTodo = useCallback((todo: Todo) => {
        const action = {
            type: 'delete',
            payload: todo
        }
        dispatch( action );
    }, []);

    const handleToggleTodo = useCallback((e: MouseEvent<HTMLParagraphElement>, todo: Todo) => {
        const action = {
            type: 'update',
            payload: todo
        }
        dispatch( action );
        e.currentTarget.classList.toggle('complete');
    }, []);


    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={ todos } 
                    handleToggleTodo={ handleToggleTodo }
                    handleDeleteTodo = { handleDeleteTodo }
                    />
                </div>

                <div className="col-5">
                    <h4>Add Todo</h4>
                    <hr />
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
            </div>
        </div>
    );
};
