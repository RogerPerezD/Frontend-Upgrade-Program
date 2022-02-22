import 'jest-canvas-mock';
import moment from 'moment';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { RootState } from '../../../store/store';
import { EventState } from '../../../reducers/calendarReducer';
import { CalendarModal } from '../../../components/calendar/CalendarModal';
import { eventStartUpdate, eventClearActiveEvent, eventStartAddNew } from '../../../actions/events';
import { act } from 'react-dom/test-utils';
import Swal from 'sweetalert2';

jest.mock('sweetalert2', ()=>({
    fire: jest.fn()
}));

jest.mock('../../../actions/events', ()=>({
    eventStartUpdate: jest.fn(),
    eventClearActiveEvent: jest.fn(),
    eventStartAddNew: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore<RootState>(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const future = now.clone().add(1,'hours');

const user = {
    name: 'Roger',
    _id: '123'
}
const activeEvent = {
    id: '123',
    title: 'Some title',
    notes: 'some note',
    start: now.toDate(),
    end: future.toDate(),
    user
};

const initialStateUser = {
    checking: false,
    user
}

const initialStateEvents: EventState = {
        events: [],
        activeEvent
}

const initState = {
    auth: initialStateUser,
    calendar: initialStateEvents,
    ui: {
        modalOpen: true
    }
} as RootState;

const store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
        <Provider store = { store }>
            <CalendarModal/>
        </Provider>
);

describe('test in <CalendarModal/>', () => { 
    beforeEach(()=>{
        jest.clearAllMocks();
    })
    

    test('should display modal successfully', () => { 

        // expect( wrapper.find('.modal').exists() ).toBe( true );
        expect( wrapper.find('Modal').prop('isOpen')).toBe( true );
    });

    test('should call to the actions update and close modal', () => { 
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const {user, ...event} = activeEvent

        expect( eventStartUpdate ).toHaveBeenCalledWith( event );
        expect( eventClearActiveEvent ).toHaveBeenCalled();
    });

    test('should show an error messages if the field title is missing', () => { 
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe( true );
    });

    test('should first', () => {  
        const user = {
            name: 'Roger',
            _id: '123'
        }
        const initialStateUser = {
            checking: false,
            user
        }
        const initialStateEvents: EventState = {
            events: [],
            activeEvent: null
        }
        const initState = {                 
            auth: initialStateUser,
            calendar: initialStateEvents,
            ui: {
                modalOpen: true
            }
        } as RootState;
        
        const store = mockStore(initState);
        store.dispatch = jest.fn();
        
        const wrapper = mount(
                <Provider store = { store }>
                    <CalendarModal/>
                </Provider>
        );
        const title = 'Hello Test';
        wrapper.find('input[name="title"]').getDOMNode<HTMLInputElement>().value = title;
        wrapper.find('input[name="title"]').simulate('change');

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( eventStartAddNew ).toHaveBeenCalledWith({
            end: expect.any(Date), 
            notes: expect.any(String), 
            start: expect.any(Date), 
            title: title
        });

        expect( eventClearActiveEvent ).toHaveBeenCalled();

    });

    test('should validate the dates', () => { 
        const title = 'Hello Test';
        wrapper.find('input[name="title"]').getDOMNode<HTMLInputElement>().value = title;
        wrapper.find('input[name="title"]').simulate('change');

        const today = new Date();

        const dateChange = wrapper.find('DateTimePicker').at(1).prop('onChange')!;

        act(()=>{
            dateChange( today as any);
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect( Swal.fire ).toHaveBeenCalledWith("Error", "La fecha fin debe de ser mayor a la fecha de inicio", "error");

    });
});