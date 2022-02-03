import { mount } from "enzyme";
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../auth/authContext";
import { SearchScreen } from "../../components/search/SearchScreen";
import { FormEvent } from 'react';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Test in <SearchScreen/>', () => {

    test('should show the component whit default values', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('.alert').text().trim()).toBe('Search a hero')
    });

    test('should show Batman and the input whit the queyString value', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value')).toBe('batman');
    });


    test('should show a message error if doesnt exist the heroe', () => {
        const query = 'asddfdsf';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${query}`]}>
                <SearchScreen/>
            </MemoryRouter>
        );

        expect( wrapper.find('.alert-danger').text().trim()).toBe(`There aren't results for: ${query}`);
    });
    
    test('should show the correct route', () => {
        const query = 'spider';
        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search`]}>
                <SearchScreen/>
            </MemoryRouter>
        );

        const input = wrapper.find('input').prop('onChange');
        if(input) {
            input({
            currentTarget: {
                name: 'searchText',
                value: query
            } 
        } as FormEvent<HTMLInputElement>);
        }
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(mockNavigate).toBeCalled();
        expect(mockNavigate).toBeCalledWith(`?q=${query}`);

    });
    
});
