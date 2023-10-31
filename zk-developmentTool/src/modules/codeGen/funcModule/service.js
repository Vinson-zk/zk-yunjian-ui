/*
* @Author: Vinson
* @Date:   2021-03-30 11:55:26
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 17:58:22
* 
* 
* 
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixDevTool;

// 编辑 
export async function editFuncModule(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/fm/module`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
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
    return zkToolsAjax.reqPretreatment(`/${api}/cg/fm/module`,  {method:'DELETE', data:params});
}

// 查询 详情
export async function getFuncModule(params) {
  return zkToolsAjax.reqPretreatment(`/${api}/cg/fm/module`,  {method:'GET', data:params});
}

// 查询 分页列表
export async function findFuncModule(params) {
  return zkToolsAjax.reqPretreatment(`/${api}/cg/fm/modules`,  {method:'GET', data:params});
}