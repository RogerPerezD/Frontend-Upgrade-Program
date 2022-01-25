import React from 'react';

interface PropsShowIncrement{
    increment: () => void;
}

export const ShowIncrement: React.FC<PropsShowIncrement> = React.memo(( {increment}) => {
 
    console.log('Me volvi a generar :(');
    return (
    <button
    className='btn btn-primary'
    onClick={() =>{ increment() }}>
        +1
    </button>);
});
