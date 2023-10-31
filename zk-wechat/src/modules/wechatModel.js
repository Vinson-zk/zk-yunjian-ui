/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:04
 * @Last Modified by:   Vinson
 * @Last Modified time: 2023-05-29 01:09:47
 */

import { getNavMenus } from "./wechatService.js";

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mWechat',
    state: {
        menusIsUpdate: false,
        menus:[],
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getMenus({ navId, payload }, { call, put }) {
            let res = yield call(getNavMenus, navId, payload);
            if (res.code == "zk.0") {
                let menus = res.data;
                menus = zkJsUtils.makeTree(menus, null);
                menus = zkJsUtils.sort(menus);
                yield put({ type: 'setState', payload: { "menus": menus||[], "menusIsUpdate":true } });
            } else {
                throw new Error("getMenus req fail，error message: " + res.msg)
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
