import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';

import Logo from './../../assets/images/logo.webp';


type HeaderPropsType = {
    isAuth: boolean
    login: any,
    logOut:()=>void
}

function Header(props:HeaderPropsType) {

    const logOutHandler = () =>{
        props.logOut()
    }
    return (

        <header className={s.header}>
            <img className={s.logoImg} src={Logo} alt={'1234'}/>
            <div className={s.headerLogin}>
                {props.isAuth
                    ? <div>{props.login}  <button onClick={logOutHandler}>log Out</button></div>
                    : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>

    );
}

export default Header;