/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 00:12:30
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 00:15:49
 */

// import { getTestData } from './service';

const model = {
    namespace: 'mReactDva',
    state: {
        lable: "这是react-dva 组件生命周期学习测试代码！",
        modelState: 0,
    },
    subscriptions: { // 启动
        start({ dispatch, history }) {  // eslint-disable-line
            console.log("[^_^:20181117-0824-001] reactDva model subscriptions.start ")
        },
    },
    effects: {  // 影响、作用、动作
        *effectsChangeState({ payload, callback }, { call, put }) {
            console.log("[^_^:20181117-0824-002] reactDva model 用 effectsChangeState 改娈了状态");
            yield put({ type: 'setState', payload: {} })
        }
    },
    reducers: { // 结果，改变状态
        setState(state, action) {
            console.log("[^_^:20181117-0824-002] ----------------------------")
            state.modelState += 1;
            return { ...state };
        },
        reducersChangeState(state, action) {
            console.log("[^_^:20181117-0824-003] reactDva model 用 setState 改娈了状态");
            console.log("[^_^:20181117-0824-003] ----------------------------")
            state.modelState += 1;
            return { ...state };
        }
    }
}

export default model;