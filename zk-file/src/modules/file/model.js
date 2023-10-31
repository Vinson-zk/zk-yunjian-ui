/*
* @Author: Vinson
* @Date:   2022-12-13 08:55:26
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-13 17:27:19
*/
// import {  } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mFile',
    state: {
        optDir: undefined,   // 当前操作目录
        gridSelKeys: [],        // 列表选中的 KEY
        initFilter: {           // 初始过滤条件
            code: '',    
            name: {},     
            stauts: '',  
        }, 
        filter: {},             // 过滤条件     
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
        *editFile({ payload, callback }, { call }) {
        	
        	if(zkJsUtils.isEmpty(payload.parentId)){
                delete payload.parentId;
            }
            
            let res = yield call(editFileDirectory, payload);
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
        *delFile({ payload, callback }, { call }) {
            let res = yield call(delFileDirectory, payload);
            if(res.code == "zk.0"){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (callback instanceof Function) {
                callback.call(this, res);
            }
        },
        // 查询 详情
        *getFile({ payload, isParent = false }, { call, put }) {
            let res = yield call(getFileDirectory, payload);
            if (res.code == 'zk.0') {
                if(isParent){
                	let optDir = {};
                    optDir.parentId = res.data.pkId;
                    optDir.parent = res.data;
                    yield put({ type: 'setState', payload: { optDir: optDir } });
                }else{
                    yield put({ type: 'setState', payload: { optDir: res.data } });
                }
            }
        },
        /*** 查询 列表
         * @param {object} sorter 数组; {field:'xxx', order: ['ascend', 'descend']}
         * @param {callback} 回调整函数; ()=>{}
         */
        *findFile({ sorter, callback }, { call, put, select }) {
            let params = zkToolsUtils.convertSortParam({}, sorter); 
            let res = yield call(findFileDirectorysTree, params);
            let restState = {}
            if (res.code == 'zk.0') {
                restState = {
                    "treeData": res.data.result
                }
                yield put({ type: 'setState', payload: restState });
                if (callback instanceof Function) {
                    callback.call(this);
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



