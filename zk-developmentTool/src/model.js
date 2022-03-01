/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:22:47
 * @Last Modified by: Vinson
 * @Last Modified time: 2021-02-16 21:49:26
 */

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mApp',
    state: {
        // 国际化语言
        lang: zkToolsMsg.getLocale(),
        // 登录用户
        user: undefined,
    },
    subscriptions: {
        setup({ dispatch }) {}
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
    },

    reducers: {
        // 修改模型状态
        setState(state, action) {
            return { ...state, ...action.payload }
        },
    },
};

export default model;

