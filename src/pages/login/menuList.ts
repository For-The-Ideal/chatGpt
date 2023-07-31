export interface SonItem {
  title: string;
  icon: string;
  router: string;
  sonId:Number;
  fatherId:Number;
}

export interface NewMenuList {
  title: string;
  icon: string;
  fatherId:Number;
  sonList:Array<SonItem>
}

export interface MenuParams {
  openNames:string
  activeName:string
}

export let newMenuList:Array<T>= [
    {
        title:"工作台",
        icon:"md-desktop",
        fatherId:1,
        sonList:[
          {
            title:"首页",
            icon:"ios-paper",
            fatherId:1,
            sonId:0,
            router:"/home",
          },
        ]
      },
      {
        title:"会员管理",
        icon:"ios-keypad",
        fatherId:2,
        sonList:[
          {
            title:"会员列表",
            icon:"md-list-box",
            fatherId:2,
            sonId:0,
            router:"/articleList",
          },
        ]
      },
       {
        title:"产品管理",
        icon:"md-phone-landscape",
        fatherId:3,
        sonList:[
          {
            title:"产品列表",
            icon:"md-list-box",
            fatherId:3,
            sonId:0,
            router:"/videoList",
          },
        ]
      },
      {
        title:"客服管理",
        icon:"ios-create",
        fatherId:4,
        sonList:[
          {
            title:"客服列表",
            icon:"md-list-box",
            fatherId:4,
            sonId:0,
            router:"/videoList",
          },
        ]
      },
    ]