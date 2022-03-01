/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-07 17:08:54
 */

import { editThirdPartyAuthAccount, delThirdPartyAuthAccount, getThirdPartyAuthAccount, findThirdPartyAuthAccounts, accountAuth } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mThirdPartyAuthAccount',
    state: {
        gridData: undefined,    // 列表数据
        gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            dataSpacePlatform: '',    
            dataSpaceGroup: '',    
            dataSpaceOwner: '',    
            wxThirdPartyAppid: '',    
            wxAuthorizerAppid: '',    
            wxNickName: '',    
        }, 
        filter: {},             // 过滤条件     
        pathname: null,         // 当前访问的地址路径
        optEntity: undefined,   // 当前操作实体
        page:{
            current:1,    // 当前行
            pageSize: zkToolsUtils.getPageSize(),  // 当前行数量
            total:0,      // 总行数
			showQuickJumper:true, // 是否可以快速跳转至某页
        },                // 分页器对象
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {  // eslint-disable-line
            // dispatch({type:'findList', payload:initFilter, callback:()=>{}});
        },
    },
    effects: { // action
        // 编辑 
        *editThirdPartyAuthAccount({ payload, callback }, { call }) {
            let res = yield call(editThirdPartyAuthAccount, payload);
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
        // 删除
        *delThirdPartyAuthAccount({ payload, callback }, { call }) {
            let res = yield call(delThirdPartyAuthAccount, payload);
            if(res.code == "zk.0"){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (callback instanceof Function) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getThirdPartyAuthAccount({ payload }, { call, put }) {
            let res = yield call(getThirdPartyAuthAccount, payload);
            if (res.code == 'zk.0') {
                yield put({ type: 'setState', payload: { optEntity: res.data } });
            }
        },
        /*** 查询 分页列表
         * @param {object} filter 过滤条件; {}
         * @param {object} page 分页; {pageNo: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         * @param {callback} 回调整函数; ()=>{}
         */
        *findThirdPartyAuthAccounts({ filter, page, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(page){
                page.pageNo = page.pageNo - 1;
                params = { ...params, ...zkToolsUtils.convertPageParam(page) };
            }
            let res = yield call(findThirdPartyAuthAccounts, params);
            let restState = {}
            if (res.code == 'zk.0') {
                restState = {
                    "filter": params,
                    "gridData": res.data.result,
                    "page": {
                        "current": res.data.pageNo + 1,
                        "pageSize": res.data.pageSize,
                        // "pageSize": zkToolsUtils.getPageSize(),
                        "total": res.data.totalCount,
                        "showQuickJumper": true
                    }
                }
                yield put({ type: 'setState', payload: restState });
                if (callback instanceof Function) {
                    callback.call(this);
                }
            }
        },
        // 目标账号授权请求
        *accountAuth({payload={}, callback},{call, put}) {
            let res = yield call(accountAuth, payload);
            if(res.code == "zk.0"){
                // zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                if (callback instanceof Function) {
                    callback.call(this, res.data);
                }
            }
        }

    },
    reducers: { // 结果
        setState(state, action) {
            return { ...state, ...action.payload }
        }
    }
};

export default model;