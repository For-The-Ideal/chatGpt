import { defineStore,StoreDefinition } from "pinia"
type MenuParams = {
    openNames:string
    activeName:string
}
export const menuParamsStore = defineStore('menuParams',{
  state:()=>{
    return {
        menuParams:{
            openNames:'',
            activeName:'',
        }
    }
  },

  getters:{
     getMenuParams():MenuParams{
      return this.menuParams
    }
  },

  actions:{
    async changeMenuParams(data:MenuParams):void{
        this.menuParams = await data
    }
  },
})