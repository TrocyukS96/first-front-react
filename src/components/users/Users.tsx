import React from "react";
import s from "./Users.module.css";
import undefinedImg from "../../assets/images/users/user-undefined.jpg";
import axios from "axios";
import { NavLink } from 'react-router-dom';

type UsersType = {
    totalCount:number
    pageSize:number
    currentPage:number
    setCurrentPage:(currentPage:number)=>void
    setUsers:(newUsers:UsersType[])=>void
    users:UsersType[]
    followUser:(usersID:string) => void

}

export const Users = (props:UsersType ) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages=[];
    for (let i=1; i<=pageCount; i++){
        pages.push(i)
    }


    const onSetCurrentPageHandler = (currentPage:number)=>{
        props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`).then(response => {
                props.setUsers(response.data.items)
            }

        )

    }
    return(
        <div className={s.users}>
            <div>
                {pages.map(m=><span className={props.currentPage ===m ? s.activePage : ''} onClick={()=>onSetCurrentPageHandler(m)}>{m}</span>)}
            </div>
            <ul className={s.usersList}>
                {props.users.map((m: any, i: number) => {
                   const changeFollowStatus = () => {
                        props.followUser(m.id)
                    }
                    return (
                        <li key={i} className={s.usersItem}>
                            <div className={s.usersLeftBLock}>
                                <div className={s.usersFollow}>
                                    <NavLink to={'profile/' + m.id}>
                                        <img src={m.photos.small !== null ? m.photos.small : undefinedImg}
                                             alt={m.name}/>
                                    </NavLink>

                                    <button
                                        className={s.follow}
                                        onClick={changeFollowStatus}
                                    >
                                        {m.followed ? 'followed' : 'unfollowed'}
                                    </button>
                                </div>

                            </div>
                            <div className={s.usersRightBLock}>
                                <div className={s.usersData}>
                                    <span className={s.usersName}>{m.name}</span>
                                    <p className={s.usersStatus}>{m.status}</p>
                                </div>
                                <div className={s.usersArea}>
                                    <span className={s.country}>{'m.country'}</span>
                                    <span className={s.city}>{'m.city'}</span>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <button className={s.showMore}>show more</button>
        </div>
    )
}