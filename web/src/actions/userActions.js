import { SET_USER_DATA } from '../constants/user/reducerTypes';

export function setUserData(data) {
  return function (dispatch) {
    dispatch({
      type: SET_USER_DATA,
      data: data
    })
  }
}
