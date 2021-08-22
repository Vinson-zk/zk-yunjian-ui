/*
* @Author: Vinson
* @Date:   2021-06-24 19:11:59
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 20:55:55
* 
* 前端的静态路由；分为两类：一类是可以开放的公有路由；一类是需要登录后才能看到的私有路由；
* 
*/

/*** 静态开放路由的功能模块代码  */
let publicRouteCode = "_sPublicRoute";
/*** 静态私有路由的功能模块代码  */
let privateRouteCode = "_sPrivateRoute";
// 公共的路由 Item；
const publicRouteItems = [];
// 私有的的路由 Items；
const privateRouteItems = [];


let tempRouteItem = {};

/*** 公共的路由 Item； ***/
tempRouteItem = {
	pkId: "_login",
	key: "_login",
	path: "_login",
	name: {
	  zh_CN: "登陆",
	  en_US: "Login"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_login",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_register",
	key: "_register",
	path: "_register",
	name: {
	  zh_CN: "注册",
	  en_US: "Register"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_register",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_forgot_password",
	key: "_forgot_password",
	path: "_forgot_password",
	name: {
	  zh_CN: "忘记密码",
	  en_US: "Forgot Password"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_forgot_password",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_password_reset",
	key: "_password_reset",
	path: "_password_reset",
	name: {
	  zh_CN: "重置密码",
	  en_US: "Password Reset"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_password_reset",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);


/*** 私有的的路由 Items；***/
tempRouteItem = {
	pkId: "_userInfo",
	key: "_userInfo",
	path: "_userInfo",
	name: {
	  zh_CN: "用户信息",
	  en_US: "User Info"
	},
	exact:true, 
	funcModuleCode: privateRouteCode,
	funcName: "userInfo",
	isShow: 0
}
privateRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId:"_welcome",
	key:"_welcome",
	path:"_welcome",
	name:{
	  zh_CN:"欢迎页面",
	  en_US:"Welcome"
	},
	funcModuleCode: privateRouteCode,
	funcName: "welcome",
	isShow: 0
}
privateRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId:"_playground",
	key:"_playground",
	path:"_playground",
	name:{
	  zh_CN:"调试页面",
	  en_US:"Playground"
	},
	funcModuleCode: privateRouteCode,
	funcName: "playground",
	isShow: 0
}
privateRouteItems.push(tempRouteItem);

export {
	publicRouteCode, privateRouteCode,
	publicRouteItems, privateRouteItems
}


