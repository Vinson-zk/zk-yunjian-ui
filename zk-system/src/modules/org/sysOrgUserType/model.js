/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 11:01:15
 */

import { editSysOrgUserType, delSysOrgUserType, getSysOrgUserType, findSysOrgUserTypes, grantAuths } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysOrgUserType',
    state: {
        gridData: undefined,    // 列表数据
        gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            groupCode: '',    
            companyCode: '',  
            code: '',    
            name: {},     
            status: '',  
        }, 
        filter: {},             // 过滤条件     
        pathname: null,         // 当前访问的地址路径
        optEntity: undefined,   // 当前操作实体
        pagination:{
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
        *editSysOrgUserType({ payload, callback }, { call }) {
            let res = yield call(editSysOrgUserType, payload);
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
        // 删除
        *delSysOrgUserType({ payload, callback }, { call }) {
            let res = yield call(delSysOrgUserType, payload);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (zkJsUtils.assertObjType(callback, Function)) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getSysOrgUserType({ payload }, { call, put }) {
            let res = yield call(getSysOrgUserType, payload);
            if (res.ok) {
                yield put({ type: 'setState', payload: { optEntity: res.data } });
            }
        },
        /*** 查询 分页列表
         * @param {object} filter 过滤条件; {}
         * @param {object} pagination 分页; {pageNo: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         * @param {callback} 回调整函数; ()=>{}
         */
        *findSysOrgUserTypes({ filter, pagination, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(pagination){
                params = { ...params, ...zkToolsUtils.convertPageParam(pagination) };
            }
            let res = yield call(findSysOrgUserTypes, params);
            let restState = {}
            if (res.ok) {
                restState = {
                    "filter": params,
                    "gridData": res.data.result,
                    "pagination": {
                        "current": res.data.pageNo + 1,
                        "pageSize": res.data.pageSize,
                        // "pageSize": zkToolsUtils.getPageSize(),
                        "total": res.data.totalCount,
                        "showQuickJumper": true
                    }
                }
                yield put({ type: 'setState', payload: restState });
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this);
                }
            }
        },
        // 给用户类型分配权限
        *grantAuth({ userTypeId, allotAuths, callback }, { call, put, select }){
            let res = yield call(grantAuths, userTypeId, allotAuths);
            if (res.ok) {
                if (zkJsUtils.assertObjType(callback, Function)) {
                  zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                  callback.call(this, res);
                }
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


