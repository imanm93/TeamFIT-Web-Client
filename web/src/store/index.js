import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'react-router-redux';
// import { loadState } from '../localStorage';
import { history } from '../history';

import reduxThunk from 'redux-thunk';
import reducers from '../reducers';
import epics from '../epics';

// const persistedState = loadState();
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducers(history), applyMiddleware(reduxThunk, epicMiddleware, routerMiddleware(history)));

epicMiddleware.run(epics);

export default store;
