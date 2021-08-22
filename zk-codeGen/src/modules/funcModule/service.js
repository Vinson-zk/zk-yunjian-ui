/*
* @Author: Vinson
* @Date:   2021-03-30 11:55:26
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-31 10:57:37
* 
* 
* 
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixCodeGen;
// const api = "apiMock";

// 编辑 
export async function editFuncModule(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/fm/module`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>{
            let filterCodes = ["zk.000002"];
            if(filterCodes.includes(res.code)){
                return true;
            } 
            return false
        }
        );
}

// 删除
export async function delFuncModule(params) {
    // return zkToolsAjax.reqPretreatment(`/${api}/module/module`, {method:'DELETE', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    return zkToolsAjax.reqPretreatment(`/${api}/fm/module`,  {method:'DELETE', data:params});
}

// 查询 详情
export async function getFuncModule(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/fm/module`,  {method:'GET', data:params});
}

// 查询 分页列表
export async function findFuncModule(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/fm/modules`,  {method:'GET', data:params});
}