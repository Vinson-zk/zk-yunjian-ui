/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 15:08:56
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-30 18:44:55
 */


import React from 'react';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { ZKCustomComponents, zkTools } from 'zkFramework';

import zkStyles from 'zkFramework/css/styles.less';

const { Content } = Layout;
const { ZKRouter, ZKSider, ZKBreadcrumb, ZKAutoMenu } = ZKCustomComponents;
const { Switch, Route, Redirect } = ZKRouter;
const { zkToolsNavAndMenu } = zkTools;

/*** 定义菜单 ***/
import menus from './data.menus';

let routers = null;
let routerMappingObj = {};
let indexRouter = null;
const FInitBlendNavIndex = ({ dvaApp, match, dynamicImportHelper }) => {

    // console.log("[^_^:20200813-1946-001] FInitBlendNavIndex.dvaApp: ", dvaApp);

    if (routers == null) {
        // 生成路由 
        routers = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper);
        // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
        routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, menus, null);
        // 默认路由
        indexRouter = zkToolsNavAndMenu.getIndexMenu(menus, match.path);
    }

    return (
        <Layout className={zkStyles.zk_content}>
            <ZKSider className={zkStyles.zk_left_sider}>
                <ZKAutoMenu menus={menus} path={`${match.path}`} routerMappingObj={routerMappingObj} />
            </ZKSider>
            <Layout>
                <ZKBreadcrumb routerMappingObj={routerMappingObj} />
                <Scrollbars className = {zkStyles.zk_scrollbars} >
                    <Content className={zkStyles.zk_wrapper}>
                        <Switch>
                            {indexRouter?
                                (<Route exact path={`${match.path}`} render={(props) => {return <Redirect to={`${indexRouter.path}`} />}} />)
                                :""
                            }
                            {routers}
                        </Switch>
                    </Content>
                </Scrollbars>
                <div className = {zkStyles.zk_footer} ><p>opyright © Vinson zk-sample/blend</p></div>
            </Layout>
        </Layout>
    )
}

export default FInitBlendNavIndex;

