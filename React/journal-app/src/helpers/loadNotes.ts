import { db } from "../firebase/firebaseConfig"
import { Notes } from '../reducers/notesReducer';

export const loadNotes = async ( id: string ) => {
    const docRef = await db.collection(`${id}/journal/notes`).get();
    const notes: Notes[] = [];
    // console.log(docRef);

    docRef.forEach( (element) => {
        notes.push({
            id: element.id,
            ...element.data()
        } as Notes);
    });

    return notes;
}