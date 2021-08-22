/*
* @Author: Vinson
* @Date:   2021-03-30 15:52:51
* @Last Modified by:   Vinson
* @Last Modified time: 2021-04-19 13:10:40
* 
* 
* 
*/

import { genCode, genCodee } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mGen',
    state: {
        pathname: null,          // 当前访问的地址路径
        funcModule: undefined,   // 当前操作实体
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {  // eslint-disable-line
            // dispatch({type:'findList', payload:initFilter, callback:()=>{}});
        },
    },
    effects: { // action
        // 生成代码
        *genCode({ moduleId, params }, { call, put }) {
            let res = yield call(genCode, moduleId, params);
            // if (res.code == 'zk.0') {
            //     zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            // }
        }, 
    },
    reducers: { // 结果
        setState(state, action) {
            return { ...state, ...action.payload }
        }
    }
};

export default model;