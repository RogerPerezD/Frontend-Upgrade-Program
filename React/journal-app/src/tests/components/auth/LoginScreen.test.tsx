import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { RootState } from '../../../store/store';
import { DispatchTypeNote, NotesState } from '../../../reducers/notesReducer';
import { UIState } from '../../../reducers/uiReducer';
import { MemoryRouter } from 'react-router-dom';
import { UserState } from '../../../reducers/authReducer';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';
jest.mock('../../../actions/auth');

const mockStartGoogleLogin = startGoogleLogin as jest.MockedFunction<typeof startGoogleLogin>;
const mockStartLoginEmailPassword = startLoginEmailPassword as jest.MockedFunction<typeof startLoginEmailPassword>;

const middlewares = [ thunk ];
const mockStore = configureStore<RootState, DispatchTypeNote>(middlewares);

const initialState = {
    auth: {} as UserState,
    ui: {
        loading: false,
        msgError: ''
    } as UIState,
    notes: {} as NotesState
};

let store = mockStore(initialState);
store.dispatch = jest.fn();


describe('test in <LoginScreen/>', () => { 

    beforeEach(()=>{
        store = mockStore(initialState);
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <MemoryRouter>
            <Provider store = { store }>
                <LoginScreen/>
            </Provider>
        </MemoryRouter>
    );

    test('should display the component successfully', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('should execute the action of startGoogleLogin', () => { 

        const btnGoogle = wrapper.find('.google-btn');
        btnGoogle.simulate('click'); 

        expect( mockStartGoogleLogin ).toHaveBeenCalled();
        
    })

    test('should execute the action of handleLogin', () => { 
        const formLogin = wrapper.find('form');
        formLogin.simulate('submit');
        expect( mockStartLoginEmailPassword ).toBeCalledWith('rogi@mail.com','123456');
    });
    
})