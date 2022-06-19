/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-19 22:22:26
 */
import msg_payGetBusinessType from "./msg/pay/payGetBusinessType/en_US";
import msg_payGetNotify from "./msg/pay/payGetNotify/en_US";
import msg_payGetOrder from "./msg/pay/payGetOrder/en_US";
import msg_payGroup from "./msg/pay/payGroup/en_US";
import msg_payMerchant from "./msg/pay/payMerchant/en_US";

import msg_funckeyConfig from "./msg/platformBusiness/funcKeyConfig/en_US";
import msg_funckeyConfigType from "./msg/platformBusiness/funcKeyType/en_US";

import msg_thirdParty from "./msg/thirdParty/thirdParty/en_US";
import msg_officialAccounts from "./msg/officialAccounts/accounts/en_US";
import msg_officialAccountsUser from "./msg/officialAccounts/user/en_US";
import msg_officialAccountsUserGps from "./msg/officialAccounts/userGps/en_US";

export default {
    projectName: "zkWechat",
    name: "English",
    locale: "en-US",
    messages: {
    	...msg_funckeyConfig, ...msg_funckeyConfigType,
    	...msg_payGetBusinessType, ...msg_payGetNotify, ...msg_payGetOrder, ...msg_payGroup, ...msg_payMerchant,
    	...msg_thirdParty, ...msg_officialAccounts, ...msg_officialAccountsUser, ...msg_officialAccountsUserGps
    }
}