
// ============== hello react ========================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import CIndex from './index.js';

// // const FRenderDom = Component => {
// // 	ReactDOM.render(<Component />, document.getElementById('root'));
// // }
// // FRenderDom(CIndex);
// ReactDOM.render(<CIndex />, document.getElementById('root'));

// -------------------------------------------------------------------------------

// ============== hello react dva ========================================================================
import React from 'react';
import dva, { router } from 'dva';
// import { message } from 'antd';
// import createBrowserHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory';

// import CIndex from './index.js';
const CIndex = ()=><div>hello react dva</div>

// 1.初始化 initialize
const dvaApp = dva({
	// ...createLoading({ effects: true }),
	// initialState:{}, // 指定 指定初始数据，优先级高于 model 中的 state；默认为 {}
	// history: createBrowserHistory(), // 默认为： hashHistory 即 createHashHistory(); 其他示例：createBrowserHistory({basename:"/zk" })
	onError(err) {
		console.log('[20230814-0232-001]  - dvaApp --- ', err, typeof (err))
		// let lang = localStorage.getItem(appConfig.lang) || 'zh-CN'
		// // 错误信息提示，未发现错误信息时提示全局的默认错误信息
		// err.msg = err.message || err.msg || locales[lang].messages['global.app.msg.error']
		// message.error(err.msg);
	}
});

// 2.添加插件 add plugins
// dvaApp.use(createLoading({
//     effects: false,
// }))

// 3.添加模型 add model
// dvaApp.model({});

// 4.添加路由 add router
dvaApp.router(()=><CIndex />);

// 5.挂载 start
dvaApp.start('#root');

// console.log("[^_^:20181106-1950-001] webpack 配置的启动参数 =====================================");
// console.log(testValue);
// console.log(testValueObj);
// console.log(globalAppConfig)
// console.log("[^_^:20181106-1950-002] webpack 配置的启动参数 =====================================");

export default dvaApp;



