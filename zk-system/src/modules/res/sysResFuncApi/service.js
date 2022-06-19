/**
 *
 * @Author: 
 * @Date: 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-07 17:46:38
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
export async function editSysResFuncApi(params) {
    return zkToolsAjax.reqPretreatment(
        `/${api}/res/sysResFuncApi/sysResFuncApi`, 
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
export async function delSysResFuncApi(params) {
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApi/sysResFuncApi`, {method:'DELETE', data:params});
}

// 查询 详情
export async function getSysResFuncApi(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApi/sysResFuncApi`, {method:'GET', data:params});
}

// 查询 分页列表
export async function findSysResFuncApis(params) {
	return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApi/sysResFuncApisPage`, {method:'GET', data:params});
}

// 查询 接口的已分配渠道
export async function findRelationByFuncApi(params) { 
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApiReqChannel/findRelationByFuncApi`, {method:'GET', data:params});
}

// 查询 接口的已分配渠道
export async function setRelationByFuncApi(funcApiId, reqChannels) {  
    // sleep(2000);
    // setTimeout(function(){
    //     return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApiReqChannel/setRelationByFuncApi/${funcApiId}`, 
    //     {method:'POST', data:JSON.stringify(reqChannels), contentType:'application/json; charset=utf-8'});
    // }, 2000)    
    return zkToolsAjax.reqPretreatment(`/${api}/res/sysResFuncApiReqChannel/setRelationByFuncApi/${funcApiId}`, 
        {method:'POST', data:JSON.stringify(reqChannels), contentType:'application/json; charset=utf-8'});
}

// function sleep(number){
//     var now = new Date();
//     var exitTime = now.getTime() + number;
//     while (true) {
//         now = new Date();
//         if(now.getTime() > exitTime)
//         return 
//     }
// }




