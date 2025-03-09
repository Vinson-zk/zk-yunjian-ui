/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 17:11:33
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 17:14:24
*/


import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixIot;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function sEditIotProdInstance(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/dvc/iotProdInstance/iotProdInstance`, 
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
export async function sDelIotProdInstance(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/dvc/iotProdInstance/iotProdInstance`, {method:'DELETE', data:params});
}

// 查询 详情
export async function sGetIotProdInstance(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/dvc/iotProdInstance/iotProdInstance`, {method:'GET', data:params});
}

// 查询 分页列表
export async function sFindIotProdInstances(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/dvc/iotProdInstance/iotProdInstancesPage`, {method:'GET', data:params});
}


