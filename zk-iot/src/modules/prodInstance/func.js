/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 16:17:32
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 17:16:48
*/
 

 import cIotProdInstanceIndex from "./index.js";
import mIotProdInstance from "./model.js";
// import cIotProdInstanceDetail from "./detail.js";
// import cIotProdInstanceEdit from "./edit.js";

const iotProdInstanceIndex = { onEnter: undefined, component: cIotProdInstanceIndex, models: [mIotProdInstance] };
// const iotProdInstanceDetail = { onEnter: undefined, component: cIotProdInstanceDetail, models: [mIotProdInstance] };
// const iotProdInstanceEdit = { onEnter: undefined, component: cIotProdInstanceEdit, models: [mIotProdInstance] };

export {
	iotProdInstanceIndex, 
	// iotProdInstanceDetail, iotProdInstanceEdit,
}

