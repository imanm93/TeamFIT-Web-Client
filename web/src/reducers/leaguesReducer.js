import { SET_LEAGUE, DELETE_LEAGUE } from '../constants/leagues/leaguesReducerTypes';

const initState = {
  leagues: []
}

export default function(state=initState, action) {
  switch (action.type) {
    case SET_LEAGUE:
      return state;
    case DELETE_LEAGUE:
      return state;
    default:
      return state;
  }
}
