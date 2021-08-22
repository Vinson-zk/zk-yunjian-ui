/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 11:16:42
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 11:33:33
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import {zkTools, ZKCustomComponents } from "zkFramework";
const { ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Route, Link } = ZKRouter;

let childRouters = null;
class CInitChildRouterL2c2 extends React.Component {
    render() {
        const {dvaApp, match, menus, dynamicImportHelper, intl} = this.props;

        // 生成路由 
        if(childRouters == null){
            childRouters = menus?zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper):[];
        }

        return (
            <div>
                <div style={{border: '1px solid #f0f'}} >{zkToolsMsg.msgFormatByIntl(intl, 'sample.router.panel')}:{match.path}<br />
                    此处不会随子路由切换而切换；<br />
                    如果不需要这个效果可以删除此节点，就同 二级路由-4 切换效果类似，也可以直接按 二级路由-4 的写法配置置路由！
                </div>
                <br />
                <Switch>
                    <Route exact path={`${match.path}`} component={()=>{
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
                    { childRouters } 
                </Switch>
            </div>
        );
    }
}

export default injectIntl(CInitChildRouterL2c2);