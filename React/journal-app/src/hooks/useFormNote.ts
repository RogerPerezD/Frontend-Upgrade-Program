import { FormEvent, useState } from 'react';

type FieldsFormNote = {
    title: string,
    body: string
} 

export const useFormNote = ( initialState = {} as FieldsFormNote ): [FieldsFormNote, (e: FormEvent<(HTMLInputElement | HTMLTextAreaElement)>)=>void, (defectValue : FieldsFormNote)=>void ] => {
    
    const [values, setValues] = useState<FieldsFormNote>(initialState);

    const reset = ( defectValue : FieldsFormNote = initialState) => {
        setValues( defectValue );
    }


    const handleInputChange = ({ currentTarget  }: FormEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {

        setValues({
            ...values,
            [ currentTarget.name ]: currentTarget.value
        });

    }

    return [ values, handleInputChange, reset ];
}