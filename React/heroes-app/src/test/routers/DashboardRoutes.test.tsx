import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../components/routers/DashboardRoutes";


describe('Test in <DashboarRoutes/>', () => {
    const contextValue = {
        user: {
            name: 'Fer',
            logged: true
        },
        dispatch: jest.fn
    };

    test('should show the component successfully - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/marvel']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Fer');
        expect( wrapper.find('h1').text().trim() ).toBe('MarvelScreen');
    });

    test('should show the component successfully - DC', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ ['/dc']}>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe('DCScreen');
    });
    
});
