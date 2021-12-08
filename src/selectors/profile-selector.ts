
export const getPosts = (state:any)=>{
    return state.profilePage.posts
}

export const getProfile = (state:any)=>{
    return state.profilePage.profile
}

export const getProfileStatus = (state:any)=>{
    return state.profilePage.status
}

export const getUserId = (state:any)=>{
    return state.profilePage.profile.userId
}
