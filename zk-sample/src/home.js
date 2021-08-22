/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:49:46
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-07-01 23:25:18
 */

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';
import zkJsUtils from "zkJsUtils";

import zkStyles from 'zkFramework/css/styles.less';

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKUserDropDown, ZKLanguageSelect, ZKNavigation, ZKVersionInfo } = ZKCustomComponents;
const { ZKModal } = ZKOriginalComponents;
const { Switch, Redirect } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsMsg } = zkTools;

/*** 版本信息 ***/
import zkFrameworkInfo from 'zkFramework/package.json';
import zkPackageInfo from 'zkPackage/package.json';

const dependenceInfos = [zkPackageInfo, zkFrameworkInfo
    // ,zkPackageInfo, zkFrameworkInfo,zkPackageInfo, zkFrameworkInfo,zkPackageInfo, 
    // zkFrameworkInfo,zkPackageInfo, zkFrameworkInfo,zkPackageInfo, zkFrameworkInfo
];

import versionInfo from '../package.json';

/*** 引入依赖功能模块 ***/
import sampleFuncModule from './modules/sample/func.js';
import blendFuncModule from './modules/blend/func.js';
// console.log("[^_^:20201218-0058-001] funcModule:", funcModule, blendFuncModule);

const funcModuleMppingObj = {
    "sample": sampleFuncModule,
    "blend": blendFuncModule,
}

/*** 动态加载组件助手 ***/
const dynamicImportHelper = zkToolsNavAndMenu.getDynamicImportHelper(funcModuleMppingObj);

class CInitHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navRoutes: null,      // 导航栏路由
            indexNavRoute: null  // 默认导航栏
        };

        // console.log("[^_^:20200813-1941-001] CInitHome.constructor.props", props);

        props.dispatch({type: 'mApp/getNavItems', payload:{}});
    }

    static getDerivedStateFromProps(props, state) {

        // console.log("[^_^:20200811-1445-001] FInitSampleIndex。getDerivedStateFromProps navItems:", props.mApp.navItems);
        // if (state.navRoutes == null) {
        if(props.mApp.navItemIsUpdate){
            // 生成导航栏目路由
            state.navRoutes = zkToolsNavAndMenu.getRoutesByNavs(props.dvaApp, props.match.path, props.mApp.navItems, dynamicImportHelper);
            // 查找默认导航栏目
            state.indexNavRoute = zkToolsNavAndMenu.getIndexNav(props.mApp.navItems);
            // console.log("[^_^:20200811-1044-001] getDerivedStateFromProps ");
            props.dispatch({type: 'mApp/setState', payload:{"navItemIsUpdate":false}});
        }
        return true;
    }

    render() {
        const { match, dispatch, locales, lang, mApp, intl } = this.props;

        let languageSwitchProps = {
            locales,
            lang,
            changeFunc(lang) {
                dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
            }
        };

        let f_onLogin = () => {
            if (!mApp.user) {
                dispatch({ type: 'mApp/setState', payload: { user: { "username": "test", "nickname": "游客", "newMsg": 6 } } });
            }
        }

        let f_onUserDropDownCallBack = key => {
            switch (key) {
                case '_key_logout':  // 退出
                    dispatch({ type: 'mApp/setState', payload: { user: undefined } });
                    break;
                case '_key_version_info': // 版本信息
                    ZKModal.info({
                        title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_version_info'),
                        content: <ZKVersionInfo intl={intl} versionInfo={versionInfo} dependenceInfos={dependenceInfos} />,
                        className: zkStyles.zk_versionInfo_modal
                    })
                    break;
                default:
                    if (console) console.log("[^_^:20190507-1417-001] 暂未支持的 user drop down opt key: ", key);
                    break;
            }
        }

        let optKeys = [];
        if (mApp.user) {
            optKeys = ["_key_logout", "_key_version_info"];
        } else {
            optKeys = [];
        }

        // <div className = {zkStyles.zk_footer} >opyright © Vinson 2</div>
        return (
            <Layout className={zkStyles.zk_layout}>
                <Header className={zkStyles.zk_header}>
                    <ZKLogo logoImgUrl="assets/picture/favicon_128x128.ico" />
                    <ZKNavigation prefixPath={`${match.path}`} navItems={mApp.navItems} />
                    <ZKUserDropDown user={mApp.user} onLogin={f_onLogin} optKeys={optKeys} callBack={f_onUserDropDownCallBack} />
                    <ZKLanguageSelect {...languageSwitchProps} />
                </Header>
                <Content className={zkStyles.zk_content}>
                    <Switch>
                        {this.state.indexNavRoute ?
                            (
                                <Redirect exact from={`${match.path}`} to={`${(match.path == '/' ? "" : match.path)}/${this.state.indexNavRoute.path}`} />
                            ) : ""}
                        {this.state.navRoutes}
                    </Switch>
                </Content>
                <div className = {zkStyles.zk_footer} ><p>opyright © Vinson zk-sample</p></div>
            </Layout>
        )
    }

}

export default injectIntl(CInitHome);


