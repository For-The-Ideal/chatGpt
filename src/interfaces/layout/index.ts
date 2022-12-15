export interface SonItem {
  title: string;
  icon: string;
  router: string;
}

export interface Reactive {
  isCollapsed: Boolean;
  openNames: string;
  activeName: string;
  menuList: Array<{
    title: string;
    isShowSon: Boolean;
    icon: string;
    sonList: Array<SonItem>;
  }>;
}
