
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

import { test as testService } from './fetch';

export default {
  namespace: "test",
  state: {
    num: 0
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
  effects: {
    *incrementAsync({put, call},{ payload }) {
      // yield delay(1000)
      const result = yield call(testService,{payload:{a:123}});
      console.log(JSON.stringify(result.body));
      yield put({ type: 'test/increment' })
      console.log('56789');
    },
    *decrementAsync({put},{ payload }) {
      yield put({ type: 'test/decrement' })
    }
  },
  reducers: {
    increment:function(state, action){
      const { num } = state;
      return {
        ...state,
        num: num+1,
      }
    },decrement:function(state, action){
      const { num } = state;
      return {
        ...state,
        num: num-1,
      }
    },
  }
};
