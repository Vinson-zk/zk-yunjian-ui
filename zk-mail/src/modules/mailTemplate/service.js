/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   
 * @Last Modified time: 
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixMail;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editMailTemplate(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/mailTemplate/mailTemplate`, 
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