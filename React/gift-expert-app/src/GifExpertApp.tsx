import React, { useState } from "react";
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp: React.FC = ()=>{
    const [categories, setCategories] = useState<string []>([]);

     return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ul>
                {
                   categories.map( (category: string) => {
                        return <GifGrid category={ category } key={ category}/>
                   })
                }
            </ul>
           
        </>
    )
}

export default GifExpertApp;