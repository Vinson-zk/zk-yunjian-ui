/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 00:16:26
 * @Last Modified by:   Vinson
 * @Last Modified time: 2023-05-29 22:23:24
 */

import { getMenus, getMenusSync } from './service';

import zkJsUtils from 'zkJsUtils';

const model = {
    namespace: 'mSample',
    state: {
        isMenuUpdating: false,   // 菜单是否有更新
        menus: undefined         // 
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {
            // eslint-disable-line
        },
    },
    effects: { // action
        // 取菜单
        *getMenus({ payload }, { call, put }) {
            console.log("[^_^:20190124-1435-001] model mSample -> effects.getMenus ", payload);
            let res = yield call(getMenusSync, payload);
            if (res.code == "zk.0") {
                let menus = res.data;
                yield put({ type: 'setState', payload: { menus: menus, isMenuUpdating: true } });
            } else {
                throw new Error("getMenus req fail，error message: " + res.msg)
            }
        }
    },
    reducers: { // 结果
        setState(state, action) {
            return { ...state, ...action.payload };
        }
    }
}

export default model;