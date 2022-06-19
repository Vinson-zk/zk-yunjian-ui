/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:15:22
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-18 08:59:30
 */

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

import zkStyles from 'zkFramework/css/styles.less';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKVersionInfo, ZKSider, ZKAutoMenu, ZKBreadcrumb } = ZKCustomComponents;
const { ZKModal } = ZKOriginalComponents;
const { Route, Switch, Redirect } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsMsg } = zkTools;

class CInitHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuRoutes: null,      // 导航栏路由
            indexMenuRouter: null,  // 默认导航栏
            routerMappingObj: {},
        };

        // console.log("[^_^:20200813-1941-001] CInitHome.constructor.props", props);

        props.dispatch({ type: 'mSys/getMenus', navCode:'sys', payload: {} });
    }

    static getDerivedStateFromProps(props, state) {

        let {  match, mSys, dispatch, dvaApp, dynamicImportHelper } = props;
        if (props.mSys.menusIsUpdate) {
            // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
            state.routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, mSys.menus, null);
            // 生成菜单路由
            state.menuRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, mSys.menus, dynamicImportHelper);
            // 查找默认菜单
            state.indexMenuRouter = zkToolsNavAndMenu.getIndexMenu(mSys.menus, match.path);
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", state.indexMenuRouter.path);
            dispatch({ type: 'mSys/setState', payload: { "menusIsUpdate": false } });
        }
        return true;
    }

    render() {
        let { match } = this.props;
        return (
            <Layout className={zkStyles.zk_content}>
                <ZKSider className={`${zkStyles.zk_left_sider} ${zkStyles.flex_1_auto}`}>
                    <ZKAutoMenu menus={ this.props.mSys.menus } path={`${match.path}`} routerMappingObj={this.state.routerMappingObj} />
                </ZKSider>
                <Layout>
                    <Scrollbars style={{ height: '100%', background: '#fff' }} >
                        <Content id="right-content" className={zkStyles.zk_wrapper}>
                            <div className={ `${zkStyles.zk_main_panel} ${zkStyles.display_flex_col}` }>
                                <ZKBreadcrumb routerMappingObj={this.state.routerMappingObj} />
                                <Switch>
                                    {this.state.indexMenuRouter?
                                        (<Route exact path={`${match.path}`} render={(props) => {return <Redirect to={`${this.state.indexMenuRouter.path}`} /> }} />)
                                        : ""}
                                    {this.state.menuRoutes}
                                </Switch>
                            </div>
                        </Content>
                    </Scrollbars>
                </Layout>
            </Layout>
        )
    }
}

export default connect(({ mSys }) => ({ mSys }))(injectIntl(CInitHome));


