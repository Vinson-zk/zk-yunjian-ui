/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:03:32
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
        res=>res.type === globalAppConfig.resCodeType.dataValidator
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