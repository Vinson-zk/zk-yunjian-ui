/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:03:52
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
export async function setAuthRelation(userTypeId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthUserType/setRelationByUserType/${userTypeId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}



