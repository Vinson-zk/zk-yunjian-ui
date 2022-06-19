/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cSysSetCollectionIndex from "./index.js";
import mSysSetCollection from "./model.js";
import cSysSetCollectionDetail from "./detail.js";
import cSysSetCollectionEdit from "./edit.js";

const sysSetCollectionIndex = { onEnter: undefined, component: cSysSetCollectionIndex, models: [mSysSetCollection] };
const sysSetCollectionDetail = { onEnter: undefined, component: cSysSetCollectionDetail, models: [mSysSetCollection] };
const sysSetCollectionEdit = { onEnter: undefined, component: cSysSetCollectionEdit, models: [mSysSetCollection] };

export {
	sysSetCollectionIndex, sysSetCollectionDetail, sysSetCollectionEdit,
}