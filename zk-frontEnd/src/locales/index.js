/**
 *
 * @Author: Vinson
 * @Date: 2020-08-23 22:53:23
 * @Last Modified by: vinson
 * @Last Modified time: 2025-01-08 15:58:03
 */

import { locales as zkFrameworkLocales, zkTools } from 'zkFramework'; 
import { locales as sampleLocales } from 'zkSample';
import { locales as sysLocales } from 'zkSystem';
import { locales as developmentToolLocales } from 'zkDevelopmentTool';
import { locales as wechatLocales } from 'zkWechat';
import { locales as mailLocales } from 'zkMail';
import { locales as fileLocales } from 'zkFile';
import { locales as iotLocales } from 'zkIot';
import frontEndLocales from '../locales/frontEnd/index.js';

import enLocaleData from "react-intl/locale-data/en";
import zhLocaleData from "react-intl/locale-data/zh";

import enAntd from "antd/locale/en_US";
import zhAntd from "antd/locale/zh_CN";
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
localDatas.push(frontEndLocales);
localDatas.push(sysLocales);
localDatas.push(developmentToolLocales);
localDatas.push(zkFrameworkLocales);
localDatas.push(sampleLocales);
localDatas.push(wechatLocales);
localDatas.push(mailLocales);
localDatas.push(fileLocales);
localDatas.push(iotLocales);

locals = zkTools.zkToolsMsg.mergeLocalMsgs(localDatas);
// console.log("[^_^: 20200810-0907-001] locals: ", locals);

export default locals;

