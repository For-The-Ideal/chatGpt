import { defineStore,StoreDefinition } from "pinia"
type LoginParams = {
    token:string
    loginTime:number
}
export const loginParamsStore = defineStore('loginParams',{
  state:()=>{
    return {
        loginParams:{
          token:""
        }
    }
  },

  getters:{
    getLoginParams():Promise<LoginParams>{
      return this.loginParams
    }
  },

  actions:{
    async changeLoginParams(data:LoginParams):Promise<void>{
        this.loginParams = await data
    }
  },
})