import { mount } from "enzyme";
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../components/routers/AppRouter';

describe('Test in AppRouter', () => {
    
    

    test('should show login screen if the user is not auth', () => {
        const contextValue = {
            user: {
                logged: false
            },
            dispatch: jest.fn
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('LoginScreen');
    });

    test('should show the Dashboard screen if the user is auth', () => {
        const contextValue = {
            user: {
                name: 'Carol',
                logged: true
            },
            dispatch: jest.fn
        };

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists()).toBe(true);
    });
    
});
