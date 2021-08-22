/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 00:04:35
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-30 18:44:21
 */

import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKCustomComponents } from "zkFramework";

import zkStyles from 'zkFramework/css/styles.less';

const { Content } = Layout;
const { ZKRouter, ZKSider, ZKBreadcrumb, ZKAutoMenu } = ZKCustomComponents;
const { Switch, Route, Redirect } = ZKRouter;
const { zkToolsNavAndMenu } = zkTools;

class CInitSampleNavIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuRoutes: [],
      indexMenuRouter: null,
      routerMappingObj: {}
    };

    // console.log("[^_^:20200813-1941-001] CInitSampleNavIndex.constructor.props", props);

    // 未请求过菜单，请求菜单
    props.dispatch({ type: 'mSample/setState', payload: { menus: undefined } })
    props.dispatch({ type: 'mSample/getMenus', payload: { navCode: props.navCode } })

    // if(props.mSample.menus == undefined){
    //     // 未请求过菜单，请求菜单
    //     props.dispatch({type: 'mSample/setState', payload:{menus:[]}})
    //     props.dispatch({type: 'mSample/getMenus', payload:{navCode:props.navCode}})
    // }
  }

  static getDerivedStateFromProps(props, state) {

    if (props.mSample.isMenuUpdating) {
      let { dvaApp, dynamicImportHelper, mSample, dispatch, match } = props;
      let menus = mSample.menus || []
      // 生成菜单与路由的映射数据，用于根据路由路径打开菜单和面包屑展示
      state.routerMappingObj = zkToolsNavAndMenu.getRouterMapping(match.path, menus, null);
      // // 生成路由 
      state.menuRoutes = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus, dynamicImportHelper);
      // 制作默认菜单的路由路径对象
      state.indexMenuRouter = zkToolsNavAndMenu.getIndexMenu(menus, match.path);
      dispatch({ type: 'mSample/setState', payload: { isMenuUpdating: false } });

      // console.log("[^_^:20190131-1044-001] getDerivedStateFromProps ");
    }
    return true;
  }

  render() {
    let { mSample, match } = this.props;
    let menus = mSample.menus || [];

    // console.log("[^_^:20190131-1044-001] render ");
    /*
            <Scrollbars id="right-content" className = {zkStyles.zk_scrollbars} >
                <Content className={zkStyles.zk_wrapper}>
                  <Switch>
                    {this.state.indexMenuRouter ?
                      (<Route exact path={`${match.path}`} render={(props) => { return <Redirect to={`${this.state.indexMenuRouter.path}`} /> }} />)
                      : ""}
                    {this.state.menuRoutes}
                  </Switch>
                </Content>
            </Scrollbars>


            <Content id="right-content" className={zkStyles.zk_wrapper} style = {{overflow: 'scroll'}} >
              <Switch>
                {this.state.indexMenuRouter ?
                  (<Route exact path={`${match.path}`} render={(props) => { return <Redirect to={`${this.state.indexMenuRouter.path}`} /> }} />)
                  : ""}
                {this.state.menuRoutes}
              </Switch>
            </Content>
    */

    return (
      <Layout className={zkStyles.zk_content}>
        <ZKSider className={zkStyles.zk_left_sider}>
          <ZKAutoMenu menus={menus} path={`${match.path}`} routerMappingObj={this.state.routerMappingObj} />
        </ZKSider>
        <Layout>
          <ZKBreadcrumb routerMappingObj={this.state.routerMappingObj} />
            <Scrollbars className = {zkStyles.zk_scrollbars} >
                <Content id="right-content" className={zkStyles.zk_wrapper}>
                  <div className={ zkStyles.zk_main_panel }>
                    <Switch>
                      {this.state.indexMenuRouter ?
                        (<Route exact path={`${match.path}`} render={(props) => { return <Redirect to={`${this.state.indexMenuRouter.path}`} /> }} />)
                        : ""}
                      {this.state.menuRoutes}
                    </Switch>
                  </div>
                </Content>
            </Scrollbars>
        </Layout>
      </Layout>
    )
  };

}

// export default injectIntl(CInitSampleNavIndex);
// export default connect(({ mSample }) => ({ mSample }))(CInitSampleNavIndex);
export default injectIntl(connect(({ mSample }) => ({ mSample }))(CInitSampleNavIndex));
