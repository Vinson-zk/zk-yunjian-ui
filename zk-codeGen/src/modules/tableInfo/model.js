/*
* @Author: Vinson
* @Date:   2021-03-31 10:56:52
* @Last Modified by:   Vinson
* @Last Modified time: 2021-04-25 17:32:27
* 
* 
* 
*/
import { getTables, editTableInfo, updateTableInfo } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mTableInfo',
    state: {
        pathname: null,          // 当前访问的地址路径
        tableInfos: undefined,   // 当前操作实体          
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {  // eslint-disable-line
            // dispatch({type:'findList', payload:initFilter, callback:()=>{}});
        },
    },
    effects: { // action
         // 查询 模块下所有表
        *getTables({ moduleId, forceUpdate, callback }, { call, put }) {
            let res = yield call(getTables, moduleId, {forceUpdate:forceUpdate});
            if (res.code == 'zk.0') {
                yield put({ type: 'setState', payload: { tableInfos: res.data } });
            }else{

            }

            if(callback instanceof Function){
                callback.call(this);
            }
        },
        // 编辑 
        *editTableInfo({ payload, callback }, { call }) {
            let res = yield call(editTableInfo, payload);
            let f = errors=>{
                if (callback instanceof Function) {
                    callback.call(this, errors);
                }
            }
            switch(res.code){
                case "zk.0": 
                    zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                    f();
                    break;
                case "zk.000002": 
                    f(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                    break;
            }
        },
        *updateTableInfo({ tableId, callback }, { call }) {
            let res = yield call(updateTableInfo, tableId);
            switch(res.code){
                case "zk.0": 
                    zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                    if (callback instanceof Function) {
                        callback.call(this);
                    }
                    break;
            }
        },
    },
    reducers: { // 结果
        setState(state, action) {
            return { ...state, ...action.payload }
        }
    }
};

export default model;