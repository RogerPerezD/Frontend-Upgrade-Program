import React,{ useState} from 'react'

interface Props{
    value: number
}

const CounterApp: React.FC<Props> = ( { value } ) =>{

    const [ counter , setCounter ] = useState( value );

    const handleAdd = () =>{
        setCounter( counter + 1); 
    }

    const handleReset = () =>{
        setCounter( value ); 
    }

    const handleRest = () =>{
        setCounter( counter - 1); 
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{ counter }</h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> Reset </button>
        <button onClick={ handleRest }>  -1 </button>
        </>
    );
}

export default CounterApp;
