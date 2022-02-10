import React from 'react'
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NotesState } from '../../reducers/notesReducer';

export const JournalEntries = () => {

    const { notes }: NotesState = useSelector((state: RootState) => state.notes);


    return (
        <div className="journal__entries">
            {
                notes.map( (note) => (
                    <JournalEntry 
                    key={ note.id }
                    { ...note } 
                    />
                ))
            } 

        </div> 
    )
}
