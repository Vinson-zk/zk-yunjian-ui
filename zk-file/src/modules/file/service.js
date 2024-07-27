/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-26 13:49:30
* @Last Modified by: runoob
* @Last Modified time: 2024-01-14 23:28:41
*/
import { zkTools } from "zkFramework";
const { zkToolsAjax, zkToolsUtils } = zkTools;

const apiPrefixFile = globalAppConfig.apiPrefixFile;

/*
JSON.stringify(params)
contentType:'application/json; charset=utf-8'}
*/
// 编辑目录，新增/修改目录
export async function sEditDir(params) {
    return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/d/dirInfo`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'}, zkToolsUtils.resPublicDispose);
}
// 查询 分页树形列表
export async function sFindTree(params) {
	return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/pageTree`, {method:'GET', data:params});
}
// 查询，分页列表查询
export async function sFindPage(params) {
	return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/page`, {method:'GET', data:params});
}
// 查询，明细查询，包含父节点
export async function sGet(params) {
	return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/fileInfo`, {method:'GET', data:params});
}
// 删除
export async function sDel(params) {
    return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/fileInfo`, {method:'DELETE', data:params});
}
// 上传
export async function sUpload(params, upload) {
	console.log('[^_^:20240114-2258-001] params: ', params);

	var data = new FormData();
	for(let index in params){
		// if(zkJsUtils.assertObjType(params[index], Array)){
		// 	for(let i of params[index]){
		// 		data.append(index, files[i]);
		// 	}
		// }else{
		// 	data.append(index, params[index]);
		// }
		data.append(index, params[index]);
	}
	console.log('[^_^:20240114-2258-001] data: ', data);

    return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/f/upload`, {
    	method:'POST',
    	processData: false,
    	contentType: false,
    	// headers: {
    	// 	"Content-Type":"multipart/form-data;"
    	// },
    	data: data,
    	upload: upload
    });
}
// // 下载/预览
// export async function sDowload(params) {
//     return zkToolsAjax.reqPretreatment(`/${apiPrefixFile}/fileInfo/f/getFile`, {method:'POST', data:params});
// }


