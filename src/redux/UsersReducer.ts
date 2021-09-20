import smilik from './../assets/images/dialogs/smilik.jpg';
import kazak from "../assets/images/dialogs/kazak.jpg";
import gentlemen from "../assets/images/dialogs/jentlemen.jpg";
import {v1} from "uuid";

export type UserType = {
    id: string
    name: string
    country: string
    city: string
    img: any
    followed: boolean
    status: string
}
export type UsersPageType = {
    users: Array<UserType>
}

type followUserAT = {
    type: 'FOLLOW-USER',
    userID:string,
}

type setUsersAT = {
    type:'SET-USERS',
    newUsers:UserType[]
}
type ActionsTypes = followUserAT | setUsersAT

const initialState: UsersPageType = {
    users: [
        // {
        //     id: v1(),
        //     name: 'Ivan',
        //     country: "Belarus",
        //     city: 'Minsk',
        //     img: kazak,
        //     followed: true,
        //     status: 'Im looking forward to see you'
        // },
        // {
        //     id: v1(),
        //     name: 'Dimon',
        //     country: "Belarus",
        //     city: 'Molodechno',
        //     img: gentlemen,
        //     followed: false,
        //     status: 'This award has passed me by'
        // },
        // {
        //     id: v1(),
        //     name: 'Mujlan',
        //     country: "Ukraine",
        //     city: 'Kiev',
        //     img: smilik,
        //     followed: true,
        //     status: 'to be or not to be, that the question'
        // },
        // {
        //     id: v1(),
        //     name: 'Korefan',
        //     country: "Russia",
        //     city: 'Piter',
        //     img: gentlemen,
        //     followed: false,
        //     status: 'looking for a better life'
        // }

    ]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            // return {...state,users:state.users.map(m=>m.id===action.userID ? m.followed:action.userValue)}
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {
                    ...user,
                    followed:!user.followed
                } : user)
            }
            return {...state}
        }
        case 'SET-USERS':{
            return {
                ...state,
                users: [...state.users, ...action.newUsers]
            }
        }

        default:
            return state
    }
}

export const followUserAC = (userID: string) => {
    return {
        type: 'FOLLOW-USER',
        userID,
    } as const
}
export const setUsersAC = (newUsers:UserType[]) =>{
    return {
        type : "SET-USERS",
        newUsers
    }as const
}

