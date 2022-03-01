/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   
 * @Last Modified time: 
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixWechat;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editPayGetOrder(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pay/payGetOrder/payGetOrder`, 
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
export async function delPayGetOrder(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetOrder/payGetOrder`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getPayGetOrder(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetOrder/payGetOrder`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findPayGetOrders(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetOrder/payGetOrdersPage`, {method:'GET', data:params});
}