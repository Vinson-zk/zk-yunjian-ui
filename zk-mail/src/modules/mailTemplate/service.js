/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-06-24 18:03:41
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixMail;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editMailTemplate(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/mailTemplate/mailTemplate`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        res=>res.type === globalAppConfig.resCodeType.dataValidator
    );
}

// 删除
export async function delMailTemplate(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/mailTemplate/mailTemplate`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getMailTemplate(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailTemplate/mailTemplate`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findMailTemplates(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/mailTemplate/mailTemplatesPage`, {method:'GET', data:params});
}