/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 18:17:37
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgCompany(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgCompany/sysOrgCompany`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delSysOrgCompany(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompany`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgCompany(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompany`, {method:'GET', data:params});
}

// 查询 分页树形
export async function findSysOrgCompanysTree(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompanysTree`, {method:'GET', data:params});
}

// 审核公司
export async function auditCompany(companyId, status) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/auditCompany/${companyId}/${status}`, {method:'POST'});
}

// 给公司分配权限
export async function grantAuths(companyId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthCompany/grantAuths/${companyId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}

// // 查询 分页列表
// export async function findSysOrgCompanys(params) {
//     return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompanys`, {method:'GET', data:params});
// }



