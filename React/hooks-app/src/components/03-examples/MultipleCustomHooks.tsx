import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

const { state: counter, increment } = useCounter(1);

const url: string = `https://www.breakingbadapi.com/api/quotes/${counter}`;

const { loading, data } = useFetch( url );
const { author, quote } = !!data && data[0];
// console.log(author, quote);

// const handleClick = () =>{

// }

  return (
  <div>
      <h1>BreakingBad Quotes</h1> 
      <hr />

      {
          loading ? 
          (
            <div className="alert alert-info text-center">
                Loading............
            </div>
          ) :
          (
            <blockquote className="blockquote text-end">
                <p className="mb-3">
                    { quote }
                </p>
                <footer className="blockquote-footer"> { author } </footer>
            </blockquote>
          )
      }

      <button className='btn btn-primary'
      onClick={ increment }> Add next Quote </button>
  </div>
  );
};
