/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-09 17:28:31
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgDept(companyId, params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgDept/sysOrgDept/${companyId}`, 
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
export async function delSysOrgDept(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDept`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgDept(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDept`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysOrgDeptsTree(companyId, params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDeptsTree/${companyId}`, {method:'GET', data:params});
}

// 不分层级的树型查询, 树形/分页
export async function findSysOrgDeptsSelf(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDeptsTreeSelf`, {method:'GET', data:params});
}

// 给部门分配权限
export async function setAuthRelation(deptId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthDept/setRelationByDept/${deptId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}













