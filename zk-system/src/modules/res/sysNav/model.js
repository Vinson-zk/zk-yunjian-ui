/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:27:32
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-03 17:03:51
 */


import { editSysNav, deleteSysNav, getSysNav, findSysNavs } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysNav',
    state: {
        gridData: undefined,    // 列表数据
        gridSelKeys: [],        // 列表选中的 KEY; 将行选择 key 放在 model 中方便优化体检，如选择行在操作中保持；
        initFilter: {           // 初始过滤条件
            code: '',
            isShow: '',
            name: undefined
        }, 
        filter: undefined,             // 过滤条件     
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
        *editSysNav({ payload, callback }, { call }) {
            let res = yield call(editSysNav, payload);
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
        *deleteSysNav({ payload, callback }, { call }) {
            let res = yield call(deleteSysNav, payload);
            if(res.code == "zk.0"){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (callback instanceof Function) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getSysNav({ payload }, { call, put }) {
            let res = yield call(getSysNav, payload);
            if (res.code == 'zk.0') {
                yield put({ type: 'setState', payload: { optEntity: res.data } });
            }else{

            }
        },
        /*** 查询 分页列表
         * @param {object} page 分页; {pageNo: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         */
        *findSysNavs({ filter, page, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(page){
                page.pageNo = page.pageNo - 1;
                params = { ...params, ...zkToolsUtils.convertPageParam(page) };
            }
            let res = yield call(findSysNavs, params);
            let nextState = {}
            if (res.code == 'zk.0') {
                nextState = {
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
                yield put({ type: 'setState', payload: nextState });
                if (callback instanceof Function) {
                    callback.call(this);
                }
            }
        },
    },
    reducers: { // 结果
        setState(state, action) {
            // console.log("[^_^:20211102-1722-001]", state, action)
            return { ...state, ...action.payload }
        }
    }
};

export default model;


