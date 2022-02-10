import { NotesAppBar } from './NotesAppBar'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NotesState } from '../../reducers/notesReducer';
import { useFormNote } from '../../hooks/useFormNote';
import { useEffect, useRef } from 'react';

export const NoteScreen = () => {
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
    }, [note, activeID])
    
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
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                    </div>
                }


            </div>

        </div>
    )
}
