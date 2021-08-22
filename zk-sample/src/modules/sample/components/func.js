/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:37:20
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-15 16:50:55
 */

import cComponentsIndex from "./index.js";
//////////////////////////////////////////////// 
const componentsIndex = { component:cComponentsIndex, models:[]};

/** 样例 Example 组件封装 */
import cException from './exception/index.js';
import cException500 from './exception/500';
import cException404 from './exception/404';
import cException403 from './exception/403';
//////////////////////////////////////////////// 
const exception = { component:cException, models:[]};
const e500 = { component:cException500, models:[]};
const e404 = { component:cException404, models:[]};
const e403 = { component:cException403, models:[]};

// /** 样例 custom 自定义 组件封装 */
import funcCustoms from './custom/func.js';

// /** 样例 original 原生 组件封装 */
import funcOriginals from './original/func.js';

export default {
    componentsIndex,
    exception, e500, e404, e403,
    ...funcOriginals,
    ...funcCustoms,
}
