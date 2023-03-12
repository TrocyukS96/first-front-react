import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Header.module.scss';

import Logo from './../../ui/logo/Logo';
import {Button} from "@mui/material";


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
            <Logo/>
                {props.isAuth
                    ? <Button onClick={logOutHandler} variant="contained">log Out</Button>
                    : <NavLink to={'/login'}>login</NavLink>}
        </header>

    );
}

export default Header;