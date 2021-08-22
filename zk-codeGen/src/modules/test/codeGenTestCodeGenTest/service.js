/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   
 * @Last Modified time: 
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixCodeGen;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editCodeGenTestCodeGenTest(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/test/codeGenTestCodeGenTest/codeGenTestCodeGenTest`, 
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
export async function delCodeGenTestCodeGenTest(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/test/codeGenTestCodeGenTest/codeGenTestCodeGenTest`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getCodeGenTestCodeGenTest(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/test/codeGenTestCodeGenTest/codeGenTestCodeGenTest`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findCodeGenTestCodeGenTests(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/test/codeGenTestCodeGenTest/codeGenTestCodeGenTestsPage`, {method:'GET', data:params});
}