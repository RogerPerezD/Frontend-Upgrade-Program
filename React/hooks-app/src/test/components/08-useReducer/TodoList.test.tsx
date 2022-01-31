import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';
import { shallow } from 'enzyme';

describe('Test in <TodoList/>', () => {
  
    const handleToggleTodo = jest.fn();
    const handleDeleteTodo = jest.fn();
    const wrapper = shallow( 
    <TodoList
    todos = { demoTodos }
    handleToggleTodo= { handleToggleTodo }
    handleDeleteTodo = { handleDeleteTodo }
    /> );


    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should has two elements <TodoListItems/>', () => {
        const elements = wrapper.find('TodoListItem');
        expect( elements.length ).toBe( demoTodos.length );
        // Verificar que tenga las funciones en sus props
        expect( elements.at(0).prop('handleDeleteTodo')).toEqual( expect.any(Function) );
        expect( elements.at(0).prop('handleToggleTodo')).toEqual( expect.any(Function) );
    });
    
    
    
});
