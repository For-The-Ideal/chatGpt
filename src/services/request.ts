import axios from "axios"
interface Data{
    [key:string]:string
}

interface ResponseData<T> {
    messge: string;
    code: Number;
    data: {
      [key: string]: T;
    };
  }

  
export const get = (url:string) :void => {
   new Promise((resolve,resject)=>{
    return axios.get(url).then((res)=>{
       return resolve(res)
    }).catch((error)=>{
       return resject(error)
    })
   })
}

export const post = (url:string,data:Data) :void => {
    new Promise((resolve,resject)=>{
        return axios.post(url,data).then((res)=>{
           return resolve(res)
        }).catch((error)=>{
           return resject(error)
        })
       })
}

export const put = (url:string,data:Data) :void => {
    new Promise((resolve,resject)=>{
        return axios.put(url,data).then((res)=>{
           return resolve(res)
        }).catch((error)=>{
           return resject(error)
        })
       })
}

export const deletes = (url:string,data:Data) :void => {
    new Promise((resolve,resject)=>{
        return axios.delete(url,data).then((res)=>{
           return resolve(res)
        }).catch((error)=>{
           return resject(error)
        })
       })
}
