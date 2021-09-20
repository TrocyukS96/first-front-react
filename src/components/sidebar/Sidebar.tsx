import React from 'react';

import s from './Sidebar.module.css';

import Logo from './../../assets/images/logo.webp';
import { NavLink } from 'react-router-dom';

const Sidebar =()=>{
   return (
      <nav className={s.sidebar}>
         <ul className={s.sidebarList}>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/Profile">Profile</NavLink> </li>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/Dialogs">Dialogs</NavLink> </li>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/Training">Training</NavLink> </li>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/Users">Users</NavLink> </li>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/News">News</NavLink> </li>
            <li className={s.sidebarItem}><NavLink className={s.sidebarLink} activeClassName={s.activeLink} to="/Settings">Settings</NavLink> </li>
         </ul>
      </nav >
   );
}

export default Sidebar;