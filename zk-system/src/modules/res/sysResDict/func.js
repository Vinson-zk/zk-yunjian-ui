/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysResDictIndex from "./index.js";
import mSysResDict from "./model.js";
import cSysResDictDetail from "./detail.js";
import cSysResDictEdit from "./edit.js";

const sysResDictIndex = { onEnter: undefined, component: cSysResDictIndex, models: [mSysResDict] };
const sysResDictDetail = { onEnter: undefined, component: cSysResDictDetail, models: [mSysResDict] };
const sysResDictEdit = { onEnter: undefined, component: cSysResDictEdit, models: [mSysResDict] };

export {
	sysResDictIndex, sysResDictDetail, sysResDictEdit,
}