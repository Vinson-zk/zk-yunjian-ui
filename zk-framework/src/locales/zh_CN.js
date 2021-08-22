/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:32 
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-26 13:26:41
 */
import zhLocaleData from "react-intl/locale-data/zh"
import antd from "antd/lib/locale-provider/zh_CN"

import zh_CN_msg from "./msgs/zh_CN";
import icon_zh_CN_msg from "./msgs/icon/zh_CN";

export default {
	projectName: "zkFramework",
	name: "简体中文",
	locale: "zh-CN",
	localeData: zhLocaleData,
	antd: antd,
	messages: { ...zh_CN_msg, ...icon_zh_CN_msg }
}
