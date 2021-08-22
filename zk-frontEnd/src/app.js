/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:22:52
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-23 18:43:00
 */

import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
// import { message } from 'antd';
import createBrowserHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory';

import router from './router.js';

// 1.初始化 initialize
const dvaApp = dva({
	...createLoading({ effects: true }),
	// initialState:{}, // 指定 指定初始数据，优先级高于 model 中的 state；默认为 {}
	history: createBrowserHistory(), // 默认为： hashHistory 即 createHashHistory(); 其他示例：createBrowserHistory({basename:"/zk" })
	onError(err) {
		console.log('[20210623-1842-001]  - dvaApp --- ', err, typeof (err));
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

export default dvaApp;
