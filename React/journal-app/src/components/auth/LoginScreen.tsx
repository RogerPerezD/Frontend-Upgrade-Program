import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { UIState } from '../../reducers/uiReducer';
import { RootState } from '../../store/store';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError,loading }: UIState = useSelector( (state: RootState) => state.ui);

    const [ formValues, handleInputChange ] = useForm({
        email: 'rogi@mail.com',
        password: '123456'
    });

    const { email, password} = formValues;

    const handleLogin = ( e: FormEvent) =>{
        e.preventDefault();
        dispatch(startLoginEmailPassword( email, password));
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }
 
    
    return (
        <>
            <h3 className="auth__title"> Login </h3>
            <form onSubmit={ handleLogin }>
                {
                    msgError.length > 0
                    &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange}                    
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="auth__input" 
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange}
                />
                <button type="submit" className="btn btn-primary btn-block" disabled={ loading }>
                Login
                </button>

                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create New Account
                </Link>
            </form>
        </>
    );
};
