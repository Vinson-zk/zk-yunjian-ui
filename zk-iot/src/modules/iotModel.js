/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 15:48:24
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 15:58:40
*/

import { getNavMenus } from "./iotService.js";

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mIot',
    state: {
        menusIsUpdate: false,
        menus:[],
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getMenus({ navCode="iot", payload }, { call, put }) {
            let res = yield call(getNavMenus, navCode, payload);
            if (res.ok) {
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




