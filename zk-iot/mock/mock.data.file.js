/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 14:51:20
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 15:34:31
*/


let navCode = "iot";
let funcModuleCode = "iot";

let menus = [];
let tMenu;

// 菜单 -----------------------------------------------
tMenu = {
    pkId: "test.iot_nav_index", code: "test.iot_nav_index", name: { "zh-CN": "Iot物联平台", "en-US": "Iot" },
    path: "iot", navCode: navCode, funcModuleCode: funcModuleCode, funcName: 'iotIndex',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "FolderOpenOutlined", sort: 1000,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);


module.exports = {
    menus: menus,
};


