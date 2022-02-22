import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { startLogin, startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'eric@gmail.com',
        lPassword: '123456'
    });
    
    const {lEmail, lPassword} = formLoginValues;
    
    const [formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: 'martha',
        rEmail: 'martha@gmail.com',
        rPassword1: '123456',
        rPassword2: '123456'
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;
    
    

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(lEmail, lPassword))
    }

    const hanleRegister = (e) => {
        e.preventDefault();

        if( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error','Passwords must be the same')
        }

        dispatch( startRegister(rEmail, rPassword1, rName))
    }
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="lEmail"
                                value={lEmail}
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                autoComplete="off"
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={ hanleRegister }>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                autoComplete="off"
                                type="password"
                                className="form-control"
                                placeholder="Repeat password" 
                                name="rPassword2"
                                value={ rPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                autoComplete="off"
                                type="submit" 
                                className="btnSubmit" 
                                value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}