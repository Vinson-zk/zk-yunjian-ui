/*
* @Author: Vinson
* @Date:   2021-04-01 09:30:42
* @Last Modified by: runoob
* @Last Modified time: 2024-06-24 18:02:31
* 
* 
* 
*/

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixDevTool;

// 增量更新表字段信息
export async function updateAddCols(tableId) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/c/updateAddCols/${tableId}`, {method:'GET'});
}

// 增量更新表字段信息
export async function updateAllCols(tableId) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/c/updateAllCols/${tableId}`, {method:'GET'});
}

// 查询 
export async function findColInfos(tableId) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/c/colInfos/${tableId}`, {method:'GET'});
}

// 编辑 
export async function editColInfo(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/c/colInfo`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

