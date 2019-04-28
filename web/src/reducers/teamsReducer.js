import { SET_TEAM, DELETE_TEAM, UPDATE_TEAM_NAME, UPDATE_TEAM_MEMBERS } from '../constants/teams/teamsReducerTypes';

const initState = {
  teams: {}
}

export default function(state=initState, action) {
  switch (action.type) {
    case SET_TEAM:
      return state;
    case DELETE_TEAM:
      return state;
    case UPDATE_TEAM_NAME:
      return state;
    case UPDATE_TEAM_MEMBERS:
      return state;
    default:
      return state;
  }
}
