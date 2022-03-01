/*
* @Author: Vinson
* @Date:   2021-04-01 09:30:42
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-09 17:07:55
* 
* 
* 
*/

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixDevelopmentTool;
// const api = "apiMock";

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
        res=>{
            let filterCodes = ["zk.000002"];
            if(filterCodes.includes(res.code)){
                return true;
            } 
            return false
        }
    );
}

