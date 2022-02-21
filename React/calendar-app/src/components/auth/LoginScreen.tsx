import React from 'react';
import '../../css/login.css';
import { useForm } from '../../hooks/useForm';
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

type LoginForm = {
    lEmail: string,
    lPassword: string
}

type RegisterForm = {
    rEmail: string,
    rPassword: string,
    rPasswordVerified: string,
    rName: string,
}

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ]= useForm<LoginForm>({
        lEmail: 'rogelio@mail.com',
        lPassword: '1234567'
    });

    const [ formRegisterValues, handleRegisterInputChange ]= useForm<RegisterForm>({
        rEmail: 'raul@mail.com',
        rPassword: '123456',
        rPasswordVerified: '123456',
        rName: 'Raul'
    });

    const { lEmail, lPassword } = formLoginValues;

    const { rName, rEmail, rPassword, rPasswordVerified} = formRegisterValues;

    const handleLogin = ( e: FormEvent)=>{
        e.preventDefault();
        console.log(lEmail, lPassword,'valores login');
        dispatch( startLogin(lEmail, lPassword) );
    }

    const handleRegister = ( e: FormEvent)=>{
        e.preventDefault();
        if (rPassword !== rPasswordVerified) {
            return Swal.fire('Error', 'Passwords must match','error')
        }
        dispatch( startRegister(rEmail, rPassword, rName) );
    }
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='lEmail'
                                value={lEmail}
                                onChange= {handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='lPassword'
                                value={lPassword}
                                onChange= {handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='rName'
                                value={rName}
                                onChange= { handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='rEmail'
                                value={rEmail}
                                onChange= { handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='rPassword' 
                                value={rPassword}
                                onChange= { handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name='rPasswordVerified'
                                value={rPasswordVerified}
                                onChange= { handleRegisterInputChange } 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}