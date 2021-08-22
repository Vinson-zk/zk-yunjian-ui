/*
 * @Author: Vinson 
 * @Date: 2020-08-07 10:52:15 
 * @Last Modified by: Vinson
 * @Last Modified time: 2021-02-16 20:33:51
 */
import zh_CN from './zh_CN';
import en_US from './en_US';

let localLanguage = {};
localLanguage[zh_CN.locale] = zh_CN;
localLanguage[en_US.locale] = en_US;

// module.exports = {
export default localLanguage;