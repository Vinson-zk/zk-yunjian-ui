/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-04-27 11:18:06
 */

// export * from './res/func.js';

import cCodeGenIndex from './codeGenIndex.js';
import mCodeGen from './codeGenModel.js';
const codeGenIndex = { onEnter:undefined, component:cCodeGenIndex, models:[mCodeGen] };

import cCodeGenFuncModule from './funcModule/index.js';
import mCodeGenFuncModule from './funcModule/model.js';
import cCodeGenFuncModuleDetail from "./funcModule/detail.js";
import cCodeGenFuncModuleEdit from "./funcModule/edit.js";
import cGenCode from "./gen/index.js";

import mGen from "./gen/model.js";
import mTableInfo from "./tableInfo/model.js";
import mColInfo from "./colInfo/model.js";

const codeGenFuncModule = { onEnter:undefined, component:cCodeGenFuncModule, models:[mCodeGenFuncModule] };
const codeGenFuncModuleDetail = { onEnter:undefined, component:cCodeGenFuncModuleDetail, models:[mCodeGenFuncModule] };
const codeGenFuncModuleEdit = { onEnter:undefined, component:cCodeGenFuncModuleEdit, models:[mCodeGenFuncModule] };
const genCode = { onEnter:undefined, component:cGenCode, models:[mGen, mCodeGenFuncModule, mTableInfo, mColInfo] };


export * from "./test/func.js";
export {
    codeGenIndex, codeGenFuncModule, codeGenFuncModuleEdit, codeGenFuncModuleDetail,
    genCode
}