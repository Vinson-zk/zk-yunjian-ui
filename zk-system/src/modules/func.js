/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-17 11:20:52
 */

export * from './res/func.js';
export * from './settings/func.js';


import cSysIndex from './sysIndex.js';
import mSys from './sysModel.js';
const sysIndex = { onEnter:undefined, component:cSysIndex, models:[mSys] };

export {
    sysIndex
}