import { FormEvent, useState } from "react";


export const useForm = <T>( initialState: T ): [ T, (e: FormEvent<HTMLInputElement>)=>void, ()=>void ] => {
    const [values, setValues] = useState<T>(initialState);

    const handleInput = ( { currentTarget }: FormEvent<HTMLInputElement> ): void =>{
        setValues({
            ...values,
            [ currentTarget.name ]: currentTarget.value
        });
    }

    const reset  = () =>{
        setValues( initialState );
    }

    return [ values, handleInput, reset ];
};