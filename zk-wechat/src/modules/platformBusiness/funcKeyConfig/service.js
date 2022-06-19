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
export async function editFuncKeyConfig(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pb/funcKeyConfig/funcKeyConfig`, 
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
export async function delFuncKeyConfig(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyConfig/funcKeyConfig`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getFuncKeyConfig(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyConfig/funcKeyConfig`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findFuncKeyConfigs(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyConfig/funcKeyConfigsPage`, {method:'GET', data:params});
}