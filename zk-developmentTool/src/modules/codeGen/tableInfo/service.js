/*
* @Author: Vinson
* @Date:   2021-03-31 10:56:37
* @Last Modified by:   Vinson
* @Last Modified time: 2022-06-24 17:02:02
* 
* 
* 
*/

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixDevTool;
// const api = "apiMock";

// 查询; 取模块表的列表信息；不分页，仅查询已更新到代码生成库的表列表，不会自动取模块数据中新创建的表；
export async function getTables(moduleId) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/ti/tables/${moduleId}`, {method:'GET'});
}

// 编辑 
export async function editTableInfo(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/ti/tableInfo`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
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
    return zkToolsAjax.reqPretreatment(`/${api}/cg/ti/updateTableInfo/${tableId}`, {method:'GET'});
}

// 更新表列表；从模块的数据库中读取表列表，更新到代码生成的表列表中；
export async function updateTableList(moduleId) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/ti/updateTableList/${moduleId}`, {method:'GET'});
}

// 删除表信息，级联删除表信息字段
export async function delTableInfo(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/cg/ti/tableInfo`, {method:'DELETE', data:params});
}

