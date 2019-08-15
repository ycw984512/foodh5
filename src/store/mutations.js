// import {
//   HOME_CASUAL,
//   SET_TOKEN
// } from './mutation-types'

export default {
  // home_casual(state, {homecasual}) {
  //   state.homecasual = homecasual;
  // },
  setToken(state,token){
    state.token = token;
  },
  loginOut(state){
    state.token="",
    localStorage.removeItem('token')
  }

}
