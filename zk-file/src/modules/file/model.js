/*
* @Author: Vinson
* @Date:   2022-12-13 08:55:26
* @Last Modified by: runoob
* @Last Modified time: 2024-06-24 17:34:34
*/
import { sFindTree, sFindPage, sGet, sEditDir, sDel, sUpload } from './service';

import { zkTools } from 'zkFramework';
const { zkToolsUtils, zkToolsMsg } = zkTools;

const model = {
    namespace: 'mFile',
    state: {
        pathname: undefined,
        treeData: undefined,    // 目录树形结构数据
        optFile: undefined,     // 当前操作对象，理论上这里只会目录类型的 file 对象；且是父目录
        childPage: { // 当前操作目录，optFile 下的子目录及文件

        },          
        // gridSelKeys: [],     // 列表选中的 KEY
        searchValue: undefined,             // 过滤条件     
   //      pagination:{
   //          current:1,    // 当前行
   //          pageSize: zkToolsUtils.getPageSize(),  // 当前行数量
   //          total:0,      // 总行数
			// showQuickJumper:true, // 是否可以快速跳转至某页
   //      },                // 分页器对象
    },
    subscriptions: { // 启动
        // eslint-disable-line
        setup({ dispatch, history }) { },
    },
    effects: { // action
        // 查询，分页树形查询; sorter={pageSize: 9999}, 
        *findFileTree({ params={}, sorter, callback }, { call, put, select }) {
            params = zkToolsUtils.convertSortParam(params, sorter); 
            let res = yield call(sFindTree, params);
            let restState = {}
            if (res.ok) {
                restState = {
                    "treeData": res.data.result
                }
                yield put({ type: 'setState', payload: restState });
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this, res.data);
                }
            }
        },

        // 查询，列表查询
        *findFilePage({ params={}, sorter={pageSize: 9999}, callback }, { call, put, select }) {
            params = zkToolsUtils.convertSortParam(params, sorter); 
            let res = yield call(sFindPage, params);
            let restState = {}
            if (res.ok) {
                yield put({type: 'mFile/setState', payload:{childPage: res.data} });
                if (zkJsUtils.assertObjType(callback, Function)) {
                    callback.call(this, res.data);
                }
            }
        },
        // 设置当前操作目录
        *setCurrentOptFile({ optFile }, { call, put }) {
            // console.log("[^_^:20231008-2152-001] setCurrentOptFile: ", optFile);
            if(zkJsUtils.isEmpty(optFile)){
                yield put({ type: 'setState', payload: { optFile: optFile } });
            }else{
                if(zkJsUtils.isEmpty(optFile.parent) && !zkJsUtils.isEmpty(optFile.parentId)){
                    yield put({ type: 'getFile', payload: { pkId: optFile.pkId } });
                }else{
                    yield put({ type: 'setState', payload: { optFile: optFile } });
                }
            }
        },
        // 查询，明细查询，包含父节点
        *getFile({ payload }, { call, put }) {
            let res = yield call(sGet, {'isDetail': true, ...payload});
            if (res.ok) {
                yield put({ type: 'setState', payload: { optFile: res.data } });
            }
        },
        // 编辑目录，新增/修改目录
        *editFile({ payload, callback }, { call }) {
        	
        	if(zkJsUtils.isEmpty(payload.parentId)){
                delete payload.parentId;
            }
            
            let res = yield call(sEditDir, payload);
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
        *delFile({ payload, callback }, { call }) {
            let res = yield call(sDel, payload);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
            }
            if (zkJsUtils.assertObjType(callback, Function)) {
                callback.call(this, res);
            }
        },
        // 上传
        *upload({ params = {}, upload, callback }, { call }) {

            console.log('[^_^:20240113-1358-001] params: ', params);
            let res = yield call(sUpload, params, upload);
            if(res.isOk){
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



