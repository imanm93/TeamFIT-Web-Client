import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import userReducer from './userReducer';

const rootReducer = (history) => combineReducers({
  user: userReducer,
  router: connectRouter(history),
  form: formReducer
});

export default rootReducer;
