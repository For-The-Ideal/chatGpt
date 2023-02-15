import { defineStore,StoreDefinition } from "pinia"
import {initConfig} from "../../initConfig"
type SonItem = {
    title: string;
    icon: string;
    router: string;
    sonId:Number;
    fatherId:Number;
    openNames:string
    activeName:string
  }

type TagListStore = {
    tagList:Array<SonItem>
}

export const tagListStore = defineStore('tagList',{
  state:()=>{
    return {
        tagList:window.localStorage.getItem("tagList") ? JSON.parse(window.localStorage.getItem("tagList")) : []
    }
  },

  getters:{
    getTagList():Array<SonItem>{
        this.tagList = this.tagList.length<=0 ? [initConfig.tagInit] : this.tagList
        return this.tagList
    }
  },

  actions:{
    async changeTagList(data:SonItem):void{
        await this.tagList.push(data)
        window.localStorage.setItem("tagList",JSON.stringify(this.tagList))
    },
    async removeTagList(data:SonItem | undefined ):Promise<SonItem>{
      let isEnd = this.tagList[this.tagList.length - 1].router === data.router && this.tagList[0] != '/home'
      this.tagList = this.tagList.filter((v:SonItem)=>{
        return v.router != data.router
      })
      console.log(isEnd,'isEnd');
      window.localStorage.setItem("tagList",JSON.stringify(this.tagList))
      return await this.tagList[this.tagList.length - (isEnd ? 1 : 2)]
    }
  },
})


