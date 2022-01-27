import React, { MouseEvent } from 'react';
import { Todo } from './TodoApp';

type TodoListItemProps = {
    todo: Todo,
    index: number,
    handleToggleTodo(e: MouseEvent<HTMLParagraphElement>, todo: Todo): void,
    handleDeleteTodo( todo: Todo): void
}

export const TodoListItem = React.memo(({ todo, index, handleToggleTodo, handleDeleteTodo }: TodoListItemProps) => {
    console.log('list item renderizado');
    return (
    <li className='list-group-item'>
        <p 
        className='text-center'
        onClick={ (e) => { handleToggleTodo( e, todo )} }>{index}. { todo.desc }</p>
        
        <button 
        className='btn btn-danger'
        onClick={ () => { handleDeleteTodo (todo)} }>
            Delete
        </button>
    </li>
  );
});
