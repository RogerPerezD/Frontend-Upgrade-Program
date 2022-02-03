import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { LoginScreen } from "../../components/login/LoginScreen";
import { types } from "../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Test in LoginScreen', () => {
    
    test('should make match whit the snapshot', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/login']}>
                <LoginScreen/>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should does the dispatch and navigation', () => {
        const dispatch = jest.fn();
        const contextValue = {
            user: {
                logged: false
            },
            dispatch
        }

        const action = {
            type: types.login,
            payload: {
                name: 'Rogelio',
                logged: true
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <LoginScreen/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Simulate default behaivor
        wrapper.find('button').simulate('click');

        expect( dispatch ).toBeCalledWith( action );

        expect(mockNavigate).toBeCalledWith('/marvel', {
            replace: true
        });

        // Simulate had a paht in the localStorage
        localStorage.setItem('lastRoute','/dc');

        wrapper.find('button').simulate('click');

        expect(mockNavigate).toBeCalledWith('/dc', {
            replace: true
        });
    });
    
    
});
