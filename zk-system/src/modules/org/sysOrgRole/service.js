/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:03:43
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
export async function setAuthRelation(roleId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthRole/setRelationByRole/${roleId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}


