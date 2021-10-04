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
    users: Array<any>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followInProgress:any
}
type followUserAT = {
    type: 'FOLLOW-USER',
    userID: string,
}
type UnfollowUserAT = {
    type: 'UNFOLLOW-USER',
    userID: string,
}
type togglefollowingInProgressAT = {
    type: 'FOLLOWING_IN_PROGRESS',
    isFetching: boolean,
    userId:any
}
type setUsersAT = {
    type: 'SET-USERS',
    newUsers: UserType[]
}
type SetCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT'
    usersCount: Number
}
type setToggleFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
type ActionsTypes = followUserAT | UnfollowUserAT | setUsersAT | SetCurrentPageAT | setTotalUsersCountAT | setToggleFetchingAT | togglefollowingInProgressAT
const initialState: UsersPageType = {
    users: [],
    pageSize: 5,  // столько юзеров будет на 1 страничке
    totalCount: 0,  // всего юзеров на странице
    currentPage: 2, // текущая страница
    isFetching: false,
    followInProgress:[]

}
export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'FOLLOW-USER': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {
                    ...user,
                    followed: true
                } : user)
            }
            return {...state}
        }
        case 'UNFOLLOW-USER': {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {
                    ...user,
                    followed: false
                } : user)
            }
            return {...state}
        }
        case 'FOLLOWING_IN_PROGRESS':{
            debugger
            return{
                ...state ,
                followInProgress:action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter((id:any) => id !== action.userId)
            }
        }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.newUsers]
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state, totalCount: action.usersCount
            }
        }
        case 'TOGGLE_IS_FETCHING': {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const followUser = (userID: string) => {
    return {
        type: 'FOLLOW-USER',
        userID,
    } as const
}
export const UnfollowUser = (userID: string) => {
    return {
        type: 'UNFOLLOW-USER',
        userID,
    } as const
}
export const setUsers = (newUsers: UserType[]) => {
    return {
        type: "SET-USERS",
        newUsers
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setTotalUsersCount = (usersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        usersCount
    } as const
}
export const toggleFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    } as const
}
export const togglefollowingInProgress = (isFetching: boolean, userId:any) => {
    return {
        type: "FOLLOWING_IN_PROGRESS",
        isFetching,
        userId
    } as const
}

