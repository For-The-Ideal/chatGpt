import { defineStore,StoreDefinition } from "pinia"
import {configParmas} from "../../../config.js"
type SonItem = {
    title: string;
    icon: string;
    router: string;
    sonId:Number;
  }

type TagListStore = {
    tagList:Array<SonItem>
}

export const tagListStore = defineStore('tagList',{
  state:()=>{
    return {
        tagList:[]
    }
  },

  getters:{
    getTagList():Array<SonItem>{
        this.tagList = this.tagList.length<=0 ? [configParmas.tagInit] : this.tagList
        return this.tagList
    }
  },

  actions:{
    async changeTagList(data:SonItem):void{
        await this.tagList.push(data)
    }
  },
})


