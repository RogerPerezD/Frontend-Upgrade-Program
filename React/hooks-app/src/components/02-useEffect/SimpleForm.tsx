
import React, { FormEvent, useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [state, setState] = useState(({
        name: '',
        email: ''
    }));

    useEffect(() => {
        // console.log('se lanzo useEfect');
    }, [ state ]);

    const { name, email } = state;

    const handleInput = ( { currentTarget }: FormEvent<HTMLInputElement> ) =>{
        setState({
            ...state,
            [ currentTarget.name ]: currentTarget.value
        });
    }
  return(
      <>
        <h1> useEfect </h1>
        <hr />

        <div className='form-group'>
            <input type="text" 
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInput }
            />
        </div>

        <div className='form-group'>
            <input type="text" 
                    name="email"
                    className='form-control'
                    placeholder='email@mail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInput }
            />
        </div>

        { ( name === 'roger') && <Message />}
      </>
  );
};
