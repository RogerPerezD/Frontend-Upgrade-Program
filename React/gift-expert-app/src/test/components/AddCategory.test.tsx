import { shallow, ShallowWrapper } from "enzyme";
import AddCategory from '../../components/AddCategory';

describe('Test of the component AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper: ShallowWrapper;

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);
    });

    test('should show the component successfully', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change the textfield', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { currentTarget:{ value } });
    });

    test('shouldnt post information on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
    
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('should call the function setCategories and clean the textfiel', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { currentTarget:{ value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
       
        expect( setCategories ).toHaveBeenCalled();
        expect( (input.prop('value') as string).length ).toBe( 0 );
    });
});