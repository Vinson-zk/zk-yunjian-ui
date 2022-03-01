/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:18:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-11 09:32:44
 */

export * from './func_out.js';

import cWechatIndex from './wechatIndex.js';
import mWechat from './wechatModel.js';
const wechatIndex = { onEnter:undefined, component:cWechatIndex, models:[mWechat] };

export {
    wechatIndex
}