/**
 *
 * @Author: Vinson
 * @Date: 2020-08-29 21:52:35
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 15:22:25
 */


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Layout } from 'antd';

import zkJsUtils from "zkJsUtils";

import zkStyles from 'zkFramework/css/styles.less';

import { ZKCustomComponents, ZKOriginalComponents, zkTools } from 'zkFramework';

// import zkJsUtils from "zkJsUtils";

const { Header, Content } = Layout;
const { ZKRouter, ZKLogo, ZKLanguageSelect, ZKVersionInfo, ZKNavigation } = ZKCustomComponents;
const { ZKModal } = ZKOriginalComponents;
const { Switch, Redirect } = ZKRouter;
const { zkToolsNavAndMenu, zkToolsMsg } = zkTools;

/*** 版本信息 ***/
import zkFrameworkInfo from 'zkFramework/package.json';
import zkPackageInfo from 'zkPackage/package.json';

const dependenceInfos = [zkPackageInfo, zkFrameworkInfo];
import versionInfo from '../package.json';

/*** 引入依赖功能模块 ***/
import * as funcModule from './func.js';

const funcModuleMppingObj = { 
    "developmentTool": funcModule,
}

/*** 动态加载组件助手 ***/
const dynamicImportHelper = zkToolsNavAndMenu.getDynamicImportHelper(funcModuleMppingObj);

/*** 添加导航栏目 */
import mockDevDatas from '../mock/mock.data.developmentTool.js';

const navItems = mockDevDatas.navItems;

let navRoutes = null;
let indexNavRoute = null;

const FInitCodeGenHome = ({dvaApp, match, mApp, dispatch, locales, lang, intl}) => {
    // console.log("[^_^:20210213-1108-001] ", navItems, dynamicImportHelper);
    if(navRoutes == null){
        navRoutes = zkToolsNavAndMenu.getRoutesByNavs(dvaApp, match.path, navItems, dynamicImportHelper);
    }
    // 查找默认导航栏目
    if(indexNavRoute == null){
        indexNavRoute = zkToolsNavAndMenu.getIndexNav(navItems);
    }

    let languageSwitchProps = { locales, lang,
        changeFunc(lang) {
            dispatch({ type: 'mApp/changeLanguage', payload: { lang: lang } });
        }
    };

    return (
        <Layout className={zkStyles.zk_layout}>
            <Header className={zkStyles.zk_header}>
                <ZKLogo logoImgUrl="assets/img/logo-zk.png" />
                <ZKNavigation prefixPath={`${match.path}`} navItems={navItems} />
                <div className = {zkStyles.flex_1_auto}></div>
                <ZKLanguageSelect {...languageSwitchProps} />
            </Header>
            <Content className={zkStyles.zk_content}>
                <Switch>
                    {indexNavRoute ?
                        (
                            <Redirect exact from={`${match.path}`} to={`${(match.path == '/' ? "" : match.path)}/${indexNavRoute.path}`} />
                        ) : ""}
                    {navRoutes}
                </Switch>
            </Content>
        </Layout>
    )
}

export default injectIntl(FInitCodeGenHome);




