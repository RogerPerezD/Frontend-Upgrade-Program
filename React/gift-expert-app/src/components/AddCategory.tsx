import React,{ useState } from 'react';

interface Props{
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategory: React.FC<Props> = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChangeInput = ( event: React.FormEvent<HTMLInputElement>) =>{
        setInputValue( event.currentTarget.value );
    }

    const handleSubmit = async( event: React.FormEvent) =>{
        event.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( (categories: string[]) => { 
                return [inputValue,...categories];
            });
        }
        setInputValue('');
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue } 
                onChange={ handleChangeInput }
            />
            <button type='submit'>Agregar</button>
        </form>
    );
}

export default AddCategory;
