import '../../css/modal.css';
import Modal from 'react-modal';
import { useState } from 'react';

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

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);

    const closeModal = ()=>{
        console.log('clossing...');
        setIsOpen(false);
    }

    return (
        <Modal
            isOpen={ isOpen }
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1>Hola mundo</h1>
            <hr />
            <span>Hola agains..</span>
        </Modal>
    )
}
