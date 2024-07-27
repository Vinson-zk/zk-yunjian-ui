/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:50:22
* @Last Modified by: runoob
* @Last Modified time: 2024-07-08 17:39:08
*/

import { findAuthPage, setAuthsDefaultTransfer } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSysAuthCompany',
    state: {
        gridData: undefined,    // 列表数据
        // gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            // searchValue: '',    
            ownerType: "",  
        }, 
        filter: {},             // 过滤条件     
        pathname: null,         // 当前访问的地址路径
        // optEntity: undefined,   // 当前操作实体
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

        /*** 查询 分页列表
         * @param {object} filter 过滤条件; {}
         * @param {object} pagination 分页; {pageNo: 0, pageSize:10}
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         * @param {callback} 回调整函数; ()=>{}
         */
        *findAuthPage({ filter, pagination, sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam(filter, sorter); 
            if(pagination){
                params = { ...params, ...zkToolsUtils.convertPageParam(pagination) };
            }
            if(zkJsUtils.isEmpty(params['ownerType'])){
                delete filter['ownerType'];
            }

            let res = yield call(findAuthPage, params);
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
        // 设置权限是否默认传递给子公司
        *setAuthsDefaultTransfer({ transferPkIds, notTransferPkIds, callback }, { call }) {
            let payload = { 'transferPkId': transferPkIds, 'notTransferPkId': notTransferPkIds };
            let res = yield call(setAuthsDefaultTransfer, payload);
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

