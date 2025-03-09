/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 18:30:17
* @Last Modified by: vinson
* @Last Modified time: 2025-02-05 15:36:11
*/

import { zkTools } from 'zkFramework';

import { 
    accountLogin, phoneNumberLogin, // 登录
    rcSendVerifyCode, rcSendVerifyCodeAgain, rcSubmitVerifyCode, rcSubmitAuditInfo, // 公司注册
    getCompanyInfoByTk, //
    rpuSendVerifyCodeMail, rpuSendVerifyCodePhone, rpuSendVerifyCodeAgain, rpuSubmitVerifyCode, // 个人用户注册
    s_fpSendMailVerifyCode, s_fpSendPhoneVerifyCode, s_fpSendVerifyCodeAgain, s_fpSubmitVerifyCode, // 找回密码
} from './service.js';

let { zkToolsMsg, zkToolsAuth, zkToolsUtils } = zkTools;

const defaultWaitSecond = 60;

// 2-上级公司审核中
const auditCompanyIng = 2;
// 3-平台审核中
const auditPlatformIng = 3;
// 4-待提交
const waitSubmit = 4;

// 休息一秒
const f_sleepSecond = (millisecond) => {
    return new Promise(resolve => {
        setTimeout(resolve, millisecond);
    });
}
// let rcSecondTimeReaderMail = undefined;  // 邮件验证码 读秒器 ID；不存在是，没有读秒器；
// let rcSecondTimeReaderPhone = undefined; // 手机验证码 读秒器 ID；不存在是，没有读秒器；
// let rpuSecondTimeReader = undefined;     // 个人用户验证码 读秒器 ID；不存在是，没有读秒器；
// let fpSecondTimeReader = undefined;      // 找回密码验证码 读秒器 ID；不存在是，没有读秒器；

