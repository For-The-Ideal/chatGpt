export interface Reactive {
  isCollapsed: Boolean;
  openNames: string;
  activeName: string;
  menuList: Array<{
    title: string;
    isShowSon: Boolean;
    icon: string;
    sonList: Array<{
      title: string;
      icon: string;
      router: string;
    }>;
  }>;
}
