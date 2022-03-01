/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-04 15:32:44
 */
import msg_payGetBusinessType from "./msg/pay/payGetBusinessType/en_US";
import msg_payGetNotify from "./msg/pay/payGetNotify/en_US";
import msg_payGetOrder from "./msg/pay/payGetOrder/en_US";
import msg_payGroup from "./msg/pay/payGroup/en_US";
import msg_payMerchant from "./msg/pay/payMerchant/en_US";

import msg_thirdParty from "./msg/thirdParty/thirdParty/en_US";
import msg_thirdPartyAuthAccount from "./msg/thirdParty/thirdPartyAuthAccount/en_US";
import msg_thirdPartyAuthAccountUser from "./msg/thirdParty/thirdPartyAuthAccountUser/en_US";
import msg_thirdPartyAuthAccountUserGps from "./msg/thirdParty/thirdPartyAuthAccountUserGps/en_US";

export default {
    projectName: "zkWechat",
    name: "English",
    locale: "en-US",
    messages: {
    	...msg_payGetBusinessType, ...msg_payGetNotify, ...msg_payGetOrder, ...msg_payGroup, ...msg_payMerchant,
    	...msg_thirdParty, ...msg_thirdPartyAuthAccount, ...msg_thirdPartyAuthAccountUser, ...msg_thirdPartyAuthAccountUserGps
    }
}