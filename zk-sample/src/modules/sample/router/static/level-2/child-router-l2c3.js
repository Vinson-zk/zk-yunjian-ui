/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 10:24:16
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 10:25:40
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import CParamsComponent from '../paramsComponent';
import { zkTools, ZKCustomComponents } from "zkFramework";

const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const { Switch, Route, Link } = ZKRouter;

class CInitChildRouterL2C3 extends React.Component {
    render() {
        const { match, intl } = this.props;
        return (
            <div>
                <div style={{ border: '1px solid #f0f' }} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.panel')}:{match.path}<br />
                    这是一个视图布局框架，不会随子路由切换而切换；
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
                    <Route exact path={`${match.path}/:param`} component={CParamsComponent} />
                </Switch>
            </div>
        );
    }
}

export default injectIntl(CInitChildRouterL2C3);
