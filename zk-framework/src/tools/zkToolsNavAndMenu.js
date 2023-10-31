/**
 * 导航栏，菜单处理 函数方法
 * @Author: Vinson
 * @Date: 2020-08-11 09:04:45
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 15:56:44
 */

import React from 'react';
import dynamic from 'dva/dynamic';

import zkJsUtils from 'zkJsUtils';
import zkToolsMsg from './zkToolsMsg.js';

import { ZKCustomComponents } from '../components';

const { ZKRouter } = ZKCustomComponents;
const { ZKPrivateRoute } = ZKRouter;

/*** ----------------------------------- Separator - begin 公共函数 ------------ ***/

/* 数据模型注册缓存，防止重复注册 */
const modelCached = {};

/**
 * 数据模型注册与替换，一个 model 只能注册一次; 
 * 注：需要替换或重新注册时，需要先注销，然后现注册；
 * @param {object} dvaApp dva app 对象
 * @param {Array.of(object)} models 数据模型对象数组，默认为 空数组
 * @return {boolean} true-注册成功；false-注册失败；
 */
const f_reigsterModel = (dvaApp, models = []) => {
	for (let model of models) {
		try {
			if (!modelCached[model.namespace]) {
				// console.log("[^_^:20181214-1041-001] 注册 model:", model.namespace, model)
				// 注册 model
				// dvaApp.model(model);
				// 替换model为新model；如果原来不存在相同namespace的model，那么执行 app.model 操作
				dvaApp.replaceModel(model);
				modelCached[model.namespace] = 1
			} else {
				// console.log("[^_^:20181213-1823-001] 已注册 model:", model.namespace, model)
			}
			return true;
		} catch (err) {
			if(console)console.error("[>_<:20190129-1823-001] 注册 model 失败；model:", model, err);
			// throw err;
			return false;
		}
	}
};

/**
 * 数据模型 model 注销；
 * @param {object} dvaApp dva app 对象
 * @param {Array.of(object)} models 数据模型对象数组，默认为 空数组
 * @return void
 */
const f_unRegisterModel = (dvaApp, models = []) => {
	for (let model of models) {
		if (modelCached[model.namespace]) {
			// console.log("[^_^:20181214-1041-001] 注销 model:", model.namespace, model)
			dvaApp.unmodel(model);
			modelCached[model.namespace] = undefined
		} else {
			// console.log("[^_^:20181213-1823-001] 未注册，不需要注销 model:", model.namespace, model)
		}
	}
};

/**
 * 制作路由组件，按需要生成 dva 动态组件 dynamic({})
 * @param {object} dvaApp dva app 对象，注意在dynamic({}) 中这个参数的参数名只能是 'app' 
 * @param {Array.of(object)} models 数据模型对象数组，不存在时不生成 dva 动态组件 dynamic({}) 组件，直接返回react 目标组件；
 * @param {object} component react 目标组件 
 * @return {object} 生成的 dva 动态组件或react 目标组件；
 */
const f_makeDynamicComponent = (dvaApp, models, component) => {
	// console.log("[^_^:20200813-1917-001] ", dvaApp, models, component);
	if (models && (models instanceof Array) && models.length > 0) {
		// console.log("[^_^:20200813-2009-001 ] f_makeDynamicComponent ", dvaApp, models, component);
		// dvaApp = dvaApp||globalDvaApp;
		// 注意这里属性名称的对应，是 app
		return dynamic({ app: dvaApp, models: () => models, component: () => component });
	} else {
		return component
	}
}

/*** ----------------------------------- Separator - end 公共函数 ------------ ***/
/*** ----------------------------------- Separator - begin 头部导航相关处理函数 ------------ ***/
/**
 * 生成头部导航及头部导航的路由; 
 * 生成的导航路由会向路由的组件中传入：{dvaApp:dvaApp, navCode:item.code, dynamicImportHelper:dynamicImportHelper} 这三个属性；
 * @param {object} dvaApp dva app 对象；
 * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；
 * @param {Array.of(object)} navDatas 导航栏目数据数组，不支持树形结构；
 * @param {object} dynamicImportHelper 动态导入组件助手对象；含一个动态加载组件的函数 'dynamicImport(item)'，入参为导航 item 数据；
 *    这里传入对象而不直接传入函数的原因是要保证加载时，其他的相关依赖不发生变化，如上下文 context 或组件功能对象。
 *    dynamicImport(item) 返回要求示例:
 *    { 
 *      onEnter: undefined, // 生成路由的跳转钩子
 *      component: 组件, 
 *      models: 数据模型-数组, 不存在时，必须为空数组。
 *    }
 * @return {Array.of(object)} 生成导航栏目路由；
 */
