import { FormEvent, useState } from 'react';

type FieldsForm = {
    email: string,
    password: string,
    name?: string,
    password2?: string
} 

export const useForm = ( initialState = {} as FieldsForm ): [FieldsForm, (e: FormEvent<HTMLInputElement>)=>void, ()=>void ] => {
    
    const [values, setValues] = useState<FieldsForm>(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ currentTarget  }: FormEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [ currentTarget.name ]: currentTarget.value
        });

    }

    return [ values, handleInputChange, reset ];
}