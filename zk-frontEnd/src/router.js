/**
 *
 * @Author: Vinson
 * @Date: 2020-08-29 22:07:58
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-11 16:36:06
 */


import React from 'react';
import { dynamic } from 'dva';

import { ZKCustomComponents } from 'zkFramework';
const { HashRouter, BrowserRouter, ZKPrivateRoute, Switch } = ZKCustomComponents.ZKRouter;

import cIndex from './index.js';
import mApp from './model.js';

import { sampleNavIndex } from 'zkSample';
let sampleComponent = null;

let rootComponent = null;
const FInitRouter = ({ app, history }) => {

    if (rootComponent === null) {
        rootComponent = dynamic({ app, models: () => [mApp], component: () => cIndex });
    }
    if(sampleComponent === null){
        sampleComponent = dynamic({ app, models: () => sampleNavIndex.models, component: () => sampleNavIndex.component });
    }

    return (
        <BrowserRouter basename={globalAppConfig.basename} >
            <Switch>
                <ZKPrivateRoute path={`/sampleApp`} 
                    propsToComponent={{ dvaApp: app }} 
                    component={sampleComponent} />
                <ZKPrivateRoute path={`/`} 
                    propsToComponent={{ dvaApp: app }} 
                    component={rootComponent} />
            </Switch>
        </BrowserRouter>
    )
}

export default FInitRouter;