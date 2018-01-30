import React from 'react';
import { Router, Route, IndexRoute} from 'react-router';
import { createHashHistory } from 'history';
import About from '../About';

const hashHistory = createHashHistory();
const Rout = function(){
    return (
        <Router history={hashHistory}>
            <Route path="/" component={About} />
        </Router>
    );
}
export default Rout;
