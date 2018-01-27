import request from '../server/request';
import {urlfix} from '../common';
export default {

  namespace: 'IndexPage',

  state: {
    list:{}
  },

  subscriptions: {
    setup({ dispatch, history }) {  
    },
  },

  effects: {
    *fetchlist({ payload:{backup}}, { call, put }) {  
      const {data ,errmsg,errcode}=yield call(request,{
        url:`${urlfix}/sales/tenant/pc/detaillist?range=PAGE&page=1&size=10`,
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
