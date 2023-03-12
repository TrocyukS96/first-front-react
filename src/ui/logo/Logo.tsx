import React from 'react';
import s from './logo.module.scss';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
const Logo = () => {
    return (
        <p className={s.logo}><DeviceHubIcon color={'primary'}/></p>
    );
};

export default Logo;