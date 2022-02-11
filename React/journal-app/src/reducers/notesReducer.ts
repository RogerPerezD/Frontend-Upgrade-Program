import { types } from '../types/types';

export interface Notes{
    id: string;
    title: string;
    body: string;
    date: number;
    imageUrl?: string;
}

export type NotesState = {
    notes: Notes[],
    active: Notes | null,
}

export type NotesAction = {
    type: string,
    payload?: Notes | Notes []
}

const initialState: NotesState = {
    notes: [],
    active: null
}

export type DispatchTypeNote = (args: NotesAction) => NotesAction;

export const notesReducer = ( state = initialState, action: NotesAction): NotesState =>{
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    // Lo hacemos asi para romper la referencia
                    ...action.payload as Notes
                }
            }
        case types.notesAddNew:
        return {
            ...state,
            notes: [...state.notes, action.payload as Notes]
        }
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload as Notes[]]
            }
        case types.notesUpdated:
            const noteUpdate:Notes = action.payload as Notes;
            return {
                ...state,
                notes: state.notes.map( ( note: Notes) => (
                    ( note.id === noteUpdate.id) ? 
                    noteUpdate
                    : note
                    ))
            }
        case types.notesDelete:
            const noteToDelete: Notes = action.payload as Notes;
            return {
                ...state,
                active: null,
                notes: state.notes.filter( (note: Notes) => (note.id !== noteToDelete.id))
            }
        case types.notesLogoutCleaning:
            return initialState;
        default:
            return state;
    }

}
