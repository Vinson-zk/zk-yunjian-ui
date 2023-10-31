/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:42
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editPayGroup(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pay/payGroup/payGroup`, 
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
export async function delPayGroup(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pay/payGroup/payGroup`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getPayGroup(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGroup/payGroup`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findPayGroups(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGroup/payGroupsPage`, {method:'GET', data:params});
}