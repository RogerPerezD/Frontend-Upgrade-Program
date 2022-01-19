import React from 'react';
import '../index.css';

interface Props{
    id: string,
    url: string,
    title: string
}

export const GifGridItem: React.FC<Props> = ({ id, url, title}) => {
    return (
        <div className="card animate__animated animate__bounce">
            <img src={ url } alt= {title} />
            <p>{ title }</p> 
        </div>
    )
}