const model = {
    namespace: 'mPublicApp',
    state: {
        // rcOptEntity: {
        //     'groupCode': "testrc",
        //     'code': "testrc",
        //     'phoneNum': '13812341234',
        //     'mail': "test@mial.com",
        //     'name': {
        //         'zh-CN': 'test-name-zh',
        //         'en-US': 'test-name-en'
        //     },
        //     'shortDesc': {
        //         'zh-CN': 'test-shortDesc-zh',
        //         'en-US': 'test-shortDesc-en'
        //     },
        //     'legalPerson': 'legalPerson',
        //     'legalCertNum': 'legalCertNum',
        //     'companyCertNum': 'companyCertNum',
        // },
        // 操作公司实体
        rcOptEntity: undefined,
        rcMailCodeWaitTime: 0,    // 邮箱验证码再次发送需要等待的时长，单位：秒；
        rcPhoneCodeWaitTime: 0,   // 手机验证码再次发送需要等待的时长，单位：秒；
        rpuVerifyCodeWaitTime: 0, // 个人用户注册再次发送验证码需要等待的时长，单位：秒；
        fpVerifyCodeWaitTime: 0,  // 找回密码再次发送验证码需要等待的时长，单位：秒；
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 用户登录 ===============================================
        // loginFlag 1-个人用户登录；2-企业用户登录
        // 账号登录
        *loginResDispose({res, history}, { call, put }){
            // console.log("[^_^:20210702-0004-001] loginResDispose.res: ", res);
            // console.log("[^_^:20210702-0004-002] loginResDispose.res: ", res.data[globalAppConfig.transferKey.ticket]);
            if(res.ok){
                // 登录成功
                zkToolsAuth.setTicket(res.data[globalAppConfig.transferKey.ticket]);
                zkToolsAuth.setLoginFlag();
                yield put({ type: 'mApp/loginUserInfo' });
            }else{
                // zkToolsMsg.alertMsg(null, null, {type:"error", msg:res.msg});
                if(res.code === 'zk.sys.020005'){ // 公司状态异常
                    let company = res.data;
                    if(company && company.status == waitSubmit){
                        // console.log("[^_^:20250121-0908-001] company.status == waitSubmit: ", res);
                        // 如果公司状态为待提交，转发到待提交页面
                        yield put({ type: 'setState', payload: { rcOptEntity: company} });
                        history.push("/_register_company/2");
                    }
                    if(company && (company.status == auditCompanyIng || company.status == auditPlatformIng) ) {
                        // 如果公司状态为待审核，转发到待审核页面
                        // console.log("[^_^:20250121-0908-002] company.status == auditIng: ", res);
                        yield put({ type: 'setState', payload: { rcOptEntity: company} });
                        history.push("/_company_audit");
                    }
                }else{
                    zkToolsAuth.logout();
                }
            }
        },
        *accountLogin({ params, history }, { call, put }){
            let res = yield call(accountLogin, params);
            yield put({ type: 'mPublicApp/loginResDispose', res: res, history: history });
        },
        // 手机号，验证码登录
        *phoneNumberLogin({ params, history }, { call, put }){
            let res = yield call(phoneNumberLogin, params);
            yield put({ type: 'mPublicApp/loginResDispose', res: res, history: history });
        },
        // 公司注册 ===============================================
        // 公司注册：提交基本信息
        *rcSubmitBaceInfo({ rcOptEntity, callbackOk, callbackErr }, { call, put }){
            // console.log("[^_^:20240801-2313-001] rcOptEntity: ", rcOptEntity);
            let res = yield call(rcSendVerifyCode, rcOptEntity);
            // console.log("[^_^:20240801-2313-001] res: ", res);
            if(res.ok){
                yield put({ type: 'setState', payload: { rcOptEntity: res.data} });
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rcMailCodeWaitTime'});
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rcPhoneCodeWaitTime'});
                callbackOk();
            }else if(res.code === 'zk.sys.010031'){ // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                yield put({ type: 'setState', payload: { rcOptEntity: rcOptEntity } });
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rcMailCodeWaitTime'});
                callbackOk();
            }else if(res.code === 'zk.sys.010032'){ // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({ type: 'setState', payload: { rcOptEntity: rcOptEntity } });
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rcPhoneCodeWaitTime'});
                callbackOk();
            }else{
                if(res.type === globalAppConfig.resCodeType.dataValidator){
                    callbackErr(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        // 公司注册：重新发送验证码; againFlag 1-重发邮箱验证码；2-重发手机验证码；其他-不发；
        *rcSendVerifyCodeAgain({ againFlag }, { call, put }){
            let res = yield call(rcSendVerifyCodeAgain, {againFlag: againFlag});
            if(res.ok){
                if(againFlag == 1){
                    yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rcMailCodeWaitTime'});
                }else if(againFlag == 2){
                    yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rcPhoneCodeWaitTime'});
                }
            }else if(res.code === 'zk.sys.010031'){ // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rcMailCodeWaitTime'});
            }else if(res.code === 'zk.sys.010032'){ // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rcPhoneCodeWaitTime'});
            }
        },
		// 公司注册：提交验证码
		*rcSendVerifyCodeAgain({ params, callbackOk, callbackErr }, { call, put }){
            let res = yield call(rcSubmitVerifyCode, params);
            if(res.ok){
                yield put({ type: 'setState', payload: { rcOptEntity: res.data} });
                callbackOk();
            }
        },
		// 公司注册：提交审核信息
		*rcSubmitAuditInfo({ formData, callbackOk, callbackErr }, { call, put }){
            // zk.sys.010034，请先提交验证码，跳转到 提交验证码页面；
            let res = yield call(rcSubmitAuditInfo, formData);
            if(res.ok){
                yield put({ type: 'setState', payload: { rcOptEntity: res.data} });
                callbackOk();
            }else{
                if(res.code == 'zk.sys.010035' && res.data.status == 3){
                    // 公司状态为待审核，跳转到待审核页面
                    callbackOk(res.data);
                }else if(res.type === globalAppConfig.resCodeType.dataValidator){
                    callbackErr(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        // 个人用户注册 ===============================================
        // 个人用户注册: 个人注册发送验证码
        *rpuSendVerifyCode({ registerType, params, callbackOk, callbackErr }, { call, put }){
            // console.log("[^_^:20250123-1522-001] rpuSendVerifyCode: ", mail, phoneNum);
            let res = {};
            if(registerType == 'mail'){
                res = yield call(rpuSendVerifyCodeMail, "", params);
            }else if(registerType == 'phoneNum'){
                res = yield call(rpuSendVerifyCodePhone, "", params);
            }
            // console.log("[^_^:20250123-1522-001] rpuSendVerifyCode.res: ", res);
            if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rpuVerifyCodeWaitTime'});
                callbackOk();
            }else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rpuVerifyCodeWaitTime'});
                callbackOk();
            }else{
                if(res.type === globalAppConfig.resCodeType.dataValidator){
                    callbackErr(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        // 个人用户注册：重新发送验证码; againFlag 1-重发邮箱验证码；2-重发手机验证码；其他-不发；
        *rpuSendVerifyCodeAgain({ againFlag }, { call, put }){
            let res = yield call(rpuSendVerifyCodeAgain, {againFlag: againFlag});
            if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'rpuVerifyCodeWaitTime'});
            }else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'rpuVerifyCodeWaitTime'});
            }
        },
        // 个人用户注册：提交注册
        *rpuSubmitVerifyCode({ verifyCode, callbackOk }, { call, put }){
            let res = yield call(rpuSubmitVerifyCode, {'verifyCode': verifyCode});
            if(res.ok){
                callbackOk(res);
            }
        },
        // 找回密码 ===============================================
        // 找回密码：发送验证码
        *fpSendVerifyCode({ findBackWay, formData, callbackOk, callbackErr }, { call, put }){
            let res = {};
            if(findBackWay == 'mail'){
                res = yield call(s_fpSendMailVerifyCode, formData);
            }else if(findBackWay == 'phoneNum'){
                res = yield call(s_fpSendPhoneVerifyCode, formData);
            }

            if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'fpVerifyCodeWaitTime'});
                callbackOk();
            }else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'fpVerifyCodeWaitTime'});
                callbackOk();
            }else{
                if(res.type === globalAppConfig.resCodeType.dataValidator){
                    callbackErr(zkToolsMsg.makeFormFieldsErrorsByMapaData(res.data));
                }
            }
        },
        // 找回密码：提交验证码
        *fpSubmitVerifyCode({ formData, callbackOk }, { call, put }){
            let res = yield call(s_fpSubmitVerifyCode, formData);
            if(res.ok){
                zkToolsMsg.alertMsg(null, null, {type:"success", msg:res.msg});
                callbackOk(res);
            }
        },
        // 找回密码：再次发送验证码
        *fpSendVerifyCodeAgain({ againFlag }, { call, put }){
            // yield put({type: 'startSecondTimeReader', waitTime: 5, secondTimeReaderName: 'fpVerifyCodeWaitTime'});
            let res = yield call(s_fpSendVerifyCodeAgain, {againFlag: againFlag});
            if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'fpVerifyCodeWaitTime'});
            }else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'fpVerifyCodeWaitTime'});
            }
        },

        // 其他 ===============================================
        // 从临时令牌中取公司信息
        *getCompanyInfoByTk({ params, callbackOk, callbackErr }, { call, put }){
            // zk.sys.010034，请先提交验证码，跳转到 提交验证码页面；
            let res = yield call(getCompanyInfoByTk);
            if(res.ok){
                yield put({ type: 'setState', payload: { rcOptEntity: res.data } });
                callbackOk(res.data);
            }else{
                callbackErr();
            }
        },
        // 开启一个倒计时
        *startSecondTimeReader({waitTime, secondTimeReaderName}, { call, put, select }){
            // console.log("[^_^:20250125-1542-001] secondTimeReaderName: ", secondTimeReaderName);
            // console.log("[^_^:20250125-1542-001] waitTime: ", waitTime);
            const mPublicApp = yield select(state => state.mPublicApp);
            // console.log("[^_^:20250125-1542-002] secondTimeReaderName: ", mPublicApp);
            if(waitTime && mPublicApp[secondTimeReaderName] <= 0){
                let payload = {};
                payload[secondTimeReaderName] = waitTime;
                yield put({ type: 'setState', payload: payload });
                yield put({ type: 'doingReaderSecondCode', 'secondTimeReaderName': secondTimeReaderName, 'waitTime': waitTime });
            } 
        },
        // 计时
        *doingReaderSecondCode({secondTimeReaderName, waitTime = 0}, { call, put, select }){
            if(waitTime > 0){
                yield call(f_sleepSecond, 1000);
                let payload = {};
                payload[secondTimeReaderName] = waitTime - 1;
                yield put({ type: 'setState', payload: payload });
                yield put({ type: 'doingReaderSecondCode', 'waitTime': payload[secondTimeReaderName], 'secondTimeReaderName': secondTimeReaderName});
            }else{
                let payload = {};
                payload[secondTimeReaderName] = 0;
                yield put({ type: 'setState', payload: payload });
            }
        },
    },

    reducers: {
        // 修改模型状态
        setState(state, action) {
            return { ...state, ...action.payload }
        },
    },
};

export default model;





