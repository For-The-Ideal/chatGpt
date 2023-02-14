export interface SonItem {
  title: string;
  icon: string;
  router: string;
  sonId:Number;
}

export interface Reactive {
  isCollapsed: Boolean;
  tagList:Array<SonItem>;
  menuList: Array<{
    title: string;
    isShowSon: Boolean;
    isHideSon:Boolean;
    icon: string;
    fatherId:Number;
    sonList: Array<SonItem>;
  }>;
}

export interface MenuParams {
  openNames:string
  activeName:string
}