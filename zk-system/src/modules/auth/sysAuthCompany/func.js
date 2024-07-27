/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:50:03
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 20:18:04
*/
import cSysAuthCompanyIndex from "./index.js";
import mSysAuthCompany from "./model.js";

const sysAuthCompanyIndex = { onEnter: undefined, component: cSysAuthCompanyIndex, models: [mSysAuthCompany] };

export {
	sysAuthCompanyIndex, 
}