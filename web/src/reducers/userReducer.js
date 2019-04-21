import { ADD_USER_DATA } from '../constants/user/reducerTypes';

const initState = {
  isLoggedIn: false,
  name: '',
  userID: '',
  email: '',
  picture: ''
}

export default function (state=initState, action) {
  switch (action.type) {
    case ADD_USER_DATA:
      console.log(action.data);
      return state;
    default:
      return state;
  }
}