const f_getRoutesByNavs = (dvaApp, prefixPath, navDatas, dynamicImportHelper) => {
	prefixPath = prefixPath == "/" ? "" : prefixPath;

	let navComponentObj = null;
	let navDynamicComponent = undefined;
	return navDatas.map(item => {
		// 导航栏目，不显示时，不生成路由，这一点与菜单不同
		if(f_navIsShow(item)){
			navComponentObj = dynamicImportHelper.dynamicImport(item);
			if(!navComponentObj){
				console.error("[>_<:20210214-0844-001] item 未找对应定义的功能组件：", item, dynamicImportHelper);
				return;
			}
			navDynamicComponent = f_makeDynamicComponent(dvaApp, navComponentObj.models, navComponentObj.component);
			// console.log("[^_^:20200813-1951-001] f_getRoutesByNavs: ", item, dynamicImportHelper);
			// console.log("[^_^:20200813-1951-002] f_getRoutesByNavs: ", navComponentObj, navDynamicComponent);
			return (
				<ZKPrivateRoute
					key={item.pkId + "-nav"}
					path={`${prefixPath}/${item.path}`} component={navDynamicComponent}
					onEnter={navComponentObj.onEnter}
					propsToComponent={{ dvaApp: dvaApp, navCode: item.code, dynamicImportHelper: dynamicImportHelper }}
				/>
			)
		}
	});
}
/**
 * 查找默认导航栏目
 * @param {Array.of(object)} navDatas 导航栏目数据数组，不处理树形结构子结点；默认为空数组；
 * @return {object} 遇到的第一个设置为默认的导航栏目数据对象，不存在时，返回 null；
 */
const f_getIndexNav = (navDatas = []) => {
	for (let navItem of navDatas) {
		if (navItem.isIndex == 1) {
			return navItem
		}
	}
	return null;
}
/**
 * 判断导航栏是否是显示；
 * @param {object} nav navItem.isShow 为数字 1-显示；其他不显示；
 * @return {boolean} true-显示；false-不显示； 
 */
const f_navIsShow = (navItem) => {
	if (navItem.isShow === 1) {
		return true
	}
	return false
}
/*** ----------------------------------- Separator - end 头部导航相关处理函数 ------------ ***/

/*** ----------------------------------- Separator - begin 菜单路由处理函数 ------------ ***/
/**
 * 生成菜单路由；
 * 1、从树形菜单数据根结点开始，向子结点递归逐一生成路由; 生成的路由组件 component 中，会传入 {dvaApp:dvaApp} 属性，供子组件使用；
 * 2、路由路径，从根结点到此结点的各个不为空的path用 / 连接；再在前面加上传的 前缀路径；为此路由的访问路径。
 * 3、如果此菜单(路由)结点通过 dynamicImportHelper 未取到功能组件对象，则不生成路由，也不会注册数据模型！但path是有效的！
 * 4、如果此菜单(路由)结点的 isFrame 为 1，即为路由容器，则停止对其子结点的递归；
 *      向生成的路由组件 component 中，传入{dvaApp:dvaApp, menus:menu.children, dynamicImportHelper:dynamicImportHelper} 这三个属性；
 *      在生成的路由组件 component 中，自行决定对子菜单数据的处理！
 * 5、递归生成菜单；
 * @param {object} dvaApp dva app 对象；
 * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；
 * @param {Array.of(object)} menus 菜单数据数组；
 * @param {object} dynamicImportHelper 动态导入组件助手对象；动态导入组件助手对象；同 genRoutesByNavs 导航栏目路由中生成的动态导入组件助手对象；
 *  dynamicImport(item) 返回要求示例:
 *    { 
 *      onEnter: undefined, // 生成路由的跳转钩子
 *      component: 组件, 
 *      models: 数据模型-数组, 不存在时，必须为空数组。
 *    }
 * @return {Array.of(object)} 生成菜单路由；
 */
