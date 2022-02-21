import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { RootState } from '../../../store/store';
import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';
import { eventStartDelete } from '../../../actions/events';
// jest.mock('../../../actions/events', ()=>{
//     return {
//         eventStartDelete: jest.fn()
//     }
// });
jest.mock('../../../actions/events');
// Our mock of add is now fully typed
const mockDelete = eventStartDelete as jest.MockedFunction<typeof eventStartDelete>;

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);
const initState = {} as RootState;
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
        <MemoryRouter>
            <Provider store = { store }>
                <DeleteEventFab/>
            </Provider>
        </MemoryRouter>
    );
describe('test in DeleteEventFab', () => { 

    test('should show the component successfully', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('should call eventStartDelete when click it', () => { 

        
        wrapper.find('button').simulate('click');

        expect( store.dispatch ).toBeCalled();
        expect(mockDelete).toHaveBeenCalled();
    })
})