/*
* @Author: Vinson
* @Date:   2023-05-29 00:22:32
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 16:05:59
*/

const mockDataNavs = require('./mock.data.sample.navs.js');

let blendMenus = [];
const navCodeBlend = mockDataNavs.navCodeBlend;

let tMenu = null;

/***  ***/
tMenu = {
    pkId: "blend_func_home", code: "blend_func_home", name: { "zh-CN": "混合功能", "en-US": "BlendFunc" },
    path: "home", navCode: navCodeBlend, funcModuleCode: navCodeBlend, funcName: 'home',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "TagsOutlined", sort: 5,
	/* permission:,*/ parentId: null, //children:null
}
blendMenus.push(tMenu);

tMenu = {
    pkId: "blend_func_ExternalFunc", code: "blend_func_ExternalFunc", name: { "zh-CN": "外部打包功能", "en-US": "ExternalFunc" },
    path: "externalFunc", navCode: navCodeBlend, funcModuleCode: mockDataNavs.navCodeSample, funcName: 'home',
    isIndex: 0, exact: true, isFrame: 1, isShow: 1, icon: "TagsOutlined", sort: 5,
	/* permission:,*/ parentId: "blend_func_home", //children:null
}
blendMenus.push(tMenu);

/*** test = "test"; 菜单 ***/
tMenu = {
    pkId:"test_home", code:"test_home", name:{"zh-CN":"试试","en-US":"TyeHome"}, 
    path:"testHome", navCode: navCodeBlend, funcModuleCode: navCodeBlend, funcName: "testHome",  // 功能模块下唯一
    isIndex:1, exact:true, isFrame:0, isShow:1, icon:"TagsOutlined", sort:1, 
    /* permission:,*/ parentId: null, //children:null
}
blendMenus.push(tMenu);
// css
tMenu = {
    pkId:"test_css", code:"test_css", name:{"zh-CN":"Css","en-US":"Css"}, 
    path:"css", navCode: navCodeBlend, funcModuleCode: navCodeBlend, funcName: "testCss",  
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"TagsOutlined", sort:100, 
    /* permission:,*/ parentId:"test_home", //children:null
}
blendMenus.push(tMenu);
tMenu = {
    pkId:"test_css_value", code:"test_css_value", name:{"zh-CN":"Css-Value","en-US":"Css-Value"}, 
    path:"cssValue", navCode: navCodeBlend, funcModuleCode: navCodeBlend, funcName: "testCssValue", 
    isIndex:0, exact:true, isFrame:1, isShow:1, icon:"TagsOutlined", sort:110, 
    /* permission:,*/ parentId:"test_home", //children:null
}
blendMenus.push(tMenu);
// anchor
tMenu = {
    pkId:"test_anchor", key:"test_anchor", name:{"zh-CN":"Anchor","en-US":"Anchor"}, 
    path:"anchor", navCode: navCodeBlend, funcModuleCode: navCodeBlend, funcName: "testAnchor", 
    isIndex:0, exact:true, isFrame:0, isShow:1, icon:"TagsOutlined", sort:110, 
    /* permission:,*/ parentId:"test_home", //children:null
}
blendMenus.push(tMenu);

export default blendMenus;

