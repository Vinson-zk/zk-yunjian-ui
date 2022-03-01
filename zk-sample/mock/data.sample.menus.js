/**
 * 样例功能模块菜单
 * @Author: Vinson
 * @Date: 2020-08-12 00:23:27
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-12-08 00:00:54
 */

let tMenu = null;
const sampleMenus = [];

const navCode = "sample";
const funcCode = "sample";

/********************************************* 样例 home */
tMenu = {
	pkId: "sample_home",        // 不能为空；数据 ID，也是生成菜单时，组件的 key；
	code: "sample_home",      // 不能为空；唯一；自定义菜单标识 code；
	name: { "zh-CN": "Home", "en-US": "Home" }, // 不能为空；菜单(路由)的名称, 国际化json对象；
	navCode: navCode,         // 不能为空；导航栏目代码，即功能菜单的分组代码；
	funcModuleCode: funcCode, // 不能为空；功能模块代码；也是功能模块目录;
	funcName: 'home',		  // 功能名称，也是功能组件对象名称；在同功能模块下要求唯一；将根据这名称查找到对应功能组件；注：为空时，不会生成面包屑！及路由
	path: "home",             // 访问路径；注意当路径为 ':param'，要排在同级路由的最后，否则后面的路由会匹配不到！
	isIndex: 1,               // 不能为空；是否为默认路由，0-不是；1-是
	exact: true,              // 默认 false；当为true时，仅当路径与位置匹配时才匹配; 
								// 1、当 isFrame 0-不为路由容器，又有子路由时，要为 true 子路由才能显示出来；？要不要默认设置为true；
								// 2、当 isFrame 0-路由容器，此配置不起作用；值为 false；
	isFrame: 0,               // 1-路由容器，否则为正常的一般路由；
	isShow: 0,                // 是否显示 1-显示；其他不显示；
	icon: "TagsOutlined",             // 菜单图标,【生成菜单属性，不影响路由生成】；
	sort: 5,                  // 不能为空；排序字段,【生成菜单属性，不影响路由生成】；
	// permission: '',           // 权限标识，与后对对应控制代码一至；多个权限标识时用英文 ";" 号分隔；
	parentId: null,           // 菜单(路由)的上级结点 pkId，制作树形结构关键属性；
	//children:null           // 子菜单(子路由)数组；
}     
sampleMenus.push(tMenu);

/********************************************* 工具，公共的 JS */
tMenu = {
	pkId: "sample_zkJs", code: "sample_zkJs", name: { "zh-CN": "zkJs", "en-US": "zkJs" },
	path: "zkJs", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'zkJsIndex',
	isIndex: 0, exact: true, isFrame: 1, isShow: 1, icon: "AntDesignOutlined", sort: 11,
	permission: null, parentId: null, children: null
}
sampleMenus.push(tMenu);
// zkJsUtils
tMenu = {
	pkId: "sample_zkJs_zkJsUtils", code: "sample_zkJs_zkJsUtils", name: { "zh-CN": "zkJsUtils", "en-US": "zkJsUtils" },
	path: "zkJsUtils", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'zkJsUtils',
	isIndex: 0, exact: true, isFrame: 0, isShow: 0, icon: "AntDesignOutlined", sort: 100,
	permission: null, parentId: "sample_zkJs", children: null
}
sampleMenus.push(tMenu);
// zkJsEvent
tMenu = {
	pkId: "sample_zkJs_zkJsEvent", code: "sample_zkJs_zkJsEvent", name: { "zh-CN": "zkJsEvent", "en-US": "zkJsEvent" },
	path: "zkJsEvent", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'zkJsEvent',
	isIndex: 0, exact: true, isFrame: 0, isShow: 0, icon: "AntDesignOutlined", sort: 200,
	permission: null, parentId: "sample_zkJs", children: null
}
sampleMenus.push(tMenu);
// // zkJsValidates
// tMenu = {
// 	pkId: "sample_zkJs_zkJsValidates", code: "sample_zkJs_zkJsValidates", name: { "zh-CN": "zkJsValidates", "en-US": "zkJsValidates" },
// 	path: "zkJsValidates", navCode: navCode, funcModuleCode: funcCode,
// 	funcName: 'zkJsValidates',
// 	isIndex: 0, exact: true, isFrame: 0, isShow: 0, icon: "AntDesignOutlined", sort: 300,
// 	permission: null, parentId: "sample_zkJs", children: null
// }
// sampleMenus.push(tMenu);
// zkJsSortTwoArray
tMenu = {
	pkId: "sample_zkJs_zkJsSortTwoArray", code: "sample_zkJs_zkJsSortTwoArray", name: { "zh-CN": "zkJsSortTwoArray", "en-US": "zkJsSortTwoArray" },
	path: "zkJsSortTwoArray", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'zkJsSortTwoArray',
	isIndex: 0, exact: true, isFrame: 0, isShow: 0, icon: "AntDesignOutlined", sort: 400,
	permission: null, parentId: "sample_zkJs", children: null
}
sampleMenus.push(tMenu);

