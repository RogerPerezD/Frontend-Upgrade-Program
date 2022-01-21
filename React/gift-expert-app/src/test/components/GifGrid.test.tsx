import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { Gif } from '../../helpers/getGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {

    const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<typeof useFetchGifs>;
    
    test('should show the component succesfully', () => {
        
        
        mockUseFetchGifs.mockReturnValue({
            data: null,
            loading: true
        });
        const wrapper = shallow( <GifGrid category='naruto'/>);

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the items when the images are loaded whit useFetchGifs', () => {
        
        const gifs: Gif = [{
            id: 'asd',
            title: 'Dreagon ball',
            url: 'https://localhost/cosa.jpg'
        }];
        
        mockUseFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category='naruto'/>);

        expect( wrapper.find('p').exists()).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

    


});