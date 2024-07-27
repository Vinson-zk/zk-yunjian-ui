/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 15:08:56
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-19 15:28:41
 */


import React from 'react';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { ZKCustomComponents, zkTools } from 'zkFramework';
import zkJsUtils from 'zkJsUtils';

import zkStyles from 'zkFramework/style/zk.styles.less';

const { Content } = Layout;
const { ZKRouter, ZKSider, ZKBreadcrumb, ZKAutoMenu } = ZKCustomComponents;
const { Switch, Route, Redirect } = ZKRouter;
const { zkToolsNavAndMenu } = zkTools;

/*** 定义菜单 ***/
import mockBlendMenus from '../../../mock/mock.data.sample.menus.blend.js';

let menus = [];
for (let menu of mockBlendMenus) {
    if (menu.navCode === 'blend') {
        menus = menus.concat(menu);
    }
}

menus = zkJsUtils.makeTree(menus, null);
menus = zkJsUtils.sort(menus, 1);

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
        <Layout className={zkStyles.zk_f_content}>
            <ZKSider className={`${zkStyles.zk_f_left_sider} ${zkStyles.zk_f_flex_auto_1}`}>
                <ZKAutoMenu menus={menus} path={`${match.path}`} routerMappingObj={routerMappingObj} />
            </ZKSider>
            <Layout>
                <ZKBreadcrumb routerMappingObj={routerMappingObj} />
                <Scrollbars className = {zkStyles.zk_f_scrollbars} >
                    <Content className={zkStyles.zk_f_wrapper}>
                        <Switch>
                            {indexRouter?
                                (<Route exact path={`${match.path}`} render={(props) => {return <Redirect to={`${indexRouter.path}`} />}} />)
                                :""
                            }
                            {routers}
                        </Switch>
                    </Content>
                </Scrollbars>
                <div className = {zkStyles.zk_f_footer} ><p>opyright © Vinson zk-sample/blend</p></div>
            </Layout>
        </Layout>
    )
}

export default FInitBlendNavIndex;

