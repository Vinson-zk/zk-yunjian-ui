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
export async function editPayGetNotify(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/pay/payGetNotify/payGetNotify`, 
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
export async function delPayGetNotify(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetNotify/payGetNotify`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getPayGetNotify(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetNotify/payGetNotify`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findPayGetNotifys(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/pay/payGetNotify/payGetNotifysPage`, {method:'GET', data:params});
}