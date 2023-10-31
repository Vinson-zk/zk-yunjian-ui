/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 17:59:12
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixFile;
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editFileDirectory(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/fileDirectory/fileDirectory`, 
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
export async function delFileDirectory(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/fileDirectory/fileDirectory`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getFileDirectory(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/fileDirectory/fileDirectory`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findFileDirectorysTree(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/fileDirectory/fileDirectorysTree`, {method:'GET', data:params});
}