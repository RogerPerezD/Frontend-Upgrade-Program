
import React, { useState } from 'react';
import './counter.css'

export const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2} = state;
  return (<>
    <h1>Counter App</h1>
    <h3>Counter one { counter1 }</h3>
    <h3>Counter two { counter2 }</h3>
    <button className='btn btn-primary'
    onClick={ () =>{
        setState( {
            ...state,
            counter1: counter1 + 1
        });
    }}>
        +1
    </button>
  </>);
};
