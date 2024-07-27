/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 22:44:10
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-27 09:01:14
 */

export { default as locales } from '../src/locales/sample/index.js';

import funcModule from '../src/modules/sample/func.js';
export { funcModule }

import CSampleNav from '../src/index.js';
import mSampleNav from '../src/model.js';
const sampleNavIndex = { onEnter:undefined, component:CSampleNav, models:[mSampleNav] };
export { sampleNavIndex }
