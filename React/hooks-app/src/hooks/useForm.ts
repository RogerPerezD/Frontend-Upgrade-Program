import { FormEvent, useState } from "react";
import { FieldsForm } from "../components/02-useEffect/FormWithCustomHook";


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
