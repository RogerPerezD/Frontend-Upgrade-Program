import { NotesAppBar } from './NotesAppBar'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { NotesState, Notes } from '../../reducers/notesReducer';
import { useFormNote } from '../../hooks/useFormNote';
import { useEffect, useRef } from 'react';
import { noteActive, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const { active:note }: NotesState = useSelector( (state: RootState) => state.notes);
    
    const [{body, title}, handleInputChange, reset] = useFormNote( {title: note?.title as string, body: note?.body as string} );

    // Mantemos la referencia del id
    const activeID = useRef( note?.id );

    useEffect(() => {
        // Si cambia el id, hacemos reset del fomr con los nuevos valores
        if (activeID.current !== note?.id) {
            reset( {title: note?.title as string, body: note?.body as string} );
            activeID.current = note?.id;
        }
    }, [note, activeID, reset]);

    // Update the current note in the store
    useEffect(() => {
        dispatch( noteActive({ ...note as Notes, title: title, body: body}) );
    }, [title, body, dispatch ]);
    
    const handleDelete = () =>{
        dispatch( startDeleting() );
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={ title }
                    onChange = { handleInputChange }
                    name ="title"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name ="body"
                    value={ body }
                    onChange = { handleInputChange }
                ></textarea>

                {
                    (note?.imageUrl) &&
                    <div className="notes__image">
                    <img 
                        src={note.imageUrl}
                        alt="imagen"
                    />
                    </div>
                }
            </div>

            <button 
            className='btn btn-danger'
            onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    )
}
