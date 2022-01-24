
import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
      const mouseMove = ( e: UIEvent) =>{
        console.log(':D');
      }

      window.addEventListener( 'mousemove', mouseMove);
    
      return () => {
        window.removeEventListener( 'mousemove', mouseMove);
      };
    }, []);
    
  return (
    <div>
        <h3>Eres genial</h3>
    </div>
    );
};
