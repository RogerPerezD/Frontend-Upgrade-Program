import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';


export const RealExampleRef = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleClick = () =>{
        setShow( !show );
    }

    return (
        <>
        <h1>Real Example</h1>
        <hr />
        { show && <MultipleCustomHooks/>}
        <button className='btn btn-primary mt-5' 
        onClick={ handleClick }>Hide/Show</button>
        </>
    );
};
