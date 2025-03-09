/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:32 
 * @Last Modified by: vinson
 * @Last Modified time: 2025-01-20 11:00:10
 */
import zhLocaleData from "react-intl/locale-data/zh"

import zhAntd from "antd/locale/zh_CN";

import zh_CN_msg from "./msgs/zh_CN";
import icon_zh_CN_msg from "./msgs/icon/zh_CN";
import editJsonArray_zh_CN_msg from "./msgs/zk-editJsonArray/zh_CN";
import upload_zh_CN_msg from "./msgs/zk-upload/zh_CN";

export default {
	projectName: "zkFramework",
	name: "简体中文",
	locale: "zh-CN",
	localeData: zhLocaleData,
	antd: zhAntd,
	messages: { ...zh_CN_msg, ...icon_zh_CN_msg, ...editJsonArray_zh_CN_msg, ...upload_zh_CN_msg }
}
