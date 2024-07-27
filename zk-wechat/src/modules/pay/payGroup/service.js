/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:06:25
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
        res=>res.type === globalAppConfig.resCodeType.dataValidator
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