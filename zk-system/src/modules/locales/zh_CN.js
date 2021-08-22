/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 14:50:16
 */

import sysNav from "./msg/res/sysNav/zh_CN";
import sysMenu from "./msg/res/sysMenu/zh_CN";

import msg_sysApplicationSystem from "./msg/res/sysApplicationSystem/zh_CN";

export default {
    projectName: "zkSystem",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
        ...sysNav, ...sysMenu, ...msg_sysApplicationSystem
    }
}