/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:21:25
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-08 23:57:25
 */

import { findList, del, save, get, getArea } from '../service';

// import { zkTools } from 'zkFramework';
// const { zkToolsMsg } = zkTools;

// 初始过滤条件
const initFilter = {
    name: '',
    areaOne: '',
    areaTwo: '',
    birthday: [],
    sex: ''
};

const model = {
    namespace: 'mExample_1',
    state: {
        areaTree: undefined,    // 地区数据
        data: undefined,        // 列表数据
        initFilter: initFilter, // 初始过滤条件
        filter: {},             // 过滤条件     
        gridSelKeys: [],        // 列表选中的 KEY
        location: undefined,    // 当前访问的地址 
        optEntity: undefined,   // 当前操作实体
    },
    subscriptions: { // 启动
        setup({ dispatch, history }) {  // eslint-disable-line
            console.log("[^_^:20190522-1621-001] model mE2 -> subscriptions.setup ");
            dispatch({ type: 'getAreaTree', payload: {} });
            // dispatch({type:'findList', payload:initFilter, callback:()=>{}});
        },
    },
    effects: { // action
        // 向服务器请求 地区数据
        *getAreaTree({ payload }, { call, put }) {
            console.log("[^_^:20190522-1621-002] model mE2 -> effects.getAreaTree ");
            let res = yield call(getArea, {});
            let areaTree = res.data || {};
            yield put({ type: 'setState', payload: { areaTree: areaTree } });
        },
        // 查询请求
        *findList({ payload, callback }, { call, put, select }) {

            console.log("[^_^:20190522-1621-003] model mE2 -> effects.findList ");

            // let filter = payload;

            // yield put({type: 'setState', payload:{filter:payload}})

            if (payload == null) {
                payload = yield select(state => state.mE2.filter);
            }

            let res = yield call(findList, payload);

            let data = []
            if (res.code == 0) {
                data = res.data;
            }
            yield put({ type: 'setState', payload: { data: data, gridSelKeys: [], filter: payload } })

            if (callback instanceof Function) {
                callback.call(this);
            }
        },
        // 向服务器请求 数据
        *get({ payload }, { call, put }) {
            console.log("[^_^:20190522-1621-001] model mE2 -> effects.get ", payload);

            let resData = yield call(get, payload.params);
            let entity = {}
            if (resData.code == '0') {
                entity = resData.data;
            }

		    console.log("[^_^:20200817-1627-001] mExample_1 -> get:", entity);
            yield put({ type: 'setState', payload: { optEntity: entity } });
        },
        // 保存
        *save({ payload, callBack }, { call, put }) {
            console.log("[^_^:20190522-1621-002] model mE2 -> effects.save ", payload);
            let res = yield call(save, payload);
            let restState = {}
            if (res.code == '0') {
                restState.entity = res.data;
                yield put({ type: 'setState', payload: restState });
                if (callBack instanceof Function) {
                    callBack.call(this);
                }
            }
        },
        // 删除
        *del({ payload, callback }, { call, put }) {
            console.log("[^_^:20190522-1621-004] model mE2 -> effects.del ids:", payload.ids);
            let res = yield call(del, payload)
            callback();
        },
    },
    reducers: { // 结果
        setState(state, action) {
            return { ...state, ...action.payload }
        }
    }
};

export default model;