/********************************************* 工具，一些公用方法说明 */
// zkTools
tMenu = {
    pkId:"sample_zkTools", key:"sample_zkTools", name:{"zh-CN":"zkTools","en-US":"zkTools"}, 
    path:"zkTools", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkTools',
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"AntDesignOutlined", sort:10, 
	permission:null, parentId:null, children:null
}
sampleMenus.push(tMenu);
// zkToolsMsg
tMenu = {
    pkId:"sample_zkTools_zkToolsMsg", key:"sample_zkTools_zkToolsMsg", name:{"zh-CN":"zkToolsMsg","en-US":"zkToolsMsg"}, 
    path:"zkToolsMsg", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsMsg',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:20, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);
// zkToolsAjax
tMenu = {
    pkId:"sample_zkTools_zkToolsAjax", key:"sample_zkTools_zkToolsAjax", name:{"zh-CN":"zkToolsAjax","en-US":"zkToolsAjax"}, 
    path:"zkToolsAjax", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsAjax',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:30, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);
// zkToolsNavAndMenu
tMenu = {
    pkId:"sample_zkTools_zkToolsNavAndMenu", key:"sample_zkTools_zkToolsNavAndMenu", name:{"zh-CN":"zkToolsNavAndMenu","en-US":"zkToolsNavAndMenu"}, 
    path:"zkToolsNavAndMenu", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsNavAndMenu',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:40, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);
// zkToolsAuth
tMenu = {
    pkId:"sample_zkTools_zkToolsAuth", key:"sample_zkTools_zkToolsAuth", name:{"zh-CN":"zkToolsAuth","en-US":"zkToolsAuth"}, 
    path:"zkToolsAuth", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsAuth',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:50, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);
// zkToolsUtils
tMenu = {
    pkId:"sample_zkTools_zkToolsUtils", key:"sample_zkTools_zkToolsUtils", name:{"zh-CN":"zkToolsUtils","en-US":"zkToolsUtils"}, 
    path:"zkToolsUtils", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsUtils',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:60, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);
// zkToolsValidates
tMenu = {
    pkId:"sample_zkTools_zkToolsValidates", key:"sample_zkTools_zkToolsValidates", name:{"zh-CN":"zkToolsValidates","en-US":"zkToolsValidates"}, 
    path:"zkToolsValidates", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'zkToolsValidates',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:70, 
	permission:null, parentId:"sample_zkTools", children:null
}
sampleMenus.push(tMenu);

/********************************************* ES6语法 */
tMenu = {
	pkId: "sample_es6", code: "sample_es6", name: { "zh-CN": "ES6语法", "en-US": "ES6语法" },
	path: "es6", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'es6',
	isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "TagsOutlined", sort: 5,
	/* permission:,*/ parentId: null, //children:null
}
sampleMenus.push(tMenu);
/********************************************* react-dva 学习 */
tMenu = {
	pkId: "sample_react-dva", code: "sample_react-dva", name: { "zh-CN": "React-dva", "en-US": "React-dva" },
	path: "react-dva", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'reactDva',
	isIndex: 0, exact: false, isFrame: 0, isShow: 1, icon: "TagsOutlined", sort: 9,
	/* permission:'', */ parentId: null, //children:null
}
sampleMenus.push(tMenu);

/********************************************* 路由样例 */
// 路由样例
tMenu = {
	pkId: "sample_router", code: "sample_router", name: { "zh-CN": "路由样例", "en-US": "Router-Sample" },
	path: "router", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'router',
	isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "LinkOutlined", sort: 20,
	/* permission:'', */ parentId: null, //children:null
}
sampleMenus.push(tMenu);
// 路由样例菜单-静态路由
tMenu = {
	pkId: "sample_router_static", code: "sample_router_static", name: { "zh-CN": "静态路由样例", "en-US": "Static-Router-Demo" },
	path: "static", navCode: navCode, funcModuleCode: funcCode,
	funcName: 'routerStatic',
	isIndex: 0, exact: false, isFrame: 0, isShow: 1, icon: "LinkOutlined", sort: 10,
	permission: null, parentId: "sample_router", children: null
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由
tMenu = {
	pkId:"sample_router_menu", code:"sample_router_menu", name:{"zh-CN":"菜单路由样例","en-US":"Menu-Router-Demo"}, 
	path:"menu", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenu',
	isIndex:0, exact:false, isFrame:1, isShow:1, icon:"LinkOutlined", sort:20, 
	permission:null, parentId:"sample_router", children:null
}
sampleMenus.push(tMenu);
/** ------------------------------------- 二级路由 */
// 路由样例菜单-菜单路由的 默认路由
tMenu = {
	pkId:"sample_router_menu_index", code:"sample_router_menu_index", name:{"zh-CN":"默认路由","en-US":"Index-Route"}, 
	path:"", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuIndex',
	isIndex:0, exact:true, isFrame:0, isShow:0, icon:"LinkOutlined", sort:10, 
	permission:'', parentId:"sample_router_menu", children:null
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由1
tMenu = {
	pkId:"sample_router_menu_lever2_1", code:"sample_router_menu_lever2_1", name:{"zh-CN":"二级路由-1","en-US":"Second-level-1"}, 
	path:"lever2-c1", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c1',
	isIndex:0, exact:false, isFrame:1, isShow:0, icon:"LinkOutlined", sort:20, 
	permission:'', parentId:"sample_router_menu", children:null
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由2
tMenu = {
	pkId:"sample_router_menu_lever2_2", code:"sample_router_menu_lever2_2", name:{"zh-CN":"二级路由-2","en-US":"Second-level-2"}, 
	path:"lever2-c2", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c2',
	isIndex:0, exact:false, isFrame:1, isShow:0, icon:"LinkOutlined", sort:30, 
	permission:'', parentId:"sample_router_menu"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由3
tMenu = {
	pkId:"sample_router_menu_lever2_3", code:"sample_router_menu_lever2_3", name:{"zh-CN":"二级路由-3","en-US":"Second-level-3"}, 
	path:"lever2-c3", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c3',
	isIndex:0, exact:false, isFrame:1, isShow:0, icon:"LinkOutlined", sort:40, 
	permission:'', parentId:"sample_router_menu"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由4
tMenu = {
	pkId:"sample_router_menu_lever2_4", code:"sample_router_menu_lever2_4", name:{"zh-CN":"二级路由-4","en-US":"Second-level-4"}, 
	path:"lever2-c4", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c4',
	isIndex:0, exact:true, isFrame:0, isShow:0, icon:"LinkOutlined", sort:50, 
	permission:'', parentId:"sample_router_menu"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由5 参数
tMenu = {
	pkId:"sample_router_menu_lever2_5", code:"sample_router_menu_lever2_5", name:{"zh-CN":"二级路由-5","en-US":"Second-level-5"}, 
	path:":params", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c5',
	isIndex:0, exact:false, isFrame:0, isShow:0, icon:"LinkOutlined", sort:60, 
	permission:'', parentId:"sample_router_menu"
}
sampleMenus.push(tMenu);
/** ------------------------------------- 三级路由 */
// 路由样例菜单-菜单路由的 二级路由1 的子路由；三级路由
tMenu = {
	pkId:"sample_router_menu_lever2_1_c1", code:"sample_router_menu_lever2_1_c1", name:{"zh-CN":"二级路由-1-c1","en-US":"Second-level-1-c1"}, 
	path:":params", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c1c1',
	isIndex:0, exact:false, isFrame:0, isShow:0, icon:"LinkOutlined", sort:1, 
	permission:'', parentId:"sample_router_menu_lever2_1"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由2 的子路由；三级路由
tMenu = {
	pkId:"sample_router_menu_lever2_2_c1", code:"sample_router_menu_lever2_2_c1", name:{"zh-CN":"二级路由-2-c1","en-US":"Second-level-2-c1"}, 
	path:":params", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c2c1',
	isIndex:0, exact:false, isFrame:0, isShow:0, icon:"LinkOutlined", sort:1, 
	permission:'', parentId:"sample_router_menu_lever2_2"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由3 的子路由；三级路由
tMenu = {
	pkId:"sample_router_menu_lever2_3_cIndex", code:"sample_router_menu_lever2_3_cIndex", name:{"zh-CN":"二级路由-3-cIndex","en-US":"Second-level-3-cIndex"}, 
	path:"", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c3index',
	isIndex:0, exact:true, isFrame:0, isShow:0, icon:"LinkOutlined", sort:1, 
	permission:'', parentId:"sample_router_menu_lever2_3"
}
sampleMenus.push(tMenu);
tMenu = {
	pkId:"sample_router_menu_lever2_3_c1", code:"sample_router_menu_lever2_3_c1", name:{"zh-CN":"二级路由-3-c1","en-US":"Second-level-3-c1"}, 
	path:":params", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'routerMenuL2c3c1',
	isIndex:0, exact:false, isFrame:0, isShow:0, icon:"LinkOutlined", sort:1, 
	permission:'', parentId:"sample_router_menu_lever2_3"
}
sampleMenus.push(tMenu);
// 路由样例菜单-菜单路由的 二级路由4 的子路由；三级路由
tMenu = {
	pkId:"sample_router_menu_lever2_4_c1", code:"sample_router_menu_lever2_4_c1", name:{"zh-CN":"二级路由-4-c1","en-US":"Second-level-4-c1"}, 
	path:":params", navCode:navCode, funcModuleCode:funcCode,  
	funcName:'routerMenuL2c4c1',
	isIndex:0, exact:false, isFrame:0, isShow:0, icon:"LinkOutlined", sort:1, 
	permission:'', parentId:"sample_router_menu_lever2_4", children:null
}
sampleMenus.push(tMenu);

/********************************************* 业务 example 样例 */
// 业务 example
tMenu = {
    pkId:"sample_example", key:"sample_example", name:{"zh-CN":"业务样例","en-US":"Business Example"}, 
    path:"sampleExample", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'sampleExample',
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"TagsOutlined", sort:1, 
    /* permission:'', */ parentId:null, //children:null
}
sampleMenus.push(tMenu);
// 业务 example 1
tMenu = {
    pkId:"sample_example_1", key:"sample_example_1", name:{"zh-CN":"样例_1","en-US":"Example_1"}, 
    path:"e1", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'e1',
    isIndex:0, exact:true, isFrame:0, isShow:1, icon:"IdcardOutlined", sort:1, 
    /* permission:'', */ parentId:"sample_example", //children:null
}
sampleMenus.push(tMenu);
// 业务 example 1 明细
tMenu = {
    pkId:"sample_example_1_detail", key:"sample_example_1_detail", name:{"zh-CN":"明细-1","en-US":"Detail-1"}, 
    path:"e1Detail_1/:id", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'e1Detail_1',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"IdcardOutlined", sort:120, 
	permission:null, parentId:"sample_example_1", children:null
}
sampleMenus.push(tMenu);
// 业务 example 1 明细 2
tMenu = {
    pkId:"sample_example_1_detail_2", key:"sample_example_1_detail_2", name:{"zh-CN":"明细-2","en-US":"Detail-2"}, 
    path:"e1Detail_2/:id", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'e1Detail_2',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"IdcardOutlined", sort:120, 
	permission:null, parentId:"sample_example_1", children:null
}
sampleMenus.push(tMenu);
// 业务 example 1：新增/修改
tMenu = {
    pkId:"sample_example_1_edit", key:"sample_example_1_edit", name:{"zh-CN":"新增/修改-parent","en-US":"新增/修改-parent"}, 
    path:"e1Edit", navCode:navCode, funcModuleCode:funcCode, 
	// funcName:'e1Edit',
    isIndex:0, exact:true, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:110, 
	permission:null, parentId:"sample_example_1", children:null
}
sampleMenus.push(tMenu);
tMenu = {
    pkId:"sample_example_1_edit_id", key:"sample_example_1_edit_id", name:{"zh-CN":"新增/修改","en-US":"新增/修改"}, 
    path:":id", navCode:navCode, funcModuleCode:funcCode, 
	funcName:'e1Edit',
    isIndex:0, exact:false, isFrame:0, isShow:0, icon:"AntDesignOutlined", sort:10, 
	permission:null, parentId:"sample_example_1_edit", children:null
}
sampleMenus.push(tMenu);

/********************************************* 	zk 组件封装 */
tMenu = {
	pkId:"sample_zk_components", key:"sample_zk_components", name:{"zh-CN":"ZK组件封装","en-US":"ZKComponents"}, 
	path:"zkComponents", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"componentsIndex",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"CodepenOutlined", sort:30, 
	permission:null, parentId:null, children:null
}
sampleMenus.push(tMenu);
/** ------------------------------------- 原生组件封装 */
tMenu = {
	pkId:"sample_zkOriginalComponents", key:"sample_zkOriginalComponents", name:{"zh-CN":"ZK原生封装","en-US":"ZKOriginal"}, 
	path:"original", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalIndex",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"CodepenOutlined", sort:30, 
	permission:null, parentId:"sample_zk_components", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单： ZKAnchor
tMenu = {
	pkId:"sample_zkOriginalComponents_anchor", key:"sample_zkOriginalComponents_anchor", name:{"zh-CN":"ZK锚点","en-US":"ZKAnchor"}, 
	path:"anchor", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalAnchor",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:10, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKButton
tMenu = {
	pkId:"sample_zkOriginalComponents_button", key:"sample_zkOriginalComponents_button", name:{"zh-CN":"ZK按钮","en-US":"ZKButton"}, 
	path:"button", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalButton",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:20, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单： ZKCol
tMenu = {
	pkId:"sample_zkOriginalComponents_col", key:"sample_zkOriginalComponents_col", name:{"zh-CN":"ZK列","en-US":"ZKCol"}, 
	path:"col", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalCol",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:30, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKDatePicker
tMenu = {
	pkId:"sample_zkOriginalComponents_datePicker", key:"sample_zkOriginalComponents_datePicker", name:{"zh-CN":"ZK日期选择","en-US":"ZKDatePicker"}, 
	path:"datePicker", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalDatePicker",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:40, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKForm
tMenu = {
	pkId:"sample_zkOriginalComponents_form", key:"sample_zkOriginalComponents_form", name:{"zh-CN":"ZKForm","en-US":"ZKForm"}, 
	path:"form", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalForm",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:50, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKInput
tMenu = {
	pkId:"sample_zkOriginalComponents_input", key:"sample_zkOriginalComponents_input", name:{"zh-CN":"ZK输入框","en-US":"ZKInput"}, 
	path:"input", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalInput",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:60, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKInputNumber
tMenu = {
	pkId:"sample_zkOriginalComponents_inputNumber", key:"sample_zkOriginalComponents_inputNumber", name:{"zh-CN":"ZK数字输入框","en-US":"ZKInputNumber"}, 
	path:"inputNumber", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalInputNumber",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:70, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKModal
tMenu = {
	pkId:"sample_zkOriginalComponents_modal", key:"sample_zkOriginalComponents_modal", name:{"zh-CN":"ZKModal","en-US":"ZKModal"}, 
	path:"modal", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalModal",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:80, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKPopconfirm
tMenu = {
	pkId:"sample_zkOriginalComponents_popconfirm", key:"sample_zkOriginalComponents_popconfirm", name:{"zh-CN":"ZK确认提示","en-US":"ZKPopconfirm"}, 
	path:"popconfirm", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalPopconfirm",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:90, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单： ZKRadio
tMenu = {
	pkId:"sample_zkOriginalComponents_radio", key:"sample_zkOriginalComponents_radio", name:{"zh-CN":"ZK单选框","en-US":"ZKRadio"}, 
	path:"radio", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalRadio",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:95, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单： ZKRow
tMenu = {
	pkId:"sample_zkOriginalComponents_row", key:"sample_zkOriginalComponents_row", name:{"zh-CN":"ZK行","en-US":"ZKRow"}, 
	path:"row", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalRow",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:100, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKSelect
tMenu = {
	pkId:"sample_zkOriginalComponents_select", key:"sample_zkOriginalComponents_select", name:{"zh-CN":"ZK选择框","en-US":"ZKSelect"}, 
	path:"select", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalSelect",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:110, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKSpin
tMenu = {
	pkId:"sample_zkOriginalComponents_spin", key:"sample_zkOriginalComponents_spin", name:{"zh-CN":"ZK蒙板","en-US":"ZKSpin"}, 
	path:"spin", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalSpin",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:120, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单：ZKTable
tMenu = {
	pkId:"sample_zkOriginalComponents_table", key:"sample_zkOriginalComponents_table", name:{"zh-CN":"ZK表格","en-US":"ZKTable"}, 
	path:"table", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalTable",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:130, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);
// 原生组件封装的子菜单： ZKTransfer
tMenu = {
	pkId:"sample_zkOriginalComponents_transfer", key:"sample_zkOriginalComponents_transfer", name:{"zh-CN":"ZK穿梭框","en-US":"ZKTransfer"}, 
	path:"transfer", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"originalTransfer",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:140, 
	permission:null, parentId:"sample_zkOriginalComponents", children:null
}
sampleMenus.push(tMenu);

/** ------------------------------------- 自定组件 */
tMenu = {
	pkId:"sample_zkCustomComponents", key:"sample_zkCustomComponents", name:{"zh-CN":"ZK自定义组件","en-US":"ZKcustomer"}, 
	path:"customer", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customIndex",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"CodepenOutlined", sort:40, 
	permission:null, parentId:"sample_zk_components", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKAutoMenu
tMenu = {
	pkId:"sample_zkCustomComponents_menu", key:"sample_zkCustomComponents_menu", name:{"zh-CN":"ZK自动菜单","en-US":"ZKAutoMenu"}, 
	path:"menu", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customMenu",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:1, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKAutoTable
tMenu = {
	pkId:"sample_zkCustomComponents_autoTable", key:"sample_zkCustomComponents_autoTable", name:{"zh-CN":"ZK自动表格","en-US":"ZKAutoTable"}, 
	path:"autoTable", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customAutoTable",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:10, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKBreadcrumb
tMenu = {
	pkId:"sample_zkCustomComponents_breadcrumb", key:"sample_zkCustomComponents_breadcrumb", name:{"zh-CN":"ZK面包屑","en-US":"ZKBreadcrumb"}, 
	path:"breadcrumb", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customBreadcrumb",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:20, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKDateFormatPicker
tMenu = {
	pkId:"sample_zkCustomComponents_dateFormatPicker", key:"sample_zkCustomComponents_dateFormatPicker", name:{"zh-CN":"ZK格式化日期","en-US":"ZKDateFormatPicker"}, 
	path:"dateFormatPicker", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customDateFormatPicker",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:30, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKDetailGrid
tMenu = {
	pkId:"sample_zkCustomComponents_detailGrid", key:"sample_zkCustomComponents_detailGrid", name:{"zh-CN":"ZK明细 Grid","en-US":"ZKDetail Grid"}, 
	path:"detailGrid", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customDetailGrid",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:40, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKEditForm
tMenu = {
	pkId:"sample_zkCustomComponents_editForm", key:"sample_zkCustomComponents_editForm", name:{"zh-CN":"ZK编辑Form","en-US":"ZKEditForm"}, 
	path:"editForm", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customEditForm",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:50, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKEditJsonArray
tMenu = {
	pkId:"sample_zkCustomComponents_editJsonArray", key:"sample_zkCustomComponents_editJsonArray", name:{"zh-CN":"ZK编辑JsonArray","en-US":"ZKEditJsonArray"}, 
	path:"editJsonArray", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customEditJsonArray",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:55, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKIcon
tMenu = {
	pkId:"sample_zkCustomComponents_icon", key:"sample_zkCustomComponents_icon", name:{"zh-CN":"ZK图标","en-US":"ZKIcon"}, 
	path:"customIcon", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customIcon",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:59, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKInputJson
tMenu = {
	pkId:"sample_zkCustomComponents_inputJson", key:"sample_zkCustomComponents_inputJson", name:{"zh-CN":"ZK编辑JSON","en-US":"ZKInputJson"}, 
	path:"inputJson", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customInputJson",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:60, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKLanguageSelect
tMenu = {
	pkId:"sample_zkCustomComponents_languageSwitch", key:"sample_zkCustomComponents_languageSwitch", name:{"zh-CN":"ZK语言国际化","en-US":"ZKLanguageSelect"}, 
	path:"languageSelect", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customLanguageSelect",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:70, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKLogo
tMenu = {
	pkId:"sample_zkCustomComponents_logo", key:"sample_zkCustomComponents_logo", name:{"zh-CN":"ZKLogo","en-US":"ZKLogo"}, 
	path:"logo", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customLogo",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:80, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKNavigation
tMenu = {
	pkId:"sample_zkCustomComponents_Navigation", key:"sample_zkCustomComponents_Navigation", name:{"zh-CN":"ZK导航栏","en-US":"ZKNavigation"}, 
	path:"nav", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customNavigation",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:90, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKOptRow
tMenu = {
	pkId:"sample_zkCustomComponents_optRow", key:"sample_zkCustomComponents_optRow", name:{"zh-CN":"ZK操作行","en-US":"ZKOptRow"}, 
	path:"optRow", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customOptRow",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:100, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKPageSelect
tMenu = {
	pkId:"sample_zkCustomComponents_pageSelect", key:"sample_zkCustomComponents_pageSelect", name:{"zh-CN":"ZK下拉分页","en-US":"ZKPageSelect"}, 
	path:"pageSelect", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customPageSelect",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:100, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKPermission
tMenu = {
	pkId:"sample_zkCustomComponents_permission", key:"sample_zkCustomComponents_permission", name:{"zh-CN":"ZK权限","en-US":"ZKPermission"}, 
	path:"permission", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customPermission",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:110, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKRouter
tMenu = {
	pkId:"sample_zkCustomComponents_router", key:"sample_zkCustomComponents_router", name:{"zh-CN":"ZK路由","en-US":"ZKRouter"}, 
	path:"router", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customRouter",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:120, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单： ZKScrollTable
tMenu = {
	pkId:"sample_zkCustomComponents_scrollTable", key:"sample_zkCustomComponents_scrollTable", name:{"zh-CN":"ZK滚动条表格","en-US":"ZKScrollTable"}, 
	path:"scrollTable", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customScrollTable",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:130, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKSearchRow
tMenu = {
	pkId:"sample_zkCustomComponents_searchRow", key:"sample_zkCustomComponents_searchRow", name:{"zh-CN":"ZK查询行","en-US":"ZKSearchRow"}, 
	path:"searchRow", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customSearchRow",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:130, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKSider
tMenu = {
	pkId:"sample_zkCustomComponents_sider", key:"sample_zkCustomComponents_sider", name:{"zh-CN":"ZK滑块","en-US":"ZKSider"}, 
	path:"sider", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customSider",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:140, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKTextEditor
tMenu = {
	pkId:"sample_zkCustomComponents_textEditor", key:"sample_zkCustomComponents_textEditor", name:{"zh-CN":"ZK富文本编辑","en-US":"ZKTextEditor"}, 
	path:"textEditor", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customTextEditor",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:150, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKUpload
tMenu = {
	pkId:"sample_zkCustomComponents_upload", key:"sample_zkCustomComponents_upload", name:{"zh-CN":"ZK上传","en-US":"ZKUpload"}, 
	path:"upload", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customUpload",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:160, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKUserDropDown
tMenu = {
	pkId:"sample_zkCustomComponents_userDropDown", key:"sample_zkCustomComponents_userDropDown", name:{"zh-CN":"ZKUserDropDown","en-US":"ZKUserDropDown"}, 
	path:"userDropDown", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customUserDropDown",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:170, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
// 自定组件的子菜单：ZKVersion
tMenu = {
	pkId:"sample_zkCustomComponents_versionInfo", key:"sample_zkCustomComponents_versionInfo", name:{"zh-CN":"ZKVersionInfo","en-US":"ZKVersionInfo"}, 
	path:"VersionInfo", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"customVersionInfo",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:180, 
	permission:null, parentId:"sample_zkCustomComponents", children:null
}
sampleMenus.push(tMenu);
/** ------------------------------------- exception 组件 */
tMenu = {
	pkId:"sample_zkException", key:"sample_zkException", name:{"zh-CN":"ZK异常组件","en-US":"ZKexception"}, 
	path:"exception", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"exception",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"CodepenOutlined", sort:50, 
	permission:null, parentId:"sample_zk_components", children:null
}
sampleMenus.push(tMenu);
// 403
tMenu = {
	pkId:"sample_zkException_403", key:"sample_zkException_403", name:{"zh-CN":"403","en-US":"403"}, 
	path:"403", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"e403",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:20, 
	permission:null, parentId:"sample_zkException", children:null
}
sampleMenus.push(tMenu);
// 404
tMenu = {
	pkId:"sample_zkException_404", key:"sample_zkException_404", name:{"zh-CN":"404","en-US":"404"}, 
	path:"404", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"e404",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:30, 
	permission:null, parentId:"sample_zkException", children:null
}
sampleMenus.push(tMenu);
// 500
tMenu = {
	pkId:"sample_zkException_500", key:"sample_zkException_500", name:{"zh-CN":"500","en-US":"500"}, 
	path:"500", navCode:navCode, funcModuleCode:funcCode, 
	funcName:"e500",
	isIndex:0, exact:true, isFrame:0, isShow:1, icon:"AntDesignOutlined", sort:40, 
	permission:null, parentId:"sample_zkException", children:null
}
sampleMenus.push(tMenu);

module.exports = {
	menus: sampleMenus,
};