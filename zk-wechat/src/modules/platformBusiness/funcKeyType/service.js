/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:56
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editFuncKeyType(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pb/funcKeyType/funcKeyType`, 
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
export async function delFuncKeyType(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyType/funcKeyType`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getFuncKeyType(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyType/funcKeyType`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findFuncKeyTypes(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pb/funcKeyType/funcKeyTypesPage`, {method:'GET', data:params});
}


