import thunk from 'redux-thunk';
import { RootState } from '../../../store/store';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startLogin } from '../../../actions/auth';
import { FormEvent } from 'react';
import { act } from 'react-dom/test-utils';

jest.mock('../../../actions/auth', ()=>({
    startLogin: jest.fn()
}))

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
    test('should display the component successfully', () => { 
        // expect(wrapper).toMatchSnapshot();
    });

    test('should call the dispatch login', () => { 
        const email = 'test@mail.com';
        const password = 'test123';
        wrapper.find('input[name="lEmail"]').simulate('change', {
            currentTarget: {
                value: email,
                name: 'lEmail'
            }
        }as FormEvent<HTMLInputElement>);

        wrapper.find('input[name="lPassword"]').simulate('change', {
            currentTarget: {
                value: password
            }
        });
        
        // console.log( wrapper.find('input[name="lEmail"]').html() );
        // const emailChange = wrapper.find('input[name="lEmail"]').prop('onChange');
        // const passwordChange = wrapper.find('input[name="lPassword"]').prop('onChange');
        // if (emailChange && passwordChange) {
        //     act(()=>{
        //         emailChange({
        //             currentTarget: {
        //                 value: email,
        //                 name: 'lEmail'
        //             }
        //         }as FormEvent<HTMLInputElement>);
        //     })
           
        //     wrapper.update();
        //     console.log( wrapper.find('input[name="lEmail"]').html() );
        //     act(() =>{
        //         passwordChange({
        //             currentTarget: {
        //                 value: password,
        //                 name: 'lPassword'
        //             }
        //         }as FormEvent<HTMLInputElement>);
        //     });
        
        // }
        // console.log( wrapper.find('input[name="lEmail"]').html() );
        // console.log( wrapper.find('input[name="lPassword"]').html() );


        
        const form = wrapper.find('form').get(0);
        form.props.onSubmit({
            preventDefault(){}
        });
        // console.log(form.props.onSubmit);

        expect( store.dispatch ).toHaveBeenCalled();
        // expect( startLogin ).toHaveBeenCalledWith( email, password);

    })
})