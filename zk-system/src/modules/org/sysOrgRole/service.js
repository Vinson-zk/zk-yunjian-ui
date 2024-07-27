/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 10:59:16
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgRole(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgRole/sysOrgRole`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delSysOrgRole(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRole/sysOrgRole`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgRole(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRole/sysOrgRole`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysOrgRoles(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRole/sysOrgRolesPage`, {method:'GET', data:params});
}

// 给角色分配权限
export async function grantAuths(roleId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthRole/grantAuths/${roleId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}


