import thunk from 'redux-thunk';
import { RootState } from '../../../store/store';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CalendarScreen } from '../../../components/calendar/CalendarScreen';
import { EventState } from '../../../reducers/calendarReducer';
import { messages } from '../../../helpers/calendar-messages';
import { act } from 'react-dom/test-utils';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

jest.mock('../../../actions/events', ()=>({
    eventSetActive: jest.fn(),
    eventStartLoading: jest.fn()
}))

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);

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

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
        <MemoryRouter>
            <Provider store = { store }>
                <CalendarScreen/>
            </Provider>
        </MemoryRouter>
    );

    Storage.prototype.setItem = jest.fn();
    
describe('test in <CalendarScreen/>', () => { 
    test('should show the component successfully', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('should display the actions in the calendar successfully', () => { 

        const calendar = wrapper.find('Calendar');

        const calendarMessages = calendar.prop('messages');

        expect( calendarMessages ).toEqual( messages );

        const doubleClick = calendar.prop('onDoubleClickEvent')! as Function;

        act(()=>{
            doubleClick();
        });

        expect( store.dispatch ).toHaveBeenCalled();
        expect( store.dispatch ).toHaveBeenCalledWith({
            type: types.uiOpenModal
        });

        const onSelectEvent = calendar.prop('onSelectEvent')! as Function;
        const event = {
            id: '123',
            title: 'Test event',
            notes: 'Metteing',
            start: new Date().getTime(),
            end: new Date().getTime(),
            user: {
                name: 'Roger',
                _id: '123'
            }
        }
        act(()=>{
            onSelectEvent(event);
        });
        expect( eventSetActive ).toHaveBeenCalledWith( event );

        const onView = calendar.prop('onView')! as Function;

        act(()=>{
            onView('week');
        })

        expect( localStorage.setItem ).toHaveBeenCalledWith('lastView', 'week');

    })
})