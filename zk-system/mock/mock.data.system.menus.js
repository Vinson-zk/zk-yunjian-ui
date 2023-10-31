/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:02:44
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-04 23:04:46
 */

let navCode = "sys";

let menus = [];
let tMenu;

/*** 系统资源 ***/
tMenu = {
    pkId: "test_SystemResources", code: "test_SystemResources", name: {"en-US": "SystemResources", "zh-CN": "系统资源"},
    path: "sysRes", navCode: navCode, funcModuleCode: "sys",
    funcName: '',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 100,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

/*** 组织结构 ***/
tMenu = {
    pkId: "test_Organizational", code: "test_Organizational", name: {"en-US": "Organizational", "zh-CN": "组织结构"},
    path: "sysOrg", navCode: navCode, funcModuleCode: "sys",
    funcName: '',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 200,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

/*** 系统设置 ***/
tMenu = {
    pkId: "test_SysSettings", code: "test_SysSettings", name: {"en-US": "SysSettings", "zh-CN": "系统设置"},
    path: "sysSettings", navCode: navCode, funcModuleCode: "sys",
    funcName: '',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "SettingOutlined", sort: 800,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

/*** 权限 ***/
tMenu = {
    pkId: "test_Authorization", code: "test_Authorization", name: {"en-US": "Authorization", "zh-CN": "权限"},
    path: "sysAuth", navCode: navCode, funcModuleCode: "sys",
    funcName: '',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "FileProtectOutlined", sort: 800,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

// 权限定义
tMenu = {
    pkId: "test_SysAuthDefined", code: "test_SysAuthDefined", name: {"en-US": "SysAuthDefined", "zh-CN": "权限定义"},
    path: "sysAuthDefined", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysAuthDefinedIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "FileProtectOutlined", sort: 600,
    /* permission:,*/ parentId: 'test_Authorization', //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_SysAuthDefined_Edit", code: "test_SysAuthDefined_Edit", name: {"en-US": "Edit", "zh-CN": "编辑"},
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysAuthDefinedEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "FormOutlined", sort: 600,
    /* permission:,*/ parentId: 'test_SysAuthDefined', //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_SysAuthDefined_Detail", code: "test_SysAuthDefined_Detail", name: {"en-US": "Detail", "zh-CN": "明细"},
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "sys",
    funcName: 'sysAuthDefinedDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "UnorderedListOutlined", sort: 300,
    /* permission:,*/ parentId: 'test_SysAuthDefined', //children:null
}
menus.push(tMenu);


module.exports = {
    menus: menus,
};




