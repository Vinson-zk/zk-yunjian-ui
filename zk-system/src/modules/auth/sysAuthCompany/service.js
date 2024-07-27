/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:51:59
* @Last Modified by: runoob
* @Last Modified time: 2024-07-08 17:41:00
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

// 查询 查询当前登录公司所拥有的权限及拥有权限的方式 分页列表
export async function findAuthPage(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthCompany/findAuthPage`, {method:'GET', data:params});
}

// 设置权限是否默认传递给子公司
export async function setAuthsDefaultTransfer(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthCompany/setAuthsDefaultTransfer`, {method:'POST', data:params});
}





