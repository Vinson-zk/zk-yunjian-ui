/**
 * 定义混合导航栏下的菜单，就不通 service 取了
 * @Author: Vinson
 * @Date: 2020-08-12 16:28:57
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 14:23:37
 */

import zkJsUtils from "zkJsUtils";

let menus = [];
let tMenu;
let navCodeBlend = "blend";

/***  ***/
tMenu = {
    pkId: "blend_func_home", code: "blend_func_home", name: { "zh-CN": "混合功能", "en-US": "BlendFunc" },
    path: "home", navCode: navCodeBlend, funcModuleCode: navCodeBlend,
    funcName: 'home',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "TagsOutlined", sort: 5,
	/* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "blend_func_ExternalFunc", code: "blend_func_ExternalFunc", name: { "zh-CN": "外部打包功能", "en-US": "ExternalFunc" },
    path: "externalFunc", navCode: navCodeBlend, funcModuleCode: "sample",
    funcName: 'home',
    isIndex: 0, exact: true, isFrame: 1, isShow: 1, icon: "TagsOutlined", sort: 5,
	/* permission:,*/ parentId: "blend_func_home", //children:null
}
menus.push(tMenu);

/*** test = "test"; 菜单 ***/
tMenu = {
    pkId:"test_home", code:"test_home", name:{"zh-CN":"试试","en-US":"TyeHome"}, 
    path:"testHome", navCode:navCodeBlend, funcModuleCode:navCodeBlend, 
    funcName:"testHome",  // 功能模块下唯一
    isIndex:1, exact:true, isFrame:0, isShow:1, icon:"TagsOutlined", sort:1, 
    /* permission:,*/ parentId:null, //children:null
}
menus.push(tMenu);
// css
tMenu = {
    pkId:"test_css", code:"test_css", name:{"zh-CN":"Css","en-US":"Css"}, 
    path:"css", navCode:navCodeBlend, funcModuleCode:navCodeBlend, 
    funcName:"testCss",  
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"TagsOutlined", sort:100, 
    /* permission:,*/ parentId:"test_home", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId:"test_css_value", code:"test_css_value", name:{"zh-CN":"Css-Value","en-US":"Css-Value"}, 
    path:"cssValue", navCode:navCodeBlend, funcModuleCode:navCodeBlend, 
    funcName:"testCssValue", 
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"TagsOutlined", sort:110, 
    /* permission:,*/ parentId:"test_home", //children:null
}
menus.push(tMenu);
// anchor
tMenu = {
    pkId:"test_anchor", key:"test_anchor", name:{"zh-CN":"Anchor","en-US":"Anchor"}, 
    path:"anchor", navCode:navCodeBlend, funcModuleCode:navCodeBlend, 
    funcName:"testAnchor", 
    isIndex:0, exact:true, isFrame:0, isShow:1, icon:"TagsOutlined", sort:110, 
    /* permission:,*/ parentId:"test_home", //children:null
}
menus.push(tMenu);


/**************************************************** */
menus = zkJsUtils.makeTree(menus, null);
menus = zkJsUtils.sort(menus, -1);

export default menus;
