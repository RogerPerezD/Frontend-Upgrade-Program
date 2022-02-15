import { Provider } from 'react-redux';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { RootState } from '../../../store/store';
import { DispatchTypeNote, NotesState } from '../../../reducers/notesReducer';
import { UserState } from '../../../reducers/authReducer';
import { UIState, DispatchTypeUI } from '../../../reducers/uiReducer';
import { types } from '../../../types/types';


const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);

const initialState = {
    auth: {} as UserState,
    ui: {
        loading: false,
        msgError: ''
    } as UIState,
    notes: {} as NotesState
};

let store = mockStore(initialState);

describe('test in <RegisterScreen/>', () => { 
    const wrapper = mount(
        <MemoryRouter>
            <Provider store = { store }>
                <RegisterScreen/>
            </Provider>
        </MemoryRouter>
    );

    beforeEach(()=>{
        store.clearActions();
    });
    
    test('should display the component successfully', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('should exceute the proper actions', () => { 
        // const emailField = wrapper.find('input[name="email"]');

        // emailField.simulate('change', {
        //     currentTarget: {
        //         name: 'email',
        //         value: 'hola mundo'
        //     }
        // });

        // console.log(wrapper.find('input[name="email"]').html());
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is not valid'
        });


    });

    test('should show the error message in the component', () => { 
        const initialState = {
            auth: {} as UserState,
            ui: {
                loading: false,
                msgError: 'Email typed wrong'
            } as UIState,
            notes: {} as NotesState
        };
        
        let store = mockStore(initialState);

        const wrapper = mount(
            <MemoryRouter>
                <Provider store = { store }>
                    <RegisterScreen/>
                </Provider>
            </MemoryRouter>
        );

        expect( wrapper.find('.auth__alert-error').exists() ).toBe( true );
        expect( wrapper.find('.auth__alert-error').text().trim() ).toBe( initialState.ui.msgError)
    });
});