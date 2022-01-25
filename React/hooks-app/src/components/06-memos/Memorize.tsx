import React, { useState } from 'react';
import { Small } from './Small';
import useCounter from '../../hooks/useCounter';
// import '../05-useLayoutEffect/layout.css'

export const Memorize = () => {

    const { state: counter, increment}= useCounter(10);
    const [show, setShow] = useState<boolean>(false);

    return (
        <div>
        <h1>Counter Memo { <Small value={ counter }/>}</h1>
        <hr />
        <button
        className='btn btn-primary ml-3'
        onClick={ () => { increment()}}>+1</button>

        <button
        className='btn btn-primary'
        onClick={ () => { setShow(!show)}}
        >Show/Hide {JSON.stringify(show)}</button>
        </div>
    );
};
