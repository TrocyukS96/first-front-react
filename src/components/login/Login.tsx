import React from "react";
import {Redirect} from "react-router-dom";
import {FormDataType, LoginReduxForm} from "./loginForm/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../redux/redux-store";
import {login} from "../../redux/AuthReducer";
import s from './Login.module.scss';

export const Login: React.FC<any> = (props) => {
    //hooks
    const isAuth = useSelector<AppRootType, boolean>(state => state.auth.isAuth);
    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.loginBlock}>
            <div className={s.inner}>
                <h3>Login</h3>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

