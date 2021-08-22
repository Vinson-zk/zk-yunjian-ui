/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 23:11:01
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
export async function editSysApplicationSystem(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/sysApplicationSystem/sysApplicationSystem`, 
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
export async function delSysApplicationSystem(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysApplicationSystem/sysApplicationSystem`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysApplicationSystem(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysApplicationSystem/sysApplicationSystem`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysApplicationSystems(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysApplicationSystem/sysApplicationSystemsPage`, {method:'GET', data:params});
}