const f_getRoutesByMenus = (dvaApp, prefixPath, menus, dynamicImportHelper) => {
	let routes = [];
	// 路由访问路径前缀 
	prefixPath = prefixPath || "";
	prefixPath = prefixPath == '/' ? "" : prefixPath
	let tPath = "";
	let dynamicComponent = undefined;
	let componentObj = undefined;
	let cRoutes = undefined;
	menus.forEach((menu, index, arr) => {
		dynamicComponent = undefined;
		componentObj = null;
		cRoutes = undefined;

		tPath = zkJsUtils.isEmpty(menu.path) ? prefixPath : prefixPath + "/" + menu.path;
		componentObj = dynamicImportHelper.dynamicImport(menu);
		if (componentObj != null) {

			dynamicComponent = f_makeDynamicComponent(dvaApp, componentObj.models, componentObj.component);

			// 判断是否为框架视图
			if (menu.isFrame === 1) {
				/*** 使用 ZKPrivateRoute 动态路由 ***/
				routes.push(
					<ZKPrivateRoute key={menu.pkId + "-panel"}
						path={tPath} component={dynamicComponent}
						onEnter={componentObj.onEnter}
						propsToComponent={{ dvaApp: dvaApp, navCode: menu.navCode, menus: menu.children, dynamicImportHelper: dynamicImportHelper }}
					/>
				);
			} else {
				/*** 使用 ZKPrivateRoute 动态路由 ***/
				routes.push(
					<ZKPrivateRoute key={menu.pkId} exact={menu.exact}
						path={tPath} component={dynamicComponent}
						onEnter={componentObj.onEnter}
						propsToComponent={{ dvaApp: dvaApp, navCode: menu.navCode }}
					/>
				);

				// 判断是否有子路由
				if (!zkJsUtils.isEmpty(menu.children) && menu.children.length > 0) {
					cRoutes = f_getRoutesByMenus(dvaApp, tPath, menu.children, dynamicImportHelper)
					routes = routes.concat(cRoutes);
				}
			}

		} else {
			// 判断是否有子路由
			if (!zkJsUtils.isEmpty(menu.children) && menu.children.length > 0) {
				cRoutes = f_getRoutesByMenus(dvaApp, tPath, menu.children, dynamicImportHelper)
				routes = routes.concat(cRoutes);
			}
		}
	});
	return routes;
}

/**
 * 查找默认菜单；遇到的第一个设置为默认的菜单，再递归查找子菜单的默认菜单；
 * @param {Array.of(object)} menus 菜单数据数组；
 * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；
 * @return {object} 默认菜单路由对象; 不存在时，返回 null; 
 *    默认菜单路由对象示例: 
 *    { 
 *       path: 默认菜单访问路径 
 *       menu: 默认菜单数组对象 
 *    };
 */
const f_getIndexMenu = (menus, prefixPath) => {

	prefixPath = (prefixPath == undefined || prefixPath == '/') ? '' : prefixPath;

	for (let menu of menus) {
		if (menu.isIndex == 1) {
			prefixPath = prefixPath + "/" + menu.path;
			let indexObj = null;
			if (menu.children instanceof Array) {
				indexObj = f_getIndexMenu(menu.children, prefixPath);
			}
			if (indexObj == null) {
				indexObj = { path: prefixPath, menu: menu };
			}
			return indexObj;
		}
	}
	return null;
}

/**
 * 根据当前国际化语言取菜单的对应名称；
 * @param {object} menu 菜单数据对象；menu.name 为名称属性；
 * @param {object} intl react-intl injectIntl 国际化对象;
 * @return {string} 菜单在当前语言环境中的对应名称；不存在对应环境名称时，取 menu.name. + m.key 对象国际化配置，也不存在时，返回空； 
 */
