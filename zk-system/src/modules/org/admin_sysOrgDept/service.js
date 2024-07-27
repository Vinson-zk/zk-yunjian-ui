/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 12:23:32
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;


// 查询 分页列表
export async function findSysOrgDeptsTree(companyId, params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDeptsTree/${companyId}`, {method:'GET', data:params});
}

// 编辑 
export async function editSysOrgDept(companyId, params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgDept/sysOrgDept/${companyId}`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 查询 详情
export async function getSysOrgDept(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDept`, {method:'GET', data:params});
}

// 删除
export async function delSysOrgDept(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDept`, {method:'DELETE', data:params});
}

// 给部门分配权限
export async function grantAuths(deptId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthDept/grantAuths/${deptId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}













