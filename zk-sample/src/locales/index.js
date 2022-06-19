/*
 * @Author: Vinson 
 * @Date: 2020-08-06 16:45:31 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-25 19:03:20
 */

// 相关依赖的国际化信息
import { locales as zkFrameworkLocales, zkTools } from 'zkFramework'; 
// console.log("[^_^: 20200807-1505-001] zkFrameworkLocales: ", zkFrameworkLocales);
import sampleLocales from "./sample/index.js";
import zh_CN from './zh_CN';
import en_US from './en_US';

let locals = {};
locals[zh_CN.locale] = zh_CN;
locals[en_US.locale] = en_US;

/*** 组合 国际化信息 */
let localDatas = [];
// 以 sample 模块下的国际化信息为主体国际化信息
localDatas.push(sampleLocales);
localDatas.push(locals);
localDatas.push(zkFrameworkLocales);

locals = zkTools.zkToolsMsg.mergeLocalMsgs(localDatas);
// console.log("[^_^: 20200810-0907-001] locals: ", locals);

export default locals;