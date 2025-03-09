/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-05 16:20:20
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:52:21
*/

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

const apiSys = globalAppConfig.apiPrefixSys;

// 用户本人修改自己的基本信息
export async function s_editByUserSelf(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/sysOrgUserSelf`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'}); //
}
// 修改账号
export async function s_changeAccount(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/changeAccountSelf`, {method:'POST', data: params}); //
}
// 修改邮箱，发送新邮箱的验证码
export async function s_cmSendVerifyCode(params){ // {'newMail':'xxx@xxx.xxx'}
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/cm/sendVerifyCode`, {method:'POST', data: params}); //
}
// 修改邮箱，校验验证码同时修改邮箱
export async function s_cmSubmitVerifyCode(params){ // {'verifyCode':'666666'}
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/cm/submitVerifyCode`, {method:'POST', data: params}); //
}
// 修改手机号，发送新手机验证码
export async function s_cpSendVerifyCode(params){ // {'newPhoneNum':'666666'}
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/cp/sendVerifyCode`, {method:'POST', data: params}); //
}
// 修改手机号，校验手机验证码同时修改手机号
export async function s_cpSubmitVerifyCode(params){ // {'verifyCode':'666666'}
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/cp/submitVerifyCode`, {method:'POST', data: params}); //
}
// 重新发送验证码；
export async function s_sendVerifyCodeAgain(params){ // {'againFlag': } againFlag: 1-邮箱验证码；2-手机验证码；
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/c/sendVerifyCodeAgain`, {method:'POST', data: params}); //
}
// 修改密码
export async function s_changePassword(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/upwd/changePassword`, {method:'POST', data: params}); //
}
// 关闭账号
export async function s_closeAccount(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/closeAccount`, {method:'POST', data: params}); //
}
// 查找登录记录
export async function s_loginRecords(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/loginRecords`, {method:'POST', data: params}); //
}
// 上传文件
export async function s_uploadFile(params, upload) {
	// console.log('[^_^:20240114-2259-001] params: ', params);

	var data = new FormData();
	for(let index in params){
		data.append(index, params[index]);
	}

	// console.log('[^_^:20240114-22589-001] data: ', data);

    return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixFile}/fileInfo/f/upload`, {
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









