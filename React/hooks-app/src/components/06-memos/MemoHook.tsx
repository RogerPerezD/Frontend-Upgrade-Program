import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import useCounter from '../../hooks/useCounter';

export const MemoHook = () => {

    const { state: counter, increment}= useCounter(5000);
    const [show, setShow] = useState<boolean>(false);

    const returnProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ]);

    
    return (
        <div>
        <h1>Memo Hook</h1>
        <h3>Counter Memo <small> {counter} </small></h3>
        <hr />
        <p>{ returnProcesoPesado }</p>

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
