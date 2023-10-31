/**
 *
 * @Author: Vinson
 * @Date: 2020-10-23 15:26:04
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:03:56
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;


// 编辑 
export async function editSysMenu(params) {
    // return zkToolsAjax.req(`/${api}/menu/sysMenu`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    return zkToolsAjax.reqPretreatment(`/${api}/res/menu/sysMenu`, 
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
export async function deleteSysMenu(params) {
    // return zkToolsAjax.reqPretreatment(`/${api}/menu/sysMenu`, {method:'DELETE', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    return zkToolsAjax.reqPretreatment(`/${api}/res/menu/sysMenu`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysMenu(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/menu/sysMenu`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysMenusTree(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/menu/sysMenusTree`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysNavs(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/nav/sysNavs`, {method:'GET', data:params});
}




