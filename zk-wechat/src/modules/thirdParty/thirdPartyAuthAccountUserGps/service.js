/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   
 * @Last Modified time: 
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
export async function editThirdPartyAuthAccountUserGps(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/thirdParty/thirdPartyAuthAccountUserGps/thirdPartyAuthAccountUserGps`, 
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
export async function delThirdPartyAuthAccountUserGps(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccountUserGps/thirdPartyAuthAccountUserGps`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getThirdPartyAuthAccountUserGps(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccountUserGps/thirdPartyAuthAccountUserGps`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findThirdPartyAuthAccountUserGpss(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/thirdParty/thirdPartyAuthAccountUserGps/thirdPartyAuthAccountUserGpssPage`, {method:'GET', data:params});
}