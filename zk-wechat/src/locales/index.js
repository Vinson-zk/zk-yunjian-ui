/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:53:23
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-06 10:08:32
 */

import { locales as zkFrameworkLocales, zkTools } from 'zkFramework'; 
import wechatLocales from './wechat/index.js';

import enLocaleData from "react-intl/locale-data/en";
import zhLocaleData from "react-intl/locale-data/zh";

import enAntd from "antd/lib/locale-provider/en_US";
import zhAntd from "antd/lib/locale-provider/zh_CN";
// import enAntd from "antd/locale/en_US";
// import zhAntd from "antd/locale/zh_CN";


// console.log("[^_^: 20200807-1505-001] zkFrameworkLocales: ", zkFrameworkLocales);

let locals = {
    "zh-CN":{
        localeData: zhLocaleData,
        antd: zhAntd,
    },
    "en-US":{
        localeData: enLocaleData,
        antd: enAntd,
    }
};

let localDatas = [];
localDatas.push(locals);
localDatas.push(wechatLocales);
localDatas.push(zkFrameworkLocales);

locals = zkTools.zkToolsMsg.mergeLocalMsgs(localDatas);
// console.log("[^_^: 20200810-0907-001] locals: ", locals);

export default locals;

