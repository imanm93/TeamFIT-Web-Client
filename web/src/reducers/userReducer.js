import { SET_USER_DATA } from '../constants/user/reducerTypes';

const initState = {
  isLoggedIn: false,
  name: '',
  userID: '',
  picture: '',
  accessToken: ''
}

export default function (state=initState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        isLoggedIn: true,
        name: action.data.name,
        userID: action.data.userID,
        picture: action.data.picture.data.url,
        accessToken: action.data.accessToken
      };
    default:
      return state;
  }
}
