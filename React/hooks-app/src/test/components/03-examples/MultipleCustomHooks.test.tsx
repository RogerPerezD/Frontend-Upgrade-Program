import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import useCounter from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Test in <MultipleCustomHooks/>', () => {
    const mockuseFetch= useFetch as jest.MockedFunction<typeof useFetch>;
    const mockuseCounter= useCounter as jest.MockedFunction<typeof useCounter>;

    beforeEach(()=>{
        mockuseCounter.mockReturnValue({
            state: 10,
            increment: () => {},
            decrement: ()=> {},
            reset: ()=> {}
        });
    });
    
    
    test('should show the component succesfully', () => {
    
        mockuseFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultipleCustomHooks />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the information', () => {

        mockuseFetch.mockReturnValue({
            data: [{
                author: 'Roger',
                quote: 'Hello world'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks />);
        const author =  wrapper.find('footer').text().trim();
        const quote =  wrapper.find('.mb-3').text().trim();

        expect( wrapper.find('.alert').exists()).toBe( false );
        expect(quote).toBe( 'Hello world' );
        expect(author).toBe( 'Roger' );
    });

});