/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:17:17
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:18:22
 */

const model = {
	namespace:'mSampleMenuRouter',
	state:{
        name:'测试视图框架，绑定数据模型'
	},
	subscriptions: { // 启动
        
    },
    effects: {       // action
        // 修改模型
        *updateModel({payload}, {call, put}){
            yield put({type: 'rSetState', payload:payload})
        },
    },
    reducers: { // 结果
    	setState(state, action) {
            // console.log('--- setState ', action.payload)
            return { ...state, ...action.payload }
        }
    }
}

export default model
