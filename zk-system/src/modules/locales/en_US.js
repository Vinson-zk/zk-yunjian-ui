/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-26 17:00:47
 */

import sysNav from "./msg/res/sysNav/en_US";
import sysMenu from "./msg/res/sysMenu/en_US";

import msg_sysResDictType from "./msg/res/sysResDictType/en_US";
import msg_sysResDict from "./msg/res/sysResDict/en_US";
import msg_sysResApplicationSystem from "./msg/res/sysResApplicationSystem/en_US";
import msg_sysResRequestChannel from "./msg/res/sysResRequestChannel/en_US";
import msg_sysResFuncApi from "./msg/res/sysResFuncApi/en_US";

import msg_sysSetItem from "./msg/settings/sysSetItem/en_US";

export default {
    projectName: "zkSystem",
    name: "English",
    locale: "en-US",
    messages: {
        ...sysNav, ...sysMenu,
        ...msg_sysResDictType, ...msg_sysResDict, ...msg_sysResFuncApi, ...msg_sysResApplicationSystem, ...msg_sysResRequestChannel,
        ...msg_sysSetItem
    }
}