import React from 'react';

import s from './Header.module.css';

import Logo from './../../assets/images/logo.webp';

function Header() {
   return (

      <header className={s.header}>
         <img className={s.logoImg} src={Logo} />
         <div className={s.headerContent}>Supported by IT-Incubator</div>
      </header>

   );
}

export default Header;