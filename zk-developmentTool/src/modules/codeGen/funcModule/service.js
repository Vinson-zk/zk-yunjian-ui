/*
* @Author: Vinson
* @Date:   2021-03-30 11:55:26
* @Last Modified by: runoob
* @Last Modified time: 2024-06-24 18:02:43
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
        res=>res.type === globalAppConfig.resCodeType.dataValidator
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