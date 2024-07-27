/*
 * @Author: Vinson 
 * @Date: 2020-08-06 16:45:45 
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-18 17:00:56
 */

import zhLocaleData from "react-intl/locale-data/zh";

import zhAntd from "antd/locale/zh_CN";
import zhDayjs from 'dayjs/locale/zh-cn';

export default {
    projectName: "样例",
    name: "简体中文",
    locale: "zh-CN",
    localeData: zhLocaleData,
    antd: { ...zhAntd, ...zhDayjs},
    messages: {

    }
}