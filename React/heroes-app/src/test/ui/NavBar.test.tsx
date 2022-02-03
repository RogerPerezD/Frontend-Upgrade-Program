import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { Navbar } from "../../components/ui/NavBar";
import { MemoryRouter } from 'react-router-dom';
import { MouseEvent } from "react";
import { types } from "../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Test in NavBar', () => {

    const dispatch = jest.fn();
    const contextValue = {
        user: {
            name: 'Roger',
            logged: true
        },
        dispatch
    }
    
    test('should show the component successfully', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>                
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('.text-info').text().trim() ).toBe( 'Roger' );
            
    });

    test('should call logout, then call navigate and dispatch', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>                
            </AuthContext.Provider>
        );

        const handleLogout = wrapper.find('button').prop('onClick');

        if (handleLogout) {
            handleLogout({} as MouseEvent<HTMLButtonElement>);
        }

        expect(dispatch).toBeCalled();
        expect(dispatch).toBeCalledWith({
            type: types.logout
        });

        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith('/login', {
            replace: true
        });

    });
    
    
});
