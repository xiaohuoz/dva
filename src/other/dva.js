import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware, { effects } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

/**
 * effects 传参顺序问题？？
 * 同一个models内的put操作(可修复)
 */
const dva = () => {
    return {
        _router: null,
        _models: [],
        _store:{

        },
        use: null,
        router: function(Router){
            this._router = <Router />;
        },
        model: function(model){
            this._models.push(model);
        },
        start: function(id){
            const _this = this;
            const sagaMiddleware = createSagaMiddleware();
            const tasks = function *(){
                let data = _this._models.map((item) => {
                    const array = Object.entries(item.effects);
                    // console.log(array);
                    return array.map((i)=>{
                        return [`${item.namespace}/${i[0]}`,i[1]];
                    });
                });
                let base = [];
                data.forEach((item)=>{
                    base = base.concat(item);
                });
                // console.log(base);
                yield base.map((item)=>{
                    // console.log('takeEvery', item);
                    return takeEvery(item[0],item[1], effects);
                })
            }
            const store = createStore(
                combineReducers(
                    Object.assign(
                        ...this._models.map((item)=>{
                            let object = {}
                            let key = item.namespace;
                            object[key] = (state=item.state, action) => {
                                if(item.namespace === action.type.split('/')[0]){
                                    // console.log(item.state);
                                    if(item.reducers[action.type.split('/')[1]]){
                                        return item.reducers[action.type.split('/')[1]](state, action)
                                    }
                                }
                                return state;
                            }
                            return object ;
                        })
                    )
                ),{},
                applyMiddleware(sagaMiddleware)
            );
            sagaMiddleware.run(tasks);
            this._store = store;

            const Element = function(){
                return <Provider store={store}>{_this._router}</Provider>;
            }
            ReactDOM.render(<Element />, document.getElementById(id));
        }
    }
}

export default dva;
