/**
 *
 * @Author: Vinson
 * @Date: 2020-08-28 15:02:44
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-04 16:31:57
 */

let navCode = "wechat";

let menus = [];
let tMenu;

/******** 微信开放平台的第三方开发者 */
tMenu = {
    pkId: "test_ThirdParty", code: "test_ThirdParty", name: { "zh-CN": "第三方平台", "en-US": "Thrid Party" },
    path: "thridParty", navCode: navCode, funcModuleCode: "wechat",
    funcName: '',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 300,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_ThirdParty_account", code: "test_ThirdParty_account", name: { "zh-CN": "第三方平台账号", "en-US": "ThirdParty" },
    path: "thirdParty", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "IdcardOutlined", sort: 300,
    /* permission:,*/ parentId: "test_ThirdParty", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_ThirdParty_detail", code: "ThirdParty_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_ThirdParty_account", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_ThirdParty_edit", code: "ThirdParty_edit", name: { "zh-CN": "编辑", "en-US": "Edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_ThirdParty_account", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_ThirdPartyAuthAccount", code: "ThirdPartyAuthAccount", name: { "zh-CN": "目标授权方", "en-US": "ThirdPartyAuthAccount" },
    path: "thirdPartyAuthAccount", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "ContactsOutlined", sort: 300,
    /* permission:,*/ parentId: "test_ThirdParty", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_ThirdPartyAuthAccount_detail", code: "ThirdPartyAuthAccount_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_ThirdPartyAuthAccount", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_ThirdPartyAuthAccountUser", code: "ThirdPartyAuthAccountUser", name: { "zh-CN": "目标授权方用户", "en-US": "ThirdPartyAuthAccountUser" },
    path: "thirdPartyAuthAccountUser", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountUserIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "UserOutlined", sort: 300,
    /* permission:,*/ parentId: "test_ThirdParty", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_ThirdPartyAuthAccountUser_detail", code: "ThirdPartyAuthAccountUser_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountUserDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_ThirdPartyAuthAccountUser", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_ThirdPartyAuthAccountUserGps", code: "ThirdPartyAuthAccountUserGps", name: { "zh-CN": "用户地理位置", "en-US": "ThirdPartyAuthAccountUserGps" },
    path: "thirdPartyAuthAccountUserGps", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountUserGpsIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "EnvironmentOutlined", sort: 300,
    /* permission:,*/ parentId: "test_ThirdParty", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_ThirdPartyAuthAccountUserGps_detail", code: "ThirdPartyAuthAccountUserGps_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'thirdPartyAuthAccountUserGpsDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
    /* permission:,*/ parentId: "test_ThirdPartyAuthAccountUserGps", //children:null
}
menus.push(tMenu);

/******** 微信支付 */
tMenu = {
    pkId: "test_pay", code: "test_pay", name: { "zh-CN": "微信支付", "en-US": "Wechatt Pay" },
    path: "pay", navCode: navCode, funcModuleCode: "wechat",
    funcName: '',
    isIndex: 1, exact: true, isFrame: 0, isShow: 1, icon: "ShareAltOutlined", sort: 300,
    /* permission:,*/ parentId: null, //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_PayGetBusinessType", code: "PayGetBusinessType", name: { "zh-CN": "支付业务类型", "en-US": "PayGetBusinessType" },
    path: "payGetBusinessType", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetBusinessTypeIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "ApartmentOutlined", sort: 300,
	/* permission:,*/ parentId: "test_pay", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGetBusinessType_detail", code: "PayGetBusinessType_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetBusinessTypeDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGetBusinessType", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGetBusinessType_edit", code: "PayGetBusinessType_edit", name: { "zh-CN": "编辑", "en-US": "Edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetBusinessTypeEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGetBusinessType", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_PayGetNotify", code: "PayGetNotify", name: { "zh-CN": "支付结果通知", "en-US": "PayGetNotify" },
    path: "payGetNotify", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetNotifyIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "NotificationOutlined", sort: 300,
	/* permission:,*/ parentId: "test_pay", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGetNotify_detail", code: "PayGetNotify_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetNotifyDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGetNotify", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_PayGetOrder", code: "PayGetOrder", name: { "zh-CN": "支付记录", "en-US": "PayGetOrder" },
    path: "payGetOrder", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetOrderIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "BarsOutlined", sort: 300,
	/* permission:,*/ parentId: "test_pay", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGetOrder_detail", code: "PayGetOrder_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGetOrderDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGetOrder", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_PayGroup", code: "PayGroup", name: { "zh-CN": "支付关系组", "en-US": "PayGroup" },
    path: "payGroup", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGroupIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "LinkOutlined", sort: 300,
	/* permission:,*/ parentId: "test_pay", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGroup_detail", code: "PayGroup_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGroupDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGroup", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayGroup_edit", code: "PayGroup_edit", name: { "zh-CN": "编辑", "en-US": "Edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payGroupEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayGroup", //children:null
}
menus.push(tMenu);

tMenu = {
    pkId: "test_PayMerchant", code: "PayMerchant", name: { "zh-CN": "商户号", "en-US": "PayMerchant" },
    path: "payMerchant", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payMerchantIndex',
    isIndex: 0, exact: true, isFrame: 0, isShow: 1, icon: "GoldOutlined", sort: 300,
	/* permission:,*/ parentId: "test_pay", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayMerchant_detail", code: "PayMerchant_detail", name: { "zh-CN": "明细", "en-US": "Detail" },
    path: "detail/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payMerchantDetail',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayMerchant", //children:null
}
menus.push(tMenu);
tMenu = {
    pkId: "test_PayMerchant_edit", code: "PayMerchant_edit", name: { "zh-CN": "编辑", "en-US": "Edit" },
    path: "edit/:pkId", navCode: navCode, funcModuleCode: "wechat",
    funcName: 'payMerchantEdit',
    isIndex: 0, exact: false, isFrame: 0, isShow: 0, icon: "ToolOutlined", sort: 0,
	/* permission:,*/ parentId: "test_PayMerchant", //children:null
}
menus.push(tMenu);




module.exports = {
	menus: menus,
};

