/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-13 16:46:31
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
export async function editSysResDict(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/sysResDict/sysResDict`, 
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
export async function delSysResDict(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResDict/sysResDict`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysResDict(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResDict/sysResDict`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysResDicts(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResDict/sysResDictsTree`, {method:'GET', data:params});
}