import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NotesState, Notes } from '../../reducers/notesReducer';
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active }:NotesState = useSelector( ( state: RootState) => state.notes)

    const handleSave = () =>{
        dispatch( startSaveNote(active as Notes) );
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                className="btn"
                onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
