/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-04 23:13:15
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax, zkToolsUtils } = zkTools;

const apiPrefixFile = globalAppConfig.apiPrefixFile;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function sEditDir(params) {
    return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/dirInfo`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'}, zkToolsUtils.resPublicDispose);
}

// 删除
export async function sDelDir(params) {
    return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/fileInfo`, {method:'DELETE', data:params});
}

// 查询 详情
export async function sGetDir(params) {
	return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/fileInfo`, {method:'GET', data:params});
}

// 查询 分页列表
export async function sFindDirTree(params) {
	return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/pageTree`, {method:'GET', data:params});
}