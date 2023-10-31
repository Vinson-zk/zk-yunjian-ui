/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cFileDirectoryIndex from "./index.js";
import mFileDirectory from "./model.js";
// import cFileDirectoryDetail from "./detail.js";
// import cFileDirectoryEdit from "./edit.js";

const fileDirectoryIndex = { onEnter: undefined, component: cFileDirectoryIndex, models: [mFileDirectory] };
// const fileDirectoryDetail = { onEnter: undefined, component: cFileDirectoryDetail, models: [mFileDirectory] };
// const fileDirectoryEdit = { onEnter: undefined, component: cFileDirectoryEdit, models: [mFileDirectory] };

export {
	fileDirectoryIndex, 
	// fileDirectoryDetail, fileDirectoryEdit,
}