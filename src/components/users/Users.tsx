import React from "react";
import s from "./Users.module.css";
import undefinedImg from "../../assets/images/users/user-undefined.jpg";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/UsersReducer";
import {usersApi} from "../api/api";

type UsersPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (newUsers: any) => void
    users: UserType[]
    followUser: (usersID: string) => void
    UnfollowUser: (usersID: string) => void
    toggleFollowingInProgress: (isFetching: boolean, id: number) => void
    followInProgress: any
    followUserThunk:(userId:any)=>void
    unFollowUserThunk:(userId:any)=>void
}

export const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const onSetCurrentPageHandler = (currentPage: number) => {
        props.setCurrentPage(currentPage)
        usersApi.getUsers(currentPage, props.pageSize)
            .then(data => props.setUsers(data.items))
    }
    return (
        <div className={s.users}>
            <div>
                {pages.map(m => <span className={props.currentPage === m ? s.activePage : ''}
                                      onClick={() => onSetCurrentPageHandler(m)}>{m}</span>)}
            </div>
            <ul className={s.usersList}>
                {props.users.map((m: any, i: number) => {
                    return (
                        <li key={i} className={s.usersItem}>
                            <div className={s.usersLeftBLock}>
                                <div className={s.usersFollow}>
                                    <NavLink to={'profile/' + m.id}>
                                        <img
                                            src={m.photos.small !== null && m.photos.small !== undefined ? m.photos.small : undefinedImg}
                                            alt={m.name}/>
                                    </NavLink>
                                    {
                                        m.followed
                                            ?
                                            <button disabled={props.followInProgress.some((id: number) => id === m.id)}
                                                    className={s.follow}
                                                    onClick={() => {
                                                        // props.toggleFollowingInProgress(true, m.id)
                                                        // usersApi.unFollowUser(m.id)
                                                        //     .then(data => {
                                                        //         if (data.resultCode === 0) {
                                                        //             props.UnfollowUser(m.id)
                                                        //         }
                                                        //         props.toggleFollowingInProgress(false, m.id)
                                                        //     })
                                                        props.unFollowUserThunk(m.id)
                                                    }}>Unfollow</button>
                                            :
                                            <button disabled={props.followInProgress.some((id: number) => id === m.id)}
                                                    className={s.follow}
                                                    onClick={() => {
                                                        // props.toggleFollowingInProgress(true, m.id)
                                                        // usersApi.followUser(m.id)
                                                        //     .then(data => {
                                                        //         if (data.resultCode === 0) {
                                                        //             props.followUser(m.id)
                                                        //         }
                                                        //         props.toggleFollowingInProgress(false, m.id)
                                                        //     })
                                                        props.followUserThunk(m.id)
                                                    }}>Follow</button>
                                    }
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