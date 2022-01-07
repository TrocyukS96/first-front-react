import axios, { AxiosResponse } from "axios";
export const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"3d91ee0a-a2e5-4c47-9eef-21fe45b3ba2b"
    }
})
export const usersApi = {
    getUsers (currentPage:any, pageSize:any) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials:true
        }).then(response => response.data)
    },
    followUser(id:any){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollowUser(id:any){
        return instance.delete(`follow/${id}`).then(response => response.data)
    }

}
export const profileAPI = {

    setUsers(userId:any){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId:any){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        //u dont need to write userID, because the server have already known the path of this request

        return instance.put<{ status:string}, AxiosResponse<UpdateStatusResponseType>>(`profile/status`, {status:status})
    },
    savePhoto(photoFile:any){
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<{ formData:any}, AxiosResponse<UpdatePhotoResponseType>>(`profile/photo`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },updateProfile(profile:any){
        return instance.put('/profile',profile)
    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    loginUser(email:string, password:string, rememberMe:boolean = false){
        return instance.post(`auth/login`,{email, password, rememberMe} )
    },
    logOut(){
        return instance.delete(`auth/login`)
    }
}

export type NewProfileDataType ={
    AboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:ContactsType

}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type UpdateStatusResponseType = {
    resultCode:number,
    messages:string[],
    data:{}
}

type UpdatePhotoResponseType = {
    data:{
        photos:{
            small:string  ,
            large:string
        }

    }
    resultCode:number,
    messages:string[]
}