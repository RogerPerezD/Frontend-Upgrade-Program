import { db } from '../firebase/firebaseConfig';
import { DispatchTypeNote, NotesAction, Notes } from '../reducers/notesReducer';
import { types } from '../types/types';
import { RootState } from '../store/store';
import { DispatchTypeUser } from '../reducers/authReducer';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';

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

export const noteActive = ( note: Notes ): NotesAction =>{
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

const setNotes = (notes: Notes[]): NotesAction => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startSaveNote = ( note: Notes) => {
    return async (dispatch: DispatchTypeNote, getState: ()=> RootState) => {
        const { uid } = getState().auth;

        if (!note.imageUrl) {
            delete note.imageUrl;
        }

        const { id, ...noteToFirestore} = note;
        // console.log(noteToFirestore);

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFirestore);

        dispatch( refreshNote( note ));

        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (note: Notes): NotesAction =>{
    return {
        type: types.notesUpdated,
        payload: note
    }
}

// const addNewNote = (note: Notes): NotesAction =>{
//     return {
//         type: types.notesAddNew,
//         payload: note
//     }
// }
