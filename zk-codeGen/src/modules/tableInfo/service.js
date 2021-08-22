/*
* @Author: Vinson
* @Date:   2021-03-31 10:56:37
* @Last Modified by:   Vinson
* @Last Modified time: 2021-04-25 18:46:45
* 
* 
* 
*/

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixCodeGen;
// const api = "apiMock";

// 查询
export async function getTables(moduleId, params) {
    return zkToolsAjax.reqPretreatment(`/${api}/t/tables/${moduleId}`, {method:'GET'});
}

// 编辑 
export async function editTableInfo(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/t/tableInfo`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>{
            let filterCodes = ["zk.000002"];
            if(filterCodes.includes(res.code)){
                return true;
            } 
            return false
        }
    );
}

// 更新表信息 
export async function updateTableInfo(tableId) {
    return zkToolsAjax.reqPretreatment(`/${api}/t/updateTableInfo/${tableId}`, {method:'GET'});
}