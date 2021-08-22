/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-08-21 14:50:09
 */

import sysNav from "./msg/res/sysNav/en_US";
import sysMenu from "./msg/res/sysMenu/en_US";

import msg_sysApplicationSystem from "./msg/res/sysApplicationSystem/en_US";

export default {
    projectName: "zkSystem",
    name: "English",
    locale: "en-US",
    messages: {
        ...sysNav, ...sysMenu, ...msg_sysApplicationSystem
    }
}