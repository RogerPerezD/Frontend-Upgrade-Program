import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

  const { setUser } = useContext(UserContext);

    const user= {
    id: 123,
    name: 'Roger',
    email: 'roger@mail.com'
  }

  return (
    <div>
      <h1>Login Screen</h1>
      <button 
      className='btn btn-primary'
      onClick={ ()=> { setUser( user )}}
      >
        Login
      </button>
      <hr />
    </div>
  );
};
