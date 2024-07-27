/*
* 一些常规应用的集合；就是多个应用系统打包到一个前端中；
* @Author: Vinson
* @Date:   2021-11-11 09:28:31
* @Last Modified by: runoob
* @Last Modified time: 2023-09-25 22:59:47
* 
* 
* 
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

        props.dispatch({ type: 'mGeneralApplication/getMenus', navCode:'generalApplication', payload: {} });
    }

    static getDerivedStateFromProps(props, state) {

        let {  match, mGeneralApplication, dispatch, dvaApp, dynamicImportHelper } = props;
        if (props.mGeneralApplication.menusIsUpdate) {
            // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
            state.routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, mGeneralApplication.menus, null);
            // 生成菜单路由
            state.menuRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, mGeneralApplication.menus, dynamicImportHelper);
            // 查找默认菜单
            state.indexMenuRouter = zkToolsNavAndMenu.getIndexMenu(mGeneralApplication.menus, match.path);
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", state.indexMenuRouter.path);
            dispatch({ type: 'mGeneralApplication/setState', payload: { "menusIsUpdate": false } });
        }
        return true;
    }

    render() {
        let { match } = this.props;
        return (
            <Layout className={zkStyles.zk_f_content}>
                <ZKSider className={`${zkStyles.zk_f_left_sider} ${zkStyles.zk_f_flex_auto_1}`}>
                    <ZKAutoMenu menus={ this.props.mGeneralApplication.menus } path={`${match.path}`} routerMappingObj={this.state.routerMappingObj} />
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

export default connect(({ mGeneralApplication }) => ({ mGeneralApplication }))(injectIntl(CInitHome));


