/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:06:14
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
        res=>res.type === globalAppConfig.resCodeType.dataValidator
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


