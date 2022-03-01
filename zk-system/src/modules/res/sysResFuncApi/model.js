/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-12-01 22:53:53
 */

import { editSysResFuncApi, delSysResFuncApi, getSysResFuncApi, findSysResFuncApis } from './service';
import { findSysResApplicationSystems } from '../sysResApplicationSystem/service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysResFuncApi',
    state: {
        gridData: undefined,    // 列表数据
        gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            name: {},     
            code: '',    
            systemCode: '',  
            originalUri: '',    
            agentUri: '',    
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
        *editSysResFuncApi({ payload, callback }, { call }) {

            if(payload && payload.reqMethods){
                if(payload.reqMethods instanceof Array){
                    let reqMethods = 0;
                    for(let intV of payload.reqMethods){
                        reqMethods = reqMethods | intV;
                    }
                    payload.reqMethods = reqMethods;
                }
            }

            let res = yield call(editSysResFuncApi, payload);
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
        *delSysResFuncApi({ payload, callback }, { call }) {
            let res = yield call(delSysResFuncApi, payload);
            if(res.code == "zk.0"){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (callback instanceof Function) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getSysResFuncApi({ payload }, { call, put }) {
            let res = yield call(getSysResFuncApi, payload);
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
        *findSysResFuncApis({ filter, page, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(page){
                page.pageNo = page.pageNo - 1;
                params = { ...params, ...zkToolsUtils.convertPageParam(page) };
            }
            let res = yield call(findSysResFuncApis, params);
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
        // 查询应用项目系统
        *findApplicationSystems({ filter, page={}, sorter, callback }, { call, put, select }){
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            page.pageNo = 0;
            page.pageSize = 333;
            params = { ...params, ...zkToolsUtils.convertPageParam(page) };

            let res = yield call(findSysResApplicationSystems, params);
            if (res.code == 'zk.0') {
                if (callback instanceof Function) {
                    callback.call(this, res.data.result);
                }
            }
        },
    },
    reducers: { // 结果
        setState(state, action) {
            let payload = action.payload;
            // 针对 操作实体的 ‘reqMethods’ 做特殊处理
            if(payload && payload.optEntity && payload.optEntity.reqMethods){
                if(typeof(payload.optEntity.reqMethods) == 'number'){
                    let reqMethods = payload.optEntity.reqMethods;
                    payload.optEntity.reqMethods = [];
                    let v = 1
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 2
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 4
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 8
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 16
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 32
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 64
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                    v = 128
                    if(v == (reqMethods&v)){
                        payload.optEntity.reqMethods.push(v);
                    }
                }
            }
            return { ...state, ...payload }
        }
    }
};

export default model;