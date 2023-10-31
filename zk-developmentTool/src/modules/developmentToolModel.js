/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:04
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:59:45
 */

import { getNavMenus } from "./developmentToolService.js";

import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mDevelopmentTool',
    state: {
        menus: undefined,
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getNavMenus({ navId="developmentTool", payload }, { call, put }) {
            let res = yield call(getNavMenus, navId, payload);
            if (res.code == "zk.0") {
                let menus = res.data;
                yield put({ type: 'setState', payload: { "menus": menus } });
            } else {
                throw new Error("getNavMenus req fail，error message: " + res.msg)
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
