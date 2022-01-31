import { Todo } from '../../../components/08-useReducer/TodoApp';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

type Action = {
    type: string,
    payload: Todo,
};

describe('Test in the function todoReducer', () => {
  
    test('should return default value', () => {
        const state = todoReducer( demoTodos, {} as Action);

        expect( state ).toEqual( demoTodos );
    });

    test('should add a Todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Lear laravel',
            done: false
        };
        const action = {
            type: 'add',
            payload: newTodo,
        }
        const state = todoReducer( demoTodos, action);

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo])
    });

    test('should remove a Todo', () => {
        const action = {
            type: 'delete',
            payload: demoTodos[0],
        };

        const state = todoReducer( demoTodos, action);

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoTodos[1]])
    });

    test('should update status Todo', () => {
        const action = {
            type: 'update',
            payload: demoTodos[1],
        };

        const state = todoReducer( demoTodos, action);
        
        expect( state[1].done ).toBe( true );
        expect( state[0] ).toBe( demoTodos[0]);
    });
});