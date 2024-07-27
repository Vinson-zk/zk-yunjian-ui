/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:06:34
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 19:35:46
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

// // 查询 分页列表，非树形
// export async function findSysOrgChildCompanys(params) {
//     return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgChildCompanys`, {method:'GET', data:params});
// }

// 查询 分页树形
export async function findSysOrgChildCompanysTree(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgChildCompanysTree`, {method:'GET', data:params});
}

// 编辑 
export async function editSysOrgCompany(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgCompany/sysOrgCompany`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// // 删除
// export async function delSysOrgCompany(params) {
//     return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompany`, {method:'DELETE', data:params});
// }

// // 查询 详情
// export async function getSysOrgCompany(params) {
// 	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/sysOrgCompany`, {method:'GET', data:params});
// }

// 审核公司
export async function auditCompany(companyId, status) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgCompany/auditCompany/${companyId}/${status}`, {method:'POST'});
}

// 给公司分配权限
export async function grantAuths(companyId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthCompany/grantAuths/${companyId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}


