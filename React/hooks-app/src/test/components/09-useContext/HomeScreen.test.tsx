import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test in <HomeScreen/>', () => {
  
    
    test('should show the component successfully', () => {
        const wrapper = shallow( <HomeScreen/> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the user in the component', () => {
        const user = {
            id: 1,
            name: 'Roger',
            email: 'roger@mail.com',
        }
        const setUser = jest.fn();
        const wrapper = mount( 
        <UserContext.Provider value={ { user, setUser} }>  
            <HomeScreen/>
        </UserContext.Provider> );

        const pre = wrapper.find('HomeScreen').find('pre').text();
        expect( wrapper ).toMatchSnapshot();
        expect( pre ).toEqual( JSON.stringify(user,null,2) );
    });
    
    
});
