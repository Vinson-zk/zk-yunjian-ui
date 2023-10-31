/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:05:47
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