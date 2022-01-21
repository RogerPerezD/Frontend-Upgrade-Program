import { useState } from "react";



const useCounter = ( initialState: number = 0) => {
  
    const [state, setState] = useState(initialState);

    const increment = ( factor: number = 1) =>{
        setState( state + factor);
    }

    const decrement = ( factor: number = 1) =>{
        setState( state - factor);
    }

    const reset = () =>{
        setState( initialState );
    }

    return {
        state,
        increment,
        decrement,
        reset
    };
};

export default useCounter;
