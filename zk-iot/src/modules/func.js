/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 15:45:50
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 17:17:42
*/

import cIotIndex from './iotIndex.js';
import mIot from './iotModel.js';
const iotIndex = { onEnter:undefined, component:cIotIndex, models:[mIot] };

export {
    iotIndex
}

export * from './prodInstance/func.js';
