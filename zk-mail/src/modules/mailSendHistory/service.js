/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 18:00:25
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixMail;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editMailSendHistory(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/mailSendHistory/mailSendHistory`, 
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
export async function delMailSendHistory(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/mailSendHistory/mailSendHistory`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getMailSendHistory(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailSendHistory/mailSendHistory`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findMailSendHistorys(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailSendHistory/mailSendHistorysPage`, {method:'GET', data:params});
}