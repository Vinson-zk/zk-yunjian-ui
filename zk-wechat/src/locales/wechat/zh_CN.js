/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-19 22:22:49
 */
import msg_payGetBusinessType from "./msg/pay/payGetBusinessType/zh_CN";
import msg_payGetNotify from "./msg/pay/payGetNotify/zh_CN";
import msg_payGetOrder from "./msg/pay/payGetOrder/zh_CN";
import msg_payGroup from "./msg/pay/payGroup/zh_CN";
import msg_payMerchant from "./msg/pay/payMerchant/zh_CN";

import msg_funckeyConfig from "./msg/platformBusiness/funcKeyConfig/zh_CN";
import msg_funckeyConfigType from "./msg/platformBusiness/funcKeyType/zh_CN";

import msg_thirdParty from "./msg/thirdParty/thirdParty/zh_CN";
import msg_officialAccounts from "./msg/officialAccounts/accounts/zh_CN";
import msg_officialAccountsUser from "./msg/officialAccounts/user/zh_CN";
import msg_officialAccountsUserGps from "./msg/officialAccounts/userGps/zh_CN";

export default {
    projectName: "zk-微信平台",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
    	...msg_funckeyConfig, ...msg_funckeyConfigType,
    	...msg_payGetBusinessType, ...msg_payGetNotify, ...msg_payGetOrder, ...msg_payGroup, ...msg_payMerchant,
    	...msg_thirdParty, ...msg_officialAccounts, ...msg_officialAccountsUser, ...msg_officialAccountsUserGps
    }
}