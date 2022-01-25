import React,{ useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {

const { state: counter, increment } = useCounter(1);

const url: string = `https://www.breakingbadapi.com/api/quotes/${counter}`;

const { loading, data } = useFetch( url );
const { quote } = !!data && data[0];

const paragraphRef = useRef<HTMLParagraphElement>( null );

    useLayoutEffect(() => {
        console.log(paragraphRef.current?.getBoundingClientRect());
    }, [ quote ]);


    return (
    <div>
    <h1>useLayoutEffect</h1> 
    <hr />
    <blockquote className="blockquote">
        <p className="mb-3" ref={ paragraphRef }>
            { quote }
        </p>
    </blockquote>

    <button className='btn btn-primary'
    onClick={ increment }> Add next Quote </button>
    </div>
    );
};

