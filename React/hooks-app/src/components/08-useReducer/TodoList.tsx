import React, { MouseEvent } from 'react';
import { Todo } from './TodoApp';
import { TodoListItem } from './TodoListItem';

type TodoListProps = {
    todos: Todo[],
    handleToggleTodo(e: MouseEvent<HTMLParagraphElement>, todo: Todo): void,
    handleDeleteTodo( todo: Todo): void
}

export const TodoList = React.memo(({ todos, handleToggleTodo, handleDeleteTodo}: TodoListProps) => {
    console.log('Todo list renderizado');
    return (
        <ul className='list-group list-group-flush'>
            {
                todos.map( (todo, i) => ( 
                <TodoListItem 
                key={todo.id}
                todo={ todo }
                index={ i+1 }
                handleToggleTodo = { handleToggleTodo }
                handleDeleteTodo = { handleDeleteTodo }
                />
                ))
            }
            
        </ul>  
    );
});
