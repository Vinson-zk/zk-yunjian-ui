/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-26 17:01:16
 */

import sysNav from "./msg/res/sysNav/zh_CN";
import sysMenu from "./msg/res/sysMenu/zh_CN";

import msg_sysResDictType from "./msg/res/sysResDictType/zh_CN";
import msg_sysResDict from "./msg/res/sysResDict/zh_CN";
import msg_sysResApplicationSystem from "./msg/res/sysResApplicationSystem/zh_CN";
import msg_sysResRequestChannel from "./msg/res/sysResRequestChannel/zh_CN";
import msg_sysResFuncApi from "./msg/res/sysResFuncApi/zh_CN";

import msg_sysSetItem from "./msg/settings/sysSetItem/zh_CN";

export default {
    projectName: "zkSystem",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
        ...sysNav, ...sysMenu,
        ...msg_sysResDictType, ...msg_sysResDict, ...msg_sysResFuncApi, ...msg_sysResApplicationSystem, ...msg_sysResRequestChannel,
        ...msg_sysSetItem
    }
}