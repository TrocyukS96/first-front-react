import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../formControls/FormControl";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {AppRootType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from './LoginForm.module.css';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapStateToPropsType={
    isAuth:boolean
}
const maxLength40 = maxLengthCreator(40)
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return <>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[requiredField,maxLength40 ]} name="email" type="text" placeholder={'Login'}/>
            </div>
            <div>
                <Field component={Input} validate={[requiredField,maxLength40 ]} name="password" type="password" placeholder={'password'}/>
            </div>
            <div>
                <Field component='input'  name="rememberMe" type="checkbox"/> <span>remember me</span>
            </div>
            {props.error && <div className={s.formCommonError}>
                {props.error}
            </div>}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </>

}
const LoginReduxForm = reduxForm<FormDataType>({
    form: 'loginForm'
})(LoginForm)


const Login:React.FC<any> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

        if(props.isAuth){
            return <Redirect to={'/profile'}/>
        }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth
    }

}
export default connect(mapStateToProps, {login})(Login);
