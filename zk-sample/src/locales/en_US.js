/*
 * @Author: Vinson 
 * @Date: 2020-08-06 16:47:04 
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-18 17:02:37
 */
import enLocaleData from "react-intl/locale-data/en";

import enAntd from "antd/locale/en_US";
import enDayjs from 'dayjs/locale/en';

export default {
    projectName: "sample",
    name: "English",
    locale: "en-US",
    localeData: enLocaleData,
    antd: { ...enAntd, ...enDayjs},
    messages: {

    }
}