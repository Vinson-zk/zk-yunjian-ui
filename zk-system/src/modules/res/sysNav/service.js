/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:19:18
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 17:03:25
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;
// const api = "apiMock";

// 编辑 
export async function editSysNav(params) {
    // return zkToolsAjax.req(`/${api}/nav/sysNav`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/nav/sysNav`, 
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
export async function deleteSysNav(params) {
    // return zkToolsAjax.reqPretreatment(`/${api}/nav/sysNav`, {method:'DELETE', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    return zkToolsAjax.reqPretreatment(`/${api}/res/nav/sysNav`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysNav(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/nav/sysNav`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysNavs(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/nav/sysNavs`, {method:'GET', data:params});
}