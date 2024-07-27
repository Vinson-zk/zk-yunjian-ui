/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 16:36:59
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-29 23:17:28
 */

import { editSysMenu, deleteSysMenu, getSysMenu, findSysMenusTree, findSysNavs } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysMenu',
    state: {
        gridData: undefined,    // 列表数据
        gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            name: '',
            code: '',
            navCode:'',
            isShow:'',
        }, 
        filter: undefined,      // 过滤条件     
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
        *editSysMenu({ payload, callback }, { call }) {
            
            if(zkJsUtils.isEmpty(payload.parentId)){
                delete payload.parentId;
            }

            let res = yield call(editSysMenu, payload);
            let f = (errors)=>{
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
        *deleteSysMenu({ payload, callback }, { call }) {
            let res = yield call(deleteSysMenu, payload);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (zkJsUtils.assertObjType(callback, Function)) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getSysMenu({ payload, isParent }, { call, put }) {
            let res = yield call(getSysMenu, payload);
            if (res.ok) {
                if(isParent){
                    let optEntity = {};
                    optEntity.parentId = res.data.pkId;
                    optEntity.parent = res.data;
                    yield put({ type: 'setState', payload: { optEntity: optEntity } });
                }else{
                    yield put({ type: 'setState', payload: { optEntity: res.data } });
                }
            }
        },
        /*** 查询 分页列表 
         * @param {object} pagination 分页; {current: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         */
        *findSysMenusTree({ filter, pagination, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(pagination){
                params = { ...params, ...zkToolsUtils.convertPageParam(pagination) };
            }
            let res = yield call(findSysMenusTree, params);
            let nextState = {};
            if (res.ok) {
                nextState = {
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
                yield put({ type: 'setState', payload: nextState });
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this);
                }
            }
        },
        *findNavCodes({ filter, pagination={}, sorter, callback }, { call, put, select }){
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            pagination.pageNo = 0;
            pagination.pageSize = 333;
            params = { ...params, ...zkToolsUtils.convertPageParam(pagination) };

            let res = yield call(findSysNavs, params);
            if (res.ok) {
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this, res.data.result);
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


