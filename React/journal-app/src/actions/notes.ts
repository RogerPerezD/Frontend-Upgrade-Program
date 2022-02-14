import { db } from '../firebase/firebaseConfig';
import { DispatchTypeNote, NotesAction, Notes, NotesState } from '../reducers/notesReducer';
import { types } from '../types/types';
import { RootState } from '../store/store';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

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
        dispatch( addNewNote({id, ...newNote}) );
        
    }
}

export const noteActive = ( note: Notes ): NotesAction =>{
    return {
        type: types.notesActive,
        payload: note
    }
}

const addNewNote = (note: Notes): NotesAction =>{
    return {
        type: types.notesAddNew,
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

        await db.doc(`${ uid }/journal/notes/${ id }`).update(noteToFirestore);

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

export const startUploadingFile = (file: File | Buffer) =>{
    return async (dispatch: DispatchTypeNote, getState: ()=> RootState) =>{
        const { active:activeNote }: NotesState = getState().notes;
        const { uid } = getState().auth;

        // Show loading modal
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () =>{
                Swal.showLoading()
            }
        });

        const fileUrl = await fileUpload( file );

        console.log(fileUrl,'ey aqui')
        
        activeNote!.imageUrl = fileUrl;

        const { id, ...noteToFirestore} = activeNote as Notes;

        await db.doc(`${ uid }/journal/notes/${ id }`).update(noteToFirestore);

        dispatch( refreshNote( activeNote as Notes ));

        // Close loading modal
        Swal.close();
        Swal.fire('Saved', activeNote?.title , 'success');
    }
}

export const startDeleting = () => {
    return async (dispatch: DispatchTypeNote, getState: ()=> RootState) =>{
        
        const { active:noteActive }: NotesState = getState().notes;
        const { uid } = getState().auth;

        await db.doc(`${ uid }/journal/notes/${ noteActive?.id }`).delete();

        dispatch( deleteNote(noteActive as Notes) );
    }
}

const deleteNote = (note: Notes): NotesAction =>{
    return {
        type: types.notesDelete,
        payload: note
    }
}

export const noteLogout = ():NotesAction => {
    return {
        type: types.notesLogoutCleaning
    }
}