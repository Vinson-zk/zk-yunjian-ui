/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:22:47
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-07-02 09:45:08
 */

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

import { getNavItems, getUser, accountLogin, phoneNumberLogin } from './service.js';

let { zkToolsMsg, zkToolsAuth } = zkTools;

const loginResDispose = (res)=>{
    // console.log("[^_^:20210702-0004-001] loginResDispose.res: ", res);
    if(res.code == "zk.0"){
        // 登录成功
        zkToolsAuth.setTicket(res.data[globalAppConfig.transferKey.ticket]);
        return {user: res.data.user};
    }else{
        // zkToolsMsg.alertMsg(null, null, {type:"error", msg:res.msg});
    }
}

const model = {
    namespace: 'mApp',
    state: {
        // 国际化语言
        lang: zkToolsMsg.getLocale(),
        // 登录用户
        user: undefined,
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

            if(zkToolsAuth.isLogin()){
                // 如果已登录，取用户信息
                dispatch({ type: "getUser" }).then(()=>{
                  // dispatch({type:"getUaidLicenseInfo"})
                });
            }else{
                // 未登录
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
        *getUser({ params }, { call, put }){
            let res = yield call(getUser, params);
            if(res.code == "zk.0"){
                let loginInfo = res.data;
                if(loginInfo){
                    yield put({ type: 'setState', payload: loginInfo });
                }
            }else{
                zkToolsAuth.logout();
            }
        },
        *accountLogin({ params }, { call, put }){
            let res = yield call(accountLogin, params);
            let loginInfo = loginResDispose(res);
            if(loginInfo){
                yield put({ type: 'setState', payload: loginInfo });
            }
        },
        *phoneNumberLogin({ params }, { call, put }){
            let res = yield call(phoneNumberLogin, params);
            let loginInfo = loginResDispose(res);
            if(loginInfo){
                yield put({ type: 'setState', payload: loginInfo });
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

