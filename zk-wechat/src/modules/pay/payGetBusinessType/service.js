/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:06:36
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editPayGetBusinessType(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pay/payGetBusinessType/payGetBusinessType`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delPayGetBusinessType(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetBusinessType/payGetBusinessType`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getPayGetBusinessType(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetBusinessType/payGetBusinessType`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findPayGetBusinessTypes(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetBusinessType/payGetBusinessTypesPage`, {method:'GET', data:params});
}