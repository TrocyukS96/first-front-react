import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../formControls/FormControl";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {useSelector} from "react-redux";
import {AppRootType} from "../../../redux/redux-store";
import s from './LoginForm.module.css';
import {Login} from "../Login";
//types
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha:string
}

type LoginFormPropsType = {
    error: null | string,
    handleSubmit: any
}


const maxLength40 = maxLengthCreator(40)


export const LoginForm = (props: LoginFormPropsType) => {

    const captcha = useSelector<AppRootType, null | string>(state => state.auth.captcha)
    console.log(captcha)
    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField, maxLength40]} name="email" type="text"
                       placeholder={'Login'}/>
            </div>
            <div>
                <Field component={Input} validate={[requiredField, maxLength40]} name="password" type="password"
                       placeholder={'password'}/>
            </div>
            <div>
                <Field component='input' name="rememberMe" type="checkbox"/> <span>remember me</span>
            </div>
            {props.error && <div className={s.formCommonError}>
                {props.error}
            </div>}
            {captcha && <img src={captcha} alt="captcha"/>}
            {captcha!=null && <div>
                <Field component={Input} validate={[requiredField]} name="captcha" type="text"
                       placeholder={'type letters'}/>
            </div>}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </>

}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'loginForm'
})(LoginForm)