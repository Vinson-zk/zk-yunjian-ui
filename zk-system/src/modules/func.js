/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by: Vinson
 * @Last Modified time: 2021-02-17 10:33:36
 */

export * from './res/func.js';

import cSysIndex from './sysIndex.js';
import mSys from './sysModel.js';
const sysIndex = { onEnter:undefined, component:cSysIndex, models:[mSys] };

export {
    sysIndex
}