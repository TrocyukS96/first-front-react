import React from "react";
import s from "./Users.module.css";
import undefinedImg from "../../assets/images/users/user-undefined.jpg";
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/UsersReducer";
import {Paginator} from "./paginator/Paginator";

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
    followUserThunk: (userId: any) => void
    unFollowUserThunk: (userId: any) => void
}
export const Users = (props: UsersPropsType) => {
    return (
        <div className={s.users}>
            <Paginator
                totalCount={props.totalCount}
                pageSize={props.pageSize}
                setCurrentPage={props.setCurrentPage}
                setUsers={props.setUsers}
                currentPage={props.currentPage}
                portionsSize={10}
                />
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
                                                        props.unFollowUserThunk(m.id)
                                                    }}>Unfollow</button>
                                            :
                                            <button disabled={props.followInProgress.some((id: number) => id === m.id)}
                                                    className={s.follow}
                                                    onClick={() => {
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