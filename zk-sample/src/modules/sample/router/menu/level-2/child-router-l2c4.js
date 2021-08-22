/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:17:03
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:34:30
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import {zkTools, ZKCustomComponents } from "zkFramework";

const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const { Link } = ZKRouter;

class CInitChildRouterL2c4 extends React.Component {
    render() {
        const { match, intl } = this.props;
        return (
            <div style={{border: '1px solid #f0f'}} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.name')}:{match.path}<br />
            在上级路由的容器中进行组件切换
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
                    <li>
                      <Link to={`${match.path}/lever3-c4`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-4</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default injectIntl(CInitChildRouterL2c4);