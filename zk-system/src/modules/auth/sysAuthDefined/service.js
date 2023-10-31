/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:03:21
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysAuthDefined(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/auth/sysAuthDefined/sysAuthDefined`, 
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
export async function delSysAuthDefined(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthDefined/sysAuthDefined`, {method:'DELETE', data:params});
}
// 查询 详情
export async function getSysAuthDefined(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthDefined/sysAuthDefined`, {method:'GET', data:params});
}
// 查询 分页列表
export async function findSysAuthDefineds(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthDefined/sysAuthDefinedsPage`, {method:'GET', data:params});
}
// 给权限分配导航栏
export async function setNavRelationByAuth(authId, navs) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthNav/setRelationByAuth/${authId}`, 
        {method:'POST', data:JSON.stringify(navs), contentType:'application/json; charset=utf-8'});
}
// 给权限分配菜单
export async function setMenuRelationByAuth(authId, menus) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthMenu/setRelationByAuth/${authId}`, 
        {method:'POST', data:JSON.stringify(menus), contentType:'application/json; charset=utf-8'});
}
// 给权限分配API接口
export async function setFuncApiRelationByAuth(authId, funcApis) {
    return zkToolsAjax.reqPretreatment(`/${api}/auth/sysAuthFuncApi/setRelationByAuth/${authId}`, 
        {method:'POST', data:JSON.stringify(funcApis), contentType:'application/json; charset=utf-8'});
}




