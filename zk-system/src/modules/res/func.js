
import cSysNavIndex from "./sysNav/index.js";
import mSysNav from "./sysNav/model.js";
import cSysNavDetail from "./sysNav/detail.js";
import cSysNavEdit from "./sysNav/edit.js";

import cSysMenuIndex from "./sysMenu/index.js";
import mSysMenu from "./sysMenu/model.js";
import cSysMenuDetail from "./sysMenu/detail.js";
import cSysMenuEdit from "./sysMenu/edit.js";



/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysApplicationSystemIndex from "./sysApplicationSystem/index.js";
import mSysApplicationSystem from "./sysApplicationSystem/model.js";
import cSysApplicationSystemDetail from "./sysApplicationSystem/detail.js";
import cSysApplicationSystemEdit from "./sysApplicationSystem/edit.js";

const sysNavIndex = { onEnter:undefined, component:cSysNavIndex, models:[mSysNav] };
const sysNavDetail = { onEnter:undefined, component:cSysNavDetail, models:[mSysNav] };
const sysNavEdit = { onEnter:undefined, component:cSysNavEdit, models:[mSysNav] };

const sysMenuIndex = { onEnter:undefined, component:cSysMenuIndex, models:[mSysMenu] };
const sysMenuDetail = { onEnter:undefined, component:cSysMenuDetail, models:[mSysMenu] };
const sysMenuEdit = { onEnter:undefined, component:cSysMenuEdit, models:[mSysMenu] };

const sysApplicationSystemIndex = { onEnter: undefined, component: cSysApplicationSystemIndex, models: [mSysApplicationSystem] };
const sysApplicationSystemDetail = { onEnter: undefined, component: cSysApplicationSystemDetail, models: [mSysApplicationSystem] };
const sysApplicationSystemEdit = { onEnter: undefined, component: cSysApplicationSystemEdit, models: [mSysApplicationSystem] };


export {
	sysNavIndex, sysNavDetail, sysNavEdit,
	sysMenuIndex, sysMenuDetail, sysMenuEdit,
	sysApplicationSystemIndex, sysApplicationSystemDetail, sysApplicationSystemEdit,

}

