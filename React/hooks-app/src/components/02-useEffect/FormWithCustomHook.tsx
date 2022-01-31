
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';

export interface FieldsForm {
    name: string;
    email: string;
    password: string;
};

export const FormWithCustomHook = () => {

    const [formValues, handleInput] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email change');
    }, [email]);
    

    const handleSubmit = (e: FormEvent ) =>{
        e.preventDefault();
        console.log(formValues);
    }

  return(
      <form onSubmit={ handleSubmit }>
        <h1> Hola </h1>
        <hr />

        <div className='form-group'>
            <input type="text" 
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInput }
                    id='name'
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

        <div className='form-group'>
            <input type="password" 
                    name="password"
                    className='form-control'
                    placeholder='*******'
                    value={ password }
                    onChange={ handleInput }
            />
        </div>

        <button type="submit" className='btn btn-primary'>Send</button>

      </form>
  );
};
