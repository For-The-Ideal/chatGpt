interface BaseUrl{
    [key:string]:string
}
export const baseUrl:BaseUrl = {
    verificationCode:"/auth/verificationCode",
    login:"/auth/login",
    register:"/auth/register",
}