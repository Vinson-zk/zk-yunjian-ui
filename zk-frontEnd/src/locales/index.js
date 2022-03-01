/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:53:23
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 10:19:57
 */

import { locales as zkFrameworkLocales, zkTools } from 'zkFramework'; 
import { locales as sampleLocales } from 'zkSample';
import { locales as sysLocales } from 'zkSystem';
import { locales as developmentToolLocales } from 'zkDevelopmentTool';
import { locales as wechatLocales } from 'zkWechat';
import frontEndLocales from '../modules/locales/index.js';

import enLocaleData from "react-intl/locale-data/en";
import enAntd from "antd/lib/locale-provider/en_US";
import zhLocaleData from "react-intl/locale-data/zh";
import zhAntd from "antd/lib/locale-provider/zh_CN";

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
localDatas.push(frontEndLocales);
localDatas.push(sysLocales);
localDatas.push(developmentToolLocales);
localDatas.push(zkFrameworkLocales);
localDatas.push(sampleLocales);
localDatas.push(wechatLocales);

locals = zkTools.zkToolsMsg.mergeLocalMsgs(localDatas);
// console.log("[^_^: 20200810-0907-001] locals: ", locals);

export default locals;

