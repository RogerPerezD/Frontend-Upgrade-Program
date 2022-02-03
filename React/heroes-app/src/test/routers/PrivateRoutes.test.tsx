import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from '../../auth/authContext';
import { PrivateRouter } from '../../components/routers/PrivateRoutes';

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <h1>Exit</h1>
}));

describe('Test in PrivateRoutes', () => {

    
    
    test('should display the component if the user is auht  and store the route in the localStorage', () => {
        const contextValue = {
            user: {
                name:'Roger',
                logged: true
            },
            dispatch: jest.fn()
        }
    
        Storage.prototype.setItem = jest.fn();
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter>
                        <h1>Private Route</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );


        expect( wrapper.text().trim() ).toBe('Private Route');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastRoute','/');
    });

    test('should not display the component if the user is not auth', () => {
        const contextValue = {
            user: {
                name:'Roger',
                logged: false
            },
            dispatch: jest.fn()
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter>
                        <h1>Private Route</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // Al no estar auth, llamara al Navigate
        // al que le hicimos un mock, y ahora retorna Exit
        expect( wrapper.text().trim() ).toBe('Exit')
    });

    
    
    
});
