/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:03:48
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgUser(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgUser/sysOrgUser`, 
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
export async function delSysOrgUser(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUser/sysOrgUser`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgUser(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUser/sysOrgUser`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysOrgUsers(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUser/sysOrgUsersPage`, {method:'GET', data:params});
}

// 管理员重置密码
export async function resetPwd(params){
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgUser/resetPwd`, {method:'POST', data:params});
}

// 给用户分配角色
export async function setRelationByUser(userId, roles){
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthUserRole/setRelationByUser/${userId}`, 
        {method:'POST', data:JSON.stringify(roles), contentType:'application/json; charset=utf-8'});
}

// 给用户分配权限
export async function setAuthRelation(userId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthUser/setRelationByUser/${userId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}







