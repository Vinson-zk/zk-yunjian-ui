/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:32 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-06 10:39:23
 */
import zhLocaleData from "react-intl/locale-data/zh"

import zhAntd from "antd/locale/zh_CN";

import zh_CN_msg from "./msgs/zh_CN";
import icon_zh_CN_msg from "./msgs/icon/zh_CN";
import editJsonArray_zh_CN_msg from "./msgs/zk-editJsonArray/zh_CN";

export default {
	projectName: "zkFramework",
	name: "简体中文",
	locale: "zh-CN",
	localeData: zhLocaleData,
	antd: zhAntd,
	messages: { ...zh_CN_msg, ...icon_zh_CN_msg, ...editJsonArray_zh_CN_msg }
}
