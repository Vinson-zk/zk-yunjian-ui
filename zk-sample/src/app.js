/*
 * @Author: Vinson 
 * @Date: 2020-08-06 15:15:39 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-08 19:43:06
 */

// import React from 'react';
// import { render } from 'react-dom';

// const FComponent = ()=>{
// 	return (<div>test</div>)
// }

// const renderDom = Component => {
//     render(
//         <Component />,
//         document.getElementById('root')
//     );
// }

// renderDom(FComponent);

/**************************************************/
// // 一个简单的样例
// import React from 'react';
// import { render } from 'react-dom';
// const CZKPlatform = Component => {
//     return (
//         <div>Hello Welcome to zk-platform</div>
//     );
// }
// const renderDom = Component => {
//     render(
//         <Component />,
//         document.getElementById('root')
//     );
// }
// renderDom(CZKPlatform);
/**************************************************/

import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
// import { message } from 'antd';
import createBrowserHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory';

import router from './router.js';

// // import {locales} from './assets/locales';
// // import appConfig from './assets/appConfig';

// // import 'assets/theme/default/color';

// import styles from "./styles.less";
// import "./styles.less";

// 1.初始化 initialize
const dvaApp = dva({
	...createLoading({ effects: true }),
	// initialState:{}, // 指定 指定初始数据，优先级高于 model 中的 state；默认为 {}
	history: createBrowserHistory(), // 默认为： hashHistory 即 createHashHistory(); 其他示例：createBrowserHistory({basename:"/zk" })
	onError(err) {
		console.log('[20190114-1706-001]  - dvaApp --- ', err, typeof (err))
		// let lang = localStorage.getItem(appConfig.lang) || 'zh-CN'
		// // 错误信息提示，未发现错误信息时提示全局的默认错误信息
		// err.msg = err.message || err.msg || locales[lang].messages['global.app.msg.error']
		// message.error(err.msg);
	}
})

// 2.添加插件 add plugins
// dvaApp.use(createLoading({
//     effects: false,
// }))

// 3.添加模型 add model
// dvaApp.model(mApp);

// 4.添加路由 add router
dvaApp.router(router);


// 5.挂载 start
dvaApp.start('#root');

// console.log("[^_^:20181106-1950-001] webpack 配置的启动参数 =====================================");
// console.log(testValue);
// console.log(testValueObj);
// console.log(globalAppConfig)
// console.log("[^_^:20181106-1950-002] webpack 配置的启动参数 =====================================");

export default dvaApp;
