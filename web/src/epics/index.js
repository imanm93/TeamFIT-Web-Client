import { combineEpics } from 'redux-observable';
import { getUserData } from './userEpic';

export default combineEpics(getUserData);
