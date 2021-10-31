import axios from "axios";
export const instance = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"c0bf711e-1849-4428-895f-9a17a0fee29d"
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
    updateStatus(status:string){ //u dont need to write userID, because the server have already known the path of this request
        return instance.put(`profile/status`, {status})
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