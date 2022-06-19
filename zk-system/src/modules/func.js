/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-08 16:55:53
 */

export * from './res/func.js';
export * from './org/func.js';
export * from './auth/func.js';
export * from './settings/func.js';

import cSysIndex from './sysIndex.js';
import mSys from './sysModel.js';
const sysIndex = { onEnter:undefined, component:cSysIndex, models:[mSys] };

export {
    sysIndex
}