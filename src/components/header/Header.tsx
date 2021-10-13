import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.css';

import Logo from './../../assets/images/logo.webp';

type HeaderPropsType = {
    isAuth: boolean
    login: any
}

function Header(props:HeaderPropsType) {
    return (

        <header className={s.header}>
            <img className={s.logoImg} src={Logo} alt={'1234'}/>
            <div className={s.headerLogin}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>

    );
}

export default Header;