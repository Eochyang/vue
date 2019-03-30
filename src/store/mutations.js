import * as types from './types';
export default {
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,

}