/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 10:59:46
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgUserType(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgUserType/sysOrgUserType`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delSysOrgUserType(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUserType/sysOrgUserType`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgUserType(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUserType/sysOrgUserType`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysOrgUserTypes(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUserType/sysOrgUserTypesPage`, {method:'GET', data:params});
}

// 给用户类型分配权限
export async function grantAuths(userTypeId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthUserType/grantAuths/${userTypeId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}



