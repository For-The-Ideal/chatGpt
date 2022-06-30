import { createStore } from 'vuex'
import {loginParams} from "./modules/loginParams"
import {userInfo} from "./modules/userInfo"
export default createStore({
  modules:{
    loginParams,
    userInfo
  }
})