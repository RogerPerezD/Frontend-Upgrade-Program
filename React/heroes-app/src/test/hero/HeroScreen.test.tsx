import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { HeroScreen } from "../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Test in HeroScreen', () => {
  
    test('should not show HeroScreen if there are not a hero in the url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroScreen/>}/>
                    <Route path='/' element={<h1>There are not heroes</h1>}/>
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h1').text().trim() ).toBe('There are not heroes')
    });

    test('should first', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeID' element={<HeroScreen/>}/>
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists()).toBe(true);
    });
    
    test('should return to the previus screen', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeID' element={<HeroScreen/>}/>
                </Routes>
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');

        expect( mockNavigate ).toBeCalledWith(-1)
    });
    
    
});
