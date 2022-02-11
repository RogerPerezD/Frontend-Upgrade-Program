import 'animate.css';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';
import validator from 'validator';
import { useDispatch, useSelector } from "react-redux";
import { setError, removeError } from '../../actions/ui';
import { UIState } from '../../reducers/uiReducer';
import { RootState } from '../../store/store';
import { startRegisterWhitEmailAndPassword } from '../../actions/auth';



export const RegisterScreen = () => {
    const initialState = {
        name: 'Rogelio',
        email: 'rogi@mail.com',
        password: '123456',
        password2: '123456'
    }
    const  [ formValues, handleInputChange ] = useForm( initialState );

    const { name, email, password, password2} = formValues;

    const dispatch = useDispatch();

    const { msgError }: UIState = useSelector( (state: RootState) => state.ui);


    const handleRegister = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if (isFormValid()) {
            dispatch( startRegisterWhitEmailAndPassword( email, password, name as string));
        }
    }

    const isFormValid = () =>{
        if (validator.isEmpty(name as string)) {
            dispatch( setError('Name is required'));
            return false;
        }else if( !validator.isEmail( email )){
            dispatch( setError('Email is not valid'));
            return false;
        }else if( (password as string) !== (password2 as string) || password.length < 5){
            dispatch( setError('Password should be at least 6 characters and match each other'));
            return false;
        }

        dispatch( removeError() );

        return true;
    }
    return (
        <>
        <h3 className="auth__title"> Register </h3>
            <form 
            onSubmit={ handleRegister }
            className = "animate__animated animate__fadeIn animate__faster"
            >

                {
                    msgError.length > 0
                    &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ name }
                    onChange = { handleInputChange }/>

                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ email }
                    onChange = { handleInputChange }/>

                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ password}
                    onChange = { handleInputChange }/>

                <input 
                    type="password" 
                    name="password2" 
                    placeholder="Confirm Password"
                    className="auth__input" 
                    autoComplete="off"
                    value={ password2 }
                    onChange = { handleInputChange }/>

                <button type="submit" className="btn btn-primary btn-block mb-5">
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Already register
                </Link>
            </form>
        </>
    );
};
