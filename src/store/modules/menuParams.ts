import { defineStore,StoreDefinition } from "pinia"
type MenuParams = {
    openNames:string
    activeName:string
}
export const menuParamsStore = defineStore('menuParams',{
  state:()=>{
    return {
        menuParams:{
            openNames:'0',
            activeName:'0',
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