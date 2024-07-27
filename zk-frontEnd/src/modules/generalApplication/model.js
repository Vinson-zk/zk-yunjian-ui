/*
* @Author: Vinson
* @Date:   2021-11-11 09:37:28
* @Last Modified by: runoob
* @Last Modified time: 2024-06-24 17:17:06
* 
* 
* 
*/

import { getNavMenus } from "./service.js";

// import zkJsUtils from 'zkJsUtils';
import { zkTools } from 'zkFramework';

let { zkToolsMsg } = zkTools;

const model = {
    namespace: 'mGeneralApplication',
    state: {
        menusIsUpdate: false,
        menus:[],
    },
    subscriptions: {
        setup({ dispatch }) {}
    },

    effects: {
        // 取菜单
        *getMenus({ navCode="generalApplication", payload }, { call, put }) {
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


