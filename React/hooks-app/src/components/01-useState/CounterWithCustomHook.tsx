
import React from 'react';
import useCounter from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

const  {state, increment, decrement, reset }= useCounter();

return (
    <>
        <h1>Counter with custom hook: { state }</h1>
        <hr />

        <button className='btn'
        onClick={ () =>{ increment() }}> +1 </button>
        <button className='btn'
        onClick={ reset }> Reset </button>
        <button className='btn'
        onClick={ () =>{ decrement(5) }}> -1 </button>
    </>
);
};
