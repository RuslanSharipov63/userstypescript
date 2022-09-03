import { useEffect, useState, FocusEvent, useCallback } from 'react';
import * as React from 'react';
import { Auth } from './../../config/authdata';
import { useNavigate } from 'react-router-dom';

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        disabled?: boolean
    }
}

const Autorization: React.FC = () => {

    const [login, setLogin] = useState('Введите логин и пароль');
    const [password, setPassword] = useState('');
    const [buttonEntrance, setButtonEntrance] = useState(true);
    const { loginUser, pass } = Auth;
    const navigate = useNavigate();

 const isAuth = useCallback(() => {
        if (loginUser === login && password === pass) return true;
    }, [loginUser, pass, login, password])

    useEffect(() => {
        if (isAuth()) {
            return setButtonEntrance(false)
        }
        return setButtonEntrance(true)
    }, [isAuth, login, password, buttonEntrance])


    const navigateUser = () => {
        if (isAuth()) return navigate('/users')

    }

    return (

        <div className="row">

            <form className="col s4">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name"
                            type="text"
                            name="login"
                            className="validate"
                            value={login}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                            onFocus={(e: FocusEvent<HTMLInputElement>) => setLogin('')}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="password"
                            type="password"
                            name="password"
                            className="validate"
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            onFocus={(e: FocusEvent<HTMLInputElement>) => setPassword('')}
                        />

                        <p
                            className="waves-effect waves-light btn"
                            disabled={buttonEntrance}
                            onClick={() => navigateUser()}>
                            Войти
                        </p>

                    </div>
                </div>
            </form>

        </div>


    );
}

export default Autorization;