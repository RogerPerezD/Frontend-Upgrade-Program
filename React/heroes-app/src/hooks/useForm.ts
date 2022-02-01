import { FormEvent, useState } from "react";

type FieldsForm = {
    searchText: string
}

export const useForm = ( initialState: FieldsForm ): [FieldsForm, (e: FormEvent<HTMLInputElement>)=>void, ()=>void ] => {
    const [values, setValues] = useState<FieldsForm>(initialState);

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
