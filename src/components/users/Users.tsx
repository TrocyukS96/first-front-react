import React from "react";
import s from "./Users.module.css";
import undefinedImg from "../../assets/images/users/user-undefined.jpg";
import axios from "axios";
import {NavLink} from 'react-router-dom';

type UsersType = {
    totalCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setUsers: (newUsers: UsersType[]) => void
    users: UsersType[]
    followUser: (usersID: string) => void
    UnfollowUser: (usersID: string) => void
    togglefollowingInProgress: (isFetching: boolean, id:number) => void
    followInProgress: any


}

export const Users = (props: UsersType) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }


    const onSetCurrentPageHandler = (currentPage: number) => {
        props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${props.pageSize}`).then(response => {
                props.setUsers(response.data.items)
            }
        )

    }
    console.log(props.users)
    return (
        <div className={s.users}>
            <div>
                {pages.map(m => <span className={props.currentPage === m ? s.activePage : ''}
                                      onClick={() => onSetCurrentPageHandler(m)}>{m}</span>)}
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
                                    {
                                        m.followed
                                            ? <button disabled={props.followInProgress.some((id:number)=>id===m.id)}
                                                      className={s.follow}
                                                      onClick={() => {

                                                          props.togglefollowingInProgress(true, m.id)
                                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {
                                                              withCredentials: true,
                                                              headers: {
                                                                  "API-KEY": "c0bf711e-1849-4428-895f-9a17a0fee29d"
                                                              }
                                                          })
                                                              .then(response => {
                                                                  if (response.data.resultCode === 0) {
                                                                      props.UnfollowUser(m.id)
                                                                  }
                                                                  props.togglefollowingInProgress(false, m.id)
                                                              })
                                                      }}>Unfollow</button>
                                            : <button disabled={props.followInProgress.some((id:number)=>id===m.id)} className={s.follow}
                                                      onClick={() => {
                                                          props.togglefollowingInProgress(true, m.id)
                                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                                                              withCredentials: true,
                                                              headers: {
                                                                  "API-KEY": "c0bf711e-1849-4428-895f-9a17a0fee29d"
                                                              }
                                                          })
                                                              .then(response => {
                                                                  if (response.data.resultCode === 0) {
                                                                      props.followUser(m.id)
                                                                  }
                                                                  props.togglefollowingInProgress(false, m.id)
                                                              })
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