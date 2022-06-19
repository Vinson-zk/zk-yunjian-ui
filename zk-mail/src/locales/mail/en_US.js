/*
* @Author: Vinson-zk
* @Date:   2022-05-25 14:20:59
* @Last Modified by:   Vinson-zk
* @Last Modified time: 2022-05-25 14:23:51
*/

import msg_mailType from "./msg/mailType/en_US";
import msg_mailTemplate from "./msg/mailTemplate/en_US";
import msg_mailSendHistory from "./msg/mailSendHistory/en_US";

export default {
    projectName: "zkMail",
    name: "English",
    locale: "en-US",
    messages: {
    	...msg_mailType, ...msg_mailTemplate, ...msg_mailSendHistory
    }
}

