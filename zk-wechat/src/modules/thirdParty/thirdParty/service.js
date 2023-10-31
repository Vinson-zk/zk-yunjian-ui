/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:06:01
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editThirdParty(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/thirdParty/thirdParty/thirdParty`, 
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
export async function delThirdParty(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdParty/thirdParty`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getThirdParty(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdParty/thirdParty`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findThirdPartys(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdParty/thirdPartysPage`, {method:'GET', data:params});
}