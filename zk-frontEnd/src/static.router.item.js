/*
* @Author: Vinson
* @Date:   2021-06-24 19:11:59
* @Last Modified by: vinson
* @Last Modified time: 2025-02-05 17:50:18
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

/*** 公共的路由 Item；***********************************************************/
// 登录
tempRouteItem = {
	pkId: "_login",
	key: "_login",
	path: "_login/:defaultLoginType",
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
	pkId: "_register_company",
	key: "_register_company",
	path: "_register_company/:rcStep",
	name: {
	  zh_CN: "注册公司",
	  en_US: "RegisterCompany"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_registerCompany",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_company_audit",
	key: "_company_audit",
	path: "_company_audit",
	name: {
	  zh_CN: "公司审核中",
	  en_US: "Company Audit"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_companyAuditIng",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_register_personal",
	key: "_register_personal",
	path: "_register_personal/:registerType", // mail-邮箱注册； phoneNum-手机号注册；
	name: {
	  zh_CN: "用户注册", // 个人用户
	  en_US: "Register"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_registerPersonal",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);

tempRouteItem = {
	pkId: "_forgot_password",
	key: "_forgot_password",
	path: "_forgot_password/:type", // company-企业找回，发给企业注册的邮箱，修改admin的密码； personal-个人用户修改密码
	name: {
	  zh_CN: "忘记密码",
	  en_US: "Forgot Password"
	},
	funcModuleCode: publicRouteCode,
	funcName: "_forgotPassword",
	isShow: 0
}
publicRouteItems.push(tempRouteItem);


// // 暂未启用
// tempRouteItem = {
// 	pkId: "_errCodeException",
// 	key: "_errCodeException",
// 	path: "_errCodeException/:errCode",
// 	name: {
// 	  zh_CN: "异常代码",
// 	  en_US: "Error Code"
// 	},
// 	funcModuleCode: publicRouteCode,
// 	funcName: "_errCodeException",
// 	isShow: 0
// }
// publicRouteItems.push(tempRouteItem);

/*** 私有的的路由 Items；***********************************************************/
tempRouteItem = {
	pkId: "_personalCenter",
	key: "_personalCenter",
	path: "_personalCenter",
	name: {
	  zh_CN: "个人中心",
	  en_US: "Personal Center"
	},
	exact:true, 
	funcModuleCode: privateRouteCode,
	funcName: "_personalCenter",
	isShow: 0,
}
privateRouteItems.push(tempRouteItem);

// tempRouteItem = {
// 	pkId:"_welcome",
// 	key:"_welcome",
// 	path:"_welcome",
// 	name:{
// 	  zh_CN:"欢迎页面",
// 	  en_US:"Welcome"
// 	},
// 	funcModuleCode: privateRouteCode,
// 	funcName: "welcome",
// 	isShow: 0
// }
// privateRouteItems.push(tempRouteItem);

// tempRouteItem = {
// 	pkId:"_playground",
// 	key:"_playground",
// 	path:"_playground",
// 	name:{
// 	  zh_CN:"调试页面",
// 	  en_US:"Playground"
// 	},
// 	funcModuleCode: privateRouteCode,
// 	funcName: "playground",
// 	isShow: 0
// }
// privateRouteItems.push(tempRouteItem);

export {
	publicRouteCode, privateRouteCode,
	publicRouteItems, privateRouteItems
}


