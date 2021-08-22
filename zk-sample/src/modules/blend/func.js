/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 15:19:15
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-28 15:09:11
 */

import cNavIndex from './index.js';
import cHome from './home.js';

import cTestHome from './test/home.js';
import cTestCss from './test/css/clash/index.js';
import cTestCssValue from './test/css/cssValue/index.js';
import cTestAnchor from './test/anchor/index.js';

/*************************** */
const navIndex = { models:[], component:cNavIndex};
const home = { models:[], component:cHome};

const testHome = { onEnter:undefined, component:cTestHome, models:[] };
const testCss = { onEnter:undefined, component:cTestCss, models:[] };
const testCssValue = { onEnter:undefined, component:cTestCssValue, models:[] };
const testAnchor = { onEnter:undefined, component:cTestAnchor, models:[] };

export default {
	navIndex, home,
	testHome, testCss, testCssValue, testAnchor
}