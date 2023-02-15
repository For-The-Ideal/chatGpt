import { defineStore,StoreDefinition } from "pinia"
type MenuParams = {
    openNames:string
    activeName:string
}
export const menuParamsStore = defineStore('menuParams',{
  state:()=>{
    return {
        menuParams:window.localStorage.getItem("menuParams") ? JSON.parse(window.localStorage.getItem("menuParams")) : {openNames:'0',activeName:'0'}
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
        window.localStorage.setItem("menuParams",JSON.stringify(data))
    }
  },
})