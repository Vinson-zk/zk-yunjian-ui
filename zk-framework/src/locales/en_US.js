/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:24 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-06 10:34:35
 */
import enLocaleData from "react-intl/locale-data/en";

import enAntd from "antd/locale/en_US";

import en_US_msg from "./msgs/en_US";
import icon_en_US_msg from "./msgs/icon/en_US";
import editJsonArray_en_US_msg from "./msgs/zk-editJsonArray/en_US";

export default {
	projectName: "zkFramework",
	name: "English",
	locale: "en-US",
	localeData: enLocaleData,
	antd: enAntd,
	messages: { ...en_US_msg, ...icon_en_US_msg, ...editJsonArray_en_US_msg }
}