import { act, renderHook } from "@testing-library/react-hooks";
import { FormEvent } from "react";
import { FieldsForm } from '../../components/02-useEffect/FormWithCustomHook';
import { useForm } from "../../hooks/useForm";

describe('Test in useForm hook', () => {

    const initialForm: FieldsForm = {
        name: 'roger',
        email: 'roger@mail.com',
        password: '123'
    };
    
    test('should return a default form', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ values ]= result.current;

        expect( values ).toEqual( initialForm );
    });

    test('should change the default value in the form( change name)', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ , handleInput ]= result.current;

        act(() => {
            handleInput( {
                currentTarget:{
                    name: 'name',
                    value: 'raul'
                }
            } as FormEvent<HTMLInputElement> );
        });
        const [ formValues ] = result.current;
        //   Validar que sea el nuevo valor, y que las demas propiedades no cambiaron
        expect( formValues ).toEqual( {...initialForm, name: 'raul'});
        // Validar que no sea el antiguo valor
        expect( result.current[0].name ).not.toBe( initialForm.name );
    });

    test('should reset the defaul value in the form)', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ , handleInput, reset ]= result.current;

        act(() => {
            // Simulate change
            handleInput( {
                currentTarget:{
                    name: 'name',
                    value: 'raul'
                }
            } as FormEvent<HTMLInputElement> );
            // Reset to default value
            reset();
          });
        //   Validate que sea el valor por defecto
        expect( result.current[0].name ).toBe( initialForm.name );
        // Validar que no sea el valor que cambio
        expect( result.current[0].name ).not.toBe( 'raul');
    });
});