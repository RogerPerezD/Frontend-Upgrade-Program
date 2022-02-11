import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NotesState, Notes } from '../../reducers/notesReducer';
import { startSaveNote, startUploadingFile } from '../../actions/notes';
import { ChangeEvent, useRef } from 'react';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active }:NotesState = useSelector( ( state: RootState) => state.notes)

    const inputFile = useRef<HTMLInputElement>(null);

    const handleSave = () =>{
        dispatch( startSaveNote(active as Notes) );
    }

    const handlePictureClick = () =>{
        console.log('click');
        inputFile.current?.click();
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files;
        if (file) {
            dispatch( startUploadingFile(file[0]) );
        } 
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input 
            type="file"  
            id="file" 
            style={{ display: "none"}}
            onChange={ handleFileChange }
            ref = { inputFile }
            />

            <div>
                <button 
                className="btn"
                onClick={ handlePictureClick }>
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
