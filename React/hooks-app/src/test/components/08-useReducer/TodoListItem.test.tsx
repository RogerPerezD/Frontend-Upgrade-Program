import { shallow } from "enzyme";
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Test in <TodoListItem/>', () => {
    const handleToggleTodo = jest.fn();
    const handleDeleteTodo = jest.fn();
    const wrapper = shallow( 
    <TodoListItem
    todo = { demoTodos[0] }
    index={ 1 }
    handleToggleTodo= { handleToggleTodo }
    handleDeleteTodo = { handleDeleteTodo }
    /> );

    test('shoul show the component <TodoListItem/> successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should call the function handleDelete', () => {
        const button = wrapper.find('button');
        button.simulate('click');
        expect( handleDeleteTodo ).toHaveBeenCalledWith( demoTodos[0] );
    });
    
    test('should call the function handleToggle', () => {
        const paragraph = wrapper.find('p');
        paragraph.simulate('click');
        expect( handleToggleTodo ).toHaveBeenCalledTimes(1);
    });


    test('should show the text successfully', () => {
        const paragraph = wrapper.find('p');
        expect( paragraph.text().trim() ).toBe( `${1}. ${demoTodos[0].desc}`);
    });
    
    
});
