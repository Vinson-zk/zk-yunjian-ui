/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:04
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-05 23:45:26
 */

import { getNavMenus } from "./sysService.js";

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mSys',
    state: {
        menusIsUpdate: false,
        menus:[],
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getMenus({ navCode, payload }, { call, put }) {
            let res = yield call(getNavMenus, navCode, payload);
            if (res.code == "zk.0") {
                let menus = res.data;
                // console.log("[^_^:20230904-2303-001] sys.menus: ", menus);
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
