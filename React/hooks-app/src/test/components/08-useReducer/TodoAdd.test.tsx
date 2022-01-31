import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { FormEvent } from 'react';

describe('Test in <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
    <TodoAdd
        handleAddTodo = { handleAddTodo }
    />);
    
    test('should show the component successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should not call the function handleAddTodo', () => {
        // Obtener la funcion que se dispara
        // con el onSubmit
        const formSubmit = wrapper.find('form').prop('onSubmit')!;
        formSubmit({ preventDefault(){} } as FormEvent<HTMLFormElement>);
        
        // Como el input esta vacio no se debe llamar a handleAddTodo
        expect( handleAddTodo ).not.toBeCalled();
    });

    test('should call the function handleAddTodo', () => {
      
        const input = wrapper.find( 'input' );
        const value = 'Hello world';
        input.simulate('change', { currentTarget:{ value } });

        const formSubmit = wrapper.find('form').prop('onSubmit')!;
        formSubmit({ preventDefault(){} } as FormEvent<HTMLFormElement>);

        expect( handleAddTodo ).toBeCalled();
        expect( handleAddTodo ).toBeCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        // Verificar que se limpie la caja de texto despues
        // del procedimiento, se debe volver a encontrar la 
        // referencia del input, ya que si usamos la anterio
        // Nos puede dar falsos positivos
        expect( wrapper.find( 'input' ).prop('value') ).toBe('');
    });
    
    
    
});
