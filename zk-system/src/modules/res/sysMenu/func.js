/*
* @Author: Vinson
* @Date:   2021-11-03 13:55:45
* @Last Modified by:   Vinson
* @Last Modified time: 2021-11-03 13:57:59
* 
* 
* 
*/

import cSysMenuIndex from "./index.js";
import mSysMenu from "./model.js";
import cSysMenuDetail from "./detail.js";
import cSysMenuEdit from "./edit.js";
const sysMenuIndex = { onEnter:undefined, component:cSysMenuIndex, models:[mSysMenu] };
const sysMenuDetail = { onEnter:undefined, component:cSysMenuDetail, models:[mSysMenu] };
const sysMenuEdit = { onEnter:undefined, component:cSysMenuEdit, models:[mSysMenu] };

export {
	sysMenuIndex, sysMenuDetail, sysMenuEdit,
}


