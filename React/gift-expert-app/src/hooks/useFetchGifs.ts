import {useEffect, useState} from 'react';
import { getGifs, Gif } from '../helpers/getGifs';

type StateGif = { 
    data: Gif | null,
    loading: boolean
}

interface Props{
    category: string
}


export const useFetchGifs = ({ category }: Props) => {
    
    const [state, setState] = useState<StateGif>({
        data: null,
        loading: true
    });

    useEffect(() => {
        getGifs( category ).then(
            (imgs)  => {
                // setTimeout(()=>{
                setState({
                    data: imgs,
                    loading: false
                });
                // },3000)
            }
        )
    }, [category])

    return state;
}
