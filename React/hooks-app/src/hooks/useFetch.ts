import { useState,useEffect, useRef } from 'react';

type fecthState = {
    data: any,
    loading: boolean,
    error: any
}

export const useFetch = ( url: string) => {
  
    const [state, setState] = useState<fecthState>({
        data: null,
        loading: true,
        error: null
    }); 

    // variable que nos ayudara a manejar si el componente
    // esta montado o no 
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
      return () => {
          isMounted.current = false;
      };
    }, []);
    

    useEffect(() => {
        // Esto para cada vez que cargemos un nuevo quote se vea el mensja de loading
        setState( {data: null, loading: true,error: null});

        fetch( url )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => {

                if (isMounted.current) {
                    setState( {
                        data,
                        loading: false,
                        error: null
                    });
                }
        })
        .catch( () =>{
            setState( {
                data: null,
                loading: false,
                error: 'Fatal error'
            });
        });
    }, [url]);
    
    return state;
};
