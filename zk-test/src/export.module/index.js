/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-12-11 10:47:04
* @Last Modified by: runoob
* @Last Modified time: 2023-12-11 12:31:25
*/

console.log("[^_^:20231210-2213-001] 测试 export、module 区别 ");

import iExportDefault from './export.default.js';
import iExport from './export.js';
import * as iExportAll from './export.js';
import { vExportValue as iExportValue } from './export.js';
import iModuleExports from './module.exports.js';
import * as iModuleExportsAll from './module.exports.js';
import { exportType as iModuleExportsExportType} from './module.exports.js';


console.log("[^_^:20231210-2213-002] === import ----------------- ");
console.log("[^_^:20231210-2213-002.1] export.default: ", iExportDefault);
// {exportType: 'export default'}
// exportType: "export default"
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-002.2.1] export: ", iExport);
// export as default
console.log("[^_^:20231210-2213-002.2.2] export: ", iExportAll);
// Module {__esModule: true, Symbol(Symbol.toStringTag): 'Module'}
// default: (...)
// exportType: (...)
// vExportValue: (...)
// __esModule: true
// Symbol(Symbol.toStringTag): "Module"
// get default: () => (/* binding */ vExportDefault)
// get exportType: () => (/* binding */ vExportType)
// get vExportValue: () => (/* binding */ vExportValue)
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-002.2.3] export: ", iExportValue);
// export value
console.log("[^_^:20231210-2213-002.3.1] moduleExports: ", iModuleExports);
// {exportType: 'module.exports', default: 'module.exports default'}
// default: "module.exports default"
// exportType: "module.exports"
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-002.3.2] moduleExports: ", iModuleExportsAll);
// {exportType: 'module.exports', default: 'module.exports default'}
// default: "module.exports default"
// exportType: "module.exports"
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-002.3.3] moduleExports: ", iModuleExportsExportType);
// module.exports


const rExportDefault = require('./export.default.js');
const rExport = require('./export.js');
const rModuleExports = require('./module.exports.js');
console.log("[^_^:20231210-2213-003] === require ----------------- ");
console.log("[^_^:20231210-2213-003.1] export.default: ", rExportDefault);
// Module {__esModule: true, Symbol(Symbol.toStringTag): 'Module'}
// default: (...)
// __esModule: true
// Symbol(Symbol.toStringTag): "Module"
// get default: () => (__WEBPACK_DEFAULT_EXPORT__)
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-003.2] export: ", rExport);
// Module {__esModule: true, Symbol(Symbol.toStringTag): 'Module'}
// default: (...)
// exportType: (...)
// vExportValue: (...)
// __esModule: true
// Symbol(Symbol.toStringTag): "Module"
// get default: () => (/* binding */ vExportDefault)
// get exportType: () => (/* binding */ vExportType)
// get vExportValue: () => (/* binding */ vExportValue)
// [[Prototype]]: Object
console.log("[^_^:20231210-2213-003.3] moduleExports: ", rModuleExports);
// {exportType: 'module.exports', default: 'module.exports default'}
// default: "module.exports default"
// exportType: "module.exports"
// [[Prototype]]: Object







