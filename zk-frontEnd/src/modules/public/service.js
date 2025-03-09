/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 18:30:31
* @Last Modified by: vinson
* @Last Modified time: 2025-02-05 16:24:25
*/


import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

const apiSys = globalAppConfig.apiPrefixSys;

// 登录 =====================================================
// 账号登录
export async function accountLogin(params){
    return zkToolsAjax.reqPretreatment(
        `/${apiSys}/sec/login`, 
        {method:'POST', data: params},
        (res)=>{
            if(res.code == 'zk.sys.020005'){
                return res;
            }
            return zkToolsAjax.pretreatment(res);
        }
    ); // , dataType:'text'
}

// 手机验证码登录
export async function phoneNumberLogin(params){
    return zkToolsAjax.reqPretreatment(
        `/${apiSys}/sec/phoneNumberLogin`, 
        {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'},
        (res)=>{
            if(res.code == 'zk.sys.020005'){
                return res;
            }
            return zkToolsAjax.pretreatment(res);
        }
    );
}

// 公司注册 =====================================================
// 公司注册：提交基本信息
export async function rcSendVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgCompany/n/sendVerifyCode`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
}
// 公司注册：重新发送验证码
export async function rcSendVerifyCodeAgain(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgCompany/n/sendVerifyCodeAgain`, {method:'POST', data: params}); // , dataType:'text'
}
// 公司注册：提交验证码
export async function rcSubmitVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgCompany/n/submitVerifyCode`, {method:'POST', data: params}); // , dataType:'text'
}
// 公司注册：提交审核信息
export async function rcSubmitAuditInfo(params){
    // console.log("[^_^:20250122-1614-001] rcSubmitAuditInfo.params: ", params);
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgCompany/n/submitAuditInfo`, {
        method:'POST', 
        processData: false,
        contentType: false,
        // contentType:'multipart/form-data',
        // contentType: 'application/json; charset=utf-8',
        // dataType: 'Blob',
        data: params
    });
}
// 从临时令牌中取公司信息
export async function getCompanyInfoByTk(){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgCompany/n/getCompanyInfoByTk`);
}

// 个人用户注册 =====================================================
// 个人用户注册: 发送验证码
export async function rpuSendVerifyCodeMail(companyCode, params){
    if(zkJsUtils.isEmpty(companyCode, true)){
        return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/sendRegisterMail`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    }else{
        return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/sendRegisterMail/${companyCode}`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    }
    
}
export async function rpuSendVerifyCodePhone(companyCode, params){
    if(zkJsUtils.isEmpty(companyCode, true)){
        return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/sendRegisterPhone`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    }else{
        return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/sendRegisterPhone/${companyCode}`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
    }
}
// 个人用户注册: 重新发送验证码
export async function rpuSendVerifyCodeAgain(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/sendVerifyCodeAgain`, {method:'POST', data: params}); // , dataType:'text'
}
// 个人用户注册: 提交验证码
export async function rpuSubmitVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/sysOrgUser/n/submitVerifyCode`, {method:'POST', data: params});
}

// 找回密码 ===============================================
// 找回密码: 发送邮箱验证码
export async function s_fpSendMailVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/upwd/n/fp/sendMailVerifyCode`, {method:'POST', data: params}); //
}
// 找回密码: 发送手机验证码
export async function s_fpSendPhoneVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/upwd/n/fp/sendPhoneVerifyCode`, {method:'POST', data: params}); //
}
// 找回密码: 重新发送验证码
export async function s_fpSendVerifyCodeAgain(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/upwd/n/fp/sendVerifyCodeAgain`, {method:'POST', data: params}); //
}
// 找回密码: 提交验证码和新密码
export async function s_fpSubmitVerifyCode(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/org/upwd/n/fp/submitVerifyCode`, {method:'POST', data: params});
}


