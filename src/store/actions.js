import * as types from './types';
import router from '../plugins/router.config'

export default {

  [types.VIEW_FOOT]:({state,commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({state,commit},payload)=>commit(types.VIEW_LOADING,payload)

}