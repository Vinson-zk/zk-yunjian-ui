/**
 * 此模块下的功能定义；
 * @Author: Vinson
 * @Date: 2020-08-12 00:15:57
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-28 09:33:26
 */

 /** 引入模块功能 */
import cNavIndex from './index.js';
import mNavIndex from './model.js';

import cHome from './home.js';

// ReactDva, es6, 业务样例
import cEs6 from "./es6/index.js"; 
import cReactDva from './react/dva/index.js';
import mReactDva from './react/dva/model.js';
import cReactCommonLifecyles from './react/commonLifecycles.js';

// zkJs
import cZKJsIndex from "./zkJs/index.js";
import cZKJsUtils from "./zkJs/zkJsUtils.js";
import cZKJsEvent from "./zkJs/zkJsEvent.js";
import cZKJsSortTwoArray from "./zkJs/zkJsSortTwoArray.js";

// 路由样例
import cRouter from './router/index.js';
import cRouterStatic from './router/static/index.js';
import cRouterMenu from './router/menu/index.js';
import mRouterMenu from './router/menu/model.js'
import cRouterMenuL2c1 from './router/menu/level-2/child-router-l2c1.js';
import cRouterMenuL2c2 from './router/menu/level-2/child-router-l2c2.js';
import cRouterMenuL2c3 from './router/menu/level-2/child-router-l2c3.js';
import cRouterMenuL2c4 from './router/menu/level-2/child-router-l2c4.js';
import cParamsComponent from './router/menu/paramsComponent';
const cRouterMenuIndex = cParamsComponent;
const cRouterMenuL2c5 = cParamsComponent;
const cRouterMenuL2c1c1 = cParamsComponent;
const cRouterMenuL2c2c1 = cParamsComponent;
const cRouterMenuL2c3index = cParamsComponent;
const cRouterMenuL2c3c1 = cParamsComponent;
const cRouterMenuL2c4c1 = cParamsComponent;

// zlTools 工具类
import cZKTools from './tools/index.js';
import cZKToolsMsg from './tools/zkToolsMsg.js';
import cZKToolsAjax from './tools/zkToolsAjax.js';
import cZKToolsNavAndMenu from './tools/zkToolsNavAndMenu.js';
import cZKToolsAuth from './tools/zkToolsAuth.js';
import cZKToolsUtils from './tools/zkToolsUtils.js';
import cZKToolsValidates from './tools/zkToolsValidates.js';

/** 业务样例 */ 
import cSampleExample from './example/index.js';
// 业务样例 1
import cExample1 from './example/e1/index.js';
import mExample1 from './example/e1/model.js';
import cExample1Edit from "./example/e1/edit.js";
import cExample1Detail1 from "./example/e1/detail-1.js";
import cExample1Detail2 from "./example/e1/detail-2.js";
// 测试 demo 页
import cTestDemo from './testDemo/index.js';

 /** 定义模块功能 */
 const navIndex = {
    onEnter: undefined,    // 路由跳转钩子
    component: cNavIndex,  // 组件
    models: [ mNavIndex ]             // 数据模型，不存在时，需要设置为空数组；
};
const home = { onEnter:undefined, component:cHome, models:[]};
const es6 = {component:cEs6, models:[]};
const reactDva = { onEnter:undefined, component:cReactDva, models:[mReactDva]};
const reactCommonLifecyles = {component:cReactCommonLifecyles, models:[]};

// const e1 = { onEnter:undefined, component:cE1, models:[mE1]};
// const e1Detail = { onEnter:undefined, component:cE1Detail, models:[mE1]};
// const e1Detail2 = { onEnter:undefined, component:cE1Detail2, models:[mE1]};
// const e1EditId = { onEnter:undefined, component:cE1Edit, models:[mE1]};

const zkJsIndex = {component:cZKJsIndex, models:[]};
const zkJsUtils = {component:cZKJsUtils, models:[]};
const zkJsEvent = {component:cZKJsEvent, models:[]};
const zkJsSortTwoArray = {component:cZKJsSortTwoArray, models:[]};

const router = { onEnter:undefined, component:cRouter, models:[]};
const routerStatic = { onEnter:undefined, component:cRouterStatic, models:[]};
const routerMenu = { onEnter:undefined, component:cRouterMenu, models:[mRouterMenu]};
const routerMenuIndex = { onEnter:undefined, component:cRouterMenuIndex, models:[]};
const routerMenuL2c1 = { onEnter:undefined, component:cRouterMenuL2c1, models:[]};
const routerMenuL2c2 = { onEnter:undefined, component:cRouterMenuL2c2, models:[]};
const routerMenuL2c3 = { onEnter:undefined, component:cRouterMenuL2c3, models:[]};
const routerMenuL2c4 = { onEnter:undefined, component:cRouterMenuL2c4, models:[]};
const routerMenuL2c5 = { onEnter:undefined, component:cRouterMenuL2c5, models:[]};
const routerMenuL2c1c1 = { onEnter:undefined, component:cRouterMenuL2c1c1, models:[]};
const routerMenuL2c2c1 = { onEnter:undefined, component:cRouterMenuL2c2c1, models:[]};
const routerMenuL2c3index = { onEnter:undefined, component:cRouterMenuL2c3index, models:[]};
const routerMenuL2c3c1 = { onEnter:undefined, component:cRouterMenuL2c3c1, models:[]};
const routerMenuL2c4c1 = { onEnter:undefined, component:cRouterMenuL2c4c1, models:[]};

const zkTools = { onEnter:undefined, component:cZKTools, models:[]};
const zkToolsMsg = { onEnter:undefined, component:cZKToolsMsg, models:[]};
const zkToolsAjax = { onEnter:undefined, component:cZKToolsAjax, models:[]};
const zkToolsAuth = {onEnter: undefined, component: cZKToolsAuth, models: []};
const zkToolsNavAndMenu = { onEnter:undefined, component:cZKToolsNavAndMenu, models:[]};
const zkToolsUtils = { onEnter:undefined, component:cZKToolsUtils, models:[]};
const zkToolsValidates = {component:cZKToolsValidates, models:[]}

/** 组件 样例功能 */
import componentsFunc from './components/func.js';

/** 业务样例 */ 
const sampleExample = { onEnter:undefined, component:cSampleExample, models:[]};
// 业务样例 1
const e1 = {onEnter: undefined, component: cExample1, models: [mExample1]};
const e1Edit = {onEnter: undefined, component: cExample1Edit, models: [mExample1]};
const e1Detail_1 = {onEnter: undefined, component: cExample1Detail1, models: [mExample1]};
const e1Detail_2 = {onEnter: undefined, component: cExample1Detail2, models: [mExample1]};
// 测试 demo 页
const tTestDemo = {onEnter: undefined, component: cTestDemo, models: []};

export default {
    navIndex, home, 
    es6, reactDva, reactCommonLifecyles,
    zkJsIndex, zkJsUtils, zkJsEvent, zkJsSortTwoArray,
    router, routerStatic, routerMenu, routerMenuIndex, routerMenuL2c1, routerMenuL2c2, routerMenuL2c3, routerMenuL2c4, routerMenuL2c5, routerMenuL2c1c1, routerMenuL2c2c1, routerMenuL2c3index, routerMenuL2c3c1, routerMenuL2c4c1,
    zkTools, zkToolsMsg, zkToolsAjax, zkToolsAuth, zkToolsNavAndMenu, zkToolsUtils, zkToolsValidates,
    ...componentsFunc,
    sampleExample, e1, e1Edit, e1Detail_1, e1Detail_2, tTestDemo
 };
 