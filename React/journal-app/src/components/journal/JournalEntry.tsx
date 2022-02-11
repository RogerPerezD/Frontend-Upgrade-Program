import moment from "moment";
import { useDispatch } from 'react-redux';
import { Notes } from '../../reducers/notesReducer';
import { noteActive } from '../../actions/notes';

type JournalEntryProps = {
    id: string,
    title: string,
    body: string,
    date: number,
    imageUrl?: string
}

export const JournalEntry = ( {id,title, body, date, imageUrl}:JournalEntryProps ) => {
    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () =>{
        dispatch( noteActive({id, title, body, date, imageUrl} as Notes) );
    }
    
    return (
        <div className="journal__entry pointer" onClick={ handleEntryClick }>
            
            {
                imageUrl &&
                <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imageUrl})`
                }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>

        </div>
    )
}
