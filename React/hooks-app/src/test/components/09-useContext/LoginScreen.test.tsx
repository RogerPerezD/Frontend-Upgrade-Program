import { mount } from "enzyme";
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Test in <LoginScreen/>', () => {
    

    const userDefault = {
        id: 1,
        name: 'Roger',
        email: 'roger@mail.com',
    }
    const setUser = jest.fn();
    const wrapper = mount( 
    <UserContext.Provider value={ { user: userDefault, setUser} }>  
        <LoginScreen/>
    </UserContext.Provider> );

    test('should show the component successfully', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });

    test('should execute setUser whit the argument expected', () => {
        const user= {
            id: 123,
            name: 'Roger',
            email: 'roger@mail.com'
        };

        const button = wrapper.find('button');
        button.simulate('click');

        expect( setUser ).toBeCalledWith( user );
    });
    
    
});
