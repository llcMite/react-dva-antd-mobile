import request from '../server/request';
import {urlfix} from '../common';
export default {

  namespace: 'IndexPage',

  state: {
    list:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetchlist({ payload:{backup}}, { call, put }) {  // eslint-disable-line
      const {data ,errmsg,errcode}=yield call(request,{
        url:`${urlfix}/sales/tenantstore/list?page=1&size=1`,
        options:{
          methods:'get'
        }
      })
      
      yield put({ type: 'save' ,payload:{list:data}});
    },
  },

  reducers: {
    save(state, payload) {
      return { ...state, ...payload };
    },
  },

};