const f_getMenuName = (menu, intl) => {
	let name = ''
	let i = 0
	while (zkJsUtils.isEmpty(name) && i < 2) {
		try {
			if (i === 0) {
				name = zkToolsMsg.getInternationInfo(menu.name);
			} else if (i === 1) {
				name = toolsNotification.msgFormatIntl(intl, 'menu.name.' + menu.code)
			}
		} catch (e) {
			name = ''
		}
		++i
	}
	return name
}

/**
 * 判断菜单是否是显示；
 * @param {object} menu 菜单数据对象；menu.isShow 为数字 1-显示；其他不显示；
 * @return {boolean} true-显示；false-不显示； 
 */
const f_menuIsShow = (menu) => {
	if (menu.isShow === 1) {
		return true
	}
	return false
}

/**
 * 判断菜单是否为叶子菜单；需要显示且无显示的子菜单，则为叶子节点；
 * @param {object} menu 菜单数据对象；menu.isShow 为数字 1-显示；其他不显示；
 * @return: true-是叶子节点；false-不是叶子节点； 
 */
const f_menuIsLeaf = (menu) => {
	if (menu.children instanceof Array) {
		for (let cm of menu.children) {
			if (f_menuIsShow(cm)) {
				return false
			}
		}
	}
	return true
}
/*** ----------------------------------- Separator - end 菜单路由处理函数 ------------ ***/

/*** ----------------------------------- Separator - begin 路由路径的映射 ------------ ***/
/**
 * 生成路由路径的映射对象，映射对象供面包屑与菜单使用来级联打开菜单的显示面包屑；具体功能见生成方法原码注释；
 * @param {string} prefixPath 路由路径前缀，不能为 null 或 undefined；
 * @param {Array.of(object)} items 菜单数据数组；
 * @param {object} routerMappingObj 路径映射对象，传入 null 时自动创建对象，不存在时；存在时，只新增映射
 * @return: routerMappingObj 路径映射对象;
 */
const f_getRouterMapping = (prefixPath, items, routerMappingObj) => {

	prefixPath = prefixPath == '/' ? "" : prefixPath;

	if (routerMappingObj == null) {
		routerMappingObj = {
			basename: prefixPath,
			normalHandles: {},     // 一般的路由路径映射句柄；即路由路径句柄要完全匹配
			regExpHandles: {},     // 正则匹配的路由路径映射句柄；即路由路径句柄用生成的正则匹配
			getMappingTarget: function (path) {  // 取路由路径对应的映射对象
				// // 1、找出映射的路由路径，即 path 中的 "?" 号前的内容；
				// path = path.split("?").filter(i=>i)
				// path = path[0];				
				let targetObj = this.normalHandles[path];
				if (targetObj == null || targetObj == undefined) {
					for (let handleIndex in this.regExpHandles) {
						if ((new RegExp(handleIndex)).test(path)) {
							targetObj = this.regExpHandles[handleIndex];
							return targetObj;
						}
					}
				}
				// console.log("[^_^:20190129-1421-001 routerMappingObj.getMappingTarget] ", targetObj, path, this.normalHandles)
				return targetObj;
			}
		}
		routerMappingObj.getMappingTarget.bind(routerMappingObj);
	}

	let tPath = undefined;
	items.forEach(item => {
		tPath = undefined;
		tPath = prefixPath;

		// 判断菜单是否路由路径，没有不用设置映射对象
		if (!zkJsUtils.isEmpty(item.path)) {
			tPath = prefixPath + "/" + item.path;
			f_makeMapping(tPath, item, routerMappingObj.normalHandles, routerMappingObj.regExpHandles);
		} else {
			f_makeMapping(tPath, item, routerMappingObj.normalHandles, routerMappingObj.regExpHandles);
		}

		// 判断是否有子路由
		if (!zkJsUtils.isEmpty(item.children) && item.children.length > 0) {
			f_getRouterMapping(tPath, item.children, routerMappingObj)
		}
	})

	return routerMappingObj;
}

/**
 * 根据路由路径生成一个映射对应的句柄;
 * @param {string} path 路由路径；
 * @param {object} item 映射的目标对象；
 * @param {string} normalHandles 一般的路由路径映射句柄；输出参数；
 * @param {string} regExpHandles 正则匹配的路由路径映射句柄；输出参数；
 * @return void 无返回，通过 normalHandles, regExpHandles 两对象输出结果；
 */
