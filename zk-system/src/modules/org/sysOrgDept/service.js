/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:06:34
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 16:28:09
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

// 查询 分页列表
export async function findSysOrgDeptsTree(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDeptsTreeSelf`, {method:'GET', data:params});
}

// 编辑 
export async function editSysOrgDept(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgDept/sysOrgDeptSelf`, 
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


