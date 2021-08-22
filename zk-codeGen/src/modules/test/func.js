/*
* @Author: Vinson
* @Date:   2021-04-26 16:45:15
* @Last Modified by:   Vinson
* @Last Modified time: 2021-08-21 22:45:01
* 
* 
* 
*/

/***  功能引用定义/function；集成功能 js 中使用；***/ 
import cCodeGenTestCodeGenTestIndex from "./codeGenTestCodeGenTest/index.js";
import mCodeGenTestCodeGenTest from "./codeGenTestCodeGenTest/model.js";
import cCodeGenTestCodeGenTestDetail from "./codeGenTestCodeGenTest/detail.js";
import cCodeGenTestCodeGenTestEdit from "./codeGenTestCodeGenTest/edit.js";

const codeGenTestCodeGenTestIndex = { onEnter: undefined, component: cCodeGenTestCodeGenTestIndex, models: [mCodeGenTestCodeGenTest] };
const codeGenTestCodeGenTestDetail = { onEnter: undefined, component: cCodeGenTestCodeGenTestDetail, models: [mCodeGenTestCodeGenTest] };
const codeGenTestCodeGenTestEdit = { onEnter: undefined, component: cCodeGenTestCodeGenTestEdit, models: [mCodeGenTestCodeGenTest] };

export {
	codeGenTestCodeGenTestIndex, codeGenTestCodeGenTestDetail, codeGenTestCodeGenTestEdit,
}
