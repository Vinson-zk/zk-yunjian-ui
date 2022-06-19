/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:22:52
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-11 20:11:45
 */

 zkJsEvent.eventBinding(window, "storage", function(event){
	console.log("[^_^:20220511-1946-001] eventBinding.window.storage.event:", event);
	console.log("[^_^:20220511-1946-002] eventBinding.window.storage: ", localStorage, sessionStorage);
	if(event.key == globalAppConfig.localKey.ticket){
		// 已存在标签页会收到这个事件
	}else if(event.key == "sessionStorage"){
		// 新开启标签页，会接收到这个事件
	}
});

import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
// import { message } from 'antd';
import createBrowserHistory from 'history/createBrowserHistory';
// import createHashHistory from 'history/createHashHistory'; // 使用 hash 路由，antd 锚点无法使用

import router from './router.js';

// 1.初始化 initialize
const dvaApp = dva({
	...createLoading({ effects: true }),
	// initialState:{}, // 指定 指定初始数据，优先级高于 model 中的 state；默认为 {}
	history: createBrowserHistory(), // 默认为： hashHistory 即 createHashHistory(); 其他示例：createBrowserHistory({basename:"/zk" })
	onError(err) {
		console.log('[20210623-1842-001]  --- dvaApp --- ', err, typeof (err));
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






