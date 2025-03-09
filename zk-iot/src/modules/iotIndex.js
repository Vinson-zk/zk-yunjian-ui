/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 15:46:59
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 15:51:13
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

import zkStyles from 'zkFramework/style/zk.styles.less';

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

        // console.log("[^_^:20200813-1941-002] CInitHome.constructor.props", props);

        props.dispatch({ type: 'mIot/getMenus', navCode:'iot', payload: {} });
    }

    static getDerivedStateFromProps(props, state) {

        let {  match, mIot, dispatch, dvaApp, dynamicImportHelper } = props;
        if (props.mIot.menusIsUpdate) {
            // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
            state.routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, mIot.menus, null);
            // 生成菜单路由
            state.menuRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, mIot.menus, dynamicImportHelper);
            // 查找默认菜单
            state.indexMenuRouter = zkToolsNavAndMenu.getIndexMenu(mIot.menus, match.path);
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", state.indexMenuRouter.path);
            dispatch({ type: 'mIot/setState', payload: { "menusIsUpdate": false } });
        }
        return true;
    }

    render() {
        let { match } = this.props;
        return (
            <Layout className={zkStyles.zk_f_content}>
                <ZKSider className={`${zkStyles.zk_f_left_sider} ${zkStyles.zk_f_flex_auto_1}`}>
                    <ZKAutoMenu menus={ this.props.mIot.menus } path={`${match.path}`} routerMappingObj={this.state.routerMappingObj} />
                </ZKSider>
                <Layout>
                    <ZKBreadcrumb routerMappingObj={this.state.routerMappingObj} />
                    <Scrollbars className = {zkStyles.zk_f_scrollbars} >
                        <Content id="right-content" className={zkStyles.zk_f_wrapper}>
                            <div className={ `${zkStyles.zk_f_main_panel} ${zkStyles.zk_f_display_flex_col}` }>
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

export default connect(({ mIot }) => ({ mIot }))(injectIntl(CInitHome));




