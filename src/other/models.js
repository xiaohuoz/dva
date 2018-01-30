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
    *incrementAsync({put},{ payload }) {
      yield put({ type: 'test/increment' })
    }
  },
  reducers: {
    increment:function(state, action){
      const { num } = state;
      return {
        ...state,
        num: num+1,
      }
    }
  }
};
