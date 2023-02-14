import { defineStore,StoreDefinition } from "pinia"
type LoginParams = {
    token:string
    loginTime?:number
}
export const loginParamsStore = defineStore('loginParams',{
  state:()=>{
    return {
        loginParams:{
          token:"",
          oginTime:""
        }
    }
  },

  getters:{
    async getLoginParams():Promise<LoginParams>{
      return await this.loginParams
    }
  },

  actions:{
    async changeLoginParams(data:LoginParams):void{
        this.loginParams = await data
    }
  },
})