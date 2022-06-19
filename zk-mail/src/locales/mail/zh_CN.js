/*
* @Author: Vinson-zk
* @Date:   2022-05-25 14:21:08
* @Last Modified by:   Vinson-zk
* @Last Modified time: 2022-05-25 14:45:33
*/

import msg_mailType from "./msg/mailType/zh_CN";
import msg_mailTemplate from "./msg/mailTemplate/zh_CN";
import msg_mailSendHistory from "./msg/mailSendHistory/zh_CN";

export default {
    projectName: "zk-邮件服务",
    name: "简体中文",
    locale: "zh-CN",
    messages: {
    	...msg_mailType, ...msg_mailTemplate, ...msg_mailSendHistory
    }
}

