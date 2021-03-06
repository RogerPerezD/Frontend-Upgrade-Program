import '../../css/modal.css';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { closeModalAction } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
}

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const future = now.clone().add(1,'hours');

export interface EventForm {
    title: string;
    notes: string;
    start: Date;
    end: Date;
};

const initialState: EventForm = {
    title: '',
    notes: '',
    start: now.toDate(),
    end: future.toDate()
}
export const CalendarModal = () => {

    const dispatch = useDispatch();
    const { modalOpen } = useSelector((state: RootState) => state.ui);
    const { activeEvent } = useSelector((state: RootState) => state.calendar);

    const [dateStart, setDateStart] = useState<Date>(now.toDate());
    const [dateEnd, setDateEnd] = useState<Date>(future.toDate());
    const [formValues, setFormValues] = useState<EventForm>(initialState);
    const [titleValid, setTitleValid] = useState(true);

    const { notes, title, start, end } = formValues;

    useEffect(() => {
        if (activeEvent) {
            const {user, ...eventData} =  activeEvent;
            setFormValues( eventData );
        }else{
            setFormValues( initialState );
        }
    }, [activeEvent])
    

    const handleInputChange = ({ currentTarget }: FormEvent<(HTMLInputElement|HTMLTextAreaElement)>)=>{
        // console.log(currentTarget.value);
        setFormValues({
            ...formValues,
            [currentTarget.name]: currentTarget.value
        })
    }

    const closeModal = ()=>{
        // console.log('clossing...');
        setFormValues( initialState );
        dispatch( eventClearActiveEvent() );
        dispatch( closeModalAction() );
    }

    const handleStartDateChange = ( start: Date )=>{
        console.log(start);
        setDateStart(start);
        setFormValues({
            ...formValues,
            start
        });
    }

    const handleEndDateChange = ( end: Date )=>{
        console.log(end);
        setDateEnd(end);
        setFormValues({
            ...formValues,
            end
        });
    }

    const handleSubmitForm =(e: FormEvent) =>{
        e.preventDefault();
        const momentStart = moment( start );
        const momentEnd = moment( end );
        console.log(formValues);
        if (momentStart.isSameOrAfter( momentEnd, 'hour' )) {
            return Swal.fire(
                'Error',
                'La fecha fin debe de ser mayor a la fecha de inicio',
                'error'
            );
        }

        if (title.trim().length < 2) {
            return setTitleValid(false);
        }
        setTitleValid(true);

        if (activeEvent) {
            // const {user} =  activeEvent;
            dispatch( eventStartUpdate( formValues ));
        }else{
            dispatch( eventStartAddNew( formValues ) );
        }
        closeModal();
    }

    const aria = process.env.NODE_ENV === 'test' ? false : true;


    return (
        <Modal
            isOpen={ modalOpen }
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            ariaHideApp= { aria }
        >
            <h1> {(activeEvent) ? 'Edit Event' : 'Add New Event'} </h1>
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker 
                        onChange={ handleStartDateChange } 
                        value={ dateStart } 
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker 
                        onChange={ handleEndDateChange } 
                        value={ dateEnd } 
                        className="form-control"
                        minDate={ dateStart }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${ !titleValid && 'is-invalid'}`}
                        placeholder="T??tulo del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripci??n corta</small>
                </div>

                <div className="form-group">
                    <textarea  
                        className="form-control"
                        placeholder="Notas"
                        rows={5}
                        name="notes"
                        value={notes}
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Informaci??n adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block w-100 mt-5"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
