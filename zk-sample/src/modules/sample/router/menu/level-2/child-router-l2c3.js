/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:16:51
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:33:58
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import {zkTools, ZKCustomComponents } from "zkFramework";
const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Link } = ZKRouter;

let childRouters = null;
class CInitChildRouterL2c3 extends React.Component {

    render() {
        const { dvaApp, match, menus, dynamicImportHelper, intl } = this.props;

        // 生成路由 
        if(childRouters == null){
            childRouters = menus?zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper):[];
        }
        return (
            <div>
                <div style={{border: '1px solid #f0f'}} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.panel')}:{match.path}<br />
                    这是一个视图布局框架，不会随子路由切换而切换；<br />
                    <ul >
                        <li>
                          <Link to={`${match.path}/lever3-c1`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-1</Link>
                        </li>
                        <li>
                          <Link to={`${match.path}/lever3-c2`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-2</Link>
                        </li>
                        <li>
                          <Link to={`${match.path}/lever3-c3`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-3</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    { childRouters } 
                </Switch> 
            </div>
        );
    }
}

export default injectIntl(CInitChildRouterL2c3);