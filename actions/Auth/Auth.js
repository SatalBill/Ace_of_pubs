import { LOGIN, GET_AUTHED_USER } from './types.js'
import AuthApi from '../../api/AuthApi'
import { setAuthHeaders } from '../../api/apiUtils/apiHeaders'
export const loginCreater = (flag) => ({
  type: LOGIN,
  authedUser: flag
})
export const getAuthedUserCreater = () => {
  return {
    type: GET_AUTHED_USER
  }
}
export const login = (payload) => {
  return (dispatch) => {
    AuthApi.login((response) => {
      setAuthHeaders(token)
      dispatch(loginCreater(true))
    }, (err) => {
      console.log(err, ' error')
    }, payload)
  }
}