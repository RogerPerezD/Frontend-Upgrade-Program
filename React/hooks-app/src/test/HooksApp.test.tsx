import { shallow } from "enzyme";
import { HooksApp } from "../HooksApp";

describe('Test sobre el componente HookApp', () => {
    
    test('should show the component succesfully', () => {
        
        const wrapper = shallow( <HooksApp/>);

        expect( wrapper ).toMatchSnapshot();
    });
});