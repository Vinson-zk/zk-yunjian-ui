/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-07 10:52:37
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysOrgRank(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/org/sysOrgRank/sysOrgRank`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delSysOrgRank(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRank/sysOrgRank`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysOrgRank(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRank/sysOrgRank`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysOrgRanks(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/org/sysOrgRank/sysOrgRanksPage`, {method:'GET', data:params});
}

// 给职级分配权限
export async function grantAuths(rankId, auths) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthRank/grantAuths/${rankId}`, 
        {method:'POST', data:JSON.stringify(auths), contentType:'application/json; charset=utf-8'});
}








