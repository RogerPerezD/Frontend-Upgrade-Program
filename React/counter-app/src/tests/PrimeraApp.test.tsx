// import { render, screen } from "@testing-library/react";
import { shallow } from 'enzyme';
import React from 'react'
import PrimeraApp from '../PrimeraApp';


describe('Probando mi primer component', () => {
    
    // test('should show Hola Mundo in the component', () => {
    //     const saludo = 'Rogelio';

    //     render(<PrimeraApp saludo={saludo}/>);

    //     expect( screen.getByText( saludo ) ).toBeInTheDocument();
    // });

    test('should show the component PrimeraApp succesfully', () => {
        const saludo = 'Hola Rogelio';

        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect( wrapper ).toMatchSnapshot();
    });
});