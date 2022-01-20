import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Test sobre GifExpertApp', () => {
    
    test('should show the component', () => {
        
        const wrapper = shallow( <GifExpertApp/>);

        expect( wrapper ).toMatchSnapshot();
    });
});