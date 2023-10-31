/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:15
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editAccounts(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/officialAccounts/accounts/accounts`, 
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
export async function delAccounts(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/accounts/accounts`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getAccounts(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/accounts/accounts`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findAccounts(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/officialAccounts/accounts/accountsPage`, {method:'GET', data:params});
}

// 授权 
export async function accountAuth(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/wx/thirdParty/auth`, {method:'POST', data:params});
}




