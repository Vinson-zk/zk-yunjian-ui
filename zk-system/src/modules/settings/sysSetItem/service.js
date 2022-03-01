/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 17:45:28
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
export async function editSysSetItem(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/set/sysSetItem/sysSetItem`, 
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
export async function delSysSetItem(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/set/sysSetItem/sysSetItem`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysSetItem(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/set/sysSetItem/sysSetItem`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysSetItems(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/set/sysSetItem/sysSetItemsPage`, {method:'GET', data:params});
}