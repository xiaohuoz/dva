import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { helloSaga, watchIncrementAsync } from './reduxsaga'

import About from './About';
import add from './reducer.js';
const sagaMiddleware = createSagaMiddleware(watchIncrementAsync);

let store = createStore(add, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga);
sagaMiddleware.run(watchIncrementAsync);
const hashHistory = createHashHistory();
const Rout = function(){
    return (
        <Provider store = {store}>
            <Router history={hashHistory}>
                <Route path="/" component={About} />
            </Router>
        </Provider>
    );
}
export default Rout;
