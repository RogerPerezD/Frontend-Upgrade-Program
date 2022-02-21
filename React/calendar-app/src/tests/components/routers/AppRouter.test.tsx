import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { RootState } from '../../../store/store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from '../../../components/routers/AppRouter';
import { EventState } from '../../../reducers/calendarReducer';

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);

describe('test in AppRouter', () => { 

    test('should display wait...', () => { 
        const initState = {
            auth: {
                checking: true
            }
        } as RootState;
        const store = mockStore(initState);
        const wrapper = mount(
                <Provider store = { store }>
                    <AppRouter/>
                </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('h5').text().trim()).toBe('Wait....');
    });

    test('should display public route (LoginScreen)', () => { 
        const initState = {
            auth: {
                checking: false
            }
        } as RootState;
        const store = mockStore(initState);
        const wrapper = mount(
                <Provider store = { store }>
                    <AppRouter/>
                </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.login-container').exists() ).toBe(true);
    });

    test('should display private route (CalendarScreen)', () => { 
        const initialStateUser = {
            checking: false,
            user: {
                name: 'Roger',
                _id: '123'
            }
        }

        const initialStateEvents: EventState = {
                events: [],
                activeEvent: null
        }

        const initState = {
            auth: initialStateUser,
            calendar: initialStateEvents,
            ui: {
                modalOpen: false
            }
        } as RootState;

        const store = mockStore(initState);
        const wrapper = mount(
                <Provider store = { store }>
                    <AppRouter/>
                </Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.calendar-screen').exists() ).toBe(true);
    });
})