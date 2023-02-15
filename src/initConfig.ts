type InitConfig = {
    tagInit: {
        title: string
        icon:string,
        sonId: number,
        router: string,
        tagId:number,
        openNames:string,
        activeName:string,
      },
}
export let initConfig:InitConfig = {
    tagInit: {
      title: "首页",
      icon: "ios-paper",
      sonId: 1,
      router: "/home",
      tagId:1,
      openNames:'0',
      activeName:'0',
    },
  };
  