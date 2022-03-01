/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-07 17:08:31
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editThirdPartyAuthAccount(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/thirdParty/thirdPartyAuthAccount/thirdPartyAuthAccount`, 
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
export async function delThirdPartyAuthAccount(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccount/thirdPartyAuthAccount`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getThirdPartyAuthAccount(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccount/thirdPartyAuthAccount`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findThirdPartyAuthAccounts(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccount/thirdPartyAuthAccountsPage`, {method:'GET', data:params});
}

// 授权 
export async function accountAuth(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/wx/thirdParty/auth`, {method:'POST', data:params});
}




