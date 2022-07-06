import {createPinia,Pinia,PiniaPluginContext} from "pinia"
const piniaPlugin = (context:PiniaPluginContext) :void=>{
    console.log(context,'context')
}
const store:Pinia = createPinia()
store.use(piniaPlugin)
export {
    store
}