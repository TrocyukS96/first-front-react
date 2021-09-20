import React from 'react';
import s from './Users.module.css';
import {AppRootType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followUserAC, setUsersAC, UserType} from "../../redux/UsersReducer";
import {v1} from "uuid";
import smilik from './../../assets/images/dialogs/smilik.jpg';
import kazak from "./../../assets/images/dialogs/kazak.jpg";
import gentlemen from "./../../assets/images/dialogs/jentlemen.jpg";
import undefinedImg from './../../assets/images/users/user-undefined.jpg';

import axios from 'axios';


type MSTPType = {
    users: UserType[]
}

type MDTPType = {
    followUser: (usersID:string) => void
    setUsers:(newUsers:UserType[]) => void

}
type PropsType = MSTPType & MDTPType


export function Users(props:PropsType){
    const getUsers = ( ) => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                // return {
                //      response
                //  }
                props.setUsers(response.data.items)
            });
            console.log(props.users)

            // props.setUsers([
            //     {
            //         id: v1(),
            //         name: 'Ivan',
            //         country: "Belarus",
            //         city: 'Minsk',
            //         img: kazak,
            //         followed: true,
            //         status: 'Im looking forward to see you'
            //     },
            //     {
            //         id: v1(),
            //         name: 'Dimon',
            //         country: "Belarus",
            //         city: 'Molodechno',
            //         img: gentlemen,
            //         followed: false,
            //         status: 'This award has passed me by'
            //     },
            //     {
            //         id: v1(),
            //         name: 'Mujlan',
            //         country: "Ukraine",
            //         city: 'Kiev',
            //         img: smilik,
            //         followed: true,
            //         status: 'to be or not to be, that the question'
            //     },
            //     {
            //         id: v1(),
            //         name: 'Korefan',
            //         country: "Russia",
            //         city: 'Piter',
            //         img: gentlemen,
            //         followed: false,
            //         status: 'looking for a better life'
            //     }
            //
            // ])
        }
    }
    const usersMap = props.users.map((m:any, i:number)=> {
        const changeFollowStatus = () => {
            props.followUser(m.id)
        }



        return (
                        <li key={i} className={s.usersItem}>
                <div className={s.usersLeftBLock}>
                    <div className={s.usersFollow}>
                        <img src={m.photos.small!==null ? m.photos.small : undefinedImg} alt={m.name}/>
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
    })
    return (
        <div className={s.users}>
            <button onClick={getUsers}>get users</button>
            <ul className={s.usersList}>
                {usersMap}
            </ul>
            <button className={s.showMore}>show more</button>

        </div>
    )
}

const mapStateToProps = (state: AppRootType): MSTPType=> {
    return {
        users: state.usersPage.users

    }

}
const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        followUser: (usersID:string) => {
            dispatch(followUserAC(usersID))
        },
        setUsers:(newUsers:UserType[]) => {
            dispatch(setUsersAC(newUsers))
        }
    }
}
export const UsersContainer = connect<MSTPType, MDTPType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(Users);

