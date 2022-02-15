import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { RootState } from '../../store/store';
import { UserState } from '../../reducers/authReducer';
import { UIState } from '../../reducers/uiReducer';
import { NotesState, Notes } from '../../reducers/notesReducer';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from '../../routers/AppRouter';
import {firebase} from '../../firebase/firebaseConfig';
import { act } from 'react-dom/test-utils';
import { login } from '../../actions/auth';

jest.mock('../../actions/auth');

const mockLogin = login as jest.MockedFunction<typeof login>;


const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);

const initialState = {
    auth: {} as UserState,
    ui: {
        loading: false,
        msgError: ''
    } as UIState,
    notes: {
        active: {
            id:'12sd',
            body:'hola',
            title:'titulo',
            date: 23432
        },
        notes: [] as Notes[]
    } as NotesState
};

let store = mockStore(initialState);
store.dispatch = jest.fn();

describe('test in <AppRouter/>', () => { 
    // beforeEach(()=>{
    //     store = mockStore(initialState);
    // });

    // test('should show wait if the user is not auth', () => { 
    //     const wrapper = mount(
    //         <MemoryRouter>
    //             <Provider store = { store }>
    //                 <AppRouter/>
    //             </Provider>
    //         </MemoryRouter>
    //     );
    //     expect( wrapper ).toMatchSnapshot();
    // });

    test('should show the app if the user is auth', async() => { 

        let user;
        await act(async() =>{
            
            const wrapper = mount(
                <MemoryRouter>
                    <Provider store = { store }>
                        <AppRouter/>
                    </Provider>
                </MemoryRouter>
            );

            const userCred = await firebase.auth().signInWithEmailAndPassword('test@mail.com','1234567');
            user = userCred.user;
            // await user?.updateProfile({ displayName: 'Roger' });
            // console.log(user?.displayName, 'Hoa');
            
        });

        expect( mockLogin ).toHaveBeenCalled();
    });
 })