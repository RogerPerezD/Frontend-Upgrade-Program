import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';

describe('Test of the component AddCategory', () => {

    const setCategories = () =>{};

    test('should show the component successfully', () => {
        
        const wrapper = shallow( <AddCategory setCategories={setCategories}/>)
    
        expect( wrapper ).toMatchSnapshot();
    });
});