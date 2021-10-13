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
        return instance.post(`1.0/follow/${id}`).then(response => response.data)
    },
    unFollowUser(id:any){
        return instance.delete(`1.0/follow/${id}`).then(response => response.data)
    }

}
export const profileAPI = {
    setUsers(userId:any){
        return instance.get(`profile/` + userId).then(response => response.data)
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`).then(response => response.data)
    }
}