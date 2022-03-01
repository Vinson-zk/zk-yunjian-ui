/*
* @Author: Vinson
* @Date:   2021-11-03 13:55:57
* @Last Modified by:   Vinson
* @Last Modified time: 2021-11-03 13:58:13
* 
* 
* 
*/

import cSysNavIndex from "./index.js";
import mSysNav from "./model.js";
import cSysNavDetail from "./detail.js";
import cSysNavEdit from "./edit.js";
const sysNavIndex = { onEnter:undefined, component:cSysNavIndex, models:[mSysNav] };
const sysNavDetail = { onEnter:undefined, component:cSysNavDetail, models:[mSysNav] };
const sysNavEdit = { onEnter:undefined, component:cSysNavEdit, models:[mSysNav] };

export {
	sysNavIndex, sysNavDetail, sysNavEdit,
}


