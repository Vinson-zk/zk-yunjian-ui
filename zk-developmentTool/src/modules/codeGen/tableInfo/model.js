/*
* @Author: Vinson
* @Date:   2021-03-31 10:56:52
* @Last Modified by: vinson
* @Last Modified time: 2024-12-27 11:37:42
* 
* 
* 
*/
import { getTables, editTableInfo, updateTableInfo, updateTableList, delTableInfo } from './service';

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
        *getTables({ moduleId, callback }, { call, put }) {
            let res = yield call(getTables, moduleId);
            if (res.ok) {
                yield put({ type: 'setState', payload: { tableInfos: res.data } });
            }
            if(zkJsUtils.assertObjType(callback, Function)){
                callback.call(this);
            }
        },
        // 编辑 
        *editTableInfo({ payload, callback }, { call }) {
            let res = yield call(editTableInfo, payload);
            let f = errors=>{
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this, errors);
                }
            }
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                f();
            }else{
                if(res.type == globalAppConfig.resCodeType.dataValidator){
                    f(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        *updateTableInfo({ tableId, callback }, { call }) {
            let res = yield call(updateTableInfo, tableId);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this);
                }
            }
        },

        *updateTableList({ moduleId, callback }, { put, call }) {
            let res = yield call(updateTableList, moduleId);
            if (res.ok) {
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                yield put({ type: 'setState', payload: { tableInfos: res.data } });
                if(zkJsUtils.assertObjType(callback, Function)){
                    callback.call(this);
                }
            }
            
        },

        *delTableInfo({ payload, callback }, { call }) {
            let res = yield call(delTableInfo, payload);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (zkJsUtils.assertObjType(callback, Function)) {
                callback.call(this, res);
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