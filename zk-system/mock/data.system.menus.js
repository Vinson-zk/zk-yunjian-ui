/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:02:44
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 20:10:50
 */

let navCode = "sys";

let menus = [];
let tMenu;

tMenu = {
    pkId: "test_SystemResources", code: "test_SystemResources", name: { "zh-CN": "系统资源", "en-US": "SystemResources" },
    path: "sysRes", navCode: navCode, funcModuleCode: "sys",
    funcName: '',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 300,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

/*** 业务功能-导航栏 ***/
tMenu = {
    pkId: "test_sysNav", code: "test_sysNav", name: { "zh-CN": "导航栏目", "en-US": "Navigation" },
    path: "sysNav", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysNavIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 300,
	/* permission:,*/ parentId: "test_SystemResources", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_sysNav_detail", code: "test_sysNav_detail", name: { "zh-CN": "栏目明细", "en-US": "Navigation-detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysNavDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_sysNav", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_sysNav_edit", code: "test_sysNav_edit", name: { "zh-CN": "栏目编辑", "en-US": "Navigation-edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysNavEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_sysNav", //children:null
}
menus.push(tMenu);

/*** 业务功能-菜单 ***/
tMenu = {
    pkId: "test_sysMenu", code: "test_sysMenu", name: { "zh-CN": "菜单", "en-US": "Menu" },
    path: "sysMenu", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysMenuIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 500,
	/* permission:,*/ parentId: "test_SystemResources", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_sysMenu_detail", code: "test_sysMenu_detail", name: { "zh-CN": "菜单明细", "en-US": "Menu-detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysMenuDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_sysMenu", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_sysMenu_edit", code: "test_sysMenu_edit", name: { "zh-CN": "菜单编辑", "en-US": "Menu-edit" },
    path: "edit/:parentId/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysMenuEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_sysMenu", //children:null
}
menus.push(tMenu);

/*** 菜单 - 生成测试的静态菜单  ***/
tMenu = {
    pkId: "test_SysApplicationSystem", code: "SysApplicationSystem", name: { "zh-CN": "应用系统", "en-US": "SysApplicationSystem" },
    path: "sysApplicationSystem", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysApplicationSystemIndex',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "AppstoreAddOutlined", sort: 300,
    /* permission:,*/ parentId: "test_SystemResources", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_SysApplicationSystem_detail", code: "SysApplicationSystem_detail", name: { "zh-CN": "应用系统明细", "en-US": "SysApplicationSystem-detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysApplicationSystemDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_SysApplicationSystem", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_SysApplicationSystem_edit", code: "SysApplicationSystem_edit", name: { "zh-CN": "应用系统编辑", "en-US": "SysApplicationSystem-edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysApplicationSystemEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_SysApplicationSystem", //children:null
}
menus.push(tMenu);



module.exports = {
	menus: menus,
};

