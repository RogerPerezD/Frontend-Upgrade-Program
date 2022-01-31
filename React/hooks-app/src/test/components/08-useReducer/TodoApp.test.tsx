import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test in <TodoApp/>', () => {
    const wrapper = shallow( <TodoApp/> );
    Storage.prototype.setItem = jest.fn(()=> {});
   

    test('should show the component succesfully', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should add a new Todo', () => {
        const wrapper = mount( <TodoApp/> );
        const handleAddTodo = (wrapper.find('TodoAdd').prop('handleAddTodo') as Function);
        
        act( ()=>{
            demoTodos.forEach( todo =>{
                handleAddTodo( todo );
            });
        });

        const h1 = wrapper.find('h1');
    
        expect(h1.text().trim()).toBe(`TodoApp (${ demoTodos.length })`);

        expect( localStorage.setItem ).toHaveBeenCalledTimes( demoTodos.length );
    });
    
    
});
