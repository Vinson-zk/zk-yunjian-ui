/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:00:36
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixMail;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editMailType(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/mailType/mailType`, 
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
export async function delMailType(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/mailType/mailType`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getMailType(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailType/mailType`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findMailTypes(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailType/mailTypesPage`, {method:'GET', data:params});
}