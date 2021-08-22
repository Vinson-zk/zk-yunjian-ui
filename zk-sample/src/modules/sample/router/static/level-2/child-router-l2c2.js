/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 10:22:51
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 10:36:03
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import CParamsComponent from '../paramsComponent';
import { zkTools, ZKCustomComponents } from "zkFramework";

const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const { Switch, Route, Link } = ZKRouter;

class CInitChildRouterL2C2 extends React.Component {
    render() {
        const { match, intl } = this.props;
        return (
            <div>
                <div style={{ border: '1px solid #f0f' }} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.panel')}:{match.path}<br />
                    此处不会随子路由切换而切换；<br />
                    如果不需要这个效果可以删除此节点，就同 二级路由-4 切换效果类似，也可以直接按 二级路由-4 的写法配置置路由！
                </div>
                <br />
                <Switch>
                    <Route exact path={`${match.path}`} component={() => {
                        return (
                            <div>
                                <ul >
                                    <li>
                                        <Link to={`${match.path}/lever3-c1`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-1</Link>
                                    </li>
                                    <li>
                                        <Link to={`${match.path}/lever3-c2`}>{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.level3', {})}-2</Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }} />
                    <Route exact path={`${match.path}/:param`} component={CParamsComponent} />
                </Switch>
            </div>
        );
    }
}

export default injectIntl(CInitChildRouterL2C2);
