/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-03-22 12:52:44
 */

import { zkTools } from "zkFramework";
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;
// const api = "apiMock";
/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑 
export async function editSysResRequestChannel(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/sysResRequestChannel/sysResRequestChannel`, 
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
export async function delSysResRequestChannel(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResRequestChannel/sysResRequestChannel`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysResRequestChannel(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResRequestChannel/sysResRequestChannel`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysResRequestChannels(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResRequestChannel/sysResRequestChannelsPage`, {method:'GET', data:params});
}