/**
 *
 * @Author: Vinson
 * @Date: 2021-02-13 23:15:22
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 15:35:05
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

        // console.log("[^_^:20200813-1941-006] CInitHome.constructor.props", props);

        props.dispatch({ type: 'mWechat/getMenus', navCode: props.navCode, payload: {} });
    }

    static getDerivedStateFromProps(props, state) {

        let {  match, mWechat, dispatch, dvaApp, dynamicImportHelper } = props;
        if (props.mWechat.menusIsUpdate) {
            // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
            state.routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, mWechat.menus, null);
            // 生成菜单路由
            state.menuRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, mWechat.menus, dynamicImportHelper);
            // 查找默认菜单
            state.indexMenuRouter = zkToolsNavAndMenu.getIndexMenu(mWechat.menus, match.path);
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ", state.indexMenuRouter.path);
            dispatch({ type: 'mWechat/setState', payload: { "menusIsUpdate": false } });
        }
        return true;
    }

    render() {
        let { match } = this.props;
        return (
            <Layout className={zkStyles.zk_f_content}>
                <ZKSider className={`${zkStyles.zk_f_left_sider} ${zkStyles.zk_f_flex_auto_1}`}>
                    <ZKAutoMenu menus={ this.props.mWechat.menus } path={`${match.path}`} routerMappingObj={this.state.routerMappingObj} />
                </ZKSider>
                <Layout>
                    <Scrollbars style={{ height: '100%', background: '#fff' }} >
                        <Content id="right-content" className={zkStyles.zk_f_wrapper}>
                            <div className={ `${zkStyles.zk_f_main_panel} ${zkStyles.zk_f_display_flex_col}` }>
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

export default connect(({ mWechat }) => ({ mWechat }))(injectIntl(CInitHome));


