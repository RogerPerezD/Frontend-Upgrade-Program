import React, { FormEvent, useState } from 'react';
import { Todo } from './TodoApp';

type TodoAddProps= {
    handleAddTodo( newTodo: Todo): void
}

export const TodoAdd = ({ handleAddTodo }:TodoAddProps) => {
    const [inputState, setInputState] = useState<string>('');

    const handleInput = (e: FormEvent<HTMLInputElement>) =>{
        setInputState( e.currentTarget.value );
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        // Validar que no este vacia la caja
        if (inputState.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: inputState,
            done: false
        }

        handleAddTodo( newTodo );

        setInputState('');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input type="text" 
                className='form-control' 
                name='description' 
                placeholder='Learn....' 
                autoComplete='off'
                onChange={ handleInput }
                value={ inputState }/>
            <div className="d-grid gap-1">
            <button 
                className='btn btn-outline-primary mt-1' 
                type='submit'> 
                Add 
            </button>
            </div>
        </form>
    );
};
