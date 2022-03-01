/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 09:58:49
 */

// export * from './res/func.js';

import cDevelopmentToolIndex from './developmentToolIndex.js';
import mDevelopmentTool from './developmentToolModel.js';
const developmentToolIndex = { onEnter:undefined, component:cDevelopmentToolIndex, models:[mDevelopmentTool] };

// export * from "./test/func.js";

export {
    developmentToolIndex
}

export * from "./codeGen/func.js";