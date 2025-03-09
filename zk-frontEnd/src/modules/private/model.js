/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-02-05 16:20:05
* @Last Modified by: vinson
* @Last Modified time: 2025-02-07 10:52:49
*/


import { zkTools } from 'zkFramework';

import { 
    s_editByUserSelf, // 用户本人修改自己的基本信息
    s_changeAccount,  // 修改用户信息
    s_cmSendVerifyCode, // 修改邮箱，发送新邮箱的验证码
    s_cmSubmitVerifyCode, // 修改邮箱，校验验证码同时修改邮箱
    s_cpSendVerifyCode, // 修改手机号，发送新手机验证码
    s_cpSubmitVerifyCode, // 修改手机号，校验手机验证码同时修改手机号
    s_sendVerifyCodeAgain, // 重新发送验证码；
    s_changePassword, // 修改密码
    s_closeAccount,   // 注销账号
    s_loginRecords,   // 登录记录
    s_uploadFile,     // 上传文件
} from './service.js';

let { zkToolsMsg, zkToolsAuth, zkToolsUtils } = zkTools;

const defaultWaitSecond = 60; // 默认等待时间，单位：秒；

// 休息一秒
const f_sleepSecond = (millisecond) => {
    return new Promise(resolve => {
        setTimeout(resolve, millisecond);
    });
}

const model = {
    namespace: 'mPrivateApp',
    state: {
        mailCodeWaitTime: 0,      // 找回密码再次发送验证码需要等待的时长，单位：秒；
        phoneNumCodeWaitTime: 0,  // 找回密码再次发送验证码需要等待的时长，单位：秒；
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 修改用户信息
        *editBaseInfo({user, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_editByUserSelf, user);
			if(res.ok){
				yield put({ type: 'mApp/setState', payload: {'user': res.data} });
				callBackOk(res);
			}else{
				callBackErr(res);
			}
        },
        // 修改账号
        *changeAccount({fromData, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_changeAccount, fromData);
			if(res.ok){
				callBackOk(res);
			}else{
				callBackErr(res);
			}
        },
        // 修改邮箱，发送新邮箱的验证码
        *cmSendVerifyCode({newMail, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_cmSendVerifyCode, {'newMail': newMail});
			if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'mailCodeWaitTime'});
				callBackOk(res);
			}else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'mailCodeWaitTime'});
                callBackOk(res);
            }else{
				callBackErr(res);
			}
        },
        // 修改邮箱，校验验证码同时修改邮箱
        *cmSubmitVerifyCode({verifyCode, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_cmSubmitVerifyCode, {'verifyCode': verifyCode});
			if(res.ok){
				callBackOk(res);
            }else{
				callBackErr(res);
			}
        },
        // 修改手机号，发送新手机验证码
        *cpSendVerifyCode({newPhoneNum, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_cpSendVerifyCode, {'newPhoneNum': newPhoneNum});
			if(res.ok){
                yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'phoneNumCodeWaitTime'});
				callBackOk(res);
			}else if(res.code === 'zk.sys.010031' || res.code === 'zk.sys.010032'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'phoneNumCodeWaitTime'});
                callBackOk(res);
            }else{
				callBackErr(res);
			}
        },
        // 修改手机号，校验手机验证码同时修改手机号
        *cpSubmitVerifyCode({verifyCode, callBackOk, callBackErr}, { call, put, select }){
            let res = yield call(s_cpSubmitVerifyCode, {'verifyCode': verifyCode});
			if(res.ok){
				callBackOk(res);
            }else{
				callBackErr(res);
			}
        },
        // 重新发送验证码；againFlag: 1-邮箱验证码；2-手机验证码；
        *sendVerifyCodeAgain({againFlag, callBackOk, callBackErr}, { call, put, select }){
			let res = yield call(s_sendVerifyCodeAgain, {againFlag: againFlag});
            if(res.ok){
                if(againFlag === 1){
                    yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'mailCodeWaitTime'});
                }else{
                    yield put({type: 'startSecondTimeReader', waitTime: defaultWaitSecond, secondTimeReaderName: 'phoneNumCodeWaitTime'});
                }
                callBackOk(res);
            }else if(res.code === 'zk.sys.010031'){ 
                // zk.sys.010031=邮件验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'mailCodeWaitTime'});
                callBackOk(res);
            }else if(res.code === 'zk.sys.010032'){ 
                // zk.sys.010032=手机验证码发送过于频繁，请稍后再试
                yield put({type: 'startSecondTimeReader', waitTime: res.data, secondTimeReaderName: 'phoneNumCodeWaitTime'});
                callBackOk(res);
            }
            callBackErr(res);
        },
        // 修改密码
        *changePwd({fromData, callBackOk, callBackErr}, { call, put, select }){
        	let res = yield call(s_changePassword, fromData);
			if(res.ok){
				callBackOk(res);
			}else{
				callBackErr(res);
			}
        },
        // 关闭账户
        *closeAccount({callBackOk, callBackErr}, { call, put, select }){
        	let res = yield call(s_closeAccount);
			if(res.ok){
				callBackOk(res);
			}else{
				callBackErr(res);
			}
        },
        // 关闭账户
        *loginRecords({params,callBackOk, callBackErr}, { call, put, select }){
        	let res = yield call(s_loginRecords, params);
			if(res.ok){
				callBackOk(res);
			}else{
				callBackErr(res);
			}
        },
        // 上传头像
        *uploadUserHead({file, upload, user, callBackOk, callBackErr}, { call, put, select }){
        	let params = {
				'name': '', // 文件名称
				'securityType': 0, // 文件权限类型：0-私有[需要有身份才获取]，1-开放[可以通过开放的接口获取]
				'actionScope': 1, // 文件作用域：0-普通；1-个人；可以扩展其他作用域，作用域尽量广义一点
				'mfs': file
			}
			let res = yield call(s_uploadFile, params, upload);
			if(res.ok){
				user.headPhoto = res.data[0].saveUuid;
				yield put({ type: 'editBaseInfo', 'user': user, 'callBackOk': callBackOk, 'callBackErr':callBackErr });
			}else{
				callBackErr(res);
			}
        },

        // 其他 ===============================================
        // 开启一个倒计时
        *startSecondTimeReader({waitTime, secondTimeReaderName}, { call, put, select }){
            // console.log("[^_^:20250205-1622-001] secondTimeReaderName: ", secondTimeReaderName);
            // console.log("[^_^:20250205-1622-001] waitTime: ", waitTime);
            const mPrivateApp = yield select(state => state.mPrivateApp);
            // console.log("[^_^:20250205-1622-002] secondTimeReaderName: ", mPrivateApp);
            if(waitTime && mPrivateApp[secondTimeReaderName] <= 0){
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




