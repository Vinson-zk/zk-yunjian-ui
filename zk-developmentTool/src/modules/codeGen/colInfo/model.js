/*
* @Author: Vinson
* @Date:   2021-04-01 09:30:32
* @Last Modified by: runoob
* @Last Modified time: 2024-06-24 17:04:27
* 
* 
* 
*/
import { updateAddCols, updateAllCols, findColInfos, editColInfo } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mColInfo',
    state: {
        pathname: null,          // 当前访问的地址路径
        tableInfo: undefined,    // 表信息实体
        colInfos: undefined,     // 表字段列表；          
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {  // eslint-disable-line
            // dispatch({type:'findList', payload:initFilter, callback:()=>{}});
        },
    },
    effects: { // action
        // 查询 
        *findColInfos({ tableId }, { call, put }) {
            let res = yield call(findColInfos, tableId);
            if (res.ok) {
                yield put({ type: 'setState', payload: { colInfos: res.data||[] } });
            }
        }, 
        // 编辑 
        *editColInfo({ payload, callback }, { call }) {
            let res = yield call(editColInfo, payload);
            let f = errors=>{
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this, errors);
                }
            }
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                f();
            }else{
                if (res.type == globalAppConfig.resCodeType.dataValidator ) {
                    f(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        // 增量更新表字段信息
        *updateAddCols({ tableId }, { call, put }) {
            let res = yield call(updateAddCols, tableId);
            if (res.ok) {
                yield put({ type: 'setState', payload: { colInfos: res.data||[] } });
            }
        },    
        // 增量更新表字段信息
        *updateAllCols({ tableId }, { call, put }) {
            let res = yield call(updateAllCols, tableId);
            if (res.ok) {
                yield put({ type: 'setState', payload: { colInfos: res.data||[] } });
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