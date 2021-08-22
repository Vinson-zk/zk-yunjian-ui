/**
 *
 * @Author: Vinson
 * @Date: 2020-08-29 22:07:58
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-07-01 10:40:54
 */


import React from 'react';
import dynamic from 'dva/dynamic';

import { ZKCustomComponents } from 'zkFramework';
const { BrowserRouter, ZKPrivateRoute, Switch } = ZKCustomComponents.ZKRouter;

import cIndex from './index.js';
import mApp from './model.js';


let rootComponent = null;
const FInitRouter = ({ app, history }) => {

    if (rootComponent == null) {
        rootComponent = dynamic({ app, models: () => [mApp], component: () => cIndex });
    }

    return (
        <BrowserRouter basename={globalAppConfig.basename} >
            <Switch>
                <ZKPrivateRoute path="/" propsToComponent={{ dvaApp: app }} component={rootComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default FInitRouter;