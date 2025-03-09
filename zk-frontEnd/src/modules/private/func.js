/*
* @Author: Vinson
* @Date:   2021-06-28 17:20:37
* @Last Modified by: vinson
* @Last Modified time: 2025-02-05 17:21:03
* 
* 
* 
*/
import mPrivateApp from "./model.js";
import cNoPermission from './noPermission/index.js';
import cPersonalCenter from './personalCenter/personalCenter.js';

const _noPermission = { onEnter: undefined, component: cNoPermission, models: [] };
const _personalCenter = { onEnter: undefined, component: cPersonalCenter, models: [mPrivateApp] };

export default {
	_noPermission,
	_personalCenter,
}


