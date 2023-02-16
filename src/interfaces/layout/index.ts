

export interface Reactive {
  isCollapsed: Boolean;
  visible:Boolean;
}

export interface SonItem {
  title: string;
  icon: string;
  router: string;
  sonId:Number;
  fatherId:Number;
  openNames:string
  activeName:string
}

export interface MenuParams {
  openNames:string
  activeName:string
}
