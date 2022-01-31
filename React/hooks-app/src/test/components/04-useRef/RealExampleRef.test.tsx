import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Test un <RealExampleRef/>', () => {
    
    test('should show the component succesfully', () => {
        
        const wrapper = shallow(<RealExampleRef/>);

        expect( wrapper ).toMatchSnapshot();
    });

    test('should return the component <MultipleCustomHooks/> inside our component', () => {
        const wrapper = shallow(<RealExampleRef/>);

        const button = wrapper.find('button');
        button.simulate('click');

        const component = wrapper.find('MultipleCustomHooks');

        console.log(component);
        expect( component.exists() ).toBe( true );
    });
});