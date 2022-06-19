/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-09 17:29:17
 */

import { editSysOrgDept, delSysOrgDept, getSysOrgDept, findSysOrgDeptsTree, setAuthRelation } from './service';
import { getSysOrgCompany } from '../admin_sysOrgCompany/service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysOrgDeptAdmin',
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
        targetCompany: {},      // 当前操作目标公司
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
        *editSysOrgDept({ companyId, payload, callback }, { call }) {
        	
        	if(zkJsUtils.isEmpty(payload.parentId)){
                delete payload.parentId;
            }
            
            let res = yield call(editSysOrgDept, companyId, payload);
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
        *delSysOrgDept({ payload, callback }, { call }) {
            let res = yield call(delSysOrgDept, payload);
            if(res.code == "zk.0"){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (callback instanceof Function) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getSysOrgDept({ payload, flag = 0 }, { call, put }) {
            if(flag == 2){
                // 查询操作的目标公司
                let res = yield call(getSysOrgCompany, {pkId: payload.companyId});
                if (res.code == 'zk.0') {
                    yield put({ type: 'setState', payload: { optEntity: {}, targetCompany: res.data } });
                }
            }else {
                let res = yield call(getSysOrgDept, payload);
                if (res.code == 'zk.0') {
                    if(flag == 1){
                        // 查询操作的上级部门
                        let optEntity = {};
                        optEntity.parentId = res.data.pkId;
                        optEntity.parent = res.data;
                        yield put({ type: 'setState', payload: { optEntity: optEntity, targetCompany: res.data.company } });
                    }else{
                        yield put({ type: 'setState', payload: { optEntity: res.data, targetCompany: res.data.company } });
                    }
                }
            }
        },
        /*** 查询 分页列表
         * @param {object} filter 过滤条件; {}
         * @param {object} pagination 分页; {pageNo: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         * @param {callback} 回调整函数; ()=>{}
         */
        *findSysOrgDeptsTree({ companyId, filter, pagination, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(pagination){
                params = { ...params, ...zkToolsUtils.convertPageParam(pagination) };
            }
            let res = yield call(findSysOrgDeptsTree, companyId, params);
            let restState = {}
            if (res.code == 'zk.0') {
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
                if (callback instanceof Function) {
                    callback.call(this);
                }
            }
        },
        // 给部门分配权限
        *grantAuth({ deptId, auths, callback }, { call, put, select }){
            let res = yield call(setAuthRelation, deptId, auths);
            if (res.code == 'zk.0') {
                if (callback instanceof Function) {
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