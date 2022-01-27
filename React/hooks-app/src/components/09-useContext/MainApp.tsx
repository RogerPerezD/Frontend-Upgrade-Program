import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export interface User{
  id: number;
  name: string;
  email: string;
}

export const MainApp = () => {

  const [user, setUser] = useState<User>({} as User);


  return (
      <UserContext.Provider value={ {
        user,
        setUser
      } }>
        <AppRouter/>
      </UserContext.Provider>
      
  );
};
