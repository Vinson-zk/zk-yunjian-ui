/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:20
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editOfficialAccountsUser(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/officialAccounts/officialAccountsUser/officialAccountsUser`, 
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
export async function delOfficialAccountsUser(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUser/officialAccountsUser`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getOfficialAccountsUser(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUser/officialAccountsUser`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findOfficialAccountsUsers(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/officialAccountsUser/officialAccountsUsersPage`, {method:'GET', data:params});
}