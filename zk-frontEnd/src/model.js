/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:22:47
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-07-03 16:47:55
 */

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

import { getNavItems, loginUserInfo, accountLogin, phoneNumberLogin } from './service.js';

let { zkToolsMsg, zkToolsAuth } = zkTools;

const loginResDispose = (res)=>{
    // console.log("[^_^:20210702-0004-001] loginResDispose.res: ", res);
    if(res.code == "zk.0"){
        // 登录成功
        zkToolsAuth.setTicket(res.data[globalAppConfig.transferKey.ticket]);
        return true;
    }else{
        // zkToolsMsg.alertMsg(null, null, {type:"error", msg:res.msg});
        return false;
    }
}

const model = {
    namespace: 'mApp',
    state: {
        // 国际化语言
        lang: zkToolsMsg.getLocale(),
        // 登录用户
        user: undefined,
        platformCode: undefined,
        navItems:undefined,
    },
    subscriptions: {
        setup({ dispatch }) {
            zkJsEvent.eventEmitter.register(globalAppConfig.eventType.logout,
                ()=>{
                    // console.log("[^_^:20210702-0839-001] zkJsEvent.eventEmitter: globalAppConfig.eventType.logout", zkToolsAuth.getTicket(), zkToolsAuth.isLogin() );
                    dispatch({ type: 'setState', payload:{ user:{} } });
                }
            );

            if(globalAppConfig.isAuth && zkToolsAuth.isLogin()){
                // 如果已登录且开启了权限认识，取用户信息
                dispatch({ type: "loginUserInfo" }).then(()=>{
                  // dispatch({type:"getUaidLicenseInfo"})
                });
            }
        }
    },

    effects: {
        // 修改当前国际化语言环境
        *changeLanguage({ payload }, { call, put }) {
            if (payload) {
                zkToolsMsg.setLocale(payload.lang);
                yield put({ type: 'setState', payload: { ...payload } })
            } else {
                let lang = zkToolsMsg.getLocale();
                if (!lang) {
                    zkToolsMsg.setLocale(payload.lang);
                }
                yield put({ type: 'setState', payload: { "lang": lang } })
            }
        },
        // 取民航栏目
        *getNavItems({ params }, { call, put }){
            let res = yield call(getNavItems, params);
            switch(res.code){
                case "zk.0": 
                    yield put({ type: 'setState', payload: { navItems: res.data } });
                    break;
                default: 
                    // zkToolsMsg.alertMsg(null, null, {type:"error", msg:res.msg});
                    throw new Error("getNavItems req fail，error message: " + res.msg);
                    break;
            }
        },
        *loginUserInfo({ }, { call, put }){
            let res = yield call(loginUserInfo);
            if(res.code == "zk.0"){
                // console.log("[^_^:20220426-1726-001] 当前登录用户信息: ", res.data);
                yield put({ type: 'setState', payload: res.data });
            }else{
                zkToolsAuth.logout();
            }
        },
        // loginFlag 1-个人用户登录；2-企业用户登录
        *accountLogin({ loginFlag, params }, { call, put }){
            let res = yield call(accountLogin, params);
            if(loginResDispose(res)){
                 yield put({ type: 'loginUserInfo' });
                // yield put({ type: 'setState', payload: loginInfo });
            }
        },
        *phoneNumberLogin({ params }, { call, put }){
            let res = yield call(phoneNumberLogin, params);
            if(loginResDispose(res)){
                 yield put({ type: 'loginUserInfo' });
                // yield put({ type: 'setState', payload: loginInfo });
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

