import 'animate.css';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';
import { RootState } from '../../store/store';


export const JournalScreen = () => {
    const { active } = useSelector((state: RootState) => state.notes);
    
    return (
        <div 
        className="journal__main-content animate__animated animate__fadeIn animate__faster"
        >
            <Sidebar/>
            <main>
                {
                    (active) ?
                    <NoteScreen/>
                    : <NothingSelected/>
                }
            </main>
        </div>
    );
};
