import { db } from '../firebase/firebaseConfig';
import { DispatchTypeNote, NotesAction, Notes } from '../reducers/notesReducer';
import { types } from '../types/types';
import { RootState } from '../store/store';
import { DispatchTypeUser } from '../reducers/authReducer';
import { loadNotes } from '../helpers/loadNotes';

export const startNewNote = (date: number) => {
    return async (dispatch: DispatchTypeNote, getState: ()=> RootState) => {
        const { auth } = getState();
        const newNote = {
            title: '',
            body: '',
            date: date
        }
        const docRef = await db.collection(`${auth.uid}/journal/notes`).add( newNote );

        const id = docRef.id;
        dispatch( noteActive({id, ...newNote}) );
        
    }
}

const noteActive = ( note: Notes ) =>{
    return {
        type: types.notesActive,
        payload: note
    }
}

export const startLoadingNotes = () =>{
    return async (dispatch: DispatchTypeNote, getState: ()=> RootState) => {
        const { auth } = getState();
        const notes = await loadNotes( auth.uid );
        dispatch( setNotes( notes ) );
    }
}

const setNotes = (notes: Notes[]) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

const addNewNote = (note: Notes): NotesAction =>{
    return {
        type: types.notesAddNew,
        payload: note
    }
}
