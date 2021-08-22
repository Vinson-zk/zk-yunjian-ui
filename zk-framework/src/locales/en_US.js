/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:24 
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-26 13:26:27
 */
import enLocaleData from "react-intl/locale-data/en";
import antd from "antd/lib/locale-provider/en_US";

import en_US_msg from "./msgs/en_US";
import icon_en_US_msg from "./msgs/icon/en_US";

export default {
	projectName: "zkFramework",
	name: "English",
	locale: "en-US",
	localeData: enLocaleData,
	antd: antd,
	messages: { ...en_US_msg, ...icon_en_US_msg }
}