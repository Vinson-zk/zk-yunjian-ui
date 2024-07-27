/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:53:23
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 22:58:31
 */

import { locales as zkFrameworkLocales, zkTools } from 'zkFramework'; 
import { locales as sampleLocales} from 'zkSample';
import sysLocales from './sys/index.js';

import zhLocaleData from "react-intl/locale-data/zh";
import enLocaleData from "react-intl/locale-data/en";

import zhAntd from "antd/locale/zh_CN";
import enAntd from "antd/locale/en_US";
import zhDayjs from 'dayjs/locale/zh-cn';
import enDayjs from 'dayjs/locale/en';

// console.log("[^_^: 20200807-1505-001] zkFrameworkLocales: ", zkFrameworkLocales);

let locals = {
    "zh-CN":{
        localeData: zhLocaleData,
        antd: {...zhAntd, ...zhDayjs}, 
    },
    "en-US":{
        localeData: enLocaleData,
        antd: {...enAntd, ...enDayjs},
    }
};

let localDatas = [];
localDatas.push(locals);
localDatas.push(sysLocales);
localDatas.push(zkFrameworkLocales);
localDatas.push(sampleLocales);

locals = zkTools.zkToolsMsg.mergeLocalMsgs(localDatas);
// console.log("[^_^: 20200810-0907-001] locals: ", locals);

export default locals;

