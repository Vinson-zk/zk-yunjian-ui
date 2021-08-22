/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:04
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 18:28:39
 */

import { getMenus } from "./codeGenService.js";

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mCodeGen',
    state: {
        menus: undefined,
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getMenus({ payload }, { call, put }) {
            let res = yield call(getMenus, payload);
            if (res.code == "zk.0") {
                let menus = res.data;
                menus = zkJsUtils.makeTree(menus, null);
                menus = zkJsUtils.sort(menus);
                yield put({ type: 'setState', payload: { "menus": menus } });
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
