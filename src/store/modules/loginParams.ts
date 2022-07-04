interface State{
  loginParams:Object
}
declare interface LoginParams{
  namespace:Boolean,
  state:State
  getters:{
    getLoginParams:(state:State)=> Object
  },
  mutations:{
    setLoginParams:(state:State,params:Object)=> void
  },
  actions:{
    changeLoginParams:(commit:any,params:State)=> void
  }
}

export const loginParams:LoginParams = {
    namespace:true,
    state:{
      loginParams:{
        token:""
      }
    },
    getters:{
      async getLoginParams(state){
        return state.loginParams
      }
    },
    mutations:{
      async setLoginParams(state,params){
        state.loginParams = params
        window.sessionStorage.setItem("loginParams",JSON.stringify(params))
      }
    },
    actions:{
      async changeLoginParams(commit,params){
        commit({type:"setLoginParams",params:params})
      }
    }
}