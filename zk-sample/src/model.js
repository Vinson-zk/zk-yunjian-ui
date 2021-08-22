/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:58:59
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-21 23:57:32
 */

import { getNavItemSync } from './service';

import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mApp',
    state: {
        // 提示的消息
        msg: [],
        // 国际化语言
        lang: zkToolsMsg.getLocale(),
        // 登录用户
        user: undefined,
        // 导航栏
        navItems:[],
        navItemIsUpdate:false,
    },
    subscriptions: {
        setup({ dispatch }) {

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
        *getNavItems({ payload }, { call, put }) {
            let res = yield call(getNavItemSync, payload);
            if (res.code == "zk.0") {
                let navItems = res.data;
                navItems = zkJsUtils.sort(navItems, 1);
                yield put({ type: 'setState', payload: { "navItems": navItems||[], "navItemIsUpdate":true } });
            } else {
                throw new Error("getNavItems req fail，error message: " + res.msg)
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