import thunk from 'redux-thunk';
import { RootState } from '../../../store/store';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin, startRegister } from '../../../actions/auth';
import { FormEvent } from 'react';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2';

jest.mock('../../../actions/auth', ()=>({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));

jest.mock('sweetalert2', ()=>({
    fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);
const initState = {} as RootState;
let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
        <MemoryRouter>
            <Provider store = { store }>
                <LoginScreen/>
            </Provider>
        </MemoryRouter>
    );

describe('test in <LoginScreen/>', () => { 
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    test('should display the component successfully', () => { 
        // expect(wrapper).toMatchSnapshot();
    });

    test('should call the dispatch login', () => { 
        const email = 'test@mail.com';
        const password = 'test123';

        wrapper.find('input[name="lEmail"]').getDOMNode<HTMLInputElement>().value = email;
        wrapper.find('input[name="lEmail"]').simulate('change');

        wrapper.find('input[name="lPassword"]').getDOMNode<HTMLInputElement>().value = password;
        wrapper.find('input[name="lPassword"]').simulate('change');

        const form = wrapper.find('form').get(0);
        form.props.onSubmit({
            preventDefault(){}
        });

        expect( store.dispatch ).toHaveBeenCalled();
        expect( startLogin ).toHaveBeenCalledWith(email, password);

    });

    test('there is no register if the passwords doestn match', () => { 
        const passwordChange = wrapper.find('input[name="rPassword"]').prop('onChange')!;
            act(()=>{
                passwordChange({
                    currentTarget: {
                        value: '123',
                        name: 'rPassword'
                    }
                }as FormEvent<HTMLInputElement>)
            });

        wrapper.find('form').at(1).simulate('submit');
        expect(store.dispatch).toBeCalledTimes(0);
        expect(startRegister).not.toHaveBeenCalled();
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Passwords must match','error');
    });
})