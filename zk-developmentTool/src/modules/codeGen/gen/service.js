/*
* @Author: Vinson
* @Date:   2021-04-01 15:08:38
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-25 19:27:47
* 
* 
* 
*/

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixDevelopmentTool;

// 生成代码; 请求结果为下载，不需要预处理；
export async function genCode(moduleId, params) {
  // moduleId:moduleId, params: {tableIds:[]}
  // application/octet-stream  blob
    return zkToolsAjax.downloadByAjax(`/${api}/cg/cg/genCode/${moduleId}`, {method:'POST', data:params});
    // return zkToolsAjax.downloadByAjax(`/${api}/cg/genCodeError`, {method:'POST', data:params});
}

