import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';
import { useDispatch } from "react-redux";
import { login, startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
// import { AppDispatch } from '../../store/store';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'roger@mail.com',
        password: '1234'
    });


    const handleLogin = ( e: FormEvent) =>{
        e.preventDefault();
        console.log(email, password);
        // dispatch( login( '543bgds', 'Roger'));
        dispatch(startLoginEmailPassword( '543bgds', 'Roger'));
    }

    const handleGoogleLogin = () =>{
        dispatch( startGoogleLogin() );
    }

    const { email, password} = formValues;
    return (
        <>
            <h3 className="auth__title"> Login </h3>
            <form onSubmit={ handleLogin }>
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
                <button type="submit" className="btn btn-primary btn-block">
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
