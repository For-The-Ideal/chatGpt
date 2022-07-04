import { ref, Directive, DirectiveBinding } from "vue";
/**
 * 注意命名必须  vXXX 开头
 * 在页面使用的时候会把 vXXX 转换成 v-XXX
 * 实例： vDraggable ==> v-Draggable
 */
// export const vDraggable:Directive = {
    // created(){
    //     console.log("元素初始化之前-created",1)
    // },

    // beforeMount(){
    //     console.log("指令绑定到元素后调用 只调用一次-beforeMount",2)
    // },

    // mounted(...args){
        // console.log(args,'args')
        // let dom:HTMLDivElement = args[0]
        // dom.addEventListener('click',()=>{
        //     dom.innerHTML = "56456456"
        // })
        // console.log("元素插入到父级dom时调用-mounted",3)
    // },

    // beforeUpdate(){
    //     // console.log("元素被更新之前调用-updated",4)
    // },

    // updated(){
    //     // console.log("元素更新是调用-updated",5)
    // },

    // beforeUnmount(){
    //     // console.log("指令被移除之前调用-beforeUnmount",6)
    // },

    // unmounted(){
    //     // console.log("指令被移除后调用 只调用一次-unmounted",7)
    // }
// }

export const vDraggable: Directive = (el: HTMLElement,binding: DirectiveBinding) => {
  const draggableElement: HTMLDivElement = el as HTMLDivElement
  const mouseDown = (e: MouseEvent) => {
    let X = e.clientX - el.offsetLeft;
    let Y = e.clientY - el.offsetTop;
    const move = (e: MouseEvent) => {
       //通过事件委托，计算移动的距离 
      let l = e.clientX - X;
      let t = e.clientY - Y;
       // 防止越界
       if (l < 0) {
        l = 0
      }

      if (l > document.documentElement.clientWidth - draggableElement.getBoundingClientRect().width) {
        l = document.documentElement.clientWidth - draggableElement.getBoundingClientRect().width
      }

      if (t < 0) {
          t = 0
      }
      

      el.style.position = "absolute"
      el.style.left = l + "px";
      el.style.top = t + "px";
      el.style.cursor = "pointer"
    };

    draggableElement.addEventListener("mousemove", move);
    draggableElement.addEventListener("mouseup", () => {
        draggableElement.removeEventListener("mousemove", move);
    });
  };
  draggableElement.addEventListener("mousedown", mouseDown);
};

// export class vDraggable{
//     constructor(){

//     }
    
//     init(){
  
//     }
// }