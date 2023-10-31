/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:24
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editOfficialAccountsUserGps(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/officialAccounts/officialAccountsUserGps/officialAccountsUserGps`, 
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
export async function delOfficialAccountsUserGps(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUserGps/officialAccountsUserGps`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getOfficialAccountsUserGps(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUserGps/officialAccountsUserGps`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findOfficialAccountsUserGpss(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUserGps/officialAccountsUserGpssPage`, {method:'GET', data:params});
}

