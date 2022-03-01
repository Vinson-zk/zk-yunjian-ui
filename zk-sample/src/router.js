/*
 * @Author: Vinson 
 * @Date: 2020-08-06 16:39:49 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-08 19:42:51
 */

import React from 'react';
import dynamic from 'dva/dynamic';

// import * as dvaRouter from 'dva/router'; // hashHistory, browserHistory 没有了

import { ZKCustomComponents } from 'zkFramework';

const { HashRouter, BrowserRouter, ZKPrivateRoute, Switch } = ZKCustomComponents.ZKRouter;

import cIndex from './index.js';
import mApp from './model.js';


let rootComponent = null;
const FInitRouter = ({ app, history }) => {

    if (rootComponent == null) {
        rootComponent = dynamic({ app, models: () => [mApp], component: () => cIndex });
    }

    /**
     * @basename 在 “BrowserRouter” 中起作用 或 createBrowserHistory({basename:"/hf" }) 也可以起作用；
     * 说明：
     * 1、basename 不要以斜扛结尾，basename 是指匹配 uri 中的开头不做为 route 的内部解析 path; 
     * 如：basename 设置为 "/bn"，当 uri 为 “/bn/xxx” route 真实匹配的路径是：“xxx” ;
     * 注意需要在 index.html 中设置 <base href="${basename}" /> 标签，按需设置值；
     * 官网解释是：
     * The base URL for all locations. If your app is served from a sub-directory on your server, you’ll want to set this to the sub-directory. 
     * A properly formatted basename should have a leading slash, but no trailing slash.
     * 所有位置的基本URL。如果您的应用程序是从服务器上的子目录中提供的，那么您需要将其设置为子目录。一个格式正确的basename应该有一个开头斜杠，但是没有结尾斜杠。
     */
    return (
        <BrowserRouter basename={globalAppConfig.basename} >
            <Switch>
                <ZKPrivateRoute path="/" propsToComponent={{ dvaApp: app }} component={rootComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default FInitRouter;



