/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:06:21
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editPayMerchant(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pay/payMerchant/payMerchant`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delPayMerchant(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pay/payMerchant/payMerchant`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getPayMerchant(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payMerchant/payMerchant`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findPayMerchants(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payMerchant/payMerchantsPage`, {method:'GET', data:params});
}