const f_makeMapping = (path, item, normalHandles, regExpHandles) => {

	// "^/a/[^/]*/d$"
	// 1、找出映射的路由路径，即 path 中的 "?" 号前的内容；
	path = path.split("?").filter(i => i)
	path = path[0];

	// 2、路由路径按 "/" 分隔；如果有 :param 将通过正则匹配 [^/]*
	path = path.split("/").filter(i => i)

	// 3、制作路由路径映射句柄，并判断是句柄是正常路径还是需要正则匹配的路径；
	let mappingHandle = "";
	let isRegEXP = false;
	path.forEach(currentValue => {
		if (currentValue.charAt(0) == ":") {
			isRegEXP = true;
			mappingHandle = mappingHandle + "/[^/]*";
		} else {
			mappingHandle = mappingHandle + "/" + currentValue
		}
	});

	// 4、生成映射
	if (isRegEXP) {
		// 需要正则匹配
		regExpHandles["^" + mappingHandle + "$"] = item;
	} else {
		// 一般路径，不需要正则匹配
		normalHandles[mappingHandle] = item;
	}
}
/*** ----------------------------------- Separator - end 路由路径的映射 ------------ ***/

/*** ----------------------------------- Separator - begin 其他导入或菜单处理函数 ------------ ***/

/**
 * 动态加载组件助手
 * @param {object} funcModuleMppingObj 功能模块的功能映射对象
 * @return {object} 动态组件；返回示例:
 *    { 
 *      onEnter: undefined, // 生成路由的跳转钩子
 *      component: 组件, 
 *      models: 数据模型-数组, 不存在时，必须为空数组。
 *    }
 */
const f_getDynamicImportHelper = (funcModuleMppingObj) => {
	let dynamicImportHelper = {
		"funcModuleMppingObj": funcModuleMppingObj,
		dynamicImport: function (item) {
			// console.log("[^_^:20210228-1233-001] item: ", item);
			// console.log("[^_^:20210228-1233-002] item: ", this.funcModuleMppingObj[item.funcModuleCode][item.funcName]);
			try {
				if (!zkJsUtils.isEmpty(item.funcName)) {
					return this.funcModuleMppingObj[item.funcModuleCode][item.funcName];
				}
			} catch (err) {
				if(console)console.error("[>_<:20200811-2322-001] 动态加载组件错误！", item, this.funcModuleMppingObj, err);
			}
		}
	}

	dynamicImportHelper.dynamicImport.bind(dynamicImportHelper);
	return dynamicImportHelper;
}

/*** ----------------------------------- Separator - end 其他导入或菜单处理函数 ------------ ***/

export default {

	// ----- Separator : 公共函数
	reigsterModel: f_reigsterModel,          // 数据模型注册与替换，一个 model 只能注册一次; 
	unRegisterModel: f_unRegisterModel,      // 数据模型 model 注销；
	makeDynamicComponent: f_makeDynamicComponent, // 制作路由组件，按需要生成 dva 动态组件 dynamic({})
	// ----- Separator : 头部导航相关处理函数
	getRoutesByNavs: f_getRoutesByNavs,      // 生成头部导航及头部导航的路由; 
	getIndexNav: f_getIndexNav,              // 查找默认导航栏目
	navIsShow: f_navIsShow,                  // 判断导航栏是否是显示；
	// ----- Separator : 菜单路由处理函数 
	getRoutesByMenus: f_getRoutesByMenus,    // 生成菜单路由
	getIndexMenu: f_getIndexMenu,            // 查找默认菜单；
	getMenuName: f_getMenuName,              // 根据当前国际化语言取菜单的对应名称；
	menuIsShow: f_menuIsShow,                // 判断菜单是否是显示；
	menuIsLeaf: f_menuIsLeaf,                        // 判断菜单是否为叶子菜单；
	// ----- Separator : 路由路径的映射
	getRouterMapping: f_getRouterMapping,    // 生成路由路径的映射对象
	// ----- Separator : 其他导入或菜单处理函数 
	getDynamicImportHelper: f_getDynamicImportHelper // 动态加载组件助手
}


