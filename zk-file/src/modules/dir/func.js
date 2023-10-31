/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cDirIndex from "./index.js";
import mDir from "./model.js";
// import cFileDirectoryDetail from "./detail.js";
// import cFileDirectoryEdit from "./edit.js";

const dirIndex = { onEnter: undefined, component: cDirIndex, models: [mDir] };
// const dirDetail = { onEnter: undefined, component: cDirDetail, models: [mDir] };
// const dirEdit = { onEnter: undefined, component: cDirEdit, models: [mDir] };

export {
	dirIndex, 
	// fileDirectoryDetail, fileDirectoryEdit,
}