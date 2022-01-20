import { mount, shallow, ShallowWrapper } from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe('Test sobre GifGridItem', () => {

    let  wrapper: ShallowWrapper;
    let id: string; 
    let url: string; 
    let title: string; 


    beforeEach( () =>{
        id = '122';
        url = 'https://localhost/algo.jpg';
        title = 'naruto';
        wrapper = shallow( <GifGridItem id={ id } title={ title } url={ url }/>);
    });
    
    test('should show the component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should has a paragraph whit the title', () => {
        const paragraph = wrapper.find('p');
        expect(paragraph.text()).toBe( title );
    });

    test('should element img contain a src and alt whit the title', () => {
        const img = wrapper.find('img');
        const src = img.prop('src');
        const alt = img.props().alt;

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('should  have animate__bounce as a class', () => {
        const div = wrapper.find('div');
        const classDiv = div.props().className;
        const isClassInDiv = classDiv?.includes('animate__bounce');

        expect( isClassInDiv ).toBe( true );
    });

});