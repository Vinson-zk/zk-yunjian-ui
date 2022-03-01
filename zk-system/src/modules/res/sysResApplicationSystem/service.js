/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   
 * @Last Modified time: 
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysResApplicationSystem(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/sysResApplicationSystem/sysResApplicationSystem`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
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
export async function delSysResApplicationSystem(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResApplicationSystem/sysResApplicationSystem`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysResApplicationSystem(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResApplicationSystem/sysResApplicationSystem`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysResApplicationSystems(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResApplicationSystem/sysResApplicationSystemsPage`, {method:'GET', data:params});
}