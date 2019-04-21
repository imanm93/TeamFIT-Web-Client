import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';

export const getUserData = (action$, state$) => 
  action$.pipe(
    ofType('FETCH_USER_DATA'),
    switchMap(action => ({ type: 'ADD_USER_DATA', data: action.data }))
  )
