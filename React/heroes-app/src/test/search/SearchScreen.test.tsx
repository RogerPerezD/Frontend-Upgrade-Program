import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { SearchScreen } from "../../components/search/SearchScreen";

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


    
});
