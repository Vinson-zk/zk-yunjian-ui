/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-04 15:33:07
 */
import msg_payGetBusinessType from "./msg/pay/payGetBusinessType/zh_CN";
import msg_payGetNotify from "./msg/pay/payGetNotify/zh_CN";
import msg_payGetOrder from "./msg/pay/payGetOrder/zh_CN";
import msg_payGroup from "./msg/pay/payGroup/zh_CN";
import msg_payMerchant from "./msg/pay/payMerchant/zh_CN";

import msg_thirdParty from "./msg/thirdParty/thirdParty/zh_CN";
import msg_thirdPartyAuthAccount from "./msg/thirdParty/thirdPartyAuthAccount/zh_CN";
import msg_thirdPartyAuthAccountUser from "./msg/thirdParty/thirdPartyAuthAccountUser/zh_CN";
import msg_thirdPartyAuthAccountUserGps from "./msg/thirdParty/thirdPartyAuthAccountUserGps/zh_CN";

export default {
    projectName: "zk-微信平台",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
    	...msg_payGetBusinessType, ...msg_payGetNotify, ...msg_payGetOrder, ...msg_payGroup, ...msg_payMerchant,
    	...msg_thirdParty, ...msg_thirdPartyAuthAccount, ...msg_thirdPartyAuthAccountUser, ...msg_thirdPartyAuthAccountUserGps
    }
}