import React, { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick  = () =>{
        inputRef.current?.select();
    }

  return (<div>
      <h1>Focus Screen</h1>

      <hr />

      <input 
      type="text"
      className='form-control'
      placeholder='Su nombre' 
      ref={ inputRef }
      />

    <button 
    className='btn btn-primary mt-3'
    onClick={ handleClick }>Click</button>

  </div>);
};
