
// import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

interface Props{
    category: string
}

export const GifGrid: React.FC<Props> = ({ category }) => { 
    
    const {data: images, loading} = useFetchGifs( {category} );
    return (
        <>
        <h3 className="animate__animated animate__bounce">{ category }</h3>
        { loading && <p className="animate__animated animate__flash">Loading</p>}
        <div className='card-grid'>
            <ol>
                {
                    images?.map( (elemet: {
                        id: string,
                        title: string,
                        url: string
                      }) =>{
                        return  <GifGridItem key={ elemet.id} { ...elemet}/>
                    })
                }
            </ol>
        </div>
        </>
    );
}
