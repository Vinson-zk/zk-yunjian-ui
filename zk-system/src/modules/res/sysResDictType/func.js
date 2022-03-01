/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysResDictTypeIndex from "./index.js";
import mSysResDictType from "./model.js";
import cSysResDictTypeDetail from "./detail.js";
import cSysResDictTypeEdit from "./edit.js";

const sysResDictTypeIndex = { onEnter: undefined, component: cSysResDictTypeIndex, models: [mSysResDictType] };
const sysResDictTypeDetail = { onEnter: undefined, component: cSysResDictTypeDetail, models: [mSysResDictType] };
const sysResDictTypeEdit = { onEnter: undefined, component: cSysResDictTypeEdit, models: [mSysResDictType] };

export {
	sysResDictTypeIndex, sysResDictTypeDetail, sysResDictTypeEdit,
}